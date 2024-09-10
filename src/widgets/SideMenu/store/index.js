import { defineStore } from "pinia";

export const useSideMenuStore = defineStore("side-menu", {
  state: () => ({
    isOpen: false,
  }),
  actions: {
    manageMenu() {
      this.isOpen = !this.isOpen;
    },
  },
});
