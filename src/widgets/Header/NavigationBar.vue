<script setup>
import ButtonRed from "@/shared/UI/ButtonRed.vue";
import Steam from "@/assets/nav/steam.svg";
import { ref } from "vue";

const burgerCross = ref(false);
</script>

<template>
  <header class="header">
    <nav class="header-info">
      <img src="@/assets/nav/avatar.svg" alt="logo" />
      <div class="header-info__currency">
        <img
          src="@/assets/nav/ruflag.svg"
          alt="flag"
          width="24px"
          height="24px"
        />
        <p class="header-info__currency-text">RU | ₽</p>
        <img
          src="@/assets/nav/arrowDown.svg"
          alt="arrow"
          width="16px"
          height="16px"
        />
      </div>
      <p class="header-info__catalog">Каталог</p>
    </nav>
    <div class="header-menu">
      <ButtonRed
        class="header-menu__button"
        :img="Steam"
        alt="steam"
        text="Войти"
        addText="через Steam"
      ></ButtonRed>
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
    </div>
  </header>
</template>

<style scoped>
.header {
  width: 95%;
  height: 80px;
  background-color: #100e19;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.header-info {
  display: flex;
  align-items: center;
  gap: 35px;
}
.header-info__catalog {
  color: #fff;
  font-size: 16px;
  font-weight: 500;
}
.header-info__currency {
  display: flex;
  align-items: center;
  gap: 10px;
}
.header-info__currency-text {
  color: rgba(255, 255, 255, 0.5);
  font-size: 16px;
  font-weight: 500;
}
.header-menu {
  display: flex;
  align-items: center;
  gap: 20px;
}
.header-menu__button {
  width: 228px;
  height: 48px;
  background-color: #c41341;
  display: flex;
  justify-content: center;
  align-items: center;
  clip-path: polygon(6% 0, 90% 0, 100% 30%, 94% 100%, 10% 100%, 0 70%);
  cursor: pointer;
  border: none;
  outline: none;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  gap: 10px;
}
.header-menu__button p {
  z-index: 1000;
}
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
  .header-info__currency {
    display: none;
  }
  .header-info__catalog {
    display: none;
  }
  .header-menu__burger {
    display: flex;
  }
  .header-menu__button {
    width: 132px;
  }
  .header-menu__button--hidden {
    display: none;
  }
}
</style>
