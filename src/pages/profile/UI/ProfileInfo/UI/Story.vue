<template>
  <div class="story">
    <h3 class="story__title">История операций</h3>
    <div class="story__container">
      <div class="story__header">
        <div class="story__stats">
          <div class="stat">
            <img :src="deposit" alt="deposit" />
            <div>
              <p class="stat__title">Пополнено</p>
              <p lass="stat__price">6 238 ₽</p>
            </div>
          </div>
          <div class="stat">
            <img :src="send" alt="send" />
            <div>
              <p class="stat__title">Выведено</p>
              <p lass="stat__price">7 489 ₽</p>
            </div>
          </div>
        </div>
        <div class="story__filter">
          <Dropdown
            class="story__dropdown"
            :options="options"
            :selected="selected"
            @update:selected="updateSelected"
          />
        </div>
      </div>
      <div class="story__payments">
        <PaymentNotification
          type="deposit"
          result="success"
          amount="400"
          date="20.03.2024 · 16:53"
        />
        <PaymentNotification
          type="withdrawal"
          result="success"
          amount="500"
          date="20.03.2024 · 15:33"
        />
        <PaymentNotification
          type="withdrawal"
          result="success"
          amount="8000"
          date="19.03.2024 · 20:07"
        />
        <PaymentNotification
          type="deposit"
          result="success"
          amount="400"
          date="19.03.2024 · 20:07"
        />
        <PaymentNotification
          type="deposit"
          result="success"
          amount="15000"
          date="17.03.2024 · 12:49"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import PaymentNotification from "@/shared/UI/Notifications/PaymentNotification.vue";
import deposit from "@/assets/icons/deposits.svg";
import send from "@/assets/icons/card-send.svg";
import Dropdown from "@/shared/UI/Select/Dropdown.vue";
import { ref } from "vue";

const options = [
  { name: "Все транзакции", id: "all" },
  { name: "Пополнения", id: "deposit" },
  { name: "Выводы", id: "withdrawals" },
];
const selected = ref({ name: "Все транзакции", id: "all" });

const updateSelected = (newSelected) => {
  selected.value = newSelected;
};
</script>

<style lang="scss" scoped>
.story {
  display: flex;
  flex-direction: column;
  gap: 20px;

  &__container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__dropdown {
    width: 184px;
  }

  &__payments {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__stats {
    display: flex;
    gap: 24px;
  }

  @media (max-width: 768px) {
    &__header {
      flex-direction: column;
      width: 100%;
      gap: 16px;
    }
    &__stats {
      width: 100%;
    }
    &__filter {
      width: 100%;
    }
  }
  @media (max-width: 626px) {
    &__dropdown {
      width: 100%;
    }
  }
}

.stat {
  display: flex;
  gap: 16px;

  &__title {
    //styleName: desktop/footnote;
    font-family: Geometria;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    text-align: left;
    color: var(--white-25, #ffffff40);
  }

  &__text {
    //styleName: desktop/body;
    font-family: Geometria;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: left;
  }
}
</style>
