<template>
  <p class="subheader">Информация</p>
  <form class="info__form">
    <TextInput
      type="number"
      placeholder="Сумма пополнения"
      v-model="modalStore.amount"
    />
    <p class="info__sfn smallfootnote">Минимальная сумма — 100 ₽</p>
    <div class="info__buttons">
      <ButtonXS
        class="info__button"
        text="500"
        add="₽"
        @click="modalStore.add(500)"
      />
      <ButtonXS
        class="info__button"
        text="1 000"
        add="₽"
        @click="modalStore.add(1000)"
      />
      <ButtonXS
        class="info__button"
        text="2 500"
        add="₽"
        @click="modalStore.add(2500)"
      />
      <ButtonXS
        class="info__button"
        text="5 000"
        add="₽"
        @click="modalStore.add(5000)"
      />
      <ButtonXS
        class="info__button"
        text="10 000"
        add="₽"
        @click="modalStore.add(10000)"
      />
    </div>
    <p class="body info__promo">Есть промокод?</p>
    <TextInputButton
      class="info__promo-field"
      placeholder="Введите промокод"
      button-text="Применить"
    />
    <div class="info__alert">
      <p class="body">Вывод будет доступен через 7 дней после депозита</p>
      <Caution />
    </div>
    <p class="body grey info__price-title">Вы получите</p>
    <div class="info__price">
      <h3>{{ modalStore.final }}<span class="grey"> ₽</span></h3>
      <p class="info__price-comission">Комиссия -5%</p>
    </div>
    <span class="info__policy">
      <Checkbox name="policy" id="policy" v-model="modalStore.isConfirmed" />
      <label for="policy" class="body"
        >Я ознакомился с <a href="/errorpage">Правилами компании</a></label
      >
    </span>
    <Button2
      class="info__confirm"
      text="Перейти к оплате"
      :disabled="!modalStore.isConfirmed || modalStore.amount <= 100"
      :click="modalStore.goto"
    />
  </form>
</template>

<script setup>
import ButtonForm from "@/shared/UI/Buttons/ButtonForm.vue";
import ButtonXS from "@/shared/UI/Buttons/ButtonXS.vue";
import Checkbox from "@/shared/UI/Checkbox/Checkbox.vue";
import TextInput from "@/shared/UI/Inputs/TextInput.vue";
import TextInputButton from "@/shared/UI/Inputs/TextInputButton.vue";
import Caution from "@/assets/icons/caution.svg?component";

import { useDepositModalStore } from "../../store";
import Button2 from "@/shared/UI/Buttons/Button2.vue";
const modalStore = useDepositModalStore();
</script>

<style lang="scss" scoped>
@import "../style.scss";
</style>
