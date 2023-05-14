import { Auth, User, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { defineStore } from 'pinia';

export type State = {
  loggedIn: boolean,
  user?: User,
} 

export const useUserStore = defineStore('user', {
  state: ():State => ({
    loggedIn: false,
    user: undefined,
  }),
  actions: {
    async logIn(email : string, password : string) {
      const {$auth} = useNuxtApp() ;
      try {
        const userCredential = await signInWithEmailAndPassword($auth as Auth, email, password);
        this.loggedIn = true;
        this.user = userCredential.user;

      } catch (e) {
        console.error('auth error',e);
      }
    },
    async logOut() {
      const {$auth} = useNuxtApp() ;
      await signOut($auth as Auth);
      this.loggedIn = false;
      this.user = undefined;
    }
  },
  persist: process.client ? {
    storage: localStorage
  } :
  false
})