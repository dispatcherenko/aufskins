<template>
  <a class="button">
    <p class="body">{{ text }}</p>
    <p v-if="add" class="body add">{{ add }}</p>
    <img v-if="img" :src="img" />
  </a>
</template>

<script setup>
const props = defineProps({
  text: String,
  add: String,
  img: String,
});
</script>

<style lang="scss" scoped>
.button {
  display: flex;
  padding: 12px 6px;
  background-color: #c41341;
  border-radius: 2px;

  &:hover {
    background-color: #98072d;
  }
}

.add {
  margin-left: 5px;
  color: #ffffff80;
}
</style>
