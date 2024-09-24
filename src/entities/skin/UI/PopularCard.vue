<template>
  <div class="card" @click="toItemPage">
    <div class="upper">
      <img :src="imagePath" alt="bg" class="level" />
      <img :src="skin.imageURL" alt="skin" class="item" />
    </div>
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
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

import { useRouter } from "vue-router";
const router = useRouter();

const props = defineProps({
  skin: Object,
});

const imagePath = ref("");

const getImagePath = async (level) => {
  const module = await import(`@/assets/levels/${level}.svg`);
  return module.default;
};

const toItemPage = (e) => {
  e.stopPropagation();
  router.push("/item/1");
};

onMounted(async () => {
  imagePath.value = await getImagePath(props.skin.level);
});
</script>

<style scoped>
.card {
  width: 184px;
  height: 174px;
  box-sizing: border-box;
  border-radius: 2px;
  background-color: #171424;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;

  cursor: pointer;
}
.upper {
  height: 100%;
  width: 100%;
  display: flex;
  position: relative;
}
.level {
  position: absolute;
  right: 0;
  left: 0;
  margin: 0 auto;
}
.item {
  position: absolute;
  top: 38px;
  right: 0;
  left: 0;
  margin: 0 auto;
  width: 136px;
  height: 81px;
  z-index: 1;
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
