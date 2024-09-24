<template>
  <div class="cbcontainer">
    <input
      class="checkbox"
      type="checkbox"
      :name="name"
      :id="id"
      v-model="checked"
    />
    <label :for="id" class="checkbox-label"></label>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);

const checked = ref(props.modelValue);

watch(checked, (newValue) => {
  emit("update:modelValue", newValue);
});

watch(
  () => props.modelValue,
  (newValue) => {
    checked.value = newValue;
  }
);
</script>

<style lang="scss" scoped>
.cbcontainer {
  display: block;
  position: relative;
  cursor: pointer;
  width: 16px;
  height: 16px;
}

.checkbox {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.checkbox-label {
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 1px solid #ffffff40;
  border-radius: 4px;
  position: relative;
  transition: background-color 0.3s;
}

.checkbox:checked + .checkbox-label::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 4px;
  height: 8px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
