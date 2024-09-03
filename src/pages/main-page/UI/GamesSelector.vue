<template>
  <section class="selector">
    <h1 class="title">Популярные игры</h1>
    <GamesSwiper />
  </section>
</template>

<script setup>
import GamesSwiper from "@/widgets/GamesSwiper/GamesSwiper.vue";
</script>

<style lang="css" scoped>
.selector {
  width: 100%;
  max-width: 1696px;
  display: flex;
  flex-direction: column;
  align-items: start;
}
@media (max-width: 1280px) {
  .offers {
    width: 100%;
  }
}
</style>
