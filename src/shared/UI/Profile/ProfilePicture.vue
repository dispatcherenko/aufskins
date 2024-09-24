// Аватар пользователя, передается url фотки

<template>
  <div class="pfp-container" :style="containerStyle">
    <img :src="border" alt="border" class="pfp-border" :style="borderStyle" />
    <svg
      class="pfp"
      :width="size - 10"
      :height="size - 10"
      viewBox="0 0 152 152"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask id="svgmask1">
        <path
          d="M17.3756 152L0 109.929L12.1462 0H134.624L152 42.0714L139.854 152H17.3756Z"
          fill="#ffffff"
        />
      </mask>
      <image :href="image" width="152" height="152" mask="url(#svgmask1)" />
    </svg>
  </div>
</template>

<script setup>
import pfp from "./photo.jpg";
import border from "./border.svg";
import { computed } from "vue";

const props = defineProps({
  image: String,
  size: {
    type: Number,
    default: 152,
  },
});

const containerStyle = computed(() => ({
  width: `${props.size}px`,
  height: `${props.size}px`,
}));

const borderStyle = computed(() => ({
  width: `${props.size}px`,
  height: `${props.size}px`,
}));
</script>

<style lang="scss" scoped>
.pfp-container {
  position: relative;
  align-self: center;
  margin-bottom: 16px;
}

.pfp-border {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  z-index: 0;
}

.pfp {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 1;
}
</style>
