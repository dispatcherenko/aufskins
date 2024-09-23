<template>
  <div class="filters" v-if="menuStore.isOpen">
    <div class="filters__header">
      <h4>Фильтры</h4>
      <a class="filters__close body" @click="menuStore.closeMenu">Закрыть</a>
    </div>
    <div class="filters__mid">
      <slot></slot>
    </div>
    <div class="filters__footer">
      <Button2 text="Применить" @click="menuStore.submit" />
    </div>
  </div>
</template>

<script setup>
import Button2 from "@/shared/UI/Buttons/Button2.vue";
import { useFilterMenuStore } from "../store";
const menuStore = useFilterMenuStore();
import { watch } from "vue";

const disableScroll = () => {
  document.body.style.overflow = "hidden";
};

const enableScroll = () => {
  document.body.style.overflow = "";
};

watch(
  () => menuStore.isOpen,
  (isOpen) => {
    if (isOpen) {
      disableScroll();
    } else {
      enableScroll();
    }
  }
);
</script>

<style lang="scss" scoped>
.filters {
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: #100e19;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;

  &__header {
    padding: 13px 26px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: #ffffff1a 1px solid;
  }

  &__close {
    color: #c41341;
  }

  &__mid {
    padding: 8px 20px;
    height: 100%;
    overflow-y: scroll;
  }

  &__footer {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    a {
      width: 100%;
    }
  }
}
</style>
