<template>
  <div class="items" v-auto-animate>
    <div v-for="item in items" :key="item.id" class="item" v-auto-animate>
      <SkinCard v-if="type === 'item'" :skin="item" />
      <InventoryCard v-if="type === 'inventory'" :skin="item" />
      <CatalogCard v-if="type === 'catalog'" :skin="item" />
    </div>
  </div>
</template>

<script setup>
import CatalogCard from "@/entities/skin/UI/CatalogCard.vue";
import InventoryCard from "@/entities/skin/UI/InventoryCard.vue";
import SkinCard from "@/entities/skin/UI/ItemCard.vue";
const props = defineProps({
  items: Array,
  type: { type: String, default: "item" },
});
</script>

<style lang="scss" scoped>
.items {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(181px, 1fr));
  grid-template-rows: repeat(auto-fill, 221px);
  position: relative;
  gap: 12px;
  transition: all 0.2s;
}
.items::-webkit-scrollbar {
  width: 5px;
  height: 0;
}
.item {
  width: 100%;
  height: 221px;
  min-width: 184px;
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
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
