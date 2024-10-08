<template>
  <div class="item">
    <p class="breadcrumbs">
      <a href="" class="body">СS 2</a> / <a href="" class="body">Винтовки</a> /
      <a href="" class="body">AK-47</a> /
      <a href="" class="body">Eye of Horus</a>
    </p>
    <div class="item__container">
      <div class="item__image">
        <img :src="pink" alt="bg" class="item__image-bg" />
        <img
          src="https://i.postimg.cc/7hbP5p5R/image-31.png"
          alt="item"
          class="item__image-img"
        />
        <div class="item__image-stickers">
          <img
            src="https://i.postimg.cc/XN84WNzY/image-32.png"
            alt="item"
            class="item__image-sticker"
          />
          <img
            src="https://i.postimg.cc/sxwr4Khh/image-33.png"
            alt="item"
            class="item__image-sticker"
          />
          <img
            src="https://i.postimg.cc/BQnsnWrc/image-34.png"
            alt="item"
            class="item__image-sticker"
          />
          <img
            src="https://i.postimg.cc/4N2GKLZC/image-35.png"
            alt="item"
            class="item__image-sticker"
          />
          <img
            src="https://i.postimg.cc/zGLrTCXy/image-36.png"
            alt="item"
            class="item__image-sticker"
          />
        </div>
        <BarImg />
      </div>
      <div class="item__seller-info">
        <div class="item__seller-info-text">
          <div>
            <p class="body grey">Продавец</p>
            <a href="/login" class="upperBody">
              Имя профиля скрыто
              <span class="smallfootnote green">Онлайн</span>
            </a>
          </div>
          <p class="body grey">На AUFSkins c 9 августа 2024</p>
        </div>
        <div class="item__seller-info-cards">
          <div class="item__seller-info-card">
            <Time />
            <div>
              <p class="footnote">Ср. время сделки</p>
              <p class="body">15 мин</p>
            </div>
          </div>
          <div class="item__seller-info-card">
            <Send />
            <div>
              <p class="footnote">Продаж</p>
              <p class="body">57</p>
            </div>
          </div>
          <div class="item__seller-info-card">
            <Buy />
            <div>
              <p class="footnote">Покупок</p>
              <p class="body">57</p>
            </div>
          </div>
        </div>
      </div>
      <div class="item__header">
        <h2>6 129 <span class="grey">₽</span></h2>
        <h4>
          Eye of Horus <span class="grey">| M4A4</span>
          <span class="subHeader gold">StatTrak™</span>
        </h4>
      </div>
      <div class="item__item-info">
        <div class="item__item-info-string">
          <p class="body grey">Оружие</p>
          <p class="body">M4A4</p>
        </div>
        <div class="item__item-info-string">
          <p class="body grey">Индекс</p>
          <p class="body">302</p>
        </div>
        <div class="item__item-info-string">
          <p class="body grey">Тип</p>
          <p class="body">Винтовка</p>
        </div>
        <div class="item__item-info-string">
          <p class="body grey">Паттерн</p>
          <p class="body">84</p>
        </div>
        <div class="item__item-info-string">
          <p class="body grey">Редкость</p>
          <p class="body">Тайное</p>
        </div>
        <div class="item__item-info-string">
          <p class="body grey">Качество</p>
          <p class="body">Прямо с завода</p>
        </div>
      </div>
      <div class="item__buttons">
        <Button2
          class="item__buttons-buy"
          text="Купить"
          @click="modalStore.openModal"
        />
        <Button2 class="item__buttons-cart" text="В корзину" />
      </div>
      <div class="item__pricing">
        <p class="subHeader">Предложите свою цену</p>
        <TextInputButton
          placeholder="Укажите цену"
          button-text="Разместить ордер"
          type="number"
        />
      </div>
      <div class="item__request">
        <div class="item__request-string">
          <p class="upperBody">Запросы на покупку</p>
          <p class="upperBody grey">Цена</p>
        </div>
        <div>
          <div class="item__request-string">
            <p class="body">16</p>
            <p class="body">6 100 <span class="grey">₽</span></p>
          </div>
          <span class="divider"></span>
          <div class="item__request-string">
            <p class="body">10</p>
            <p class="body">6 000 <span class="grey">₽</span></p>
          </div>
          <span class="divider"></span>
          <div class="item__request-string">
            <p class="body">32</p>
            <p class="body">5 940 <span class="grey">₽</span></p>
          </div>
        </div>
      </div>
      <div class="item__rest">
        <div class="item__stats">
          <div class="item__stats-item">
            <AveragePrice />
            <div>
              <p class="footnote">Средняя цена</p>
              <p class="body">6 238 <span class="grey">₽</span></p>
            </div>
          </div>
          <div class="item__stats-item">
            <TopSale />
            <div>
              <p class="footnote">Рекордная цена</p>
              <p class="body">7 489 <span class="grey">₽</span></p>
            </div>
          </div>
          <div class="item__stats-item">
            <SaleAmount />
            <div>
              <p class="footnote">Всего продаж</p>
              <p class="body">2 453</p>
            </div>
          </div>
        </div>
        <div class="item__graph">
          <div class="item__graph-title">
            <h4>График цены</h4>
            <Dropdown
              class="item__graph-dropdown"
              :selected="selected"
              :options="graphOptions"
            />
          </div>
          <div class="item__graph-chart">
            <component
              height="244"
              :is="chartComponent"
              type="area"
              :options="options"
              :series="series"
            />
          </div>
        </div>
        <div class="item__desc">
          <h4>Описание</h4>
          <p class="body grey">
            Мощная и надежная штурмовая винтовка АК-47 — одна из самых известных
            в мире. Наиболее смертельна стрельба короткими и точными очередями.
            It has been custom painted with a deer and dreamcatchers in neon
            colors and finished with a pearlescent effect. I've been saving this
            for a special occasion... – Booth, Arms Dealer
            <br />
            <br />
            Коллекция «Грёзы и кошмары»
          </p>
        </div>
        <div class="item__similar">
          <h4>Другие предложения</h4>
          <div class="item__similar-wrap">
            <div class="item__similar-select">
              <ButtonXS class="item__similar-button" text="FN" />
              <ButtonXS class="item__similar-button" text="MW" />
              <ButtonXS class="item__similar-button" text="FT" />
              <ButtonXS class="item__similar-button" text="WW" />
              <ButtonXS class="item__similar-button" text="BS" />
            </div>
            <div class="item__similar-cards">
              <div class="item__similar-card">
                <div class="item__similar-left">
                  <p class="body">MW</p>
                  <p class="body grey">0.374655</p>
                  <p class="body gold">StatTrak™</p>
                </div>
                <div class="item__similar-right">
                  <div class="item__similar-stickers">
                    <img
                      src="https://i.postimg.cc/XN84WNzY/image-32.png"
                      alt="item"
                      class="item__image-sticker"
                    />
                    <img
                      src="https://i.postimg.cc/sxwr4Khh/image-33.png"
                      alt="item"
                      class="item__image-sticker"
                    />
                    <img
                      src="https://i.postimg.cc/BQnsnWrc/image-34.png"
                      alt="item"
                      class="item__image-sticker"
                    />
                    <img
                      src="https://i.postimg.cc/4N2GKLZC/image-35.png"
                      alt="item"
                      class="item__image-sticker"
                    />
                    <img
                      src="https://i.postimg.cc/zGLrTCXy/image-36.png"
                      alt="item"
                      class="item__image-sticker"
                    />
                  </div>
                  <p class="body">6 129 <span class="grey">₽</span></p>
                  <ButtonXS class="item__similar-right-button" text="Купить" />
                </div>
              </div>
              <div class="item__similar-card">
                <div class="item__similar-left">
                  <p class="body">MW</p>
                  <p class="body grey">0.374655</p>
                  <p class="body gold"></p>
                </div>
                <div class="item__similar-right">
                  <div class="item__similar-stickers"></div>
                  <p class="body">6 129 <span class="grey">₽</span></p>
                  <ButtonXS class="item__similar-right-button" text="Купить" />
                </div>
              </div>
              <div class="item__similar-card">
                <div class="item__similar-left">
                  <p class="body">MW</p>
                  <p class="body grey">0.374655</p>
                  <p class="body yellow">Souvenir</p>
                </div>
                <div class="item__similar-right">
                  <div class="item__similar-stickers">
                    <img
                      src="https://i.postimg.cc/4N2GKLZC/image-35.png"
                      alt="item"
                      class="item__image-sticker"
                    />
                    <img
                      src="https://i.postimg.cc/zGLrTCXy/image-36.png"
                      alt="item"
                      class="item__image-sticker"
                    />
                  </div>
                  <p class="body">6 129 <span class="grey">₽</span></p>
                  <ButtonXS class="item__similar-right-button" text="Купить" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="item__gallery">
        <h4>Галерея фото</h4>
        <div class="swiper-wrapper">
          <swiper
            @swiper="onSwiper"
            :spaceBetween="10"
            :modules="modules"
            :breakpoints="breakpoints"
            id="fswiper"
          >
            <swiper-slide
              class="fswiper__slide"
              v-for="(item, index) in items"
              :key="index"
            >
              <img class="fswiper__img" :src="item" alt="screen" />
            </swiper-slide>
          </swiper>
          <div>
            <img
              @click="() => fslider.slidePrev()"
              class="swiper__left"
              src="@/assets/control/leftarrow.svg"
              alt="arrow"
            />
            <img
              @click="() => fslider.slideNext()"
              class="swiper__right"
              src="@/assets/control/rightarrow.svg"
              alt="arrow"
            />
          </div>
        </div>
      </div>
    </div>
    <HugeBuys />
  </div>
