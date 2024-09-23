<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { onClickOutside } from "@vueuse/core";
import { useRouter } from "vue-router";
import { useLogoutModalStore } from "@/features/auth/store/index.js";
import { useUserMenuStore } from "../store";
import Option from "@/shared/UI/Menu/Option.vue";
import history from "@/assets/menu/history.svg?url";
import inventory from "@/assets/menu/inventory.svg?url";
import logout from "@/assets/menu/logout.svg?url";
import notifications from "@/assets/menu/notification.svg?url";
import profile from "@/assets/menu/profile.svg?url";

const router = useRouter();
const modalStore = useLogoutModalStore();
const menuStore = useUserMenuStore();

const navigateTo = (path) => {
  router.push(`/profile/${path}`);
};

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
    <div ref="target" class="buttons" v-if="menuStore.isOpen">
      <Option :img="profile" text="Профиль" @click="navigateTo('')" />
      <Option
        :img="notifications"
        text="Уведомления"
        @click="navigateTo('notifications')"
      />
      <span class="divider"></span>
      <Option
        :img="inventory"
        text="Инвентарь"
        @click="navigateTo('inventory')"
      />
      <Option :img="history" text="Сделки" @click="navigateTo('history')" />
      <span class="divider"></span>
      <Option :img="logout" text="Выйти" @click="modalStore.openModal" />
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.buttons {
  position: fixed;
  top: 100px;
  right: 35px;

  background-color: #100e19;
  display: flex;
  flex-direction: column;
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
