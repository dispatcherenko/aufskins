<script setup>
import HugeBuys from "@/widgets/HugeBuys/HugeBuys.vue";
import Catalog from "./UI/Catalog.vue";
</script>

<template>
  <section class="catalog-page">
    <Catalog />
    <HugeBuys />
  </section>
</template>

<style lang="scss" scoped>
.catalog-page {
  @include container;
}
</style>
