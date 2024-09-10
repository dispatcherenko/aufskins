<template>
  <div class="wallet">
    <h3 class="wallet__title">Кошелек</h3>
    <div class="wallet__container">
      <div class="wallet__left">
        <div class="wallet__balance">
          <p class="wallet__balance-title">Баланс</p>
          <h3 class="wallet__balance-text">15 320 ₽</h3>
        </div>
        <div class="wallet__balance">
          <p class="wallet__balance-title">Заморожено</p>
          <span class="wallet__balance-w-icon">
            <img class="wallet__balance-icon" :src="lock" alt="lock" />
            <h3 class="wallet__balance-text">7 000 ₽</h3>
          </span>
        </div>
      </div>
      <div class="wallet__right">
        <Button2
          class="wallet__btn-red"
          :img="wallet"
          text="Пополнить"
          :onclick="depositModal.openModal"
        />
        <Button2
          class="wallet__btn-black"
          text="Вывести"
          :onclick="withdrawalModal.openModal"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import lock from "./lock.svg";
import Button2 from "@/shared/UI/Buttons/Button2.vue";
import wallet from "@/assets/menu/wallet_white.svg";

import { useDepositModalStore } from "@/features/wallet/store";
import { useWithdrawalModalStore } from "@/features/wallet/store";

const depositModal = useDepositModalStore();
const withdrawalModal = useWithdrawalModalStore();
</script>

<style lang="scss" scoped>
.wallet {
  display: flex;
  flex-direction: column;
  gap: 26px;

  &__container {
    background-color: #171424;
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__left,
  &__right {
    margin: 0 20px;
    display: flex;
    align-items: center;
  }

  &__left {
    gap: 48px;
  }

  &__right {
    gap: 17px;
  }

  &__balance {
    display: flex;
    flex-direction: column;
    gap: 5px;

    &-title {
      font-family: Geometria;
      font-size: 16px;
      font-weight: 500;
      line-height: 20px;
      text-align: left;
      color: #ffffff80;
    }

    &-text {
      //styleName: desktop/h3;
      font-family: Geometria;
      font-size: 28px;
      font-weight: 700;
      line-height: 34px;
      letter-spacing: -0.5px;
      text-align: left;
    }

    &-w-icon {
      display: flex;
      align-items: center;
    }

    &-icon {
      margin-right: 12px;
    }
  }

  &__btn-red {
    width: 162px;
    height: 48px;
    display: flex;
    gap: 10px;
  }

  &__btn-black {
    background-color: #231f36;
    display: flex;
    width: 109px;
    height: 48px;
    gap: 0;
  }

  @media (max-width: 943px) {
    &__container {
      gap: 16px;
    }
    &__btn-red {
      width: 100%;
      max-width: 240px;
    }
    &__left {
      margin: 0;
      margin-left: 16px;
      max-width: 302px;
      width: 100%;
    }
    &__right {
      margin: 0;
      max-width: 370px;
      width: 100%;
      margin-right: 16px;

      justify-content: space-between;
    }
  }

  @media (max-width: 709px) {
    &__container {
      flex-direction: column;
      height: 100%;
      padding-top: 16px;
      padding-bottom: 16px;
      padding-left: 16px;
      padding-right: 16px;
    }
    &__left {
      margin: 0;
      max-width: none;
    }
    &__right {
      margin: 0;
      gap: 17px;
      max-width: none;
    }

    &__btn-black {
      min-width: 109px;
    }
  }

  @media (max-width: 453px) {
    &__btn-red {
      max-width: none;
    }
  }
}
</style>