</template>

<script setup>
import { onMounted, ref, shallowRef } from "vue";

import pink from "@/assets/levels/pink.svg?url";
import BarImg from "@/assets/mainpage/bar.svg?component";
import AveragePrice from "@/assets/icons/averagePrice.svg?component";
import SaleAmount from "@/assets/icons/saleAmount.svg?component";
import TopSale from "@/assets/icons/topSale.svg?component";
import Send from "@/assets/icons/send-square.svg?component";
import Time from "@/assets/icons/time.svg?component";
import Buy from "@/assets/icons/buy.svg?component";

import Button2 from "@/shared/UI/Buttons/Button2.vue";
import TextInputButton from "@/shared/UI/Inputs/TextInputButton.vue";
import Dropdown from "@/shared/UI/Select/Dropdown.vue";
import ButtonXS from "@/shared/UI/Buttons/ButtonXS.vue";
import HugeBuys from "@/widgets/HugeBuys/HugeBuys.vue";

import { options, series } from "./api/chart-config";

let chartComponent = shallowRef(null);
onMounted(async () => {
  const VueApexCharts = (await import("vue3-apexcharts")).default;
  chartComponent.value = VueApexCharts;
});

import { Swiper, SwiperSlide } from "swiper/vue";
import { Grid, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css/grid";

import { useSubmitModal } from "./store";
const modalStore = useSubmitModal();

const graphOptions = ref([
  { name: "Год" },
  { name: "Месяц" },
  { name: "День" },
]);
const selected = ref({ name: "Месяц" });

const modules = [Grid, Navigation];
const breakpoints = {
  1350: {
    slidesPerView: 7,
    grid: {
      fill: "row",
      rows: 3,
    },
  },
  1020: {
    slidesPerView: 5,
    grid: {
      fill: "row",
      rows: 3,
    },
  },
  768: {
    slidesPerView: 4,
    grid: {
      fill: "row",
      rows: 2,
    },
  },
  524: {
    slidesPerView: 3,
    grid: {
      fill: "row",
      rows: 2,
    },
  },
  390: {
    slidesPerView: 2,
    grid: {
      fill: "row",
      rows: 2,
    },
  },
};
const fslider = ref(null);
const factiveIndex = ref(0);
const items = [
  "https://i.postimg.cc/26krBM1Y/photo.jpg",
  "https://i.postimg.cc/zf1JqV5V/photo-1.jpg",
  "https://i.postimg.cc/BQLsDxnj/photo-10.jpg",
  "https://i.postimg.cc/0QP20rHL/photo-12.jpg",
  "https://i.postimg.cc/KYn8TtQP/photo-13.jpg",
  "https://i.postimg.cc/ydj6QBMW/photo-14.jpg",
  "https://i.postimg.cc/MHG6gNw5/photo-15.jpg",
  "https://i.postimg.cc/J0dr8x4L/photo-16.jpg",
  "https://i.postimg.cc/y6fY01hb/photo-17.jpg",
  "https://i.postimg.cc/vHc8zJ3H/photo-18.jpg",
  "https://i.postimg.cc/BQkSwmV5/photo-19.jpg",
  "https://i.postimg.cc/FKghzNsG/photo-2.jpg",
  "https://i.postimg.cc/0ySkg7TT/photo-20.jpg",
  "https://i.postimg.cc/sXTyPmWh/photo-6.jpg",
  "https://i.postimg.cc/Kj4b0T7s/photo-7.jpg",
  "https://i.postimg.cc/WzKvC4Xp/photo-8.jpg",
  "https://i.postimg.cc/KcsxR9xX/photo-9.jpg",
];

const onSwiper = (swiper) => {
  fslider.value = swiper;
  swiper.on("slideChange", () => {
    factiveIndex.value = swiper.activeIndex;
  });
};

onMounted(() => {
  if (fslider.value) {
    fslider.value.slideTo(0);
  }
});
</script>

<style lang="scss" scoped>
.green {
  padding: 4px 8px 2px;
  background-color: #3bc76b4d;
  border-radius: 2px;
  color: #3bc76b;
  margin-left: 16px;
}
.gold {
  color: #cf6a32;
  font-weight: 700;
  margin-left: 16px;
}
.yellow {
  color: #ffdf34;
  font-weight: 700;
  margin-left: 16px;
}
.breadcrumbs {
  width: 100%;
  max-width: 1696px;
  display: block;
  margin-top: 32px;
  margin-bottom: 28px;
}
.item {
  @include container;

  &__container {
    width: 100%;
    max-width: 1696px;
    display: grid;
    grid-template-areas:
      "image header"
      "image info"
      "image buttons"
      "image pricing"
      "seller requests"
      "seller rest"
      "gallery gallery";
    grid-template-columns: 39.5% 59%;
    grid-template-rows: calc(90px + 20px + 20px) //header
      calc(184px + 57px) //info
      calc(56px + 32px) //buttons
      calc(24px + 20px + 48px + 24px) //pricing
      calc(22px + 12px + 160px + 48px) //requests
      calc(1000px); //rest
    column-gap: 20px;
    margin-bottom: 88px;
    position: relative;
  }

  &__right {
    width: 100%;
    max-width: 671px;
  }

  &__left {
    display: flex;
    flex-direction: column;
    max-width: 1013px;
  }

  &__gallery {
    grid-area: gallery;

    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  &__image {
    grid-area: image;

    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    max-width: 671px;

    overflow: hidden;
    justify-content: end;
    align-items: center;
    flex-direction: column;
    padding: 16px 0;

    &-bg {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }

    &-img {
      position: absolute;
      width: 80%;
      height: 80%;
      object-fit: contain;
      object-position: center;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto auto;
      z-index: 1;
    }

    &-stickers {
      margin-bottom: 10px;
      height: 40px;
      display: flex;
      gap: 16px;
      z-index: 2;
    }
  }

  &__seller-info {
    grid-area: seller;
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    gap: 16px;

    &-text {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    &-cards {
      display: flex;
      gap: 32px;
      width: 100%;
    }

    &-card {
      display: flex;
      align-items: center;
      gap: 16px;
    }
  }

  &__header {
    grid-area: header;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 1px;
      background-color: #ffffff1a;
      bottom: 20px;
    }
  }

  &__item-info {
    grid-area: info;
    display: flex;
    flex-direction: column;
    gap: 8px;

    &-string {
      display: flex;
      justify-content: space-between;
    }
  }

  &__buttons {
    grid-area: buttons;
    display: grid;
    grid-template-columns: 69% 28%;
    width: 100%;
    gap: 20px;

    &-buy,
    &-cart {
      width: 100%;
    }

    &-cart {
      background-color: #231f36;
    }
  }

  &__pricing {
    grid-area: pricing;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__rest {
    grid-area: rest;
    display: flex;
    flex-direction: column;
    gap: 48px;
  }

  &__request {
    grid-area: requests;

    display: flex;
    flex-direction: column;
    gap: 12px;

    &-string {
      display: flex;
      width: 100%;
      margin: 12px 0;
      justify-content: space-between;
    }
  }

  &__stats {
    display: flex;
    justify-content: space-between;

    &-item {
      display: flex;
      align-items: center;
      gap: 16px;
    }
  }

  &__graph {
    display: flex;
    flex-direction: column;
    gap: 16px;

    &-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &-dropdown {
      & *,
      *:hover {
        background-color: #100e19;
      }
    }

    &-chart {
      height: 244px;
    }
  }

  &__desc {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__similar {
    display: flex;
    flex-direction: column;
    gap: 24px;

    &-wrap {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    &-select {
      width: 100%;
      display: flex;
      gap: 12px;
    }

    &-button {
      width: 100%;
      background-color: #171424;
    }

    &-cards {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    &-card:not(:last-child)::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 1px;
      background-color: #ffffff1a;
      left: 0;
      bottom: -4px;
    }

    &-card {
      position: relative;
      padding: 6px 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &-right,
    &-left {
      display: flex;
      align-items: center;
    }

    &-left {
      justify-content: space-between;
      gap: 32px;
    }

    &-right {
      gap: 48px;
      width: 100%;
      justify-content: right;
    }

    &-right-button {
      width: 81px;
      height: 36px;
      background-color: #171424;
    }

    &-stickers {
      display: flex;
      justify-content: right;
      gap: 8px;
      width: 100%;
      max-width: 132px;

      & img {
        width: 20px;
        height: 20px;
      }
    }
  }

  @media (max-width: 1280px) {
    &__container {
      display: grid;
      grid-template-areas:
        "image header"
        "image info"
        "buttons buttons"
        "pricing pricing"
        "requests requests"
        "seller seller"
        "rest rest"
        "gallery gallery";
      gap: 12px;
      grid-template-columns: 39% 59%;
      grid-template-rows: calc(62px + 16px + 16px) //header
        calc(184px + 32px) //info
        calc(56px + 32px) //buttons
        calc(24px + 20px + 48px + 24px) // pricing
        calc(22px + 12px + 160px + 32px) //requests
        calc(78px + 16px + 48px + 24px + 24px) //seller
        auto; //rest
    }

    &__seller-info {
      margin-top: 0;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 1px;
        background-color: #ffffff1a;
        bottom: 24px;
      }
    }

    &__rest {
      margin-bottom: 40px;
    }
  }

  @media (max-width: 768px) {
    &__container {
      display: grid;
      grid-template-areas:
        "image"
        "header"
        "buttons"
        "pricing"
        "requests"
        "info"
        "seller"
        "rest"
        "gallery";
      grid-template-columns: 100%;
      gap: 0;
      grid-template-rows: calc(316px + 12px) //image
        calc(62px + 16px + 16px) //header
        calc(48px + 12px + 48px + 32px) //buttons
        calc(24px + 20px + 48px + 24px) // pricing
        calc(22px + 12px + 144px + 16px + 24px) //requests
        calc(184px + 48px) // info
        calc(78px + 16px + 104px + 24px + 24px) //seller
        auto // rest
;
    }

    &__buttons {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    &__request {
      position: relative;

      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 1px;
        background-color: #ffffff1a;
        bottom: 16px;
      }
    }

    &__seller-info {
      &::after {
        bottom: 24px;
      }
    }

    &__seller-info-cards {
      flex-wrap: wrap;
      gap: 16px;
    }

    &__stats {
      flex-wrap: wrap;
      gap: 16px;
    }

    &__similar-card {
      padding: 0;

      * {
        font-size: 12px;
        margin: 0;
      }
    }

    &__similar-stickers {
      gap: 4px;
    }

    &__similar-left {
      gap: 10px;
      :first-child {
        display: none;
        justify-content: left;
      }
    }

    &__similar-right {
      gap: 0;
      justify-content: space-between;
      :last-child {
        display: none;
      }
    }
  }
}

.swiper-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
}
#fswiper {
  width: 100%;
  max-height: 524px;
}
.fswiper__slide {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.fswiper__slide img {
  max-width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
}

.swiper__left,
.swiper__right {
  cursor: pointer;
}

.swiper__left {
  position: absolute;
  top: 45%;
  z-index: 2;
  left: 0;
}

.swiper__right {
  position: absolute;
  top: 45%;
  right: 0;
  z-index: 2;
}

@media (min-width: 1920px) {
  .swiper__left {
    left: -3%;
  }
  .swiper__right {
    right: -3%;
  }
}

@media (max-width: 1280px) {
  .swiper-wrapper {
    margin-bottom: 80px;
  }
  .swiper__left {
    display: none;
  }
  .swiper__right {
    display: none;
  }
}
</style>
