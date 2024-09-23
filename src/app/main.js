import { createApp } from "vue";
import App from "@/app/App.vue";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";
import { createPinia } from "pinia";
import router from "@/app/router/index.js";

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(autoAnimatePlugin);
app.use(pinia);

app.mount("#app");
