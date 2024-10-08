<script setup>
import Modal from "@/shared/UI/Modal/Modal.vue";
import Bar from "@/assets/mainpage/bar.svg?component";
import Button2 from "@/shared/UI/Buttons/Button2.vue";
import { useAutobuyDetailsModal } from "../store";
const modalStore = useAutobuyDetailsModal();
</script>

<template>
  <Modal :is-open="modalStore.isOpen" :close="modalStore.closeModal">
    <div class="details-container container">
      <div class="details-container__header">
        <p class="subHeader">Детали автопокупки</p>
        <p class="smallfootnote yellow">Ожидание</p>
        <p class="body grey">
          Дождитесь, когда продавец согласится на ваше предложение. Отменить
          сделку можно в любой момент.
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
          <p class="body">Автопокупка</p>
        </div>
        <div class="details-container__info-string">
          <p class="body grey">Сумма сделки</p>
          <p class="body">- 400 ₽</p>
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
      </div>
    </div>
  </Modal>
</template>

<style lang="scss" scoped>
@import url("./styles.scss");
</style>
