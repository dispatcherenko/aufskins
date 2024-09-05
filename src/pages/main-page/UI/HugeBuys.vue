<template>
  <section class="wrapper">
    <h4 class="title">Крупные покупки 24 часа</h4>
    <swiper
      :freeMode="true"
      :loop="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :spaceBetween="12"
      :slidesPerView="'auto'"
      :modules="modules"
      class="courusel"
    >
      <swiper-slide v-for="skin in skins" :key="skin.id">
        <SkinCardMini :skin="skin" />
      </swiper-slide>
    </swiper>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import SkinCardMini from "@/entities/skin/UI/PopularCard.vue";
import axios from "axios";
import { onMounted, ref } from "vue";
import { Autoplay, FreeMode } from "swiper/modules";

let skins = ref([]);

const modules = [FreeMode, Autoplay];

const fetchBest = async () => {
  try {
    const res = await axios.get(`https://9be368f409e5ba1b.mokky.dev/hugebuys`);
    skins.value = res.data;
  } catch (e) {
    console.log(e);
  }
};

onMounted(() => {
  {
    fetchBest();
  }
});
</script>

<style scoped>
.wrapper {
  width: 100%;
  max-width: 1696px;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 20px;
}
.title {
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 30px;
}
.courusel {
  width: 105%;
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
  height: 174px;
  overflow: hidden;
  overflow-x: scroll;
  scrollbar-width: none;
}
.courusel::-webkit-scrollbar {
  width: 0;
  height: 0;
}

.swiper-slide {
  /* Center slide text vertically */
  display: flex;
}

.swiper-slide {
  width: 184px;
}

@media (max-width: 1280px) {
  .wrapper {
  }
}
</style>
