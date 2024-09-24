<template>
  <transition name="modal-fade">
    <div class="modal" v-if="isOpen">
      <div class="bg" @click="close"></div>
      <div class="window">
        <a v-if="closable" class="exit" @click="close">
          <Exit class="cross" />
        </a>
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script setup>
import Exit from "@/assets/icons/exit.svg?component";
const props = defineProps({
  isOpen: Boolean,
  close: Function,
  closable: { type: Boolean, default: true },
});
</script>

<style lang="scss" scoped>
.exit {
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  width: 16px;
  height: 16px;
  padding: 0;
  z-index: 10000;

  @media (max-width: 1280px) {
    top: 20px;
    right: 20px;
  }
}

.cross {
  color: #ffffff80;
  transition: all 0.2s;

  &:hover {
    color: #c41341;
  }
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
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
  position: relative;
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
