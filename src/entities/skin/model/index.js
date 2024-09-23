import { defineStore } from "pinia";
import { useFetch } from "../API";

export const useItemsStore = defineStore("items", {
  state: () => ({
    cs: [],
    maxPriceCs: 1000,

    dota: [],
    maxPriceDota: 1000,

    rust: [],
    maxPriceRust: 1000,

    tf: [],
    maxPriceTf: 1000,

    bestCs: [],
    bestDota: [],
    bestTf: [],
    bestRust: [],
    hugeBuys: [],
  }),
  actions: {
    async fetchCs() {
      const res = await useFetch(`https://9be368f409e5ba1b.mokky.dev/cs`);
      this.cs = await res.data;
      this.maxPriceCs = await this.cs.reduce((max, item) => {
        return item.price > max ? item.price : max;
      }, 0);
    },
    async fetchCsFilter(sort, filterString) {
      const res = await useFetch(
        `https://9be368f409e5ba1b.mokky.dev/cs`,
        sort,
        filterString
      );
      this.csFitler = await res.data;
    },
    async fetchDota(sort, filterString) {
      const res = await useFetch(
        `https://9be368f409e5ba1b.mokky.dev/dota`,
        sort,
        filterString
      );
      this.dota = await res.data;
      this.maxPriceDota = await this.dota.reduce((max, item) => {
        return item.price > max ? item.price : max;
      }, 0);
    },
    async fetchRust(sort, filterString) {
      const res = await useFetch(
        `https://9be368f409e5ba1b.mokky.dev/rust`,
        sort,
        filterString
      );
      this.rust = await res.data;
      this.maxPriceRust = await this.rust.reduce((max, item) => {
        return item.price > max ? item.price : max;
      }, 0);
    },
    async fetchTf() {
      const res = await useFetch(`https://9be368f409e5ba1b.mokky.dev/tf`);
      this.tf = await res.data;
      this.maxPriceTf = await this.tf.reduce((max, item) => {
        return item.price > max ? item.price : max;
      }, 0);
    },
    async fetchBestCs() {
      this.bestCs = await useFetchBestCs();
    },
  },
});
