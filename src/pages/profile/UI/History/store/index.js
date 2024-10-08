import { defineStore } from "pinia";
import { useLoadingModal } from "@/shared/loading/store";

export const useBuyDetailsModal = defineStore("buy-details", {
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

export const useAutobuyDetailsModal = defineStore("autobuy-details", {
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

export const useCreateSellModal = defineStore("create-sell", {
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
    submit() {
      const sellConfirmed = useSellConfirmedModal();
      const loadingModal = useLoadingModal();
      this.closeModal();
      loadingModal.openModal(sellConfirmed);
    },
  },
});

export const useSellConfirmedModal = defineStore("sell-confirmed", {
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
