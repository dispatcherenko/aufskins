<script setup lang="ts">
import Modal from "@/shared/UI/Modal/Modal.vue";
import qr from "./qr-code 1.svg?url";
import TextInputButton from "@/shared/UI/Inputs/TextInputButton.vue";
import { useQRModalStore } from "../../store";
const modalStore = useQRModalStore();
</script>

<template>
  <Modal :is-open="modalStore.isOpen" :close="modalStore.closeModal">
    <div class="walletqr">
      <p class="subheader">Пополнение через USDT</p>
      <div class="walletqr__center">
        <img :src="qr" class="walletqr__qr" height="164" width="164" />
        <div class="footnote">
          Это ваш личный адрес для пополнения счета. Все транзакции, которые вы
          совершаете на этот адрес, будут отображены на вашем балансе после 1
          подтверждения. Пожалуйста, обратите внимание на указанный минимальный
          лимит пополнения, так как депозиты ниже этого лимита не могут быть
          обработаны.
        </div>
      </div>
      <span class="divider"></span>
      <TextInputButton
        placeholder="Адрес для пополнения"
        button-text="Скопировать"
      />
    </div>
  </Modal>
</template>

<style lang="scss" scoped>
.walletqr {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  width: 578px;
  height: 372px;

  &__center {
    display: flex;
    gap: 24px;
  }

  @media (max-width: 768px) {
    width: 350px;
    height: 516px;

    &__center {
      flex-direction: column;
    }
  }
}
</style>
