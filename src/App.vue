<script setup>
  import NavigationBar from './components/NavigationBar.vue'
  import FooterBar from './components/FooterBar.vue';

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
    font-family: 'Geometria';
    src: url('./assets/fonts/Geometria/Geometria-medium.ttf') format('truetype');
  }
  * {
    margin: 0;
    padding: 0;
    font-family: 'Geometria';
  }
  .app {
    width: 100%;
    height: 100%;
    background-color: #100E19;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    overflow: hidden
  }
  .app-main {
    width: 95%;
  }
  @media(max-width: 1280px) {
    .app-main {
      width: 100%;
    }
  }
</style>
