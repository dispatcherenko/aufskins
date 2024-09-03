<template>
  <SwiperTemplate :content="componentsArray" />
</template>

<script setup>
import SwiperTemplate from "@/shared/UI/SwiperTemplate.vue";
import { h } from "vue";

import banner from "@/assets/mainpage/banner.jpg";

const componentsArray = [
  h("img", {
    src: banner,
    alt: "cs",
    width: "100%",
    height: "100%",
    style: { zIndex: 1 },
  }),
  h("img", {
    src: banner,
    alt: "cs",
    width: "100%",
    height: "100%",
    style: { zIndex: 1 },
  }),
  h("img", {
    src: banner,
    alt: "cs",
    width: "100%",
    height: "100%",
    style: { zIndex: 1 },
  }),
  h("img", {
    src: banner,
    alt: "cs",
    width: "100%",
    height: "100%",
    style: { zIndex: 1 },
  }),
];
</script>
