<template>
  <section class="profile">
    <Level />
    <Wallet />
    <Settings />
    <Story />
  </section>
</template>

<script setup>
import Level from "./UI/Level.vue";
import Settings from "./UI/Settings.vue";
import Story from "./UI/Story.vue";
import Wallet from "./UI/Wallet.vue";
</script>

<style lang="scss" scoped>
.profile {
  display: flex;
  flex-direction: column;
  gap: 48px;
}
</style>
