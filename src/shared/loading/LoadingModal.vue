<script setup>
import Modal from "@/shared/UI/Modal/Modal.vue";
import Spinner from "@/shared/UI/Spinner/Spinner.vue";
import { useLoadingModal } from "@/shared/loading/store";
const modalStore = useLoadingModal();
</script>

<template>
  <Modal :is-open="modalStore.isOpen" :closable="false">
    <div class="container">
      <Spinner class="container__spinner" />
      <div class="container__text">
        <h4>Обрабатываем запрос</h4>
        <p class="body grey">Пожалуйста, подождите</p>
      </div>
    </div>
  </Modal>
</template>

<style lang="scss" scoped>
.container {
  width: 421px;
  height: 286px;

  display: flex;
  flex-direction: column;
  padding: 72px 55px;

  &__text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
}
</style>
