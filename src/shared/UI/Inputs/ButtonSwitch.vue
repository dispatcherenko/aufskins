<template>
  <div class="switch" @click="toggleOption">
    <div class="button" :class="{ active: isFirstActive }">
      {{ option1 }}
    </div>
    <div class="button" :class="{ active: !isFirstActive }">
      {{ option2 }}
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  option1: String,
  option2: String,
});

const isFirstActive = ref(true);

const toggleOption = () => {
  isFirstActive.value = !isFirstActive.value;
};
</script>

<style lang="scss" scoped>
.switch {
  width: 100%;
  height: 48px;
  background-color: #171424;
  border-radius: 2px;

  display: flex;
  overflow: hidden;
  cursor: pointer;

  color: white;
  padding: 4px;
}

.button {
  flex: 1;
  padding: 8px 16.5px;
  text-align: center;
}

.active {
  border-radius: 2px;
  background-color: #231f36;
}
</style>
