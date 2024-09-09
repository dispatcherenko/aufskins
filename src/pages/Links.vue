<template>
  <div v-html="htmlContent"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const htmlContent = ref("");

onMounted(async () => {
  try {
    const response = await fetch("/path/to/links.html");
    htmlContent.value = await response.text();
  } catch (error) {
    console.error("Failed to load HTML content:", error);
  }
});
</script>

<style scoped>
/* Ваши стили */
</style>
