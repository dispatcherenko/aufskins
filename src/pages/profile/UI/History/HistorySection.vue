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
      <ButtonXS class="history__caution-button" text="Включить сделки" />
    </div>
    <div class="history__header">
      <TextInputButton
        style="grid-area: search; width: 100%"
        placeholder="Хэш в Steam"
        buttonText="Найти"
      />
      <Dropdown
        style="grid-area: game"
        :options="games"
        :selected="selectedGame"
        @update:selected="updateSelectedGame"
      />
      <Dropdown
        style="grid-area: filter"
        :options="filter"
        :selected="selectedFilter"
        @update:selected="updateSelectedFilter"
      />
      <ButtonSwitch
        style="grid-area: type"
        :option1="types[0]"
        :option2="types[1]"
        :selected="selectedType"
        @update:selected="updateSelectedType"
      />
    </div>
    <div class="history__list">
      <div v-for="card in paginatedCards" :key="card">
        <HistoryCard :item="card" />
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

import { computed, onMounted, ref } from "vue";
import { useOffsetPagination } from "@vueuse/core";

import { useRouter } from "vue-router";
const router = useRouter();

const props = defineProps({
  type: String,
});

const types = [
  { name: "Покупки", id: "buys" },
  { name: "Продажи", id: "sells" },
];
const selectedType = ref({ name: "Покупки", id: "buys" });
const updateSelectedType = (option) => {
  selectedType.value = option;
  router.push(`/profile/history/${option.id}`);
};

const games = [
  { name: "CS 2", id: "cs", img: cs },
  { name: "DOTA 2", id: "dota", img: dota },
  { name: "RUST", id: "rust", img: rust },
  { name: "TF 2", id: "tf", img: tf },
];
const selectedGame = ref({ name: "CS 2", id: "cs", img: cs });
const updateSelectedGame = (game) => {
  selectedGame.value = game;
};

const filter = [
  { name: "Все", id: "all" },
  { name: "Активно", id: "active" },
  { name: "Завершено", id: "complete" },
  { name: "Отменено", id: "cancelled" },
];
const selectedFilter = ref({ name: "Все", id: "all" });
const updateSelectedFilter = (filter) => {
  selectedFilter.value = filter;
};

import Left from "@/assets/control/leftarrow-s.svg?component";
import Right from "@/assets/control/rightarrow-s.svg?component";
import TextInputButton from "@/shared/UI/Inputs/TextInputButton.vue";

const currentPage = ref(1);
const itemsPerPage = 7;

const cards = [
  {
    type: "buys",
    autobuy: true,
    image: "https://i.postimg.cc/7hbP5p5R/image-31.png",
    status: "complete",
    name: "The Prince",
    gun: "M4A4",
    stickers: [
      "https://i.postimg.cc/sxwr4Khh/image-33.png",
      "https://i.postimg.cc/XN84WNzY/image-32.png",
    ],
    pattern: "0.338895",
    amount: "400",
    date: "20.03.2024",
    time: "16:53",
  },
  {
    type: "buys",
    image: "https://i.postimg.cc/7hbP5p5R/image-31.png",
    status: "active",
    name: "The Prince",
    gun: "M4A4",
    stickers: [
      "https://i.postimg.cc/sxwr4Khh/image-33.png",
      "https://i.postimg.cc/XN84WNzY/image-32.png",
      "https://i.postimg.cc/BQnsnWrc/image-34.png",
    ],
    pattern: "0.338895",
    amount: "400",
    date: "20.03.2024",
    time: "16:53",
  },
  {
    type: "buys",
    image: "https://i.postimg.cc/7hbP5p5R/image-31.png",
    status: "cancelled",
    name: "The Prince",
    gun: "M4A4",
    pattern: "0.338895",
    amount: "400",
    date: "20.03.2024",
    time: "16:53",
  },
  {
    type: "sells",
    image: "https://i.postimg.cc/7hbP5p5R/image-31.png",
    status: "complete",
    name: "The Prince",
    gun: "M4A4",
    stickers: [
      "https://i.postimg.cc/sxwr4Khh/image-33.png",
      "https://i.postimg.cc/XN84WNzY/image-32.png",
    ],
    pattern: "0.338895",
    amount: "400",
    date: "20.03.2024",
    time: "16:53",
  },
  {
    type: "sells",
    image: "https://i.postimg.cc/7hbP5p5R/image-31.png",
    status: "active",
    name: "The Prince",
    gun: "M4A4",
    stickers: [
      "https://i.postimg.cc/sxwr4Khh/image-33.png",
      "https://i.postimg.cc/XN84WNzY/image-32.png",
      "https://i.postimg.cc/BQnsnWrc/image-34.png",
    ],
    pattern: "0.338895",
    amount: "400",
    date: "20.03.2024",
    time: "16:53",
  },
  {
    type: "sells",
    image: "https://i.postimg.cc/7hbP5p5R/image-31.png",
    status: "cancelled",
    name: "The Prince",
    gun: "M4A4",
    pattern: "0.338895",
    amount: "400",
    date: "20.03.2024",
    time: "16:53",
  },
];

const filteredCards = computed(() => {
  return cards.filter((card) => card.type === props.type);
});

const { next, prev, pageCount, isFirstPage, isLastPage } = useOffsetPagination({
  total: filteredCards.value.length,
  page: currentPage,
  pageSize: itemsPerPage,
});

const paginatedCards = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredCards.value.slice(start, end);
});

onMounted(() => {
  if (props.type !== "buys" && props.type !== "sells") {
    router.push({ name: "errorpage" });
  }
  selectedType.value = types.find((elem) => elem.id === props.type);
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
    gap: 16px;
    padding: 12px;
    border-radius: 2px;
    background-color: #171424;

    &-button {
      padding: 6px 12px;
      min-width: 165px;
      height: 36px;
    }

    &-left {
      display: grid;
      gap: 12px;
      grid-template-columns: auto 674px;
      align-items: center;
    }
  }

  &__header {
    display: grid;
    grid-template-areas: "search game filter type";
    grid-template-columns: auto 234px 180px max-content;
    gap: 16px;
  }

  &__list {
    height: 562px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  @media (max-width: 1280px) {
    &__caution {
      &-left {
        grid-template-columns: auto 450px;
      }
    }

    &__header {
      grid-template-areas: "search search search" "game filter type";
      grid-template-columns: 30% 30% auto;
    }
  }

  @media (max-width: 768px) {
    &__caution {
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: start;
      gap: 16px;
      &-left {
        grid-template-columns: auto auto;
      }
    }

    &__header {
      grid-template-areas: "search" "game" "filter" "type";
      grid-template-columns: auto;
    }
  }
}
</style>
