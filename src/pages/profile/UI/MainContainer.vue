<template>
  <div class="container">
    <div class="menu">
      <div class="menu__info">
        <ProfilePicture
          image="https://i.postimg.cc/fbwV9Fcv/photo-1.jpg"
          size="156"
        />
        <p class="menu__status">VIP 1</p>
        <p class="menu__nickname">Никнейм</p>
        <span class="menu__steam">
          <p class="menu__id-title">Steam ID</p>
          <p class="menu__id">76561198130188420</p>
        </span>
      </div>
      <div class="menu__buttons">
        <Option
          :img="profile"
          text="Профиль"
          :selected="options.profile"
          @click="navigateTo('')"
        />
        <Option
          :img="notifications"
          text="Уведомления"
          :selected="options.notifications"
          @click="navigateTo('notifications')"
        />
        <span class="divider"></span>
        <Option
          :img="inventory"
          text="Инвентарь"
          :selected="options.inventory"
          @click="navigateTo('inventory')"
        />
        <Option
          :img="history"
          text="Сделки"
          :selected="options.history"
          @click="navigateTo('history')"
        />
        <span class="divider"></span>
        <Option :img="logout" text="Выйти" @click="modalStore.openModal" />
      </div>
    </div>
    <div class="info">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import Option from "@/shared/UI/Menu/Option.vue";

import history from "@/assets/menu/history.svg";
import inventory from "@/assets/menu/inventory.svg";
import logout from "@/assets/menu/logout.svg";
import notifications from "@/assets/menu/notification.svg";
import profile from "@/assets/menu/profile.svg";
import ProfilePicture from "@/shared/UI/Profile/ProfilePicture.vue";
import { ref, watch } from "vue";

import { useLogoutModalStore } from "@/features/auth/store/index.js";
const modalStore = useLogoutModalStore();

import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();

const options = ref({
  profile: false,
  notifications: false,
  inventory: false,
  history: false,
});

const navigateTo = (path) => {
  router.push(`/profile/${path}`);
};

const updateSelectedOption = () => {
  const path = route.path.split("/").pop();
  Object.keys(options.value).forEach((key) => {
    options.value[key] = key === path || (key === "profile" && path === "");
  });
};

watch(route, updateSelectedOption, { immediate: true });
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
    align-items: center;
  }

  &__status {
    font-family: Geometria;
    font-size: 12px;
    text-align: center;
    max-width: 47px;
    color: #c41341;
    border-radius: 2px;
    padding: 4px 8px 2px 8px;
    background-color: #c413414d;

    margin-bottom: 8px;
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

  &__steam {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
}

@media (max-width: 1280px) {
  .container {
    display: flex;
    max-width: none;
    margin-bottom: 80px;
  }
  .info {
    width: 100%;
  }
  .menu {
    display: none;
  }
}
</style>
