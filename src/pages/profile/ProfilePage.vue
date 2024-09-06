<template>
  <section class="main">
    <ChatButton class="chat" />
    <MainContainer />
    <HugeBuys />
  </section>
</template>

<script setup>
import HugeBuys from "@/widgets/HugeBuys/HugeBuys.vue";
import MainContainer from "./UI/MainContainer.vue";
import ChatButton from "@/widgets/ChatButton/ChatButton.vue";
</script>

<style lang="scss">
.main {
  @include container;
}
.chat {
  display: block;
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 1;
}

@media (max-width: 1100px) {
  .chat {
    display: none;
  }
}
</style>
