import { defineStore } from "pinia";

export const useUserStore = defineStore("items", {
  state: () => ({ isLoggedIn: false }),
  actions: {
    setLoggedIn() {
      this.isLoggedIn = true;
    },
  },
});
