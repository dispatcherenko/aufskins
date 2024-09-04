<template>
  <button class="button" :class="class">
    <img :src="img" :alt="alt" />
    <p class="button__title">
      {{ text }} <span class="button__title--add">{{ addText }}</span>
    </p>
  </button>
</template>

<script setup>
const props = defineProps({
  class: String,
  img: String,
  alt: String,
  text: String,
  addText: String,
});
</script>

<style scoped>
.button {
  width: 259px;
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
.button:hover {
  background-color: #98072d;
}
.button:disabled {
  background-color: #ffffff1a;
  cursor: default;
}
@media (max-width: 1280px) {
  .button__title--add {
    display: none;
  }
}
</style>
