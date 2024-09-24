<template>
  <Modal :is-open="modalStore.isOpen" :close="modalStore.closeModal">
    <div class="container">
      <div class="container__upper">
        <div class="container__content">
          <p class="subHeader">Подтвердите покупку</p>
          <ol class="container__text body grey">
            <li>
              После подтверждения данной операции с вашего баланса будет списана
              сумма, равная стоимости товара, и будет заморожена на 5 минут. Это
              необходимо для того, чтобы все участники транзакции успели
              подтвердить обмен.
            </li>
            <li>
              Если продавец не успел подтвердить обмен, деньги будут возвращены
              на ваш счет через 5 минут после подтверждения данной операции.
            </li>
            <li>
              После того, как продавец подтвердит обмен, вам необходимо принять
              его в течение 5 минут. Если вы отклоните или не примете слишком
              много обменов, сайт временно ограничит вашу возможность совершать
              покупки.
            </li>
          </ol>
        </div>
        <div class="container__checkbox">
          <Checkbox v-model="modalStore.confirmed" name="submit" id="submit" />
          <label for="submit">
            Я согласен с условиями <a href="" class="red">договора</a>
          </label>
        </div>
      </div>
      <Button2
        class="container__button"
        text="Подтвердить"
        :disabled="!modalStore.confirmed"
        @click="modalStore.submit"
      />
    </div>
  </Modal>
</template>

<script setup>
import Modal from "@/shared/UI/Modal/Modal.vue";
import { useSubmitModal } from "../store";
import Button2 from "@/shared/UI/Buttons/Button2.vue";
import Checkbox from "@/shared/UI/Checkbox/Checkbox.vue";
const modalStore = useSubmitModal();
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 48px;
  width: 548px;
  height: 530px;
  padding: 20px;

  &__upper {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__text {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-left: 17px;
  }

  &__checkbox {
    display: flex;
    gap: 16px;
    align-items: center;
  }

  &__button {
    width: 100%;
  }
}
</style>
