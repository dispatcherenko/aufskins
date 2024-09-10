<template>
  <div class="card">
    <div class="card__left">
      <img :src="path" alt="icon" />
      <div class="card__textfield">
        <p class="body">{{ title }}</p>
        <p class="footnote">
          {{ text }}
        </p>
      </div>
    </div>
    <div class="card__right">
      <p class="footnote">{{ date }}</p>
      <p class="footnote">&nbsp;·&nbsp;</p>
      <p class="footnote">{{ time }}</p>
    </div>
  </div>
</template>

<script setup>
import autoBot from "@/assets/notification-icons/autoBot.svg?url";
import deposit from "@/assets/notification-icons/deposit.svg?url";
import down from "@/assets/notification-icons/down.svg?url";
import levelUp from "@/assets/notification-icons/levelUp.svg?url";
import sale from "@/assets/notification-icons/sale.svg?url";
import system from "@/assets/notification-icons/system.svg?url";
import { onMounted, ref } from "vue";

const iconMap = { autoBot, deposit, down, levelUp, sale, system };

const props = defineProps({
  type: {
    type: String,
    default: "system",
  },
  title: String,
  text: String,
  date: String,
  time: String,
});

let path = ref("system");

onMounted(() => {
  path.value = iconMap[props.type] || iconMap.system;
});
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  height: 84px;
  background-color: #171424;
  border-radius: 2px;
  display: flex;
  justify-content: space-between;
  padding: 20px;

  &__left {
    display: flex;
    gap: 20px;
    align-items: center;
    height: 100%;
  }

  &__right {
    display: flex;
    align-items: center;
  }

  &__textfield {
    max-width: 636px;
    max-height: 60px;

    overflow: hidden;
  }

  @media (max-width: 900px) {
    padding: 12px;
    gap: 12px;
    flex-direction: column;
    height: 100%;

    &__right {
      display: flex;
      width: 100%;
      justify-content: end;
    }

    &__textfield {
      max-height: 96px;
      max-width: none;
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: 768px) {
    &__left {
      gap: 16px;

      img {
        width: 32px;
        height: 32px;
      }
    }
  }
}
</style>
