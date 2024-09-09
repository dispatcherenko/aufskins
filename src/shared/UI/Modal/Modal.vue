<template>
  <transition name="modal-fade">
    <div class="modal" v-if="isOpen">
      <div class="bg" @click="close"></div>
      <div class="window">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script setup>
const props = defineProps({ isOpen: Boolean, close: Function });
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
  background-color: #00000080;
}

.window {
  background-color: #100e19;
  border-radius: 2px;
  z-index: 1001;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.2s;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
