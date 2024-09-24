import { defineStore } from "pinia";

export const useSubmitModal = defineStore("submit-purchase", {
  state: () => ({
    isOpen: false,
    confirmed: false,
  }),
  actions: {
    openModal(e) {
      e.stopPropagation();

      this.confirmed = false;
      this.isOpen = true;
    },
    closeModal() {
      this.isOpen = false;
    },
    submit() {
      if (this.confirmed) {
        const loadingModal = useLoadingModal();
        this.closeModal();
        loadingModal.openModal();
      }
    },
  },
});

export const useLoadingModal = defineStore("loading-purchase", {
  state: () => ({
    isOpen: false,
  }),
  actions: {
    async openModal() {
      const awaitModal = useAwaitModal();
      this.isOpen = true;
      await new Promise((resolve) => setTimeout(resolve, 2000));
      this.isOpen = false;
      awaitModal.openModal();
    },
  },
});

export const useAwaitModal = defineStore("await-purchase", {
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
  },
});
