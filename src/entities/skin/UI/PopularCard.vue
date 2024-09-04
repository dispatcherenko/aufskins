<template>
  <article class="courusel__element">
    <img
      src="@/assets/mainpage/red.svg"
      alt="bg"
      style="position: absolute; top: 0; left: 13%"
    />
    <img
      :src="skin.imageURL"
      alt="skin"
      style="position: absolute; top: 20%; left: 13%"
    />
    <div class="courusel__element__info">
      <p class="courusel__element__info-price">
        {{ skin.price }}
        <span class="courusel__element__info-price--gray">₽</span>
      </p>
      <p class="courusel__element__info-name">
        {{ skin.name }}
        <span class="courusel__element__info-name--gray">{{ skin.gun }}</span>
      </p>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({ skin: Object });
</script>

<style scoped>
.courusel__element {
  width: 184px;
  min-width: 184px;
  height: 100%;
  background: rgba(23, 20, 36, 1);
  position: relative;
  display: flex;
  align-items: end;
  justify-content: center;
  border-radius: 2px;
}
.courusel__element__info {
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: start;
  margin-bottom: 10px;
}
.courusel__element__info-price {
  font-size: 18px;
  font-weight: 500;
  color: #fff;
}
.courusel__element__info-name {
  font-size: 14px;
  font-weight: 500;
  color: #fff;
}
.courusel__element__info-price--gray {
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
}
.courusel__element__info-name--gray {
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  margin-left: 5px;
}
</style>
