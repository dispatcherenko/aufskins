<script setup>
import Modal from "@/shared/UI/Modal/Modal.vue";
import Bar from "@/assets/mainpage/bar.svg?component";
import Button2 from "@/shared/UI/Buttons/Button2.vue";
import { useBuyDetailsModal } from "../store";
const modalStore = useBuyDetailsModal();
</script>

<template>
  <Modal :is-open="modalStore.isOpen" :close="modalStore.closeModal">
    <div class="details-container container">
      <div class="details-container__header">
        <p class="subHeader">Детали сделки</p>
        <p class="smallfootnote yellow">Ожидание</p>
        <p class="body grey">
          Ожидайте отправки продавцом предложения обмена. Сделку можно отменить
          через 30 минут после создания, если продавец не отправит ордер за это
          время
        </p>
      </div>
      <div class="details-container__item">
        <img src="https://i.postimg.cc/7hbP5p5R/image-31.png" alt="image" />
        <div class="details-container__item-right">
          <p class="footnote">
            <span class="gold">ST</span> | После полевых испытаний
          </p>
          <p class="upperBody">The Prince <span class="grey">| M4A4</span></p>
          <Bar />
        </div>
      </div>
      <div class="details-container__info">
        <div class="details-container__info-string">
          <p class="body grey">Тип сделки</p>
          <p class="body">Покупка</p>
        </div>
        <div class="details-container__info-string">
          <p class="body grey">Сумма сделки</p>
          <p class="body">- 400 ₽</p>
        </div>
        <div class="details-container__info-string">
          <p class="body grey">Steam ID продавца</p>
          <p class="body">76561198240142796</p>
        </div>
        <div class="details-container__info-string">
          <p class="body grey">Дата и время</p>
          <p class="body">19.03.2024 · 20:07</p>
        </div>
      </div>
      <div class="details-container__buttons">
        <Button2
          class="details-container__buttons-button"
          text="Отменить сделку"
        />
        <Button2
          class="details-container__buttons-button"
          text="Я получил предмет"
        />
      </div>
    </div>
  </Modal>
</template>

<style lang="scss" scoped>
@import url("./styles.scss");
</style>
