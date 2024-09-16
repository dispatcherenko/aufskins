import { defineStore } from "pinia";

export const useUserMenuStote = defineStore("user-menu", {
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
