<template>
  <SwiperTemplate :content="componentsArray" />
</template>

<script setup>
import SwiperTemplate from "@/shared/UI/SwiperTemplate.vue";
import { h } from "vue";

import cs2slider from "@/assets/mainpage/cs2slider.png";
import dota2slider from "@/assets/mainpage/dota2slider.jpg";
import rustslider from "@/assets/mainpage/rustslider.jpg";
import tf2slider from "@/assets/mainpage/tf2slider.jpg";

const componentsArray = [
  h("div", { class: "slide-wrapper" }, [
    h("img", {
      src: cs2slider,
      alt: "cs",
      class: "slide-img",
    }),
    h("div", { class: "slide-info" }, [
      h("h1", { class: "slide-info__title" }, "CS2"),
      h("p", { class: "slide-info__text" }, [
        "Уникальные ножи, AWP и все другое, что вы так сильно",
        h("br"),
        "любите, только на AUFSKINS",
      ]),
      h("button", { class: "slide-info__button" }, "Перейти в раздел"),
    ]),
  ]),
  h("div", { class: "slide-wrapper" }, [
    h("img", {
      src: dota2slider,
      alt: "dota",
      class: "slide-img",
    }),
    h("div", { class: "slide-info" }, [
      h("h1", { class: "slide-info__title" }, "CS2"),
      h("p", { class: "slide-info__text" }, [
        "Уникальные ножи, AWP и все другое, что вы так сильно",
        h("br"),
        "любите, только на AUFSKINS",
      ]),
      h("button", { class: "slide-info__button" }, "Перейти в раздел"),
    ]),
  ]),
  h("div", { class: "slide-wrapper" }, [
    h("img", {
      src: rustslider,
      alt: "rust",
      class: "slide-img",
    }),
    h("div", { class: "slide-info" }, [
      h("h1", { class: "slide-info__title" }, "CS2"),
      h("p", { class: "slide-info__text" }, [
        "Уникальные ножи, AWP и все другое, что вы так сильно",
        h("br"),
        "любите, только на AUFSKINS",
      ]),
      h("button", { class: "slide-info__button" }, "Перейти в раздел"),
    ]),
  ]),
  h("div", { class: "slide-wrapper" }, [
    h("img", {
      src: tf2slider,
      alt: "tf2",
      class: "slide-img",
    }),
    h("div", { class: "slide-info" }, [
      h("h1", { class: "slide-info__title" }, "CS2"),
      h("p", { class: "slide-info__text" }, [
        "Уникальные ножи, AWP и все другое, что вы так сильно",
        h("br"),
        "любите, только на AUFSKINS",
      ]),
      h("button", { class: "slide-info__button" }, "Перейти в раздел"),
    ]),
  ]),
];
</script>

<style scoped>
:deep .slide-wrapper {
  width: 100%;
  display: flex;
  height: 524px;
}
:deep .slide-img {
  z-index: 1;
  position: absolute;
  align-self: center;
  width: 100%;
}
:deep .slide-info {
  z-index: 1000;
  position: relative;
  justify-content: end;
  margin: 32px 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
:deep .slide-info__title {
  font-size: 28px;
  font-weight: 700;
  color: #fff;
}
:deep .slide-info__text {
  font-size: 16px;
  font-weight: 500;
  color: #fff;
}
:deep .slide-info__button {
  width: 214px;
  height: 56px;
  background: #c41341;
  text-align: center;
  clip-path: polygon(6% 0, 90% 0, 100% 30%, 94% 100%, 10% 100%, 0 70%);
  cursor: pointer;
  border: none;
  outline: none;
  color: #fff;
  font-size: 18px;

  transition: all 0.2s;
}

:deep .slide-info__button:hover {
  background-color: rgb(166, 16, 56);
}

@media (max-width: 1280px) {
  ::v-deep .slide-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  ::v-deep .slide-info {
    margin: 60px 20px;
  }
}
</style>
