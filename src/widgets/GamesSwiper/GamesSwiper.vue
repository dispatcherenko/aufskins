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
      h("a", { class: "slide-info__button" }, "Перейти в раздел"),
    ]),
  ]),
  h("div", { class: "slide-wrapper" }, [
    h("img", {
      src: dota2slider,
      alt: "dota",
      class: "slide-img",
    }),
    h("div", { class: "slide-info" }, [
      h("h1", { class: "slide-info__title" }, "DOTA 2"),
      h("p", { class: "slide-info__text" }, ["Инфа про доту 2", h("br")]),
      h("a", { class: "slide-info__button" }, "Перейти в раздел"),
    ]),
  ]),
  h("div", { class: "slide-wrapper" }, [
    h("img", {
      src: rustslider,
      alt: "rust",
      class: "slide-img",
    }),
    h("div", { class: "slide-info" }, [
      h("h1", { class: "slide-info__title" }, "RUST"),
      h("p", { class: "slide-info__text" }, ["Инфа про Rust", h("br")]),
      h("a", { class: "slide-info__button" }, "Перейти в раздел"),
    ]),
  ]),
  h("div", { class: "slide-wrapper" }, [
    h("img", {
      src: tf2slider,
      alt: "tf2",
      class: "slide-img",
    }),
    h("div", { class: "slide-info" }, [
      h("h1", { class: "slide-info__title" }, "Tesm Fortress2"),
      h("p", { class: "slide-info__text" }, ["Инфа про tf2", h("br")]),
      h("a", { class: "slide-info__button" }, "Перейти в раздел"),
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
}
:deep .slide-info__title {
  font-size: 28px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 8px;
}
:deep .slide-info__text {
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  margin-bottom: 25px;
}
:deep .slide-info__button {
  padding: 0;
  width: 214px;
  height: 56px;
  background-color: rgba(196, 19, 65, 1);
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  clip-path: polygon(11% 0, 93% 0, 100% 69%, 89% 100%, 7% 100%, 0 27%);
  cursor: pointer;

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
