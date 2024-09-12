<template>
  <div
    class="wrapper"
    :class="{ focused: isFocused, filled: !!localValue }"
    :data-placeholder="placeholder"
  >
    <input
      class="input"
      :type="type"
      :name="name"
      :id="id"
      v-model="localValue"
      @focus="handleFocus"
      @blur="handleBlur"
    />

    <Button2 class="button" :text="buttonText" :onclick="action" />
  </div>
</template>

<script setup>
import { defineProps, defineEmits, watch, ref } from "vue";
import Button2 from "../Buttons/Button2.vue";

const props = defineProps({
  name: String,
  id: String,
  placeholder: String,
  buttonText: String,
  type: { type: String, default: "text" },
  modelValue: { type: [String, Number], default: "" },
});

const isFocused = ref(false);
const localValue = ref(props.modelValue);

const emit = defineEmits(["update:modelValue"]);

const handleFocus = () => {
  isFocused.value = true;
};

const handleBlur = () => {
  isFocused.value = false;
};

watch(localValue, (newValue) => {
  emit("update:modelValue", newValue);
});

watch(
  () => props.modelValue,
  (newValue) => {
    localValue.value = newValue;
  },
  { immediate: true }
);
</script>

<style lang="scss" scoped>
.wrapper {
  height: 48px;
  position: relative;

  &::before {
    content: attr(data-placeholder);
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);

    font-family: Geometria;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: left;
    color: #ffffff40;
    pointer-events: none;
    transition:
      top 0.2s,
      font-size 0.2s;
  }

  &.focused::before,
  &.filled::before {
    top: 10px;
    font-size: 12px;
  }

  @media (max-width: 788px) {
    &::before {
      font-size: 12px;
    }
  }
}

.input {
  width: 95%;
  font-family: Geometria;
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  color: #ffffff;

  box-sizing: border-box;
  display: flex;
  align-items: center;
  height: 48px;
  padding: 12px 20px 3px;

  border: none;
  border-radius: 2px;
  background-color: #171424;

  &:focus {
    outline: none;
    align-items: end;
  }
}

.button {
  position: absolute;
  top: 0;
  right: 0;
  background-color: #231f36;
  gap: 0;
  width: auto;
  height: 100%;
  padding: 12px 20px;
}
</style>
