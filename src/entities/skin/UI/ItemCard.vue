<template>
  <div class="offers__main-elems-elem">
    <img
      src="@/assets/mainpage/purple.svg"
      alt="bg"
      style="position: absolute; top: -5%; left: 13%"
    />
    <img
      :src="skin.imageURL"
      alt="skin"
      style="position: absolute; top: 10%; left: 13%"
    />
    <div class="offers__main-elems-elem__sickers">
      <img v-for="sticker in skin.stickers" :src="sticker" alt="sticker" />
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
      />
      <div class="offers__main-elems-elem__info-bottom">
        <p class="offers__main-elems-elem__info-bottom__quality">
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
          {{ skin.quality }}
        </p>
        <p class="offers__main-elems-elem__info-bottom__pattern">
          {{ skin.pattren }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  skin: Object,
});
</script>

<style scoped>
.offers__main-elems-elem {
  width: 193px;
  height: 221px;
  border-radius: 2px;
  min-width: 193px;
  background-color: #171424;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
}
.offers__main-elems-elem__sickers {
  position: absolute;
  top: 2%;
  right: 5%;
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
  .offers__main-elems-elem {
    width: 202px;
  }
  .offers__main-elems-elem:nth-child(17) {
    display: none;
  }
  .offers__main-elems-elem:nth-child(18) {
    display: none;
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
  .offers__main-elems-elem {
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
