<template>
  <div class="swiper-wrapper">
    <swiper
      @swiper="onSwiper"
      :spaceBetween="100"
      :centeredSlides="true"
      :modules="modules"
      id="fswiper"
    >
      <swiper-slide
        class="fswiper__slide"
        v-for="(item, index) in content"
        :key="index"
      >
        <component :is="item"></component>
      </swiper-slide>
    </swiper>
    <div>
      <img
        @click="() => fslider.slidePrev()"
        class="swiper__left"
        src="@/assets/mainpage/leftarrow.svg"
        alt="arrow"
      />
      <img
        @click="() => fslider.slideNext()"
        class="swiper__right"
        src="@/assets/mainpage/rightarrow.svg"
        alt="arrow"
      />
      <div class="swiper__carousel">
        <span
          v-for="(item, index) in content"
          :key="index"
          class="swiper__carousel-item"
          :class="factiveIndex === index ? 'active' : ''"
          @click="fslider.slideTo(index)"
        ></span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

const props = defineProps({
  content: Array,
});

const modules = [Autoplay, Pagination, Navigation];
const fslider = ref(null);
const factiveIndex = ref(0);

const onSwiper = (swiper) => {
  fslider.value = swiper;
  swiper.on("slideChange", () => {
    factiveIndex.value = swiper.activeIndex;
  });
};
</script>

<style scoped>
.swiper-wrapper {
  width: 100%;
  position: relative;
  margin-bottom: 120px;
}
#fswiper {
  width: 100%;
  max-height: 524px;
}
.fswiper__slide {
  width: 100%;
  height: 100%;
}
.swiper__left {
  position: absolute;
  top: 40%;
  z-index: 2;
  left: 0;
}
.swiper__right {
  position: absolute;
  top: 40%;
  right: 0;
  z-index: 2;
}
.swiper__carousel {
  position: absolute;
  display: flex;
  gap: 2px;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}
.swiper__carousel-item {
  width: 8px;
  height: 4px;
  background: rgba(255, 255, 255, 0.5);
  transition: 0.3s;
}
.swiper-pagination-bullet {
  width: 8px;
  height: 4px;
  background: rgba(255, 255, 255, 0.5);
  transition: 0.3s;
}
.swiper__carousel-item.active {
  width: 77px;
  height: 4px;
  background-color: #fff;
  transition: 0.3s;
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

@media (max-width: 768px) {
}
</style>
