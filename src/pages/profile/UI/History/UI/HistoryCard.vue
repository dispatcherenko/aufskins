<template>
  <div class="card">
    <div class="card__left">
      <div class="card__purchase">
        <ArrowDown />
        <div>
          <p class="body">Покупка</p>
          <p class="smallfootnote green">Успешно</p>
        </div>
      </div>

      <div class="card__info">
        <img
          class="card__image"
          src="https://i.postimg.cc/7hbP5p5R/image-31.png"
          alt="skin"
        />
        <p class="body">
          The Prince <span class="footnote grey">| M4A4 · 0.338895</span>
        </p>
        <div class="card__stickers"></div>
      </div>
    </div>
    <div class="card__right">
      <p class="body deposit">- 400 ₽</p>
      <p class="footnote">19.03.2024 · 20:07</p>
    </div>
  </div>
</template>

<script setup>
import ArrowDown from "@/assets/icons/arrow-down.svg?component";
</script>

<style lang="scss" scoped>
.deposit {
  color: #c41341;
}
.green {
  background-color: #3bc76b4d;
  padding: 4px 8px 2px;
  border-radius: 2px;
  color: #3bc76b;
}
.card {
  display: flex;
  background-color: #171424;
  align-items: center;
  padding: 10px 40px;
  justify-content: space-between;
  height: 70px;

  &__left,
  &__right {
    display: flex;
    align-items: center;

    gap: 48px;
  }

  &__info {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  &__purchase {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  &__image {
    width: 61px;
    height: 50px;
  }
}
</style>
