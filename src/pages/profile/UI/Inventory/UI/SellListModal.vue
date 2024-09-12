<script setup>
import { watch } from "vue";

import Modal from "@/shared/UI/Modal/Modal.vue";

import SellCard from "./SellCard.vue";
import Checkbox from "@/shared/UI/Checkbox/Checkbox.vue";
import Button2 from "@/shared/UI/Buttons/Button2.vue";

import { useSellModalStore } from "../store";
const modalStore = useSellModalStore();

import { useInventoryStore } from "@/entities/skin/model/index";
const inventoryStore = useInventoryStore();

watch(
  () => inventoryStore.toSell,
  (newToSell) => {
    if (newToSell.length === 0) {
      modalStore.closeModal();
    }
  }
);
</script>

<template>
  <Modal :is-open="modalStore.isOpen" :close="modalStore.closeModal">
    <div class="modal">
      <div class="list">
        <p class="subheader">Установить цену</p>
        <div class="list__items">
          <SellCard
            v-for="skin in inventoryStore.toSell"
            :key="skin.id"
            :skin="skin"
          />
        </div>
      </div>
      <div class="footer">
        <div class="footer__info">
          <div class="footer__info-card">
            <p class="footnote">Сумма</p>
            <p class="body">
              {{ inventoryStore.total }} <span class="grey">₽</span>
            </p>
          </div>
          <div class="footer__info-card">
            <p class="footnote">Вы получите</p>
            <p class="body">
              {{ inventoryStore.totalTax }} <span class="grey">₽</span>
            </p>
          </div>
          <div class="footer__info-card">
            <p class="footnote">Коммисия</p>
            <p class="body">{{ 5 }} <span class="grey">%</span></p>
          </div>
        </div>
        <div class="footer__confirm">
          <div class="footer__checkbox">
            <Checkbox
              name="confirm"
              id="confirm"
              v-model="modalStore.isConfirmed"
            />
            <label for="confirm" class="footnote"
              >Я согласен с условиями <a href="" class="red">договора</a></label
            >
          </div>
          <Button2
            :disabled="!modalStore.isConfirmed"
            text="Выставить"
            class="footer__button"
            :click="modalStore.sell"
          />
        </div>
      </div>
    </div>
  </Modal>
</template>

<style lang="scss" scoped>
.modal {
  @media (max-width: 768px) {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}

.list {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 874px;
  height: 496px;
  padding: 20px;
  gap: 32px;
  border-radius: 2px;

  &__items {
    display: flex;
    flex-direction: column;
    gap: 32px;

    overflow: auto;
  }

  @media (max-width: 1280px) {
    width: 658px;
    padding: 16px;
  }

  @media (max-width: 768px) {
    width: 100%;
    min-width: 350px;
    height: calc(100vh - 172px);
    padding: 16px;
    gap: 16px;

    &__items {
      gap: 16px;
      margin: 0 -16px;
    }
  }
}

.footer {
  background-color: #171424;
  height: 110px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px 20px;

  &__confirm {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 271px;
    height: 100%;
  }

  &__info {
    display: flex;
    gap: 32px;
  }

  &__checkbox {
    display: flex;
    align-items: center;
    gap: 16px;

    label {
      color: #fff;
    }
  }

  &__button {
    height: 48px;
    width: 100%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
    height: 172px;

    &__info {
      width: 100%;
    }

    &__confirm {
      width: 100%;
      justify-content: center;
      gap: 12px;
    }
  }
}
</style>
