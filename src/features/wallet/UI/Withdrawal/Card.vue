<template>
  <p class="subheader">Данные</p>
  <form class="info__form">
    <div class="info__upper">
      <div class="field">
        <TextInput type="number" placeholder="Номер карты" class="number" />
        <TextInput type="text" placeholder="Срок действия" class="date" />
      </div>
      <TextInput placeholder="Владелец карты" />
      <div class="">
        <div class="info__upper-field">
          <TextInputButton
            style="width: 100%"
            class="info__upper-input"
            placeholder="Сумма вывода"
            button-text="Максимум"
            type="number"
          />
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
import Button2 from "@/shared/UI/Buttons/Button2.vue";
import ButtonForm from "@/shared/UI/Buttons/ButtonForm.vue";
import Checkbox from "@/shared/UI/Checkbox/Checkbox.vue";
import TextInput from "@/shared/UI/Inputs/TextInput.vue";
import TextInputButton from "@/shared/UI/Inputs/TextInputButton.vue";

import { ref } from "vue";

const isChecked = ref(false);
</script>

<style lang="scss" scoped>
@import "../style.scss";

.field {
  display: grid;
  grid-template-columns: auto 176px;
  gap: 24px;
}
.number {
  width: 100%;
}
.date {
  width: 176px;
}

@media (max-width: 768px) {
  .field {
    display: flex;
    flex-direction: column;
  }
  .date {
    width: 100%;
  }
}
</style>
