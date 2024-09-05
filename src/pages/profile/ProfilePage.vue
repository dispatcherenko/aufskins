<template>
  <section class="main">
    <MainContainer />
    <HugeBuys />
  </section>
</template>

<script setup>
import HugeBuys from "@/widgets/HugeBuys/HugeBuys.vue";
import MainContainer from "./UI/MainContainer.vue";
</script>

<style lang="scss">
.main {
  @include container;
}
</style>
