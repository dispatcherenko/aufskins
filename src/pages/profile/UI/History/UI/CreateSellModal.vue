<script setup>
import Modal from "@/shared/UI/Modal/Modal.vue";
import Bar from "@/assets/mainpage/bar.svg?component";
import Button2 from "@/shared/UI/Buttons/Button2.vue";
import link from "@/assets/icons/link.svg?url";
import { useCreateSellModal } from "../store";
import TextInput from "@/shared/UI/Inputs/TextInput.vue";
const modalStore = useCreateSellModal();
</script>

<template>
  <Modal :is-open="modalStore.isOpen" :close="modalStore.closeModal">
    <div class="details-container container">
      <div class="details-container__header">
        <div class="details-container__header-timer">
          <p class="subHeader">Детали транзакции</p>
          <p class="footnote timer">Осталось 30:00</p>
        </div>
        <p class="smallfootnote yellow">Ожидание</p>
        <p class="body grey">
          Подтвердите обмен в Steam, чтобы отправить трейд покупателю
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
      <div class="details-container__stages">
        <p class="upperBody">Этапы подтвеждения</p>
        <ol class="body grey list">
          <li>На сайте Steam перейдите в раздел “Подтверждения”</li>
          <li>Сравните дату регистрации покупателя в Steam и на AUF Skins</li>
        </ol>
        <div class="details-container__stages-card">
          <img src="https://i.postimg.cc/pdY420WF/picture.png" alt="pfp" />
          <div class="details-container__stages-text">
            <p class="footnote">234234728423742874293423</p>
            <p class="smallfootnote">В Steam с 16 агуста 2024 года</p>
          </div>
        </div>
        <ol class="body grey list" start="3">
          <li>
            Подтвердите обмен и вернитесь в AUF Skins. Здесь также будет
            необходимо отметить, что трейд создан
          </li>
        </ol>
      </div>
      <TextInput placeholder="Ваш пароль для обмена" />
      <div class="details-container__buttons">
        <Button2
          class="details-container__buttons-button"
          text="Создать сделку в Steam"
          :img="link"
        />
        <Button2
          class="details-container__buttons-button"
          text="Я подтвердил обмен"
          @click="modalStore.submit"
        />
      </div>
    </div>
  </Modal>
</template>

<style lang="scss" scoped>
@import url("./styles.scss");
</style>
