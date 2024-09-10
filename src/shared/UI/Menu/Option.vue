<template>
  <a class="button" :class="{ 'button--active': selected }">
    <img class="button__img" :src="img" :alt="alt" />
    <p class="button__text">
      {{ text }}
    </p>
  </a>
</template>

<script setup>
const props = defineProps({
  class: String,
  img: String,
  alt: String,
  text: String,
  addText: String,
  selected: Boolean,
});
</script>

<style lang="scss" scoped>
.button {
  width: 100%;
  height: 48px;
  border: 0;
  padding: 12px 16px 12px 16px;
  background-color: #100e19;
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 12px;

  transition: all 0.2s;

  &__img {
    width: 24px;
    height: 24px;
  }

  &__text {
    //styleName: desktop/body;
    font-family: Geometria;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: left;
  }

  &:hover {
    background-color: #231f36;
  }

  &:active {
    background-color: #4c4374;
  }

  &--active {
    background-color: #231f36;
  }
}
</style>
