import { defineStore } from "pinia";

export const useLoadingModal = defineStore("loading-purchase", {
  state: () => ({
    isOpen: false,
  }),
  actions: {
    async openModal(next) {
      this.isOpen = true;
      await new Promise((resolve) => setTimeout(resolve, 2000));
      this.isOpen = false;
      next.openModal();
    },
  },
});
