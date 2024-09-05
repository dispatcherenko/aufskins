<template>
  <input
    class="input"
    :placeholder="placeholder"
    type="text"
    :name="name"
    :id="id"
  />
</template>

<script setup>
const props = defineProps({
  name: String,
  id: String,
  placeholder: String,
});
</script>

<style lang="scss" scoped>
.input {
  width: 100%;
  //styleName: desktop/body;
  font-family: Geometria;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  color: #ffffff40;

  box-sizing: border-box;
  display: flex;
  align-items: center;
  height: 48px;
  padding: 12px 20px;

  border: none;
  border-radius: 2px;
  background-color: #171424;
}
</style>
