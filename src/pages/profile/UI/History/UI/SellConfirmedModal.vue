<script setup>
import Modal from "@/shared/UI/Modal/Modal.vue";
import Bar from "@/assets/mainpage/bar.svg?component";
import Button2 from "@/shared/UI/Buttons/Button2.vue";
import { useSellConfirmedModal } from "../store";
const modalStore = useSellConfirmedModal();
</script>

<template>
  <Modal :is-open="modalStore.isOpen" :close="modalStore.closeModal">
    <div class="details-container container">
      <div class="details-container__header">
        <p class="subHeader">Обмен подтвержден</p>
        <p class="smallfootnote yellow">Ожидание</p>
        <p class="body grey">
          Осталось дождаться подтверждения покупателя. После этого мы переведем
          вам полную стоимость предмета
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
      <div class="details-container__buttons">
        <Button2
          class="details-container__buttons-button"
          text="Понятно"
          @click="modalStore.closeModal"
        />
      </div>
    </div>
  </Modal>
</template>

<style lang="scss" scoped>
@import url("./styles.scss");
</style>
