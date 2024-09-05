<template>
  <div class="app">
    <LoadingScreen v-if="isLoading" />
    <NavigationBar :button-action="toProfile" />
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
import { ref } from "vue";
import { useRouter } from "vue-router";

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

body::-webkit-scrollbar {
  width: 12px; /* ширина scrollbar */
}
body::-webkit-scrollbar-track {
  background: #100e19; /* цвет дорожки */
}
body::-webkit-scrollbar-thumb {
  background-color: #231f36; /* цвет плашки */
}

p,
h1,
h2,
h3,
h4 {
  color: white;
  line-height: normal;
}
a {
  text-decoration: none;
  transition: all 0.2s;
  color: white;
  cursor: pointer;
  padding: 5px;
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

@media (max-width: 1279px) {
  .app-main {
    width: 100%;
  }
  .title {
    font-size: 28px;
  }
}
</style>
