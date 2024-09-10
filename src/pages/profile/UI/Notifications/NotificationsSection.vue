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
    <paginate
      :page-count="pageCount"
      :page-range="3"
      :margin-pages="2"
      :click-handler="changePage"
      :prev-text="`<img src='src/assets/control/leftarrow-s.svg' alt='Previous' />`"
      :next-text="`<img src='src/assets/control/rightarrow-s.svg' alt='Next' />`"
      :container-class="'pagination'"
      :page-class="'page-item'"
    >
    </paginate>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import Button2 from "@/shared/UI/Buttons/Button2.vue";
import GeneralNotification from "@/shared/UI/Notifications/GeneralNotification.vue";
import Paginate from "vuejs-paginate-next";

import Left from "@/assets/control/leftarrow.svg?component";
import Right from "@/assets/control/rightarrow.svg?component";

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

const paginatedNotifications = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return notifications.slice(start, end);
});

const pageCount = computed(() => {
  return Math.ceil(notifications.length / itemsPerPage);
});

const changePage = (pageNum) => {
  currentPage.value = pageNum;
};
</script>

<style lang="scss" scoped>
.notifications {
  display: flex;
  flex-direction: column;
  gap: 20px;

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
  }

  @media (max-width: 1280px) {
    &__wrapper {
    }
  }
}
</style>
