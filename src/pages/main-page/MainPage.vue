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
import HugeBuys from "@/widgets/HugeBuys/HugeBuys.vue";
import OpeningSection from "./UI/OpeningSection.vue";
import BestOffers from "./UI/BestOffers.vue";
import GamesSelector from "./UI/GamesSelector.vue";
import CommercialSelector from "./UI/CommercialSelector.vue";
</script>

<style lang="scss">
.main {
  @include container;
}
</style>
