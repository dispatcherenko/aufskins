<template>
  <div class="card" @click="handleClick">
    <div class="card__left">
      <div class="card__purchase">
        <ArrowDown v-if="item.type === 'buys'" />
        <ArrowUp v-if="item.type === 'sells'" />
        <div>
          <p v-if="item.type === 'buys' && !item.autobuy" class="body">
            Покупка
          </p>
          <p v-if="item.type === 'buys' && item.autobuy" class="body overflow">
            Автопокупка
          </p>
          <p v-if="item.type === 'sells'" class="body">Продажа</p>
          <p v-if="item.status === 'complete'" class="smallfootnote green">
            Успешно
          </p>
          <p v-if="item.status === 'active'" class="smallfootnote yellow">
            Ожидание
          </p>
          <p v-if="item.status === 'cancelled'" class="smallfootnote red">
            Отменено
          </p>
        </div>
      </div>

      <div class="card__info">
        <img class="card__image" :src="item.image" alt="skin" />
        <div class="card__info-text">
          <p class="body">
            {{ item.name }}
            <span v-if="item.gun && item.pattern" class="footnote grey"
              >| {{ item.gun }} · {{ item.pattern }}</span
            >
          </p>
          <div class="card__stickers">
            <img
              v-for="(sticker, index) in item.stickers"
              :key="index"
              :src="sticker"
              alt="sticker"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="card__right">
      <p
        v-if="item.type === 'buys' && item.status !== 'cancelled'"
        :class="{
          grey: item.status === 'active',
          buy: item.status === 'complete',
        }"
        class="body"
      >
        - {{ item.amount }} ₽
      </p>
      <p
        v-if="item.type === 'sells' && item.status !== 'active'"
        class="body"
        :class="{
          grey: item.status === 'cancelled',
          sell: item.status === 'complete',
        }"
      >
        + {{ item.amount }} ₽
      </p>
      <ButtonXS
        v-if="item.type === 'sells' && item.status === 'active'"
        text="Создать сделку"
        class="buttonxs"
        @click="createModalStore.openModal"
      />
      <p
        v-if="
          item.type === 'buys' ||
          (item.type === 'sells' && item.status !== 'active')
        "
        class="footnote"
      >
        {{ item.date }} · {{ item.time }}
      </p>
      <p
        v-if="item.type === 'sells' && item.status === 'active'"
        class="footnote timer"
      >
        Осталось 30:00
      </p>
    </div>
  </div>
</template>

<script setup>
import ArrowDown from "@/assets/icons/arrow-down.svg?component";
import ArrowUp from "@/assets/icons/arrow-up.svg?component";
import ButtonXS from "@/shared/UI/Buttons/ButtonXS.vue";

import { useBuyDetailsModal } from "../store";
const buyModalStore = useBuyDetailsModal();

import { useAutobuyDetailsModal } from "../store";
const autobuyModalStore = useAutobuyDetailsModal();

import { useCreateSellModal } from "../store";
const createModalStore = useCreateSellModal();

const props = defineProps({
  item: Object,
});

const handleClick = () => {
  if (props.item.type === "buys" && !props.item.autobuy) {
    buyModalStore.openModal();
  } else if (props.item.type === "buys" && props.item.autobuy) {
    autobuyModalStore.openModal();
  }
};
</script>

<style lang="scss" scoped>
@import url("./styles.scss");
.card {
  display: flex;
  background-color: #171424;
  align-items: center;
  padding: 10px 40px;
  justify-content: space-between;
  height: 70px;
  cursor: pointer;

  &__left,
  &__right {
    display: flex;
    align-items: center;

    gap: 48px;
  }

  &__info {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  &__purchase {
    width: 121px;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  &__info-text {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  &__stickers {
    display: flex;
    gap: 4px;

    img {
      width: 16px;
      height: 16px;
    }
  }

  &__image {
    width: 61px;
    height: 50px;
  }

  @media (max-width: 1280px) {
    &__purchase {
      width: 69px;
      svg {
        display: none;
      }
    }

    &__right {
      gap: 24px;
    }
  }

  @media (max-width: 768px) {
    padding: 11px 16px;
    &__left {
      gap: 40px;
    }
    &__right {
      flex-direction: column;
      gap: 0;
      align-items: end;
    }
    &__info {
      &-text {
        display: none;
      }
    }
  }
}
</style>
