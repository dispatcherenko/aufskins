<template>
  <div class="inventory">
    <h3>Инвентарь</h3>
    <div class="inventory__wrapper">
      <div class="inventory__to-sell">
        <p class="subheader">Предметы на продажу</p>
        <div class="inventory__to-sell-right">
          <p class="body">Выбрано: {{ inventoryStore.toSell.length }}</p>
          <Button2
            :disabled="inventoryStore.toSell.length === 0"
            class="inventory__to-sell-button"
            text="Установить цены"
            :click="modalStore.openModal"
          />
        </div>
      </div>
      <div class="inventory__filters">
        <TextInput
          placeholder="Поиск по названию"
          class="inventory__filters-search"
        />
        <Dropdown
          class="inventory__filters-game"
          :options="games"
          :selected="selectedGame"
          @update:selected="updateSelectedGame"
        />
        <Dropdown
          class="inventory__filters-sort"
          :options="sort"
          :selected="selectedSort"
          @update:selected="updateSelectedSort"
        />
        <ButtonXS
          class="inventory__update"
          @click="fetchBest"
          :img="rotateRight"
        />
      </div>
      <ItemsList :items="skins" type="inventory" />
    </div>
  </div>
</template>

<script setup>
import Button2 from "@/shared/UI/Buttons/Button2.vue";
import ButtonXS from "@/shared/UI/Buttons/ButtonXS.vue";
import TextInput from "@/shared/UI/Inputs/TextInput.vue";
import Dropdown from "@/shared/UI/Select/Dropdown.vue";
import ItemsList from "@/widgets/ItemsList/ItemsList.vue";

import rotateRight from "@/assets/icons/rotate-right.svg?url";
import cs from "@/assets/games/cs.svg?url";
import dota from "@/assets/games/dota.svg?url";
import rust from "@/assets/games/rust.svg?url";
import tf from "@/assets/games/tf.svg?url";
import sortIcon from "@/assets/control/sort.svg?url";

import axios from "axios";
import { onMounted, ref } from "vue";

import { useSellModalStore } from "./store";
const modalStore = useSellModalStore();

import { useInventoryStore } from "@/entities/user/model";
const inventoryStore = useInventoryStore();

const games = [
  { name: "CS 2", id: "cs", img: cs },
  { name: "DOTA 2", id: "dota", img: dota },
  { name: "RUST", id: "rust", img: rust },
  { name: "TF 2", id: "tf", img: tf },
];
const sort = [
  { name: "Сначала дешевые", id: "asc", img: sortIcon },
  { name: "Сначала дорогие", id: "desc", img: sortIcon },
];

let skins = ref([]);
let selectedGame = ref({ name: "CS 2", id: "cs", img: cs });
let selectedSort = ref({ name: "Сначала дешевые", id: "asc", img: sortIcon });

const fetchBest = async () => {
  console.log("fetch");
  try {
    let res;

    switch (selectedGame.value.id) {
      case "cs":
        res = await axios.get(`https://9be368f409e5ba1b.mokky.dev/bestcs`);
        skins.value = res.data;
        break;
      case "dota":
        res = await axios.get(`https://9be368f409e5ba1b.mokky.dev/bestdota`);
        skins.value = res.data;
        break;
      case "rust":
        res = await axios.get(`https://9be368f409e5ba1b.mokky.dev/bestrust`);
        skins.value = res.data;
        break;
      case "tf":
        res = await axios.get(`https://9be368f409e5ba1b.mokky.dev/besttf2`);
        skins.value = res.data;
        break;
    }
  } catch (e) {
    console.log(e);
  }

  useSort();
};

const useSort = () => {
  switch (selectedSort.value.id) {
    case "asc":
      skins.value.sort((a, b) => a.price - b.price);
      break;
    case "desc":
      skins.value.sort((a, b) => b.price - a.price);
      break;
    default:
      break;
  }
};

const updateSelectedGame = (game) => {
  selectedGame.value = game;
  fetchBest();
};

const updateSelectedSort = (sort) => {
  selectedSort.value = sort;
  useSort();
};

onMounted(() => {
  fetchBest();
});
</script>

<style lang="scss" scoped>
.inventory {
  display: flex;
  flex-direction: column;
  gap: 24px;
  &__wrapper {
    width: 100%;
    display: flex;
    position: relative;
    flex-direction: column;

    gap: 20px;
  }
  &__to-sell {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
    background-color: #171424;
    &-right {
      display: flex;
      align-items: center;
      gap: 18px;
    }
    &-button {
      width: 177px;
      height: 48px;
      gap: 0px;
    }
  }
  &__filters {
    display: grid;
    width: 100%;
    grid-template-columns: 50% 16% auto 56px;
    gap: 16px;
  }
  &__update {
    background-color: #171424;
    width: 56px;
    height: 48px;
  }
  &__list {
    display: flex;
    position: relative;
    flex-direction: column;
  }

  @media (max-width: 1452px) {
    &__filters {
      grid-template-areas: "search search search" "game sort update";
      grid-template-columns: auto auto auto;

      &-search {
        grid-area: search;
      }
      &-game {
        grid-area: game;
      }
      &-sort {
        grid-area: sort;
      }
    }

    &__update {
      grid-area: update;
    }
  }

  @media (max-width: 768px) {
    &__to-sell {
      flex-direction: column;
      justify-content: left;
      align-items: start;
      gap: 20px;

      &-right {
        width: 100%;
        justify-content: space-between;
      }
    }
    &__filters {
      grid-template-areas: "search search" "game update" "sort sort";
      grid-template-columns: calc(100% - 72px) auto;
    }
  }
}
</style>
