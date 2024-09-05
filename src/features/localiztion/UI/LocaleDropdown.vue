<template>
  <div class="dropdown">
    <div class="dropdown-header" @click="toggleMenu">
      <img class="flag" :src="selectedCountry.flagURL" alt="flag" />
      <p>
        {{ selectedCountry.name }} |
        {{ selectedCountry.curr }}
      </p>
      <img :src="arrow" class="arrow" :class="{ open: isOpen }" />
    </div>

    <Transition>
      <div v-if="isOpen" class="dropdown-menu">
        <div
          v-for="country in countries"
          :key="country.name"
          class="dropdown-item"
          @click="changeSelection(country)"
        >
          <img class="flag" :src="country.flagURL" alt="flag" />
          <p>
            {{ country.name }} |
            {{ country.curr }}
          </p>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";

import arrow from "@/assets/nav/arrowDown.svg";
import ruflag from "@/assets/nav/ruflag.svg";
import enflag from "@/assets/nav/usflag.svg";

let isOpen = ref(false);
let countries = ref([
  { flagURL: ruflag, name: "RU", curr: "₽" },
  { flagURL: enflag, name: "EN", curr: "$" },
]);
let selectedCountry = ref({
  flagURL: ruflag,
  name: "RU",
  curr: "₽",
});

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
const changeSelection = (country) => {
  selectedCountry.value = country;
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

<style lang="css" scoped>
.dropdown {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 141px;
}

.dropdown-header {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 12px 16px;
  border-radius: 4px;
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
  width: 141px;
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

  .flag {
    margin-right: 12px;
  }
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

.flag {
  width: 20px;
  height: 15px;

  align-self: center;
}
</style>
