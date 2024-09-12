<script setup lang="ts">
import Modal from "@/shared/UI/Modal/Modal.vue";
import Order from "@/assets/icons/order.svg?component";
import Button2 from "@/shared/UI/Buttons/Button2.vue";

import { useSuccessModalStore } from "../store";
const modalStore = useSuccessModalStore();

import { useRouter } from "vue-router";
const router = useRouter();
</script>

<template>
  <Modal :is-open="modalStore.isOpen" :close="modalStore.closeModal">
    <div class="success">
      <Order class="success__icon" />
      <div class="success__textfield">
        <p class="subheader">Предметы выставлены на продажу</p>
        <p class="footnote">
          Осталось дождаться, пока покупатель выберет ваши предметы. У вас будет
          30 минут, чтобы создать обмен в Steam, прежде чем он будет
          автоматически отменен.
        </p>
      </div>
      <Button2
        class="success__button"
        text="В историю сделок"
        :click="() => modalStore.goto(router)"
      />
    </div>
  </Modal>
</template>

<style lang="scss" scoped>
.success {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 32px;
  padding: 20px;
  width: 480px;
  height: 448px;

  &__icon {
    margin-top: calc(32px + 16px);
    align-self: center;
  }

  &__textfield {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__button {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 350px;
    height: 472px;

    gap: 16px;

    &__icon {
      margin-top: 32px;
      align-self: center;
    }
  }
}
</style>
