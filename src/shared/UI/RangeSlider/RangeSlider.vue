<template>
  <div ref="slider" class="custom-slider minmax">
    <div class="minmax-indicator"></div>
    <input
      ref="inputMin"
      type="range"
      name="min"
      id="min"
      :min="min"
      :max="max"
      :value="sliderMinValue"
      :step="step"
      @input="onInput"
    />
    <input
      ref="inputMax"
      type="range"
      name="max"
      id="max"
      :min="min"
      :max="max"
      :value="sliderMaxValue"
      :step="step"
      @input="onInput"
    />
  </div>
  <div class="minmax-inputs">
    <TextInput
      type="number"
      placeholder="от"
      :step="step"
      v-model.number="sliderMinValue"
    />
    <TextInput
      type="number"
      placeholder="до"
      :step="step"
      v-model.number="sliderMaxValue"
    />
  </div>
</template>

<script setup>
import { computed, ref, watchEffect, watch } from "vue";
import TextInput from "../Inputs/TextInput.vue";

// define component props for the slider component
const { min, max, step, minValue, maxValue } = defineProps({
  min: {
    type: Number,
    default: 0.01,
  },
  max: {
    type: Number,
    default: 100,
  },
  step: {
    type: Number,
    default: 0.01,
  },
  minValue: {
    type: Number,
    default: 1,
  },
  maxValue: {
    type: Number,
    default: 100,
  },
});

// define emits for the slider component
const emit = defineEmits(["update:minValue", "update:maxValue"]);

// define refs for the slider element and the slider values
const slider = ref(null);
const inputMin = ref(null);
const inputMax = ref(null);
const sliderMinValue = ref(minValue);
const sliderMaxValue = ref(maxValue);

// function to get the percentage of a value between the min and max values
const getPercent = (value, min, max) => {
  return ((value - min) / (max - min)) * 100;
};

// function to set the css variables for width, left and right
const setCSSProps = (left, right) => {
  slider.value.style.setProperty("--progressLeft", `${left}%`);
  slider.value.style.setProperty("--progressRight", `${right}%`);
};

// watchEffect to emit the updated values, and update the css variables
// when the slider values change
watchEffect(() => {
  if (slider.value) {
    // emit slider values when updated
    emit("update:minValue", sliderMinValue.value);
    emit("update:maxValue", sliderMaxValue.value);

    // calculate values in percentages
    const leftPercent = getPercent(sliderMinValue.value, min, max);
    const rightPercent = 100 - getPercent(sliderMaxValue.value, min, max);

    // set the CSS variables
    setCSSProps(leftPercent, rightPercent);
  }
});

// validation sliderMinValue do not greater than sliderMaxValue and opposite
const onInput = ({ target }) => {
  if (target.name === "min") {
    if (parseFloat(target.value) > sliderMaxValue.value) {
      target.value = sliderMaxValue.value;
    }
    sliderMinValue.value = parseFloat(target.value);
  }

  if (target.name === "max") {
    if (parseFloat(target.value) < sliderMinValue.value) {
      target.value = sliderMinValue.value;
    }
    sliderMaxValue.value = parseFloat(target.value);
  }
};

// watch for changes in sliderMinValue and sliderMaxValue
watch(sliderMinValue, (newVal) => {
  emit("update:minValue", newVal);
});

watch(sliderMaxValue, (newVal) => {
  emit("update:maxValue", newVal);
});
</script>

<style>
@import url("./style.css");
</style>
