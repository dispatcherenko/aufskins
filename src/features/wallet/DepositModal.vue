<template>
  <Modal :is-open="modalStore.isOpen" :close="modalStore.closeModal">
    <div class="deposit">
      <a class="exit" @click="modalStore.closeModal">
        <Exit class="cross" />
      </a>
      <div class="deposit__options options">
        <p class="subheader">Способ пополнения</p>
        <div class="options__cards">
          <PaymentMethod
            title="Банковская карта"
            text="Ничего особенного: быстро, удобно, с любой российской карты"
            :img="card"
            @click="changeOption('card')"
            :is-selected="options.card"
          />
          <PaymentMethod
            title="Tether USD"
            add="(TRC20)"
            text="Для тех, кто вовремя вложился в Биткоин"
            :img="bitcoin"
            @click="changeOption('tether')"
            :is-selected="options.tether"
          />
          <PaymentMethod
            title="СБП"
            text="Прямой перевод по номеру телефона"
            :img="spb"
            @click="changeOption('sbp')"
            :is-selected="options.sbp"
          />
          <PaymentMethod
            title="Юмани"
            text="Если онлайн-кошелек удобнее, чем банковская карта"
            :img="wallet"
            @click="changeOption('wallet')"
            :is-selected="options.wallet"
          />
        </div>
      </div>
      <div class="deposit__info info">
        <Card v-if="options.card" />
      </div>
    </div>
  </Modal>
</template>

<script setup>
import card from "@/assets/payment/card.svg?url";
import bitcoin from "@/assets/payment/bitcoin.svg?url";
import spb from "@/assets/payment/sbp.svg?url";
import wallet from "@/assets/payment/wallet.svg?url";
import Exit from "@/assets/icons/exit.svg?component";
import PaymentMethod from "@/shared/UI/Menu/PaymentMethod.vue";
import Modal from "@/shared/UI/Modal/Modal.vue";
import { useDepositModalStore } from "@/features/wallet/store/index.js";
import { ref } from "vue";
import Card from "./UI/Deposit/Card.vue";

const modalStore = useDepositModalStore();

const options = ref({
  card: true,
  tether: false,
  sbp: false,
  wallet: false,
});

const changeOption = (newOption) => {
  options.value = {
    card: false,
    tether: false,
    sbp: false,
    wallet: false,
  };
  options.value[newOption] = true;
};
</script>

<style lang="scss" scoped>
@import "./UI/style.scss";
.deposit {
  position: relative;
  display: grid;
  grid-template-columns: 426px 560px;

  @media (max-width: 1280px) {
    grid-template-columns: none;
    grid-template-rows: auto auto;

    width: 728px;
  }

  @media (max-width: 768px) {
    width: 95vw;
    grid-template-rows: auto auto;
  }
}

.exit {
  position: absolute;
  top: 28px;
  right: 28px;
  background: transparent;
  border: none;
  width: 16px;
  height: 16px;
  padding: 0;
}

.cross {
  color: #ffffff80;
  transition: all 0.2s;

  &:hover {
    color: #c41341;
  }
}

.options {
  display: flex;
  flex-direction: column;
  gap: 46px;
  background-color: #171424;
  padding: 24px;

  &__cards {
    display: flex;
    flex-direction: column;
    gap: 12px;
    height: 100%;
  }

  @media (max-width: 1280px) {
    gap: 20px;
    padding: 16px;
    height: 190px;

    &__cards {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(165px, 1fr));
      gap: 12px;
    }
  }

  @media (max-width: 768px) {
    height: 100%;

    &__cards {
      display: grid;
      grid-template-rows: auto auto;
      grid-template-columns: auto auto;
      gap: 12px;
    }
  }
}
</style>
