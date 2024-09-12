import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";
import { createPinia } from "pinia";
import Links from "./pages/Links.vue";

import MainPage from "./pages/main-page/MainPage.vue";
import ErrorPage from "./pages/error/ErrorPage.vue";
import ProfilePage from "./pages/profile/ProfilePage.vue";
import ProfileInfo from "./pages/profile/UI/ProfileInfo/ProfileInfo.vue";
import NotificationsSection from "./pages/profile/UI/Notifications/NotificationsSection.vue";
import InventorySection from "./pages/profile/UI/Inventory/InventorySection.vue";

const pinia = createPinia();
const app = createApp(App);

const routes = [
  {
    path: "/",
    component: MainPage,
    name: "main",
  },
  {
    path: "/errorpage",
    component: ErrorPage,
    name: "errorpage",
  },
  {
    path: "/profile",
    component: ProfilePage,
    name: "profile",
    children: [
      { path: "", component: ProfileInfo },
      { path: "notifications", component: NotificationsSection },
      { path: "inventory", component: InventorySection },
      { path: "history", component: ProfileInfo },
    ],
  },
  {
    path: "/links",
    component: Links,
    name: "links",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

app.use(router);
app.use(autoAnimatePlugin);
app.use(pinia);
app.mount("#app");
