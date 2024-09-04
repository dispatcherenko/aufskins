<template>
  <div @click="burgerCross = !burgerCross" class="header-menu__burger">
    <span
      class="header-menu__burger-line"
      :class="burgerCross ? 'top-line' : ''"
    ></span>
    <span
      class="header-menu__burger-line"
      :class="burgerCross ? 'bottom-line' : ''"
    ></span>
  </div>
</template>

<script setup>
import { ref } from "vue";

const burgerCross = ref(false);
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
