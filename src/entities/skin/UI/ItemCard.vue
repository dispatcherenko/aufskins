<template>
  <div class="card">
    <div class="upper">
      <img :src="imagePath" alt="bg" class="level" />
      <img :src="skin.imageURL" alt="skin" class="item" />
      <div class="stickers">
        <img v-for="sticker in skin.stickers" :src="sticker" alt="sticker" />
      </div>
    </div>
    <div class="offers__main-elems-elem__info">
      <p class="offers__main-elems-elem__info-price">
        {{ skin.price }}
        <span style="color: rgba(255, 255, 255, 0.5); margin-left: 5px">₽</span>
      </p>
      <p class="offers__main-elems-elem__info-name">
        {{ skin.name }}
        <span
          style="
            font-size: 12px;
            color: rgba(255, 255, 255, 0.5);
            margin-left: 5px;
          "
          >{{ skin.gun }}</span
        >
      </p>
      <img
        class="offers__main-elems-elem__info-bar"
        src="@/assets/mainpage/bar.svg"
        alt="bar"
        v-if="skin.pattren"
      />
      <div class="offers__main-elems-elem__info-bottom">
        <span class="offers__main-elems-elem__info-bottom__quality">
          <span
            class="offers__main-elems-elem__info-bottom__quality--gold"
            v-if="skin.sv"
            >SV
          </span>
          <span
            class="offers__main-elems-elem__info-bottom__quality--orange"
            v-if="skin.st"
            >ST
          </span>
          <span v-if="skin.st || skin.sv" style="display: block">|</span>
          <span v-if="skin.quality">{{ skin.quality }}</span>
        </span>
        <p class="offers__main-elems-elem__info-bottom__pattern">
          {{ skin.pattren }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onRenderTracked, watch } from "vue";

const props = defineProps({
  skin: Object,
});

const imagePath = ref("");

const getImagePath = async (level) => {
  const module = await import(`@/assets/levels/${level}.svg`);
  return module.default;
};

const updateImagePath = async () => {
  imagePath.value = await getImagePath(props.skin.level);
};

onMounted(updateImagePath);

watch(() => props.skin, updateImagePath, { deep: true });
</script>

<style scoped>
.card {
  width: 193px;
  height: 221px;
  box-sizing: border-box;
  border-radius: 10px;
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
.stickers {
  position: absolute;
  top: 10px;
  right: 10px;
}
.offers__button {
  width: 264px;
  height: 56px;
  min-height: 56px;
  outline: none;
  border: none;
  background-color: #c41341;
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  clip-path: polygon(6% 0, 90% 0, 100% 30%, 94% 100%, 10% 100%, 0 70%);
  align-self: flex-end;
  margin-top: 30px;
}

.offers__main-elems-elem__info {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 7px;
  margin-bottom: 10px;
}
.offers__main-elems-elem__info-price {
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  margin-left: 5px;
}
.offers__main-elems-elem__info-name {
  font-size: 14px;
  color: #fff;
  font-weight: 500;
  margin-left: 5px;
}
.offers__main-elems-elem__info-bar {
  align-self: center;
}
.offers__main-elems-elem__info-bottom {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  width: 177px;
  align-self: center;
}
.offers__main-elems-elem__info-bottom__quality {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  gap: 5px;
}
.offers__main-elems-elem__info-bottom__pattern {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
}
.offers__main-elems-elem__info-bottom__quality--gold {
  color: gold;
  display: block;
}
.offers__main-elems-elem__info-bottom__quality--orange {
  color: orange;
  display: block;
}
@media (min-width: 1900px) {
  .offres__title {
    font-size: 72px;
  }
  .offers__main-elems {
    height: 454px;
    max-height: 454px;
  }
  .card {
    width: 202px;
  }
}
@media (max-width: 1280px) {
  .offers {
    width: 100%;
  }
  .offres__title {
    font-size: 28px;
    margin-left: 30px;
  }
  .offers__main-select {
    margin-left: 30px;
  }
  .offers__button {
    margin-right: 30px;
  }
  .card {
    width: 184px;
  }
  .offers__main-elems {
    width: 100%;
    height: 687px;
    max-height: 687px;
  }
}
@media (max-width: 768px) {
  .offers__main-elems {
    height: 926px;
    max-height: 926px;
  }
  .offers__main-select__game:nth-child(4) {
    width: 71px;
  }
}
</style>
