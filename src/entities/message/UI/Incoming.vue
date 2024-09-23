<template>
  <div class="message">
    <div class="upper">
      <p class="body grey">{{ nickname }}</p>
      <p v-if="status === 'VIP 1'" class="status--vip1">{{ status }}</p>
      <p v-if="status === 'VIP 2'" class="status--vip2">{{ status }}</p>
      <p v-if="status === 'VIP 3'" class="status--vip3">{{ status }}</p>
      <p class="footnote grey">{{ time }}</p>
    </div>
    <p class="body">{{ message }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  nickname: String,
  time: String,
  message: String,
  status: String,
});
</script>

<style lang="scss" scoped>
.upper {
  display: flex;
  gap: 8px;
  align-items: center;
}

.status {
  &--vip1 {
    font-size: 12px;
    padding: 4px 9px;
    color: #c41341;
    background-color: #c413414d;
  }

  &--vip2 {
    font-size: 12px;
    padding: 4px 9px;
    color: #ff00f5;
    background-color: #ff00f54d;
  }

  &--vip3 {
    font-size: 12px;
    padding: 4px 9px;
    color: #0651e4;
    background-color: #0651e44d;
  }
}
</style>
