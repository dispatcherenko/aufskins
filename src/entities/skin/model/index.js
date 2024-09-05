import { useFetchBest } from "../API";

const { defineStore } = require("pinia");

export const useItemsStore = defineStore("items", {
  state: () => ({
    bestSkinsCs: [],
    hugeBuys: [],
  }),
  actions: {
    async fetchBestCs() {
      this.bestSkinsCs = useFetchBest();
    },
    async fetchHuge() {
      this.hugeBuys = useFetchHugeBuys();
    },
  },
});
