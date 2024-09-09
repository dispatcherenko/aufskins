import { defineStore } from "pinia";

export const useDepositModalStore = defineStore("deposit-modal", {
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
    logout() {
      this.isOpen = false;
    },
  },
});
