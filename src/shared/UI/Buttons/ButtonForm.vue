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
  padding: 0;
  width: 259px;
  height: 56px;
  background-color: #c41341;
  display: flex;
  justify-content: center;
  align-items: center;
  clip-path: polygon(6% 0, 90% 0, 100% 30%, 94% 100%, 10% 100%, 0 70%);
  cursor: pointer;
  border: none;
  outline: none;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  gap: 10px;

  transition: all 0.2s;
}
.button:hover {
  background-color: #98072d;
}
.button:disabled {
  background-color: #ffffff1a;
  cursor: default;

  p {
    color: #ffffff80;
  }
}
@media (max-width: 1280px) {
  .button__title--add {
    display: none;
  }
}
</style>
