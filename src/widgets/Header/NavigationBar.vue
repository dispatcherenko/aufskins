<script setup>
import Button2 from "@/shared/UI/Buttons/Button2.vue";
import Steam from "@/assets/nav/steam.svg";
import Burger from "@/features/sidemenu/UI/Burger.vue";
import SideMenu from "@/features/sidemenu/UI/SideMenu.vue";
import LocaleDropdown from "@/features/localiztion/UI/LocaleDropdown.vue";
</script>

<template>
  <SideMenu>
    <ul class="sidebar-panel-nav">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </SideMenu>
  <header class="header">
    <nav class="header-info">
      <img src="@/assets/nav/avatar.svg" alt="logo" />
      <div class="header-info__currency">
        <LocaleDropdown />
      </div>
      <a class="header-info__catalog" href="/">Каталог</a>
    </nav>
    <div class="header-menu">
      <Button2
        class="header-menu__button"
        :img="Steam"
        alt="steam"
        text="Войти"
        addText="через Steam"
      ></Button2>
      <Burger />
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
  color: #fff;
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
@media (max-width: 1280px) {
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
}
</style>
