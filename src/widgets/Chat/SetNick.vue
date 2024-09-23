<script setup>
import Button2 from "@/shared/UI/Buttons/Button2.vue";
import TextInput from "@/shared/UI/Inputs/TextInput.vue";
import ModalBottom from "@/shared/UI/Modal/ModalBottom.vue";
import { useChatStore } from "./store";

const chatStore = useChatStore();
</script>

<template>
  <ModalBottom :is-open="chatStore.isSetting" :close="chatStore.closeSettings">
    <div class="setting">
      <h4>Ник в чате</h4>
      <TextInput placeholder="Введите ник" />
      <Button2 text="Сохранить ник" @click="chatStore.closeSettings" />
    </div>
  </ModalBottom>
</template>

<style lang="scss" scoped>
.setting {
  width: 100vw;
  max-width: 768px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  a {
    width: 100%;
  }
}
</style>
