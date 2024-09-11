<template>
  <div class="app">
    <LoadingScreen v-if="isLoading" />

    <LogoutModal />
    <DepositModal />
    <WithdrawalModal />
    <SellListModal />
    <ApiModal />
    <SuccessModal />

    <SideMenu />
    <NavigationBar
      :button-action="toProfile"
      :isLoggedIn="userStore.isLoggedIn"
    />
    <main class="app-main">
      <router-view />
    </main>
    <FooterBar />
  </div>
</template>

<script setup>
import NavigationBar from "@/widgets/Header/NavigationBar.vue";
import FooterBar from "@/widgets/Footer/FooterBar.vue";
import LoadingScreen from "@/shared/loading/LoadingScreen.vue";

import { onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";

import LogoutModal from "./features/auth/logout/LogoutModal.vue";
import { useUserStore } from "./entities/user/model";

import DepositModal from "./features/wallet/DepositModal.vue";
import WithdrawalModal from "./features/wallet/WithdrawalModal.vue";

import SideMenu from "./widgets/SideMenu/SideMenu.vue";

import SellListModal from "./pages/profile/UI/Inventory/UI/SellListModal.vue";
import ApiModal from "./pages/profile/UI/Inventory/UI/ApiModal.vue";
import SuccessModal from "./pages/profile/UI/Inventory/UI/SuccessModal.vue";

const userStore = useUserStore();

let isLoading = ref(false);
const router = useRouter();

const toProfile = () => {
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
    router.push("/profile");
  }, 1000);
};
</script>

<style>
@font-face {
  font-family: "Geometria";
  src: url("./assets/fonts/Geometria/Geometria-medium.ttf") format("truetype");
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Geometria";
}
html,
body {
  height: 100vh;
  background-color: #100e19;
}

*::-webkit-scrollbar {
  width: 12px; /* ширина scrollbar */
}
*::-webkit-scrollbar-track {
  display: none; /* цвет дорожки */
}
*::-webkit-scrollbar-thumb {
  background-color: #231f36; /* цвет плашки */
}

p,
h1,
h2,
h3,
h4,
label {
  color: white;
  line-height: normal;
}
a {
  text-decoration: none;
  transition: all 0.2s;
  color: white;
  cursor: pointer;
}
a:hover {
  background-color: #231f36;
  border-radius: 2px;
}
h1 {
  font-family: Geometria;
  font-size: 72px;
  font-weight: 700;
}
h2 {
  font-family: Geometria;
  font-size: 48px;
  font-weight: 700;
  text-align: left;
}
h3 {
  font-family: Geometria;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -0.5px;
  text-align: left;
}
h4 {
  font-family: Geometria;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.30000001192092896px;
  text-align: left;
}
.subheader {
  font-family: Geometria;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;

  @media (max-width: 1280px) {
    font-size: 18px;
  }
}
.footnote {
  font-family: Geometria;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #ffffff80;

  overflow: hidden;
  text-overflow: clip;
}
.smallfootnote {
  font-family: Geometria;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  color: #ffffff80;
}
.grey {
  color: #ffffff80;
}
.red {
  color: #c41341;
}
.body {
  font-family: Geometria;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
}
.app {
  width: 100%;
  height: 100%;
  background-color: #100e19;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}
.app-main {
  width: 100%;
}

.pagination {
  width: 100%;
  display: flex;
  justify-content: end;
  list-style-type: none;
  gap: 5px;
}
.page-item {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
}
.page-item.active {
  background-color: #231f36;
}
.page-item.disabled {
  a {
    color: #ffffff80;
  }
}
.page-link {
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 12px;
}

.divider {
  display: block;
  width: 100%;
  height: 1px;
  background: var(--white-10, #ffffff1a);
}

@media (max-width: 1280px) {
  .app-main {
    width: 100%;
  }
  .title {
    font-size: 28px;
  }
  .pagination {
    width: 100%;
    display: none;
    justify-content: end;
    list-style-type: none;
    gap: 5px;
  }
}
</style>
