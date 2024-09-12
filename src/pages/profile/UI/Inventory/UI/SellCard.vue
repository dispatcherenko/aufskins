<script setup lang="ts">
import Switch from "@/shared/UI/Inputs/Switch.vue";
import TextInput from "@/shared/UI/Inputs/TextInput.vue";
import Trash from "@/assets/icons/trash.svg?component";
import { ref } from "vue";

import { useInventoryStore } from "@/entities/skin/model/index";
const inventoryStore = useInventoryStore();

const props = defineProps({
  skin: Object,
});

let isSwitchActive = ref(false);
</script>

<template>
  <div class="card">
    <div class="card__left">
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
      </div>
    </div>
    <div class="card__right">
      <div class="card__price">
        <TextInput
          class="card__price-input"
          type="number"
          placeholder="Цена продажи"
          v-model="skin.priceToSell"
        />
        <Trash
          class="card__price-trash"
          @click="inventoryStore.removeItem(skin)"
        />
      </div>
      <div class="card__moment">
        <Switch
          class="card__switch"
          :is-active="isSwitchActive"
          @update="isSwitchActive = $event"
        />
        <p class="body">Момент. продажа</p>
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

  &__left {
    display: flex;
    gap: 24px;
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
    justify-content: center;
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
    gap: 8px;
  }

  &__stickers {
    height: 16px;
    width: 100%;
  }

  &__price {
    display: flex;
    align-items: center;
    gap: 24px;

    &-input {
      width: 154px;
    }

    &-trash {
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

  &__moment {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &__switch {
    width: 30px;
    height: 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 12px 16px;
    height: 212px;
    gap: 12px;

    &__left {
      height: 92px;
    }

    &__descr {
      margin-right: -10%;
    }

    &__right {
      max-width: none;
      width: 100%;
    }

    &__price {
      width: 100%;
      gap: 16px;
      justify-content: space-between;

      input {
        width: 100%;
      }
    }
  }
}
</style>
