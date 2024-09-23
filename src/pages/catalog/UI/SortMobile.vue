<script setup lang="ts">
import { useSortStore } from "@/features/catalog/sort";
import ModalBottom from "@/shared/UI/Modal/ModalBottom.vue";
const sortStore = useSortStore();
</script>

<template>
  <ModalBottom :is-open="sortStore.isOpen" :close="sortStore.closeMenu">
    <div class="sort">
      <h4>Сортировка</h4>
      <div class="sort__options">
        <div
          class="sort__option"
          v-for="sort in sortStore.sorts"
          :key="sort.id"
        >
          <label :for="sort.id" class="container body"
            >{{ sort.name }}
            <input
              type="radio"
              name="sort"
              :id="sort.id"
              :checked="sort.selected" />
            <span class="checkmark"></span
          ></label>
        </div>
      </div>
    </div>
  </ModalBottom>
</template>

<style lang="scss" scoped>
.sort {
  width: 100vw;
  max-width: 768px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  a {
    width: 100%;
  }

  &__options {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .container {
    display: block;
    position: relative;
    padding-left: 0;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  /* Hide the browser's default radio button */
  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  /* Create a custom radio button */
  .checkmark {
    position: absolute;
    top: 4px;
    right: 0;
    height: 16px;
    width: 16px;
    background-color: transparent;
    outline: 1px #ffffff40 solid;
    border-radius: 50%;
  }

  /* On mouse-over, add a grey background color */
  .container:hover input ~ .checkmark {
  }

  /* When the radio button is checked, add a blue background */
  .container input:checked ~ .checkmark {
    background-color: transparent;
  }

  /* Create the indicator (the dot/circle - hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the indicator (dot/circle) when checked */
  .container input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the indicator (dot/circle) */
  .container .checkmark:after {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: white;
  }
}
</style>
