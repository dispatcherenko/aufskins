import { defineStore } from "pinia";

import sortIcon from "@/assets/control/sort.svg?url";

const initialSorts = [
  { name: "Сначала популярные", id: "popular", img: sortIcon, selected: true },
  {
    name: "Сначала непопулярные",
    id: "-popular",
    img: sortIcon,
    selected: false,
  },
  { name: "Сначала дешевые", id: "price", img: sortIcon, selected: false },
  { name: "Сначала дорогие", id: "-price", img: sortIcon, selected: false },
  { name: "Со скидкой", id: "discount", img: sortIcon, selected: false },
];

export const useSortStore = defineStore("sort", {
  state: () => ({
    sorts: initialSorts,
    selectedSort: initialSorts[0],
    isOpen: false,
  }),
  actions: {
    updateSelectedSort(sort) {
      this.selectedSort = sort;
    },
    manageMenu() {
      this.isOpen = !this.isOpen;
    },
    closeMenu() {
      this.isOpen = false;
    },
  },
});
