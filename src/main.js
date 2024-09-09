import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import MainPage from "./pages/main-page/MainPage.vue";
import ErrorPage from "./pages/error/ErrorPage.vue";
import ProfilePage from "./pages/profile/ProfilePage.vue";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";
import { createPinia } from "pinia";
import Links from "./pages/Links.vue";

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
