<template>
  <div class="message">
    <p class="footnote grey">{{ time }}</p>
    <p class="body">{{ message }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  time: String,
  message: String,
  status: String,
});
</script>

<style lang="scss" scoped>
.message {
  text-align: end;
  gap: 8px;
}
</style>
