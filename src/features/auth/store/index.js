import { defineStore } from "pinia";

export const useLogoutModalStore = defineStore("logout-modal", {
  state: () => ({
    isOpen: false,
  }),
  actions: {
    openModal() {
      this.isOpen = true;
    },
    closeModal() {
      this.isOpen = false;
    },
    logout() {
      this.isOpen = false;
    },
  },
});
