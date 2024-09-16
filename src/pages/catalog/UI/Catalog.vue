<script setup lang="ts">
import Dropdown from "@/shared/UI/Select/Dropdown.vue";

import cs from "@/assets/games/cs.svg?url";
import dota from "@/assets/games/dota.svg?url";
import rust from "@/assets/games/rust.svg?url";
import tf from "@/assets/games/tf.svg?url";
import { ref } from "vue";
import FilterItem from "./FilterItem.vue";
import TextInputButton from "@/shared/UI/Inputs/TextInputButton.vue";
import RangeSlider from "@/shared/UI/RangeSlider/RangeSlider.vue";
import Checkbox from "@/shared/UI/Checkbox/Checkbox.vue";

const games = [
  { name: "CS 2", id: "cs", img: cs },
  { name: "DOTA 2", id: "dota", img: dota },
  { name: "RUST", id: "rust", img: rust },
  { name: "TF 2", id: "tf", img: tf },
];
let selectedGame = ref({ name: "CS 2", id: "cs", img: cs });
const updateSelectedGame = (game) => {
  selectedGame.value = game;
};
</script>

<template>
  <div class="catalog">
    <div class="catalog__menu menu">
      <Dropdown
        class="menu__select"
        :options="games"
        :selected="selectedGame"
        @update:selected="updateSelectedGame"
      />
      <div class="menu__filters">
        <FilterItem name="Цена"><RangeSlider /></FilterItem>
        <FilterItem name="Тип оружия">
          <div class="menu__filter">
            <label class="menu__checkbox" for="pistol">
              <Checkbox name="gun" id="pistol" />
              <p class="footnote">Пистолеты</p>
            </label>
            <label class="menu__checkbox" for="pp">
              <Checkbox name="gun" id="pp" />
              <p class="footnote">ПП</p>
            </label>
            <label class="menu__checkbox" for="heavy">
              <Checkbox name="gun" id="heavy" />
              <p class="footnote">Тяжелое</p>
            </label>
            <label class="menu__checkbox" for="rifles">
              <Checkbox name="gun" id="rifles" />
              <p class="footnote">Винтовки</p>
            </label>
            <label class="menu__checkbox" for="knives">
              <Checkbox name="gun" id="knives" />
              <p class="footnote">Ножи</p>
            </label>
            <label class="menu__checkbox" for="gloves">
              <Checkbox name="gun" id="gloves" />
              <p class="footnote">Перчатки</p>
            </label>
            <label class="menu__checkbox" for="zeus">
              <Checkbox name="gun" id="zeus" />
              <p class="footnote">ZEUS</p>
            </label>
          </div>
        </FilterItem>
        <FilterItem name="Редкость">
          <div class="menu__filter">
            <label class="menu__checkbox" for="gray">
              <Checkbox name="rarity" id="gray" />
              <p class="footnote">Ширпотреб</p>
            </label>
            <label class="menu__checkbox" for="babyBlue">
              <Checkbox name="rarity" id="babyBlue" />
              <p class="footnote">Промышленное</p>
            </label>
            <label class="menu__checkbox" for="blue">
              <Checkbox name="rarity" id="blue" />
              <p class="footnote">Армейское</p>
            </label>
            <label class="menu__checkbox" for="purple">
              <Checkbox name="rarity" id="purple" />
              <p class="footnote">Запрещенное</p>
            </label>
            <label class="menu__checkbox" for="pink">
              <Checkbox name="rarity" id="pink" />
              <p class="footnote">Засекреченое</p>
            </label>
            <label class="menu__checkbox" for="red">
              <Checkbox name="rarity" id="red" />
              <p class="footnote">Тайное</p>
            </label>
            <label class="menu__checkbox" for="gold">
              <Checkbox name="rarity" id="gold" />
              <p class="footnote">Контрабандное</p>
            </label>
          </div>
        </FilterItem>
        <FilterItem name="Качество">
          <div class="menu__filter">
            <label class="menu__checkbox" for="FN">
              <Checkbox name="quality" id="FN" />
              <p class="footnote">Прямо с завода</p>
            </label>
            <label class="menu__checkbox" for="MW">
              <Checkbox name="quality" id="WW" />
              <p class="footnote">Немного поношенное</p>
            </label>
            <label class="menu__checkbox" for="FT">
              <Checkbox name="quality" id="FT" />
              <p class="footnote">После полевых испытаний</p>
            </label>
            <label class="menu__checkbox" for="WW">
              <Checkbox name="quality" id="WW" />
              <p class="footnote">Поношенное</p>
            </label>
            <label class="menu__checkbox" for="BS">
              <Checkbox name="quality" id="BS" />
              <p class="footnote">Закаленное в боях</p>
            </label>
          </div>
        </FilterItem>
        <FilterItem name="Категория">
          <div class="menu__filter">
            <label class="menu__checkbox" for="regular">
              <Checkbox name="category" id="regular" />
              <p class="footnote">Обычное</p>
            </label>
            <label class="menu__checkbox" for="ST">
              <Checkbox name="category" id="ST" />
              <p class="footnote">Stat Track™</p>
            </label>
            <label class="menu__checkbox" for="SV">
              <Checkbox name="category" id="SV" />
              <p class="footnote">Сувенир</p>
            </label>
          </div>
        </FilterItem>
      </div>
    </div>
    <div class="catalog__right right">
      <TextInputButton placeholder="Поиск по названию" button-text="Найти" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.catalog {
  width: 100%;
  display: grid;
  grid-template-columns: 234px auto;
  gap: 12px;
  margin-bottom: 104px;
  margin-top: 32px;
  height: calc(759px + 20px + 48px);
  max-width: 1696px;
}

.menu {
  width: 100%;

  &__select {
  }
  &__filters {
    height: 759px;
    overflow: auto;
  }
  &__filter {
    display: flex;
    flex-direction: column;
    gap: 9px;
  }
  &__checkbox {
    display: flex;
    gap: 16px;

    p {
      color: white;
    }
  }
}
</style>
