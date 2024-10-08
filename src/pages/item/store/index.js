import { defineStore } from "pinia";
import { useLoadingModal } from "@/shared/loading/store";

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
        const awaitModal = useAwaitModal();
        const loadingModal = useLoadingModal();
        this.closeModal();
        loadingModal.openModal(awaitModal);
      }
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
