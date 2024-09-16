<script setup>
import Arrow from "@/assets/nav/arrowDown.svg?component";
import { ref } from "vue";

const props = defineProps({ name: String });

const isOpen = ref(false);
</script>

<template>
  <div class="filter">
    <div class="filter__selected" @click="isOpen = !isOpen">
      <Arrow class="arrow" :class="{ open: isOpen }" />
      <p class="upperbody">{{ name }}</p>
    </div>
    <transition>
      <div v-if="isOpen" class="filter__options">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.arrow {
  transition: all 0.2s;
  &.open {
    transform: rotate(180deg);
  }
}

.filter {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;

  &__selected {
    cursor: pointer;
    display: flex;
    padding: 12px 0;
    align-items: center;
    gap: 17.5px;

    * {
      cursor: pointer;
    }
  }
}

.v-enter-active,
.v-leave-active {
  transition: all 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  transform: translateY(-10%);
  opacity: 0;
}
</style>
