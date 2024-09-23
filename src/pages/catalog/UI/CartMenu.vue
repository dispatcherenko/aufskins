<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { onClickOutside } from "@vueuse/core";
import { useCartMenuStore } from "../store";

import Exit from "@/assets/icons/exit.svg?component";
import CartItem from "./CartItem.vue";
import Button2 from "@/shared/UI/Buttons/Button2.vue";
import { useCartStore } from "@/entities/user/model";

const getProductWord = (count) => {
  const lastDigit = count % 10;
  const isException = count > 10 && count < 20;

  if (isException) {
    return "товаров";
  }

  if (lastDigit === 1) {
    return "товар";
  }

  if (lastDigit >= 2 && lastDigit <= 4) {
    return "товара";
  }

  return "товаров";
};

const cartStore = useCartStore();

const menuStore = useCartMenuStore();

const closeMenu = () => {
  menuStore.closeMenu();
};

const target = ref(null);

onClickOutside(target, (e) => {
  e.stopPropagation();
  closeMenu();
});

const handleScroll = () => {
  closeMenu();
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <transition>
    <div ref="target" class="cart" v-if="menuStore.isOpen">
      <a class="exit" @click="menuStore.closeMenu">
        <Exit class="cross" />
      </a>
      <div class="cart__header">
        <p class="upperBody">
          Корзина ·
          <span class="grey"
            >{{ cartStore.cart.length }}
            {{ getProductWord(cartStore.cart.length) }}</span
          >
        </p>
        <a class="cart__close body" @click="menuStore.closeMenu">Закрыть</a>
      </div>
      <div class="cart__mid">
        <CartItem v-for="skin in cartStore.cart" :key="skin.id" :skin="skin" />
      </div>
      <div class="cart__footer">
        <div class="cart__footer-total">
          <h4>Итого</h4>
          <h4>{{ cartStore.total }} <span class="grey">₽</span></h4>
        </div>
        <Button2 text="Оплатить" />
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.exit {
  position: absolute;
  top: 23px;
  right: 22px;
  background: transparent;
  border: none;
  width: 16px;
  height: 16px;
  padding: 0;
  z-index: 10000;

  @media (max-width: 1280px) {
    display: none;
  }
}

.cross {
  color: #ffffff80;
  transition: all 0.2s;

  &:hover {
    color: #c41341;
  }
}

.cart {
  position: fixed;
  top: 100px;
  right: 400px;
  width: 473px;
  height: 80vh;
  background-color: #100e19;
  display: flex;
  flex-direction: column;

  &__header {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: #ffffff1a 1px solid;
  }

  &__close {
    display: none;
    color: #c41341;
  }

  &__mid {
    padding: 16px 20px;
    height: 100%;
    overflow-y: scroll;
  }

  &__footer {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;

    &-total {
      display: flex;
      justify-content: space-between;
    }

    a {
      width: 100%;
    }
  }

  @media (max-width: 1280px) {
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 1000;
    &__header {
      p {
        font-size: 24px;
      }
    }
    &__close {
      display: block;
    }
  }
}

.v-enter-active,
.v-leave-active {
  transition: all 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  transform: translateY(-10%);
  opacity: 0;
}
</style>
