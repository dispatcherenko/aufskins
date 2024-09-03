<script setup>
import NavigationBar from "./widgets/Header/NavigationBar.vue";
import FooterBar from "./widgets/Footer/FooterBar.vue";
</script>

<template>
  <div class="app">
    <NavigationBar />
    <main class="app-main">
      <router-view />
    </main>
    <FooterBar />
  </div>
</template>

<style>
@font-face {
  font-family: "Geometria";
  src: url("./assets/fonts/Geometria/Geometria-medium.ttf") format("truetype");
}
* {
  margin: 0;
  padding: 0;
  font-family: "Geometria";
}
.app {
  width: 100%;
  height: 100%;
  background-color: #100e19;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  overflow: hidden;
}
.app-main {
  width: 95%;
}

.title {
  font-size: 64px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 32px;
}
@media (max-width: 1279px) {
  .app-main {
    width: 100%;
  }
  .title {
    font-size: 28px;
    margin-left: 20px;
  }
}
</style>
