<script setup>
import NavigationBar from "@/widgets/Header/NavigationBar.vue";
import FooterBar from "@/widgets/Footer/FooterBar.vue";
import LoadingScreen from "@/shared/loading/LoadingScreen.vue";
</script>

<template>
  <div class="app">
    <LoadingScreen />
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
  box-sizing: border-box;
  font-family: "Geometria";
  color: #ffffff;
}
html,
body {
  height: 100%;
}
h1 {
  font-family: Geometria;
  font-size: 72px;
  font-weight: 700;
  line-height: 75.6px;
  text-align: center;
}
h2 {
  font-family: Geometria;
  font-size: 48px;
  font-weight: 700;
  line-height: 60px;
  text-align: left;
}
h3 {
  font-family: Geometria;
  font-size: 28px;
  font-weight: 700;
  line-height: 34px;
  letter-spacing: -0.5px;
  text-align: left;
}
h4 {
  font-family: Geometria;
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
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
  width: 95%;
  flex: 1;
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
