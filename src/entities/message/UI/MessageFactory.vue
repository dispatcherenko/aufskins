<script setup lang="ts">
import Incoming from "./Incoming.vue";
import Outcoming from "./Outcoming.vue";

const props = defineProps({
  type: {
    type: String,
    default: "incoming",
  },
  nickname: String,
  time: String,
  message: String,
  status: String,
});
</script>

<template>
  <Incoming
    :nickname="nickname"
    :time="time"
    :message="message"
    :status="status"
    v-if="type === 'incoming'"
  />
  <Outcoming :time="time" :message="message" v-if="type === 'outcoming'" />
</template>
