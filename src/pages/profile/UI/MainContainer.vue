<template>
  <div class="container">
    <div class="menu">
      <div class="menu__info">
        <div class="menu__pfp-container">
          <img :src="border" alt="border" class="menu__pfp-border" />
          <svg
            class="menu__pfp"
            width="145"
            height="145"
            viewBox="0 0 152 152"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask id="svgmask1">
              <path
                d="M17.3756 152L0 109.929L12.1462 0H134.624L152 42.0714L139.854 152H17.3756Z"
                fill="#ffffff"
              />
            </mask>
            <image :href="pfp" width="152" height="152" mask="url(#svgmask1)" />
          </svg>
        </div>
        <p class="menu__nickname">Никнейм</p>
        <span class="menu__steam">
          <p class="menu__id-title">Steam ID</p>
          <p class="menu__id">76561198130188420</p>
        </span>
      </div>
      <div class="menu__buttons">
        <Option :img="profile" text="Профиль" :selected="true" />
        <Option :img="notifications" text="Уведомления" />
        <span class="menu__divider"></span>
        <Option :img="inventory" text="Инвентарь" />
        <Option :img="history" text="Сделки" />
        <span class="menu__divider"></span>
        <Option :img="logout" text="Выйти" />
      </div>
    </div>
    <div class="info"><ProfileInfo /></div>
  </div>
</template>

<script setup>
import Option from "@/shared/UI/Menu/Option.vue";
import ProfileInfo from "./ProfileInfo/ProfileInfo.vue";
import pfp from "./photo.jpg";
import border from "./border.svg";

import history from "@/assets/menu/history.svg";
import inventory from "@/assets/menu/inventory.svg";
import logout from "@/assets/menu/logout.svg";
import notifications from "@/assets/menu/notification.svg";
import profile from "@/assets/menu/profile.svg";
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  width: 100%;
  max-width: 1696px;
  grid-template-columns: 234px auto;
  gap: 12px;
  width: 100%;
  height: 100%;
  margin-top: 40px;
  margin-bottom: 120px;
}
.menu {
  width: 234px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  grid-column: 1;

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  &__pfp-container {
    position: relative;
    align-self: center;
    margin-bottom: 16px;
    height: 152px;
    width: 152px;
  }

  &__pfp-border {
    position: absolute;
    top: 0;
    left: 0;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto auto;
    z-index: 0;
  }

  &__pfp {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto auto;
    z-index: 1;
  }

  &__nickname {
    //styleName: desktop/upperBody;
    font-family: Geometria;
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;

    margin-bottom: 12px;
  }

  &__id-title {
    //styleName: desktop/footnote;
    font-family: Geometria;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    color: var(--white-25, #ffffff40);
  }

  &__buttons {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  &__divider {
    width: 186px;
    height: 1px;
    background: var(--white-10, #ffffff1a);
  }

  &__steam {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
}
</style>
