<template>
  <div @click="manageBurger" class="header-menu__burger">
    <span
      class="header-menu__burger-line"
      :class="menuStore.isOpen ? 'top-line' : ''"
    ></span>
    <span
      class="header-menu__burger-line"
      :class="menuStore.isOpen ? 'bottom-line' : ''"
    ></span>
  </div>
</template>

<script setup>
import { useSideMenuStore } from "../store";

const menuStore = useSideMenuStore();

const manageBurger = () => {
  menuStore.manageMenu();
};
</script>

<style scoped>
.header-menu__burger {
  width: 24px;
  height: 24px;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
}
.header-menu__burger-line {
  height: 2px;
  width: 16px;
  transition: 0.3s ease;
  background-color: #fff;
}
.top-line {
  transform: rotate(45deg) translate(0, 4.9px);
}
.bottom-line {
  transform: rotate(-45deg) translate(0, -4.9px);
}

@media (max-width: 1280px) {
  .header-menu__burger {
    display: flex;
  }
}
</style>
