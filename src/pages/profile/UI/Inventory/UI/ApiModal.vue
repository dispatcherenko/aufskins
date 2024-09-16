<script setup lang="ts">
import Modal from "@/shared/UI/Modal/Modal.vue";
import TextInput from "@/shared/UI/Inputs/TextInput.vue";
import Key from "@/assets/icons/graphics.svg?component";

import link from "@/assets/icons/link.svg?url";

import { useAPIModalStore } from "../store";
import Button2 from "@/shared/UI/Buttons/Button2.vue";
const modalStore = useAPIModalStore();
</script>

<template>
  <Modal :is-open="modalStore.isOpen" :close="modalStore.closeModal">
    <div class="api">
      <div class="api__icon"><Key /></div>
      <div class="api__textfield">
        <p class="subheader">Введите API-ключ Steam</p>
        <p class="body grey">
          API-ключ позволяет управлять вашими сделками на AUF Skins. Мы надежно
          храним ваш API-ключ
        </p>
      </div>
      <TextInput placeholder="API-ключ Steam" />
      <div class="api__buttons">
        <Button2 class="api__button" text="Получить ключ в Steam" :img="link" />
        <Button2
          class="api__button api__button--grey"
          text="Применить"
          @click="modalStore.confirm"
        />
      </div>
    </div>
  </Modal>
</template>

<style lang="scss" scoped>
.api {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 32px;

  width: 480px;
  height: 572px;

  &__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: calc(32px + 16px);
  }

  &__textfield {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__buttons {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__button {
    height: 48px;
    width: 100%;

    &--grey {
      background-color: #ffffff1a;
    }
  }

  @media (max-width: 768px) {
    width: 350px;
    height: 532px;
    gap: 16px;

    &__icon {
      margin-top: calc(16px + 16px);
    }
  }
}
</style>
