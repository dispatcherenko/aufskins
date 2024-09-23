import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({ isLoggedIn: false }),
  actions: {
    logIn() {
      this.isLoggedIn = true;
    },
    logOut() {
      this.isLoggedIn = false;
    },
  },
});

export const useInventoryStore = defineStore("inventory", {
  state: () => ({
    toSell: [],
  }),
  actions: {
    addItem(item) {
      const index = this.toSell.findIndex((elem) => elem.id === item.id);
      if (index !== -1) {
        this.toSell[index].priceToSell = item.price;
      } else {
        this.toSell.push({ ...item, priceToSell: item.price });
      }
    },
    removeItem(item) {
      this.toSell = this.toSell.filter((i) => i.id !== item.id);
    },
  },
  getters: {
    total: (state) =>
      state.toSell.reduce((sum, item) => sum + item.priceToSell, 0),
    totalTax: (state) => (state.total * 95) / 100,
  },
});

export const useCartStore = defineStore("cart", {
  state: () => ({
    cart: [],
  }),
  actions: {
    addItem(item) {
      this.cart.push({ ...item });
    },
    removeItem(item) {
      this.cart = this.cart.filter((i) => i.id !== item.id);
    },
  },
  getters: {
    total: (state) => state.cart.reduce((sum, item) => sum + item.price, 0),
    totalTax: (state) => (state.total * 95) / 100,
  },
});
