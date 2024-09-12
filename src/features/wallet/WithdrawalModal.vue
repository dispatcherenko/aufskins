<template>
  <Modal :is-open="modalStore.isOpen" :close="modalStore.closeModal">
    <div class="withdrawal">
      <div class="withdrawal__options options">
        <p class="subheader">Способ вывода</p>
        <div class="options__cards">
          <PaymentMethod
            class="options__gt-up"
            :is-selected="options.card"
            title="Банковская карта"
            text="Ничего особенного: быстро, удобно, с любой российской карты"
            :img="card"
            :img-off="cardOff"
            @click="changeOption('card')"
          />
          <PaymentMethod
            class="options__gt-down1"
            :is-selected="options.tether"
            title="Tether USD"
            add="(TRC20)"
            text="Для тех, кто вовремя вложился в Биткоин"
            :img="bitcoin"
            :img-off="bitcoinOff"
            @click="changeOption('tether')"
          />
          <PaymentMethod
            class="options__gt-down2"
            :is-selected="options.wallet"
            title="Юмани"
            text="Если онлайн-кошелек удобнее, чем банковская карта"
            :img="wallet"
            :img-off="walletOff"
            @click="changeOption('wallet')"
          />
        </div>
      </div>
      <div class="withdrawal__info info">
        <Card v-if="options.card" />
        <Tether v-if="options.tether" />
        <Wallet v-if="options.wallet" />
      </div>
    </div>
  </Modal>
</template>

<script setup>
import card from "@/assets/payment/card.svg?url";
import bitcoin from "@/assets/payment/bitcoin.svg?url";
import wallet from "@/assets/payment/wallet.svg?url";

import cardOff from "@/assets/payment/card-off.svg?url";
import bitcoinOff from "@/assets/payment/bitcoin-off.svg?url";
import walletOff from "@/assets/payment/wallet-off.svg?url";

import { useWithdrawalModalStore } from "@/features/wallet/store/index.js";
import PaymentMethod from "@/shared/UI/Menu/PaymentMethod.vue";
import Modal from "@/shared/UI/Modal/Modal.vue";
import Exit from "@/assets/icons/exit.svg?component";
import { ref } from "vue";
import Tether from "./UI/Withdrawal/Tether.vue";
import Card from "./UI/Withdrawal/Card.vue";
import Wallet from "./UI/Withdrawal/Wallet.vue";

const modalStore = useWithdrawalModalStore();

const options = ref({
  card: true,
  tether: false,
  wallet: false,
});

const changeOption = (newOption) => {
  options.value = {
    card: false,
    tether: false,
    wallet: false,
  };
  options.value[newOption] = true;
};
</script>

<style lang="scss" scoped>
@import "./UI/style.scss";
.withdrawal {
  position: relative;
  display: grid;
  grid-template-columns: 426px 560px;
  overflow-y: auto;

  @media (max-width: 1280px) {
    grid-template-columns: none;
    grid-template-rows: auto auto;
    max-height: 90vh;
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

  @media (max-width: 1280px) {
    top: 16px;
    right: 16px;
  }
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
  height: 610px;

  &__cards {
    display: flex;
    height: 100%;
    flex-direction: column;
    gap: 12px;
  }

  @media (max-width: 1280px) {
    gap: 20px;
    padding: 16px;
    height: 190px;

    &__cards {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
      gap: 12px;
    }
  }

  @media (max-width: 768px) {
    height: 100%;

    &__cards {
      display: grid;
      grid-template-areas:
        "up up"
        "down1 down2";
      grid-template-rows: 47% 47%;
      grid-template-columns: 48.5% 48.5%;
      gap: 12px;
    }

    &__gt-up {
      grid-area: up;
    }

    &__gt-down1 {
      grid-area: down1;
    }

    &__gt-down2 {
      grid-area: down2;
    }
  }
}
</style>
