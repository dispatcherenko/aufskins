<template>
  <Modal :is-open="modalStore.isOpen" :close="modalStore.closeModal">
    <div class="container">
      <div class="upper">
        <div class="title-wrap">
          <p class="title">Хотите выйти из аккаунта?</p>
          <a class="exit" @click="modalStore.closeModal">
            <Exit class="cross" />
          </a>
        </div>
        <p class="text">
          Если захотите воспользоваться сервисом, то вам придется снова войти
          через Steam
        </p>
      </div>
      <div class="lower">
        <Button2 class="red" text="Выйти" @click="handleLogout" />
        <Button2 class="black" text="Отмена" @click="modalStore.closeModal" />
      </div>
    </div>
  </Modal>
</template>

<script setup>
import { useLogoutModalStore } from "@/features/auth/store/index.js";
import Button2 from "@/shared/UI/Buttons/Button2.vue";
import Modal from "@/shared/UI/Modal/Modal.vue";
import Exit from "@/assets/icons/exit.svg?component";
import { useRouter } from "vue-router";

const modalStore = useLogoutModalStore();

const router = useRouter();

const handleLogout = () => {
  modalStore.logout();
  router.push("/");
};
</script>

<style lang="scss" scoped>
.container {
  width: 448px;
  height: 216px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.upper {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.title-wrap {
  display: flex;
  justify-content: space-between;
}
.title {
  //styleName: desktop/subHeader;
  font-family: Geometria;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  text-align: center;
}
.exit {
  background: transparent;
  border: none;
  width: 16px;
  height: 16px;
  padding: 0;
}
.cross {
  color: #ffffff80;
  transition: all 0.2s;

  &:hover {
    color: #c41341;
  }
}
.text {
  max-width: 351px;
  color: #ffffff80;
  font-family: Geometria;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
}
.lower {
  display: flex;
  gap: 20px;
}
.red,
.black {
  gap: 0;
}
.black {
  background-color: #231f36;
}
</style>
