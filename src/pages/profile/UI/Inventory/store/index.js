import { defineStore } from "pinia";

export const useSellModalStore = defineStore("sell-modal", {
  state: () => ({
    isOpen: false,
    isConfirmed: false,
  }),
  actions: {
    openModal() {
      this.isOpen = true;
    },
    closeModal() {
      this.isOpen = false;
      this.isConfirmed = false;
    },
    sell() {
      const apiModalStore = useAPIModalStore();
      this.isOpen = false;
      apiModalStore.openModal();
      this.isConfirmed = false;
    },
  },
});

export const useAPIModalStore = defineStore("api-modal", {
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
    confirm() {
      const successModalStore = useSuccessModalStore();
      this.isOpen = false;
      successModalStore.openModal();
    },
  },
});

export const useSuccessModalStore = defineStore("success-modal", {
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
    goto(router) {
      this.isOpen = false;
      router.push("/profile/history");
    },
  },
});
