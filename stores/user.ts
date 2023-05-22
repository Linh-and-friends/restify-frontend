import { notification } from 'ant-design-vue/es';
import { Auth, User, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, signOut, reload, onAuthStateChanged, getIdToken } from 'firebase/auth';
import { defineStore } from 'pinia';

export type State = {
  loggedIn: boolean,
  user?: User,
} 
export const useUserStore = defineStore('user', {
  state: ():State => {
    return {
      loggedIn: false,
      user: undefined,
    }
  },
  actions: {
    /*
      Initialize user store:
      - setup onAuthStateChanged to automatically set user info into store data when log in or log out
    */
    init() {
      const {$auth} = useNuxtApp();
      onAuthStateChanged($auth as Auth,
        (user: User | null)=>{
          if (user) {
            this.user = user;
            this.loggedIn = !user.isAnonymous;
          } else {
            this.user = undefined;
            this.loggedIn = false;
          }
        }
      );
    },

    /*
      Check whether the user is logged in or not to restrict access to login only page.
    */
    async checkLoggedIn(loginRequired: boolean) {
      if (!this.loggedIn && loginRequired) {
        navigateTo('/login');
        notification.error({
          message: 'You must log in to continue!',
          description: 'This action can only be executed if you logged in as a member. Please log in to continue'
        })
      }
      try {
        // update User info
        await reload(this.user as User);
        if (!this.user?.emailVerified) {
          navigateTo('/email_verification_required');
        }
      } catch (e) {
        if (e instanceof Error){
          notification.error({
            message: e.name,
            description: e.message
          })
        }
      }
    },

    async logIn(email: string, password: string) {
      const {$auth} = useNuxtApp();
      try {
        await signInWithEmailAndPassword($auth as Auth, email, password);
        navigateTo('/');
      } catch (e) {
        if (e instanceof Error){
          notification.error({
            message: e.name,
            description: e.message
          })
        }
      }
    },
    async logOut() {
      const {$auth} = useNuxtApp();
      await signOut($auth as Auth);
      navigateTo({
        path: "/login"
      });
    },
    async signUp(email: string, password: string) {
      const {$auth} = useNuxtApp();
      try {
        const userCredential = await createUserWithEmailAndPassword($auth as Auth, email, password);
        await sendEmailVerification(userCredential.user,{
          url: 'http://localhost:3000/login'
        });
        navigateTo({
          path: "/email_verification_required"
        });
      } catch (e) {
        if (e instanceof Error){
          notification.error({
            message: e.name,
            description: e.message,
          })
        }
      }
    },

    async getIdToken(): Promise<string | undefined> {
      this.checkLoggedIn(true);
      return await getIdToken(this.user as User)
    },

    // resend email verification mail
    async resendVerification() {
      await this.checkLoggedIn(true);
      const {$auth} = useNuxtApp();
      try {
        await sendEmailVerification(this.user as User,{
          url: 'http://localhost:3000/login'
        });
      } catch (e) {
        if (e instanceof Error){
          notification.error({
            message: e.name,
            description: e.message
          })
        }
      }
    }
  },
  persist: process.client ? {
    storage: localStorage
  } :
  false
})