<script setup>
import Switch from "@/shared/UI/Inputs/Switch.vue";
import TextInput from "@/shared/UI/Inputs/TextInput.vue";
import TextInputButton from "@/shared/UI/Inputs/TextInputButton.vue";
import { ref } from "vue";

let isSwitchActive = ref(false);
</script>

<template>
  <div class="set">
    <h3 class="set__title">Настройки</h3>
    <div class="set__container">
      <div class="set__left">
        <p class="set__subtitle">Steam информация</p>
        <div class="set__left-wrapper">
          <TextInput placeholder="Ссылка Steam Trade" />
          <TextInputButton
            placeholder="Steam Web API Key"
            button-text="Изменить"
          />
          <TextInput placeholder="API Token" />
        </div>
      </div>
      <div class="set__right">
        <div class="set__right-wrapper">
          <p class="set__subtitle">Прочее</p>
          <div class="set__switch-w-text">
            <div class="">
              <p class="set__enable-title">Допуск уведомлений</p>
              <p class="set__enable-text">
                Получение системных и финансовых уведомлений, а также информации
                о входе с новых устройств
              </p>
            </div>
            <Switch
              name="notifications"
              id="notifications"
              :is-active="isSwitchActive"
              @update="isSwitchActive = $event"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.set {
  display: flex;
  flex-direction: column;
  gap: 26px;

  &__container {
    display: grid;
    grid-template-columns: 50% 50%;
  }

  &__left {
    display: flex;
    flex-direction: column;
    gap: 16px;

    &-wrapper {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
  }

  &__right {
    &-wrapper {
      margin-left: 32px;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
  }

  &__enable {
    &-title {
      //styleName: desktop/body;
      font-family: Geometria;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      text-align: left;
    }
    &-text {
      //styleName: desktop/footnote;
      font-family: Geometria;
      font-size: 14px;
      font-weight: 500;
      line-height: 18px;
      text-align: left;
      color: #ffffff80;
      max-width: 366px;
    }
  }
  &__switch-w-text {
    display: flex;
    gap: 45px;
  }

  @media (max-width: 943px) {
    &__switch-w-text {
      gap: 0;
      justify-content: space-between;
    }
  }

  @media (max-width: 626px) {
    &__container {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
    &__right-wrapper {
      margin: 0;
    }
  }
}
</style>
