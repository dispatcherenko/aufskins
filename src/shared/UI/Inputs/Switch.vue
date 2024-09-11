<template>
  <label :for="name" class="container" :class="class">
    <input
      class="input"
      type="checkbox"
      :name="name"
      :id="id"
      :checked="isActive"
      @change="toggle"
    />
    <span class="checkmark" :class="{ 'checkmark--checked': isActive }"></span>
  </label>
</template>

<script setup>
const props = defineProps({
  name: String,
  id: String,
  isActive: Boolean,
  action: Function,
  class: String,
});

const emit = defineEmits(["update"]);

const toggle = () => {
  emit("update", !props.isActive);
};
</script>

<style lang="scss" scoped>
.container {
  display: block;
  width: 45px;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: #231f36;
  border-radius: 4px;
  transition:
    background-color 0.3s,
    left 0.3s;
}

.checkmark::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: 2px;
  width: calc(50%);
  height: calc(100% - 5px);
  background-color: #fff;
  border-radius: 2px;
  transition: left 0.3s;
}

.checkmark--checked {
  background-color: #c41341;
}

.checkmark--checked::after {
  left: calc(50% - 2px);
}
</style>
