<template>
  <section class="profile-page">
    <ChatButton class="chat" />
    <MainContainer />
    <HugeBuys />
  </section>
</template>

<script setup>
import HugeBuys from "@/widgets/HugeBuys/HugeBuys.vue";
import MainContainer from "./UI/MainContainer.vue";
import ChatButton from "@/widgets/Chat/ChatButton.vue";

import { useUserStore } from "@/entities/user/model";
import { onMounted } from "vue";

const userStore = useUserStore();

onMounted(() => {
  userStore.logIn();
});
</script>

<style lang="scss">
.profile-page {
  @include container;
}
.chat {
  display: block;
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 100;
}

@media (max-width: 1100px) {
  .chat {
    display: none;
  }
}
</style>
