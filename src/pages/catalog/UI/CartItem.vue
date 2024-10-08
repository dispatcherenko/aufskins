<script setup lang="ts">
import Trash from "@/assets/icons/trash.svg?component";
import { ref } from "vue";

import { useCartStore } from "@/entities/user/model";
const cartStore = useCartStore();

const props = defineProps({
  skin: Object,
});

let isSwitchActive = ref(false);
</script>

<template>
  <div class="card">
    <div class="card__left">
      <div class="card__stickers">
        <img
          height="16"
          width="16"
          class="card__sticker"
          v-for="sticker in skin.stickers"
          :src="sticker"
          alt="sticker"
        />
      </div>
      <div class="card__image">
        <img :src="skin.imageURL" alt="skin" class="card__image-img" />
        <img src="@/assets/mainpage/bar.svg" alt="bar" v-if="skin.pattren" />
      </div>
      <div class="card__descr">
        <span v-if="skin.sv" class="footnote red">SV |</span>
        <p v-if="skin.quality" class="footnote">{{ skin.quality }}</p>
        <p class="body">
          {{ skin.name
          }}<span v-if="skin.gun" class="grey"> | {{ skin.gun }}</span>
        </p>
        <p class="body">{{ skin.price }} <span class="grey">₽</span></p>
      </div>
    </div>
    <div class="card__right">
      <div class="card__price">
        <Trash
          class="card__price-trash"
          @click="cartStore.removeItem(skin, $event)"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  justify-content: space-between;
  padding: 12px 20px;
  width: 100%;
  height: 108px;

  transition: all 0.2s;

  &:hover {
    background-color: #171424;

    & .card__price-trash {
      display: block;
    }
  }

  &__left {
    display: flex;
    gap: 24px;
    position: relative;
  }

  &__right {
    display: flex;
    flex-direction: column;
    gap: 8px;
    max-width: 200px;
  }

  &__image {
    display: flex;
    flex-direction: column;
    justify-content: end;
    height: 100%;
    width: 108px;

    &-img {
      width: 108px;
      align-self: center;
    }
  }

  &__descr {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  &__stickers {
    height: 16px;
    width: 100%;
    position: absolute;
  }

  &__price {
    display: flex;
    align-items: center;
    gap: 24px;

    &-input {
      width: 154px;
    }

    &-trash {
      display: none;
      &:hover {
        cursor: pointer;
        svg {
          path {
            fill: #fff;
          }
        }
      }
    }
  }
}
</style>
