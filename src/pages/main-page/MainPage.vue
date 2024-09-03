<template>
  <section class="main">
    <OpeningSection />
    <CommercialSelector />
    <BestOffers />
    <GamesSelector />
    <HugeBuys />
  </section>
</template>

<script setup>
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import HugeBuys from "./UI/HugeBuys.vue";
import OpeningSection from "./UI/OpeningSection.vue";
import BestOffers from "./UI/BestOffers.vue";
import GamesSelector from "./UI/GamesSelector.vue";
import CommercialSelector from "./UI/CommercialSelector.vue";
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
