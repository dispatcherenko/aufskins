<template>
  <section class="wrapper">
    <h1 class="title">Крупные покупки 24 часа</h1>
    <div class="courusel">
      <div v-for="skin in skins" :key="skin.id">
        <SkinCardMini :skin="skin" />
      </div>
    </div>
  </section>
</template>

<script setup>
import SkinCardMini from "@/entities/skin/UI/SkinCardMini.vue";
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

onMounted(() => {
  {
    fetchBest();
  }
});
</script>

<style scoped>
.wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2 0px;
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
@media (max-width: 1280px) {
  .title {
    margin-left: 30px;
  }
  .courusel {
    margin-left: 30px;
  }
}
</style>
