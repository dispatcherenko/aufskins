<template>
  <div class="notifications">
    <div class="notifications__header">
      <h3>Уведомления</h3>
      <Button2 class="notifications__header-button" text="Очистить" />
    </div>
    <div class="notifications__wrapper">
      <div
        class=""
        v-for="notification in paginatedNotifications"
        :key="notification.title"
      >
        <GeneralNotification
          :type="notification.type"
          :title="notification.title"
          :text="notification.text"
          :date="notification.date"
          :time="notification.time"
        />
      </div>
    </div>
    <div class="pagination">
      <a class="page-link" :class="{ disabled: isFirstPage }" @click="prev"
        ><Left
      /></a>
      <a
        class="page-link"
        v-for="item in pageCount"
        :key="item"
        :class="{ active: currentPage === item }"
        @click="currentPage = item"
      >
        {{ item }}
      </a>
      <a class="page-link" :class="{ disabled: isLastPage }" @click="next"
        ><Right
      /></a>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import Button2 from "@/shared/UI/Buttons/Button2.vue";
import GeneralNotification from "@/shared/UI/Notifications/GeneralNotification.vue";
import { useOffsetPagination } from "@vueuse/core";

import Left from "@/assets/control/leftarrow-s.svg?component";
import Right from "@/assets/control/rightarrow-s.svg?component";

const currentPage = ref(1);
const itemsPerPage = 7;

const notifications = [
  {
    title: "Вход с нового устройства",
    text: "Текст уведомления, который может занимать две строчки полного текста. Здесь может быть любая информация о проданных товарах и так далее",
    date: "20.03.2024",
    time: "16:53",
  },
  {
    type: "autoBot",
    title: "Покупка авто-ботом выполнена",
    text: "Текст уведомления, который может занимать две строчки полного текста. Здесь может быть любая информация о проданных товарах и так далее",
    date: "20.03.2024",
    time: "16:53",
  },
  {
    type: "sale",
    title: "Поздравляем с продажей",
    text: "Текст уведомления, который может занимать две строчки полного текста. Здесь может быть любая информация о проданных товарах и так далее",
    date: "20.03.2024",
    time: "16:53",
  },
  {
    type: "down",
    title: "Цена на товар снизилась",
    text: "Текст уведомления, который может занимать две строчки полного текста. Здесь может быть любая информация о проданных товарах и так далее",
    date: "20.03.2024",
    time: "16:53",
  },
  {
    type: "sale",
    title: "Поздравляем с продажей",
    text: "Текст уведомления, который может занимать две строчки полного текста. Здесь может быть любая информация о проданных товарах и так далее",
    date: "20.03.2024",
    time: "16:53",
  },
  {
    type: "levelUp",
    title: "Ваш уровень повышен",
    text: "Текст уведомления, который может занимать две строчки полного текста. Здесь может быть любая информация о проданных товарах и так далее",
    date: "20.03.2024",
    time: "16:53",
  },
  {
    type: "sale",
    title: "Поздравляем с продажей",
    text: "Текст уведомления, который может занимать две строчки полного текста. Здесь может быть любая информация о проданных товарах и так далее",
    date: "20.03.2024",
    time: "16:53",
  },
  {
    title: "Вход с нового устройства",
    text: "Текст уведомления, который может занимать две строчки полного текста. Здесь может быть любая информация о проданных товарах и так далее",
    date: "20.03.2024",
    time: "16:53",
  },
];

const { next, prev, pageCount, isFirstPage, isLastPage } = useOffsetPagination({
  total: notifications.length,
  page: currentPage,
  pageSize: itemsPerPage,
});

const paginatedNotifications = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return notifications.slice(start, end);
});
</script>

<style lang="scss" scoped>
.notifications {
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;

  &__header {
    display: flex;
    justify-content: space-between;

    &-button {
      background-color: #231f36;
      width: 116px;
      height: 48px;
      gap: 0;
    }
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 12px;
    height: 688px;
  }

  @media (max-width: 1280px) {
    height: 100%;

    &__wrapper {
      height: 100%;
    }
  }
}
</style>
