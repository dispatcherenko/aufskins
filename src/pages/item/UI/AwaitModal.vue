<template>
  <Modal :is-open="modalStore.isOpen" :close="modalStore.closeModal">
    <div class="container">
      <Clock />
      <div class="container__text">
        <p class="subHeader">Ожидайте предложения обмена</p>
        <p class="body grey">
          У продавца есть 12 часов, чтобы отправить вам обмен в Steam. Если вы
          не получите предмет, то мы вернем полную сумму покупки на ваш кошелек
        </p>
      </div>
      <Button2 class="container__button" text="В историю сделок" />
    </div>
  </Modal>
</template>

<script setup>
import Clock from "@/assets/icons/clock.svg?component";
import Modal from "@/shared/UI/Modal/Modal.vue";
import { useAwaitModal } from "../store";
import Button2 from "@/shared/UI/Buttons/Button2.vue";
const modalStore = useAwaitModal();
</script>

<style lang="scss" scoped>
.container {
  width: 480px;
  height: 448px;
  padding: 68px 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  &__text {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__button {
    width: 100%;
  }
}
</style>
