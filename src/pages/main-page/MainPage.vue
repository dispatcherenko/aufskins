<template>
  <OpeningSection />
  <section class="main">
    <CommercialSelector />
    <BestOffers class="best-offers" />
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

<style>
.main {
  margin: 0 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
@media (max-width: 1280px) {
  .main {
    margin: 0 20px;
  }
}
</style>
