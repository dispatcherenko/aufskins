<script setup>
import ButtonRound from "@/shared/UI/Buttons/ButtonRound.vue";
import chat from "@/assets/icons/chat.svg";

import { useChatStore } from "./store";
const chatStore = useChatStore();
</script>

<template><ButtonRound :img="chat" @click="chatStore.openMenu" /></template>
