<template>
  <div class="switch">
    <div
      class="button"
      :class="{ active: option1.id === selected.id }"
      @click="changeSelection(option1)"
    >
      {{ option1.name }}
    </div>
    <div
      class="button"
      :class="{ active: option2.id === selected.id }"
      @click="changeSelection(option2)"
    >
      {{ option2.name }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  option1: Object,
  option2: Object,
  selected: Object,
});

const emit = defineEmits(["update:selected"]);

const changeSelection = (option) => {
  emit("update:selected", option);
};
</script>

<style lang="scss" scoped>
.switch {
  width: 212px;
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
  width: 100%;
  padding: 8px 0;
  text-align: center;
}

.active {
  border-radius: 2px;
  background-color: #231f36;
}
</style>
