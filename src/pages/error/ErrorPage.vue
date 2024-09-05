<script setup lang="ts">
import Button2 from "@/shared/UI/Buttons/Button2.vue";

const buttonAction = () => {};
</script>

<template>
  <div class="error">
    <img src="./graphics.svg" alt="err" />
    <h4 class="title">Страница не найдена</h4>
    <p class="text">
      Обычно это происходит из-за неправильной или устаревшей ссылки
    </p>
    <Button2 :onclick="buttonAction" text="В каталог" class="button" />
  </div>
</template>

<style lang="css" scoped>
.error {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
img {
  margin: 32px;
}
.title {
  margin: 12px;
}
.text {
  margin-bottom: 32px;
  max-width: 366px;
  text-align: center;
  color: #ffffff80;
}
.button {
  width: 366px;
}
@media (max-width: 768px) {
  .button,
  .text {
    width: 354px;
  }
}
</style>
