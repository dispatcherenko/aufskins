<template>
  <section class="selector">
    <CommercialSwiper />
  </section>
</template>

<script setup>
import CommercialSwiper from "@/widgets/CommercialSwiper/CommercialSwiper.vue";
</script>

<style lang="css" scoped>
.selector {
  width: 100%;
  max-width: 1696px;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-top: 80px;
}
@media (max-width: 1280px) {
  .selector {
    margin-top: 64px;
  }
  .offers {
    width: 100%;
  }
}
</style>
