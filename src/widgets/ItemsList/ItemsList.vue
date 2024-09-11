<template>
  <div class="items" v-auto-animate>
    <div v-for="item in items" :key="item.id" class="item" v-auto-animate>
      <SkinCard :skin="item" />
    </div>
  </div>
</template>

<script setup>
import SkinCard from "@/entities/skin/UI/ItemCard.vue";
const props = defineProps({
  items: Array,
});
</script>

<style lang="scss" scoped>
.items {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(181px, 1fr));

  position: relative;
  gap: 12px;
  transition: all 0.2s;
}
.items::-webkit-scrollbar {
  width: 0;
  height: 0;
}
.item {
  width: 100%;
  height: 221px;
  min-width: 190px;
  background-color: #171424;
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
}

@media (min-width: 1920px) {
  .item {
    width: 202px;
  }
}
@media (max-width: 1279px) {
  .item {
    width: 100%;
  }
  .items {
    width: 100vw;
    left: -23px;
    padding: 0 4px;
  }
}
</style>
