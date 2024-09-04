import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import mainPage from "./pages/main-page/MainPage.vue";
import error from "./pages/error/ErrorPage.vue";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";

const app = createApp(App);

const routes = [
  {
    path: "/aufskins/",
    component: mainPage,
    alias: "/",
    name: "main",
  },
  {
    path: "/aufskins/error",
    component: error,
    alias: "/error",
    name: "error",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router);
app.use(autoAnimatePlugin);
app.mount("#app");
