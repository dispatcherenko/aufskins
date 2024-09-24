<template>
  <div
    class="card"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @click="toItemPage"
  >
    <div
      v-if="inventoryStore.toSell.find((item) => item.id === skin.id)"
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

      <ButtonXS
        v-if="
          (hover &&
            !inventoryStore.toSell.find((item) => item.id === skin.id)) ||
          (isMobile &&
            !inventoryStore.toSell.find((item) => item.id === skin.id))
        "
        text="Выбрать"
        class="bottom__button"
        @click="inventoryStore.addItem(skin, $event)"
      />
    </div>
    <ButtonXS
      v-if="inventoryStore.toSell.find((item) => item.id === skin.id)"
      text="Убрать"
      class="bottom__button--grey"
      @click="inventoryStore.removeItem(skin, $event)"
    />
  </div>
</template>

<script setup>
import done from "@/assets/control/check.svg?url";
import ButtonXS from "@/shared/UI/Buttons/ButtonXS.vue";
import { ref, onMounted, onRenderTracked, watch, onBeforeUnmount } from "vue";
import { useInventoryStore } from "@/entities/user/model";
const inventoryStore = useInventoryStore();

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

const toItemPage = (e) => {
  e.stopPropagation();
  router.push("/item/1");
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<style lang="scss" scoped>
.added {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #231f3699;

  z-index: 100;

  &__check {
    position: absolute;
    width: 88px;
    height: 88px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
}
.card {
  position: relative;
  width: 100%;
  height: 221px;
  box-sizing: border-box;
  border-radius: 2px;
  background-color: #171424;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;

  transition: all 0.2s;

  cursor: pointer;

  &:hover {
    background-color: #231f36;
  }
}
.upper {
  height: 100%;
  width: 100%;
  display: flex;
  position: relative;
}
.level {
  position: absolute;
  right: 0;
  left: 0;
  margin: 0 auto;
}
.item {
  position: absolute;
  top: 38px;
  right: 0;
  left: 0;
  margin: 0 auto;
  width: 136px;
  height: 81px;
}
.stickers {
  position: absolute;
  top: 10px;
  right: 10px;
}
.offers__button {
  width: 264px;
  height: 56px;
  min-height: 56px;
  outline: none;
  border: none;
  background-color: #c41341;
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  clip-path: polygon(6% 0, 90% 0, 100% 30%, 94% 100%, 10% 100%, 0 70%);
  align-self: flex-end;
  margin-top: 30px;
}

.bottom {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 7px;
  margin-bottom: 10px;

  z-index: 1;
}
.bottom__info-price {
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  margin-left: 5px;
}
.bottom__info-name {
  font-size: 14px;
  color: #fff;
  font-weight: 500;
  margin-left: 5px;
}
.bottom__info-bar {
  align-self: center;
}
.bottom__info-bottom {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  width: 177px;
  align-self: center;
}
.bottom__info-bottom__quality {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  gap: 5px;
}
.bottom__info-bottom__pattern {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
}
.bottom__info-bottom__quality--gold {
  color: gold;
  display: block;
}
.bottom__info-bottom__quality--orange {
  color: orange;
  display: block;
}
.bottom__button {
  align-self: center;
  width: calc(100% - 16px);
  margin: 4px 8px 0;
  height: 32px;
}

.bottom__button--grey {
  align-self: center;
  width: calc(100% - 16px);
  margin: 4px 8px 8px;
  height: 32px;
  background-color: #171424;
  z-index: 999;
}

@media (min-width: 1900px) {
  .offres__title {
    font-size: 72px;
  }
  .offers__main-elems {
    height: 454px;
    max-height: 454px;
  }
}
@media (max-width: 1280px) {
  .offers {
    width: 100%;
  }
  .offres__title {
    font-size: 28px;
    margin-left: 30px;
  }
  .offers__main-select {
    margin-left: 30px;
  }
  .offers__button {
    margin-right: 30px;
  }

  .offers__main-elems {
    width: 100%;
    height: 687px;
    max-height: 687px;
  }
}
@media (max-width: 768px) {
  .offers__main-elems {
    height: 926px;
    max-height: 926px;
  }
  .offers__main-select__game:nth-child(4) {
    width: 71px;
  }
}
</style>
