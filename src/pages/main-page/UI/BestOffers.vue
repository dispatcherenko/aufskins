<template>
  <section class="offers">
    <h1 class="title">Лучшие предложения</h1>
    <div class="offers__main-select">
      <p
        @click="changeGame('cs2')"
        class="offers__main-select__game"
        :class="{ 'offers__main-select__game--active': selectedGame === 'cs2' }"
      >
        CS2
      </p>
      <p
        @click="changeGame('dota')"
        class="offers__main-select__game"
        :class="{
          'offers__main-select__game--active': selectedGame === 'dota',
        }"
      >
        Dota 2
      </p>
      <p
        @click="changeGame('rust')"
        class="offers__main-select__game"
        :class="{
          'offers__main-select__game--active': selectedGame === 'rust',
        }"
      >
        Rust
      </p>
      <p
        @click="changeGame('tf2')"
        class="offers__main-select__game"
        :class="{ 'offers__main-select__game--active': selectedGame === 'tf2' }"
      >
        Team Fortress 2
      </p>
    </div>
    <div class="offers__main-elems" v-auto-animate>
      <div
        v-for="skin in skins"
        :key="skin.id"
        class="offers__main-elems-elem"
        v-auto-animate
      >
        <SkinCard :skin="skin" />
      </div>
    </div>

    <Button1 class="offers__button" text="Посмотреть все товары" />
  </section>
</template>

<script setup>
import SkinCard from "@/entities/skin/UI/ItemCard.vue";
import Button1 from "@/shared/UI/Buttons/Button1.vue";

import axios from "axios";
import { onMounted, ref } from "vue";

let skins = ref([]);
let selectedGame = ref("cs2");

const fetchBest = async () => {
  try {
    let res;

    switch (selectedGame.value) {
      case "cs2":
        res = await axios.get(`https://9be368f409e5ba1b.mokky.dev/bestcs`);
        skins.value = res.data;
        break;
      case "dota":
        res = await axios.get(`https://9be368f409e5ba1b.mokky.dev/bestdota`);
        skins.value = res.data;
        break;
      case "rust":
        res = await axios.get(`https://9be368f409e5ba1b.mokky.dev/bestrust`);
        skins.value = res.data;
        break;
      case "tf2":
        res = await axios.get(`https://9be368f409e5ba1b.mokky.dev/besttf2`);
        skins.value = res.data;
        break;
    }
  } catch (e) {
    console.log(e);
  }
};

const changeGame = (game) => {
  selectedGame.value = game;
  fetchBest();
};

onMounted(() => {
  fetchBest();
});
</script>

<style scoped>
.title {
  text-align: left;
  margin-bottom: 32px;
}
.offers {
  width: 100%;
  max-width: 1696px;
  display: flex;
  position: relative;
  flex-direction: column;
}
.offers__main-select {
  display: flex;
  align-items: center;
  height: 42px;
  margin-bottom: 20px;
}
.offers__main-select__game {
  color: #ffffff80;
  font-size: 18px;
  font-weight: 500;
  position: relative;
  text-align: center;
  cursor: pointer;
  box-sizing: border-box;
  padding: 10px 16px;

  transition: all 0.2s;
}

.offers__main-select__game--active {
  color: #ffffff;
}

.offers__main-select__game--active::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 6px;
  background-color: #c41341;
  clip-path: polygon(28% 36%, 77% 51%, 100% 0, 100% 100%, 0 100%, 0 29%);
  transition: all 0.2s;
}
.offers__main {
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: start;

  transition: all 0.2s;
}
.offers__main-elems {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));

  position: relative;
  gap: 12px;
  transition: all 0.2s;
}
.offers__main-elems::-webkit-scrollbar {
  width: 0;
  height: 0;
}
.offers__main-elems-elem {
  width: 100%;
  height: 221px;
  min-width: 190px;
  background-color: #171424;
  position: relative;
  box-sizing: border-box;
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
  font-size: 18px;
  font-weight: 500;
  color: #fff;
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
@media (min-width: 1920px) {
  .offres__title {
    font-size: 72px;
  }

  .offers__main-elems-elem {
    width: 202px;
  }
}
@media (max-width: 1279px) {
  .offers {
    width: 100%;
  }
  .offers__main-select {
    font-size: 18px;
    text-overflow: clip;
    white-space: nowrap;
  }
  .offers__button {
    margin-right: 30px;
  }
  .offers__main-elems-elem {
    width: 100%;
  }
  .offers__main-elems {
    width: 100vw;
    left: -20px;
    padding: 0 4px;
  }
  .title {
    margin-bottom: 20px;
  }
}
@media (max-width: 767px) {
  .offers__button {
    align-self: center;
    margin-bottom: 80px;
  }
}
</style>
