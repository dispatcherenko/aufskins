import { defineStore } from "pinia";

export const useItemsStore = defineStore("items", {
  state: () => ({
    bestCs: [],
    bestDota: [],
    bestTf: [],
    bestRust: [],
    hugeBuys: [],
  }),
  actions: {
    fetchBestCs() {
      console.log("w");
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

      console.log(this.toSell[index]);
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
