<script setup lang="ts">
import Button2 from "@/shared/UI/Buttons/Button2.vue";
</script>

<template>
  <article class="level">
    <div class="level__left">
      <div class="level__level">
        <p class="level__level-title">Ваш уровень</p>
        <p class="level__level-name">VIP 2</p>
      </div>
      <div class="level__bonus">
        <div class="bonus">
          <div class="bonus__compare">
            <p class="bonus__compare-now">2%</p>
            <p class="bonus__compare-before">2,5%</p>
          </div>
          <p class="bonus__title">Комиссия</p>
        </div>
        <div class="bonus">
          <div class="bonus__compare">
            <p class="bonus__compare-now">82 $</p>
            <p class="bonus__compare-before">84 $</p>
          </div>
          <p class="bonus__title">Курс USD</p>
        </div>
      </div>
    </div>
    <div class="level__right">
      <Button2 class="level__button" text="Как повысить уровень?" />
      <img src="./logo_graphics.svg" alt="logo" />
    </div>
  </article>
</template>

<style lang="scss" scoped>
.level {
  background: linear-gradient(90.61deg, #c41341 0%, #98072d 100%);
  height: 100px;
  display: flex;
  justify-content: space-between;

  &__left {
    margin: 9px 20px;
    display: flex;
    gap: 48px;
  }

  &__right {
    display: flex;
    align-items: center;
    gap: 32px;
    margin-right: 32px;
  }

  &__level {
    display: flex;
    flex-direction: column;

    &-title {
      color: #ffffff80;
      //styleName: desktop/upperBody;
      font-family: Geometria;
      font-size: 18px;
      font-weight: 500;
      line-height: 22px;
      text-align: left;
    }

    &-name {
      font-family: Geometria;
      font-size: 48px;
      font-weight: 800;
      line-height: 60.38px;
      text-align: left;
    }
  }

  &__bonus {
    display: flex;
    align-items: center;
    gap: 32px;
  }

  &__button {
    background-color: #231f36;
    padding: 12px 16px;
    gap: 0;
    width: 228px;
    height: 44px;
    gap: 0px;
  }
}

.bonus {
  &__compare {
    display: flex;
    gap: 14px;
    //styleName: desktop/h3;
    font-family: Geometria;
    font-size: 28px;
    font-weight: 700;
    line-height: 34px;
    letter-spacing: -0.5px;
    text-align: left;

    &-before {
      color: #db879d;
      text-decoration: line-through;
    }
  }

  &__title {
    //styleName: desktop/upperBody;
    font-family: Geometria;
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    text-align: left;
  }
}
</style>
