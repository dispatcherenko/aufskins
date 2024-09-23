<template>
  <header class="header">
    <CartMenu />
    <UserMenu class="header__menu" />
    <div class="header__wrapper">
      <nav class="header-info">
        <a class="logo" href="/"
          ><img src="@/assets/nav/avatar.svg" alt="logo"
        /></a>
        <div class="header-info__currency">
          <LocaleDropdown />
        </div>
        <a class="header-info__catalog" href="/catalog">Каталог</a>
      </nav>
      <div class="header-menu">
        <Button2
          v-if="!isLoggedIn"
          class="header-menu__button"
          :img="Steam"
          alt="steam"
          text="Войти"
          addText="через Steam"
          :onclick="buttonAction"
        ></Button2>

        <Burger />

        <div v-if="isLoggedIn" class="header-menu__profile">
          <div class="header-menu__links">
            <a class="header-menu__link" @click="cartMenuStore.manageMenu"
              ><Cart />Корзина</a
            >
            <a class="header-menu__link" @click="chatStore.openMenu"
              ><Messages />Чат</a
            >
            <div class="header-menu__wallet">
              <Wallet />
              <p>1 000 ₽</p>
              <a :onclick="modalStore.openModal">+</a>
            </div>
          </div>
          <div class="header-menu__right">
            <a href="/profile" class="pfp">
              <ProfilePicture class="header-menu__pfp" size="56" />
            </a>
            <Arrow
              class="arrow"
              :class="{ open: userMenuStore.isOpen }"
              @click="userMenuStore.manageMenu"
            />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import Button2 from "@/shared/UI/Buttons/Button2.vue";
import Steam from "@/assets/nav/steam.svg";
import LocaleDropdown from "@/features/localiztion/UI/LocaleDropdown.vue";
import ProfilePicture from "@/shared/UI/Profile/ProfilePicture.vue";
import Burger from "../SideMenu/UI/Burger.vue";
import UserMenu from "./UI/UserMenu.vue";

import Cart from "@/assets/icons/cart.svg?component";
import Messages from "@/assets/icons/messages.svg?component";
import Wallet from "@/assets/menu/wallet.svg?component";
import Arrow from "@/assets/nav/arrowDown.svg?component";

import { useCartMenuStore } from "@/pages/catalog/store";
const cartMenuStore = useCartMenuStore();

import { useUserMenuStore } from "./store";
const userMenuStore = useUserMenuStore();

const chatStore = useChatStore();

import { useDepositModalStore } from "@/features/wallet/store";
import CartMenu from "@/pages/catalog/UI/CartMenu.vue";
import { useChatStore } from "../Chat/store";
const modalStore = useDepositModalStore();

const props = defineProps({
  buttonAction: Function,
  isLoggedIn: Boolean,
});
</script>

<style scoped>
.logo:hover {
  background-color: transparent;
}
.header {
  width: 100%;
  height: 80px;
  background-color: #100e19;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  z-index: 1000;
}
.arrow {
  cursor: pointer;
  transition: all 0.2s;
  &.open {
    transform: rotate(180deg);
  }
}
.pfp {
  &:hover {
    background-color: transparent;
  }
}
.header__wrapper {
  width: 100%;
  max-width: 1696px;
  margin-left: 32px;
  margin-right: 32px;
  display: flex;
  justify-content: space-between;
}
.header-info {
  display: flex;
  align-items: center;
  gap: 16px;
}
.header-info__currency {
  position: relative;
}
.header-info__currency::after {
  content: "";
  position: absolute;
  display: block;
  top: 0;
  bottom: 0;
  margin: auto 0;
  right: -8px;
  width: 1px;
  height: 24px;
  background-color: #ffffff1a;
  margin-left: 10px;
  z-index: 1;
  border-radius: 30px;
}
.header-info__catalog {
  font-size: 16px;
  font-weight: 500;
  padding: 12px 16px;
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
}
.header-menu__button p {
  z-index: 1000;
}
.header-menu__profile {
  display: flex;
  gap: 32px;
  align-items: center;
}
.header-menu__links {
  display: flex;
  align-items: center;
  gap: 8px;
}
.header-menu__link {
  display: flex;
  gap: 12px;
  margin: auto;
  padding: 12px 16px;
}
.header-menu__wallet {
  display: flex;

  align-items: center;
  margin: auto;
  padding: 12px 16px;

  background-color: #231f36;

  p {
    margin-left: 12px;
    margin-right: 8px;
  }

  a {
    padding: 0;
    &:hover {
      background-color: transparent;
      color: #c41341;
    }
  }
}
.header-menu__right {
  display: flex;
  align-items: center;
  gap: 12px;
}
.header-menu__pfp {
  margin: auto;
}
@media (max-width: 1280px) {
  .header__wrapper {
    margin-left: 32px;
    margin-right: 32px;
  }
  .header-info__currency {
    display: none;
  }
  .header-info__catalog {
    display: none;
  }
  .header-menu__button {
    width: 132px;
  }
  .header-menu__button--hidden {
    display: none;
  }
  .header-menu__profile {
    display: none;
  }
}
</style>
