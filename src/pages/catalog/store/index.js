import { defineStore } from "pinia";

export const useCartMenuStore = defineStore("cart-menu", {
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

export const useFilterMenuStore = defineStore("filter-menu", {
  state: () => ({ isOpen: false }),
  actions: {
    manageMenu() {
      this.isOpen = !this.isOpen;
    },
    closeMenu() {
      this.isOpen = false;
    },
    submit() {},
  },
});
