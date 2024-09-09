<template>
  <a class="card" :class="{ 'card--selected': isSelected }">
    <Rectangle v-if="isSelected" class="card__figure" />
    <div class="card__textfield">
      <p class="subheader">
        {{ title
        }}<span v-if="add" class="subheader--add">{{ " " + add }}</span>
      </p>
      <p class="footnote card__text">
        {{ text }}
      </p>
    </div>
    <img :src="img" alt="method" class="card__img" />
  </a>
</template>

<script setup>
import Rectangle from "./rectangle.svg?component";

const props = defineProps({
  title: String,
  text: String,
  add: String,
  img: String,
  isSelected: Boolean,
});
</script>

<style lang="scss" scoped>
.subheader--add {
  color: #ffffff80;
}

.card {
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 2px;
  background-color: #100e19;
  position: relative;

  overflow: hidden;

  transition: all 0.2s;

  &:hover {
    background-color: #231f36;
  }

  &--selected {
    background-color: #231f36;
  }

  &__textfield {
    margin: 20px 58px 8px 24px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    z-index: 1;

    & .footnote {
      width: 230px;
    }
  }

  &__img {
    position: absolute;
    object-fit: cover;
    z-index: 0;
    bottom: -33px;
    right: -23px;
  }

  &__figure {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 8px;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 1280px) {
    width: 100%;
    height: 100%;

    &__img {
      width: 96px;
      height: 96px;

      bottom: -23px;
      right: -20px;
    }

    &__textfield {
      margin: 12px 44px 58px 16px;
    }

    &__text {
      display: none;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    min-width: 153px;
    height: 100%;

    &__img {
      width: 96px;
      height: 96px;

      bottom: -23px;
      right: -20px;
    }

    &__textfield {
      margin: 12px 44px 58px 16px;
    }

    &__text {
      display: none;
    }
  }
}
</style>
