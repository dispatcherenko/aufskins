<template>
  <div class="dropdown">
    <div class="dropdown-header" @click="toggleMenu">
      <p>{{ selected.name }}</p>
      <Arrow class="arrow" :class="{ open: isOpen }" />
    </div>

    <Transition>
      <div v-if="isOpen" class="dropdown-menu">
        <div
          v-for="option in options"
          :key="option.id"
          class="dropdown-item"
          @click="changeSelection(option)"
        >
          <p>
            {{ option.name }}
          </p>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import Arrow from "@/assets/nav/arrowDown.svg?component";
import { onMounted, onUnmounted, ref } from "vue";

const props = defineProps({
  name: String,
  options: Array,
  selected: Object,
});

const emit = defineEmits(["update:selected"]);

let isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
const changeSelection = (option) => {
  emit("update:selected", option);
  isOpen.value = false;
};
const closeMenuOnClickOutside = (event) => {
  if (!event.target.closest(".dropdown")) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", closeMenuOnClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", closeMenuOnClickOutside);
});
</script>

<style lang="scss" scoped>
.dropdown {
  position: relative;
  display: flex;
  justify-content: space-between;
}

.dropdown-header {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 12px 16px;
  border-radius: 4px;
  background-color: #171424;
  gap: 8px;
}

.dropdown-header:hover {
  background-color: #231f36;
  border-radius: 2px;
  transition: all 0.2s;
}

.arrow {
  transition: transform 0.3s;
}

.arrow.open {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: inline-block;
  width: 100%;
  padding: 5px 0;
  margin: 2px 0 0;
  font-size: 14px;
  text-align: left;
  list-style: none;
  background-color: #171424;
  color: #ffffff;
  border-radius: 4px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
}

.dropdown-item {
  padding: 16px 12px;
  cursor: pointer;
  display: flex;
}

.v-enter-active,
.v-leave-active {
  transition: transform 0.3s ease;
  transform-origin: top;
}

.v-enter-from,
.v-leave-to {
  transform: scaleY(0);
  transform-origin: top;
}
</style>
