<template>
  <div class="catalog">
    <div class="menu__filters--mobile">
      <a class="menu__filters-button" @click="sortStore.manageMenu">
        <SortIcon />
        <p class="footnote">Сортировка</p>
      </a>
      <a class="menu__filters-button" @click="filterStore.manageMenu">
        <Filter />
        <p class="footnote">Фильтры</p>
      </a>
      <FiltersMobile><CSFilterSet /></FiltersMobile>
      <SortMobile />
    </div>
    <Dropdown
      class="menu__select"
      :options="selectedGameStore.games"
      :selected="selectedGameStore.selectedGame"
      @update:selected="redirect"
    />
    <div class="menu__filters">
      <CSFilterSet />
    </div>
    <TextInputButton
      class="right__search"
      placeholder="Поиск по названию"
      button-text="Найти"
    />

    <h3 class="right__title">Найдено 22 394 предложений</h3>
    <Dropdown
      class="right__buttons-dropdown"
      :options="sortStore.sorts"
      :selected="sortStore.selectedSort"
      @update:selected="sortStore.updateSelectedSort"
    ></Dropdown>
    <ButtonXS class="right__buttons-update" :img="rotate" text="Обновить" />

    <ItemsList type="catalog" class="right__list" :items="itemsStore.rust" />
  </div>
</template>

<script setup>
import { watch, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useItemsStore } from "@/entities/skin/model";
import { useSelectedGameStore } from "@/features/catalog/selected";
import { useSortStore } from "@/features/catalog/sort";

import TextInputButton from "@/shared/UI/Inputs/TextInputButton.vue";
import ButtonXS from "@/shared/UI/Buttons/ButtonXS.vue";
import Dropdown from "@/shared/UI/Select/Dropdown.vue";
import ItemsList from "@/widgets/ItemsList/ItemsList.vue";

import Filter from "@/assets/icons/filter.svg?component";
import SortIcon from "@/assets/control/sort.svg?component";

import rotate from "@/assets/icons/rotate-right.svg?url";
import FiltersMobile from "./FiltersMobile.vue";
import { useFilterMenuStore } from "../store";
import CSFilterSet from "./CSFilterSet.vue";
import SortMobile from "./SortMobile.vue";

const filterStore = useFilterMenuStore();
const itemsStore = useItemsStore();
const selectedGameStore = useSelectedGameStore();
const sortStore = useSortStore();
const router = useRouter();

const fetchData = async () => {
  //   const sort = sortStore.selectedSort.id === "asc" ? "price" : "-price";

  //   const priceFilter = `price[from]=${minValue.value}&price[to]=${maxValue.value}`;

  await itemsStore.fetchRust();
};

const redirect = (game) => {
  selectedGameStore.updateSelectedGame(game, router);
};

// watch([minValue, maxValue], fetchData);

onMounted(() => {
  selectedGameStore.updateSelectedGame(selectedGameStore.games[2], router);
  fetchData();
});
</script>
