<template>
  <div class="card" @click="toItemPage">
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
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const props = defineProps({
  skin: Object,
});

const imagePath = ref("");

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
</script>

<style lang="scss" scoped>
@import url("./card.scss");
</style>
