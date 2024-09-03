import { useFetchBest } from "../API";

const { defineStore } = require("pinia");

export const useSkinsStore = defineStore("alerts", {
  state: () => ({
    bestSkins: [],
    hugeBuys: [],
  }),
  actions: {
    async fetchBest() {
      this.bestSkins = useFetchBest();
    },
    async fetchHuge() {
      this.hugeBuys = useFetchHugeBuys();
    },
  },
});
