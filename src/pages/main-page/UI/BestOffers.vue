<template>
  <section class="offers">
    <h1 class="title">Лучшие предложения</h1>
    <div class="offers__main-select">
      <p @click="changeGame('cs2')" class="offers__main-select__game">
        CS2<span
          :class="{ 'offers__main-select__game--active': games.cs2 }"
        ></span>
      </p>
      <p @click="changeGame('dota')" class="offers__main-select__game">
        Dota 2<span
          :class="{ 'offers__main-select__game--active': games.dota }"
        ></span>
      </p>
      <p @click="changeGame('rust')" class="offers__main-select__game">
        Rust<span
          :class="{ 'offers__main-select__game--active': games.rust }"
        ></span>
      </p>
      <p @click="changeGame('tf2')" class="offers__main-select__game">
        Team Fortress 2<span
          :class="{ 'offers__main-select__game--active': games.tf2 }"
        ></span>
      </p>
    </div>
    <div v-if="games.cs2" class="offers__main-elems">
      <div v-for="skin in skins" :key="skin.id">
        <SkinCard :skin="skin" />
      </div>
    </div>
    <ButtonRed class="offers__button" text="Посмотреть все товары" />
  </section>
</template>

<script setup>
import SkinCard from "@/entities/skin/UI/SkinCard.vue";
import ButtonRed from "@/shared/UI/ButtonRed.vue";
import axios from "axios";
import { onMounted, ref } from "vue";

let skins = ref([]);

const fetchBest = async () => {
  try {
    const res = await axios.get(`https://9be368f409e5ba1b.mokky.dev/best`);
    skins.value = res.data;
  } catch (e) {
    console.log(e);
  }
};

const games = ref({
  cs2: true,
  dota: false,
  rust: false,
  tf2: false,
});

const changeGame = (name) => {
  games.value.cs2 = false;
  games.value.dota = false;
  games.value.rust = false;
  games.value.tf2 = false;
  games.value[name] = true;
};

onMounted(() => {
  {
    fetchBest();
  }
});
</script>

<style scoped>
.offers {
  width: 100%;
  max-width: 1696px;
  display: flex;
  flex-direction: column;
}
.offers__main-select {
  display: flex;
  align-items: center;
  height: 42px;
  margin-bottom: 20px;
}
.offers__main-select__game {
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  position: relative;
  text-align: center;
  cursor: pointer;
  box-sizing: border-box;
  padding: 10px 16px;
}
.offers__main-select__game--active {
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
  grid-template-columns: repeat(auto-fill, minmax(184px, 1fr));
  gap: 12px;
  transition: all 0.2s;
}
.offers__main-elems::-webkit-scrollbar {
  width: 0;
  height: 0;
}
.offers__main-elems-elem {
  width: 100%;
  max-width: 202px;
  min-width: auto;
  height: 221px;
  min-width: 193px;
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
    margin-left: 20px;
    font-size: 18px;
    text-overflow: clip;
    white-space: nowrap;
  }
  .offers__button {
    margin-right: 30px;
  }
  .offers__main-elems-elem {
    width: 100%;
    min-width: auto;
    max-width: 192px;
  }
  .offers__main-elems {
    width: 100%;
    margin: 0 4px;
  }
}
@media (max-width: 772px) {
  .offers__main-elems-elem {
    width: 100%;
    min-width: auto;
    max-width: 184px;
  }
  .offers__main-elems {
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  }
}
@media (max-width: 767px) {
  .offers__main-select__game:nth-child(4) {
    width: 71px;
  }
  .offers__button {
    align-self: center;
    margin-bottom: 80px;
  }
}
</style>
