import { defineStore } from "pinia";

export const useChatStore = defineStore("chat", {
  state: () => {
    isOpen: false;
    isSetting: false;
  },
  actions: {
    openMenu() {
      this.isOpen = true;
    },
    closeMenu() {
      this.isOpen = false;
    },
    openSettings() {
      this.isSetting = true;
    },
    closeSettings() {
      this.isSetting = false;
    },
  },
});
