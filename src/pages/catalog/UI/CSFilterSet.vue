<script setup>
import { useItemsStore } from "@/entities/skin/model";
const itemsStore = useItemsStore();

import Checkbox from "@/shared/UI/Checkbox/Checkbox.vue";
import FilterItem from "./FilterItem.vue";
import RangeSlider from "@/shared/UI/RangeSlider/RangeSlider.vue";
import { ref } from "vue";

const minValue = ref(0.01);
const maxValue = ref(itemsStore.maxPriceCs);

const searchQuery = ref("");
const filters = ref({
  gun: [],
  rarity: [],
  quality: [],
  category: [],
});
</script>

<template>
  <FilterItem name="Цена">
    <RangeSlider
      :max="itemsStore.maxPriceCs"
      :minValue="minValue"
      :maxValue="maxValue"
      @update:minValue="minValue = $event"
      @update:maxValue="maxValue = $event"
    />
  </FilterItem>
  <FilterItem name="Тип оружия">
    <div class="menu__filter">
      <label class="menu__checkbox" for="pistol">
        <Checkbox name="gun" id="pistol" value="pistol" />
        <p class="footnote">Пистолеты</p>
      </label>
      <label class="menu__checkbox" for="pp">
        <Checkbox name="gun" id="pp" value="pp" />
        <p class="footnote">ПП</p>
      </label>
      <label class="menu__checkbox" for="heavy">
        <Checkbox name="gun" id="heavy" value="heavy" />
        <p class="footnote">Тяжелое</p>
      </label>
      <label class="menu__checkbox" for="rifles">
        <Checkbox name="gun" id="rifles" value="rifles" />
        <p class="footnote">Винтовки</p>
      </label>
      <label class="menu__checkbox" for="knives">
        <Checkbox name="gun" id="knives" value="knives" />
        <p class="footnote">Ножи</p>
      </label>
      <label class="menu__checkbox" for="gloves">
        <Checkbox name="gun" id="gloves" value="gloves" />
        <p class="footnote">Перчатки</p>
      </label>
      <label class="menu__checkbox" for="zeus">
        <Checkbox name="gun" id="zeus" value="zeus" />
        <p class="footnote">ZEUS</p>
      </label>
    </div>
  </FilterItem>
  <FilterItem name="Редкость">
    <div class="menu__filter">
      <label class="menu__checkbox" for="gray">
        <Checkbox name="rarity" id="gray" value="gray" />
        <p class="footnote">Ширпотреб</p>
      </label>
      <label class="menu__checkbox" for="babyBlue">
        <Checkbox name="rarity" id="babyBlue" value="babyBlue" />
        <p class="footnote">Промышленное</p>
      </label>
      <label class="menu__checkbox" for="blue">
        <Checkbox name="rarity" id="blue" value="blue" />
        <p class="footnote">Армейское</p>
      </label>
      <label class="menu__checkbox" for="purple">
        <Checkbox name="rarity" id="purple" value="purple" />
        <p class="footnote">Запрещенное</p>
      </label>
      <label class="menu__checkbox" for="pink">
        <Checkbox name="rarity" id="pink" value="pink" />
        <p class="footnote">Засекреченое</p>
      </label>
      <label class="menu__checkbox" for="red">
        <Checkbox name="rarity" id="red" value="red" />
        <p class="footnote">Тайное</p>
      </label>
      <label class="menu__checkbox" for="gold">
        <Checkbox name="rarity" id="gold" value="gold" />
        <p class="footnote">Контрабандное</p>
      </label>
    </div>
  </FilterItem>
  <FilterItem name="Качество">
    <div class="menu__filter">
      <label class="menu__checkbox" for="FN">
        <Checkbox name="quality" id="FN" value="FN" />
        <p class="footnote">Прямо с завода</p>
      </label>
      <label class="menu__checkbox" for="MW">
        <Checkbox name="quality" id="MW" value="MW" />
        <p class="footnote">Немного поношенное</p>
      </label>
      <label class="menu__checkbox" for="FT">
        <Checkbox name="quality" id="FT" value="FT" />
        <p class="footnote">После полевых испытаний</p>
      </label>
      <label class="menu__checkbox" for="WW">
        <Checkbox name="quality" id="WW" value="WW" />
        <p class="footnote">Поношенное</p>
      </label>
      <label class="menu__checkbox" for="BS">
        <Checkbox name="quality" id="BS" value="BS" />
        <p class="footnote">Закаленное в боях</p>
      </label>
    </div>
  </FilterItem>
  <FilterItem name="Категория">
    <div class="menu__filter">
      <label class="menu__checkbox" for="regular">
        <Checkbox name="category" id="regular" value="regular" />
        <p class="footnote">Обычное</p>
      </label>
      <label class="menu__checkbox" for="ST">
        <Checkbox name="category" id="ST" value="ST" />
        <p class="footnote">Stat Track™</p>
      </label>
      <label class="menu__checkbox" for="SV">
        <Checkbox name="category" id="SV" value="SV" />
        <p class="footnote">Сувенир</p>
      </label>
    </div>
  </FilterItem>
</template>
