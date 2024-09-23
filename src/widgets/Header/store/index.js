import { defineStore } from "pinia";

export const useUserMenuStore = defineStore("user-menu", {
  state: () => ({ isOpen: false }),
  actions: {
    manageMenu() {
      this.isOpen = !this.isOpen;
    },
    closeMenu() {
      this.isOpen = false;
    },
  },
});
