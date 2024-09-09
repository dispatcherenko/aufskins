<template>
  <p class="subheader">Информация</p>
  <form class="info__form">
    <TextInput placeholder="Сумма пополнения" />
    <p class="info__sfn smallfootnote">Минимальная сумма — 100 ₽</p>
    <div class="info__buttons">
      <ButtonXS class="info__button" text="500" add="₽" />
      <ButtonXS class="info__button" text="1 000" add="₽" />
      <ButtonXS class="info__button" text="2 500" add="₽" />
      <ButtonXS class="info__button" text="5 000" add="₽" />
      <ButtonXS class="info__button" text="10 000" add="₽" />
    </div>
    <p class="body info__promo">Есть промокод?</p>
    <TextInputButton placeholder="Введите промокод" button-text="Применить" />
    <div class="info__alert">
      <p class="body">Вывод будет доступен через 7 дней после депозита</p>
      <Caution />
    </div>
    <p class="body grey">Вы получите</p>
    <div class="info__price">
      <h3>0<span class="grey"> ₽</span></h3>
      <p class="info__price-comission">Комиссия -5%</p>
    </div>
    <span class="info__policy">
      <Checkbox name="policy" id="policy" v-model="isChecked" />
      <label for="policy" class="body"
        >Я ознакомился с <a href="/errorpage">Правилами компании</a></label
      >
    </span>
    <ButtonForm
      class="info__confirm"
      text="Перейти к оплате"
      :disabled="!isChecked"
    />
  </form>
</template>

<script setup>
import ButtonForm from "@/shared/UI/Buttons/ButtonForm.vue";
import ButtonXS from "@/shared/UI/Buttons/ButtonXS.vue";
import Checkbox from "@/shared/UI/Checkbox/Checkbox.vue";
import TextInput from "@/shared/UI/Inputs/TextInput.vue";
import TextInputButton from "@/shared/UI/Inputs/TextInputButton.vue";

import { ref } from "vue";

const isChecked = ref(false);
</script>

<style lang="scss" scoped>
@import "../style.scss";
</style>
