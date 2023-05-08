import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    loggedIn: false,
  }),
  actions: {
    logIn() {
      this.loggedIn = true;
    },
    logOut() {
      this.loggedIn = false;
    }
  },
  persist: process.client ? {
    storage: localStorage
  } :
  false
})