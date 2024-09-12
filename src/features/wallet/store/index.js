import { defineStore } from "pinia";

export const useDepositModalStore = defineStore("deposit-modal", {
  state: () => ({
    isOpen: false,
    amount: null,
    isConfirmed: false,
  }),
  actions: {
    openModal() {
      this.isOpen = true;
    },
    closeModal() {
      this.isOpen = false;
    },
    goto() {
      const qrModalStore = useQRModalStore();
      this.amount = null;
      this.isConfirmed = false;
      this.isOpen = false;
      qrModalStore.openModal();
    },
    add(add) {
      this.amount += add;
    },
  },
  getters: {
    final: (state) => (state.amount * 95) / 100,
  },
});

export const useQRModalStore = defineStore("qr-modal", {
  state: () => {
    isOpen: false;
  },
  actions: {
    openModal() {
      this.isOpen = true;
    },
    closeModal() {
      this.isOpen = false;
    },
    goto() {
      this.isOpen = false;
    },
  },
});

export const useWithdrawalModalStore = defineStore("withdrawal-modal", {
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
    goto() {
      this.isOpen = false;
    },
  },
});
