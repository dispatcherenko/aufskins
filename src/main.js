import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import mainPage from "./pages/main-page/MainPage.vue";

const app = createApp(App);

const routes = [
  { path: "/aufskins/", component: mainPage, alias: "/", name: "main" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router);
app.mount("#app");
