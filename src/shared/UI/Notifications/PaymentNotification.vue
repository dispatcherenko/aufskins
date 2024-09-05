<template>
  <span class="notification">
    <div class="left">
      <img v-if="type === 'refill'" :src="down" alt="arrow" class="icon" />
      <img v-if="type === 'withdrawal'" :src="up" alt="arrow" class="icon" />
      <div>
        <p v-if="type === 'refill'" class="text">Пополнение</p>
        <p v-if="type === 'withdrawal'" class="text">Вывод</p>
        <p v-if="result === 'success'" class="success">Успешно</p>
        <p v-if="result === 'error'">Ошибка</p>
      </div>
    </div>
    <div class="right">
      <p v-if="type === 'refill'" class="text--g">+ {{ amount }} ₽</p>
      <p v-if="type === 'withdrawal'" class="text--r">- {{ amount }} ₽</p>
      <p class="text">{{ date }}</p>
    </div>
  </span>
</template>

<script setup>
import down from "@/assets/icons/arrow-down.svg";
import up from "@/assets/icons/arrow-up.svg";

const props = defineProps({
  type: String,
  result: String,
  amount: Number,
  date: String,
});
</script>

<style lang="scss" scoped>
.notification {
  height: 70px;
  width: 100%;
  background-color: #171424;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  border-radius: 2px;
}
.left {
  display: flex;
  gap: 20px;
}
.right {
  display: flex;
  gap: 48px;
}
.icon {
  width: 24px;
  height: 24px;
  margin: auto;
}
.text {
  //styleName: desktop/body;
  font-family: Geometria;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;

  &--g {
    color: #3bc76b;
  }

  &--red {
    color: #c41341;
  }
}
.success {
  width: 69px;
  //styleName: desktop/smallFootnote;
  font-family: Geometria;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  text-align: center;
  text-align: center;
  color: #3bc76b;
  background-color: #3bc76b4d;
  border-radius: 2px;
}
</style>
