<template>
  <Transition name="side">
    <div class="modal" v-if="menuStore.isOpen">
      <div class="bg" @click="menuStore.manageMenu"></div>
      <div class="side-menu" v-if="menuStore.isOpen">
        <header class="header"></header>
        <div class="side-menu__menu">
          <div class="side-menu__options">
            <Option :img="catalog" text="Каталог" />
            <Option :img="bag" text="Корзина" />
            <Option :img="messages" text="Чат" />
            <span class="divider"></span>
            <Option :img="profile" text="Профиль" />
            <Option :img="notifications" text="Уведомления" />
            <span class="divider"></span>
            <Option :img="inventory" text="Инвнтарь" />
            <Option :img="history" text="Сделки" />
            <span class="divider"></span>
            <Option :img="logout" text="Выйти" />
          </div>
          <div class="side-menu__locale">
            <p class="smallfootnote">Язык | Валюта</p>
            <LocaleDropdown />
          </div>
        </div>
      </div></div
  ></Transition>
</template>

<script setup>
import LocaleDropdown from "@/features/localiztion/UI/LocaleDropdown.vue";
import Option from "@/shared/UI/Menu/Option.vue";
import Burger from "./UI/Burger.vue";

import catalog from "@/assets/menu/catalog.svg";
import bag from "@/assets/menu/bag.svg";
import history from "@/assets/menu/history.svg";
import inventory from "@/assets/menu/inventory.svg";
import logout from "@/assets/menu/logout.svg";
import notifications from "@/assets/menu/notification.svg";
import profile from "@/assets/menu/profile.svg";
import messages from "@/assets/icons/messages.svg";

import { useSideMenuStore } from "./store";
import { watch } from "vue";
const menuStore = useSideMenuStore();

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
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.side-menu {
  position: fixed;
  right: 0;
  top: 0;

  max-width: 768px;
  width: 100%;
  height: 100%;
  background-color: #100e19;

  z-index: 100;

  &__menu {
    display: flex;
    flex-direction: column;
    gap: 64px;
    margin: 20px;
  }
}

.header {
  width: 100%;
  height: 80px;
  background-color: #100e19;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  &__wrapper {
    width: 100%;
    max-width: 1696px;
    margin-left: 32px;
    margin-right: 32px;
    display: flex;
    justify-content: end;
  }

  &-info {
    display: none;
    align-items: center;
    gap: 16px;
  }

  &-menu {
    display: flex;
    align-items: center;
    gap: 20px;
  }
}

.side-enter-active,
.side-leave-active {
  transition: all 0.5s ease;
}
.side-enter-from,
.side-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
