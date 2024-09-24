<template>
  <div
    class="card"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @click="toItemPage"
  >
    <div
      v-if="cartStore.cart.find((item) => item.id === skin.id)"
      class="added"
    >
      <img :src="done" class="added__check" />
    </div>
    <div class="upper">
      <img :src="imagePath" alt="bg" class="level" />
      <img :src="skin.imageURL" alt="skin" class="item" />
      <div class="stickers">
        <img v-for="sticker in skin.stickers" :src="sticker" alt="sticker" />
      </div>
    </div>
    <div class="bottom">
      <p class="bottom__info-price">
        <span class="grey">от </span>
        {{ skin.price }}
        <span class="grey"> ₽</span>
      </p>
      <p class="bottom__info-name">
        {{ skin.name }}
        <span
          style="
            font-size: 12px;
            color: rgba(255, 255, 255, 0.5);
            margin-left: 5px;
          "
          >{{ skin.gun }}</span
        >
      </p>
      <img
        class="bottom__info-bar"
        src="@/assets/mainpage/bar.svg"
        alt="bar"
        v-if="skin.pattren"
      />
      <div class="bottom__info-bottom">
        <span class="bottom__info-bottom__quality">
          <span class="bottom__info-bottom__quality--gold" v-if="skin.sv"
            >SV
          </span>
          <span class="bottom__info-bottom__quality--orange" v-if="skin.st"
            >ST
          </span>
          <span v-if="skin.st || skin.sv" style="display: block">|</span>
          <span v-if="skin.quality">{{ skin.quality }}</span>
        </span>
        <p class="bottom__info-bottom__pattern">
          {{ skin.pattren }}
        </p>
      </div>
    </div>
    <div
      v-if="
        hover ||
        cartStore.cart.find((item) => item.id === skin.id) ||
        (isMobile && !cartStore.cart.find((item) => item.id === skin.id))
      "
      class="bottom__buttons"
    >
      <ButtonXS
        text="Купить"
        class="bottom__button"
        @click="submitModal.openModal"
      />
      <ButtonXS
        :img="cart"
        v-if="
          (hover && !cartStore.cart.find((item) => item.id === skin.id)) ||
          (isMobile && !cartStore.cart.find((item) => item.id === skin.id))
        "
        class="bottom__cart"
        @click="cartStore.addItem(skin, $event)"
      ></ButtonXS>

      <ButtonXS
        :img="cartDelete"
        v-if="cartStore.cart.find((item) => item.id === skin.id)"
        class="bottom__cart--active"
        @click="cartStore.removeItem(skin, $event)"
      ></ButtonXS>
    </div>
  </div>
</template>

<script setup>
import done from "@/assets/control/check.svg?url";
import ButtonXS from "@/shared/UI/Buttons/ButtonXS.vue";
import { ref, onMounted, onRenderTracked, watch, onBeforeUnmount } from "vue";
import { useCartStore } from "@/entities/user/model";
const cartStore = useCartStore();
import cart from "@/assets/icons/cart-white.svg?url";
import cartDelete from "@/assets/icons/cartDelete.svg?url";

import { useSubmitModal } from "@/pages/item/store";
const submitModal = useSubmitModal();

import { useRouter } from "vue-router";
const router = useRouter();

const props = defineProps({
  skin: Object,
});

const imagePath = ref("");
const hover = ref(false);

const getImagePath = async (level) => {
  const module = await import(`@/assets/levels/${level}.svg`);
  return module.default;
};

const updateImagePath = async () => {
  imagePath.value = await getImagePath(props.skin.level);
};

const toItemPage = (e) => {
  e.stopPropagation();
  router.push("/item/1");
};

onMounted(updateImagePath);

watch(() => props.skin, updateImagePath, { deep: true });

const handleMouseEnter = () => {
  hover.value = true;
};

const handleMouseLeave = () => {
  hover.value = false;
};

const isMobile = ref(window.innerWidth < 1280);

const handleResize = () => {
  isMobile.value = window.innerWidth < 1280;
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<style lang="scss" scoped>
@import url("./card.scss");
</style>
