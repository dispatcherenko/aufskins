import { defineStore } from "pinia";

export const useItemsStore = defineStore("items", {
  state: () => ({
    bestCs: [1, 2, 3],
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
