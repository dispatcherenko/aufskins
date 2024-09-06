<template>
  <button class="button"><img class="img" :src="img" alt="icon" /></button>
</template>

<script setup>
const props = defineProps({
  img: String,
});
</script>

<style lang="scss" scoped>
.button {
  border: none;
  width: 48px;
  height: 48px;
  background-color: #c41341;
  border-radius: 50%;

  transition: all 0.2s;

  &:hover {
    background-color: #98072d;
  }
}
.img {
  display: block;
  margin: auto;
}
</style>
