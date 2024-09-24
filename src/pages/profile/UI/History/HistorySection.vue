<template>
  <div class="history">
    <h3>Сделки</h3>
    <div class="history__caution">
      <div class="history__caution-left">
        <Caution />
        <p class="body">
          Вы остановили торговлю. Ваши вещи не продаются, инвентарь не
          обновляется и автопокупка не работает!
        </p>
      </div>
      <ButtonXS text="Включить сделки" />
    </div>
    <div class="history__header">
      <TextInput placeholder="Хэш в Steam" />
      <Dropdown :options="games" :selected="selectedGame" />
      <Dropdown :options="filter" :selected="selectedFilter" />
      <ButtonSwitch option1="Покупки" option2="Продажи" />
    </div>
    <div class="history__list">
      <div v-for="card in paginatedCards" :key="card">
        <HistoryCard />
      </div>
    </div>
    <div class="pagination">
      <a class="page-link" :class="{ disabled: isFirstPage }" @click="prev"
        ><Left
      /></a>
      <a
        class="page-link"
        v-for="item in pageCount"
        :key="item"
        :class="{ active: currentPage === item }"
        @click="currentPage = item"
      >
        {{ item }}
      </a>
      <a class="page-link" :class="{ disabled: isLastPage }" @click="next"
        ><Right
      /></a>
    </div>
  </div>
</template>

<script setup>
import cs from "@/assets/games/cs.svg?url";
import dota from "@/assets/games/dota.svg?url";
import rust from "@/assets/games/rust.svg?url";
import tf from "@/assets/games/tf.svg?url";

import Caution from "@/assets/icons/caution.svg?component";
import ButtonXS from "@/shared/UI/Buttons/ButtonXS.vue";
import ButtonSwitch from "@/shared/UI/Inputs/ButtonSwitch.vue";
import TextInput from "@/shared/UI/Inputs/TextInput.vue";
import Dropdown from "@/shared/UI/Select/Dropdown.vue";
import HistoryCard from "./UI/HistoryCard.vue";

import { computed, ref } from "vue";
import { useOffsetPagination } from "@vueuse/core";

const games = [
  { name: "CS 2", id: "cs", img: cs },
  { name: "DOTA 2", id: "dota", img: dota },
  { name: "RUST", id: "rust", img: rust },
  { name: "TF 2", id: "tf", img: tf },
];
let selectedGame = ref({ name: "CS 2", id: "cs", img: cs });

const filter = [{ name: "Все", id: "all" }];
const selectedFilter = { name: "Все", id: "all" };

import Left from "@/assets/control/leftarrow-s.svg?component";
import Right from "@/assets/control/rightarrow-s.svg?component";

const currentPage = ref(1);
const itemsPerPage = 7;

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const { next, prev, pageCount, isFirstPage, isLastPage } = useOffsetPagination({
  total: cards.length,
  page: currentPage,
  pageSize: itemsPerPage,
});

const paginatedCards = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return cards.slice(start, end);
});
</script>

<style lang="scss" scoped>
.history {
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;

  &__caution {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 12px;
    border-radius: 2px;
    background-color: #171424;

    &-left {
      display: flex;
      gap: 12px;
      align-items: center;
      p {
        max-width: 674px;
      }
    }
  }

  &__header {
    display: grid;
    grid-template-columns: 49% auto auto auto;
    gap: 16px;
  }

  &__list {
    height: 562px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
}
</style>
