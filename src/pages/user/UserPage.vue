<template>
  <section class="user-page">
    <ChatButton class="chat" />
    <UserContainer />
    <HugeBuys />
  </section>
</template>

<script setup>
import ChatButton from "@/widgets/Chat/ChatButton.vue";
import HugeBuys from "@/widgets/HugeBuys/HugeBuys.vue";
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import UserContainer from "./UI/UserContainer.vue";

const props = defineProps({
  login: {
    type: String,
    required: true,
  },
});

const router = useRouter();

// Здесь проверка существования логина
onMounted(() => {
  if (props.login !== "login") router.push({ name: "errorpage" });
});
</script>

<style lang="scss">
.user-page {
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
