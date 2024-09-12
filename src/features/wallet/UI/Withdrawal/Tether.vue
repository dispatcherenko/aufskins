<template>
  <p class="subheader">Информация</p>
  <form class="info__form">
    <div class="info__upper">
      <TextInput placeholder="Адрес кошелька TRC20" />
      <div class="info__alert">
        <p class="body">
          Средства будут утеряны в случае вывода на неправильный адрес кошелька
        </p>
        <Caution />
      </div>
      <div class="">
        <div class="info__upper-field">
          <TextInputButton
            class="info__upper-input"
            placeholder="Сумма вывода"
            button-text="Максимум"
            type="number"
          />
          <span class="info__currency">
            <Exchange />
            <p class="body">
              1 <span>USDT</span> = 84
              <span>₽</span>
            </p>
          </span>
        </div>
        <p class="info__sfn smallfootnote">Ваш баланс: 5 678 ₽</p>
      </div>
    </div>
    <div class="info__lower">
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
      <Button2
        class="info__confirm"
        text="Запросить вывод"
        :disabled="!isChecked"
      />
    </div>
  </form>
</template>

<script setup>
import ButtonForm from "@/shared/UI/Buttons/ButtonForm.vue";
import Checkbox from "@/shared/UI/Checkbox/Checkbox.vue";
import TextInput from "@/shared/UI/Inputs/TextInput.vue";
import TextInputButton from "@/shared/UI/Inputs/TextInputButton.vue";

import Caution from "@/assets/icons/caution.svg?component";
import Exchange from "@/assets/icons/exchange.svg?component";

import { ref } from "vue";
import Button2 from "@/shared/UI/Buttons/Button2.vue";

const isChecked = ref(false);
</script>

<style lang="scss" scoped>
@import "../style.scss";
</style>
