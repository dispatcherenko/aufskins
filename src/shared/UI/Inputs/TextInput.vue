<template>
  <input
    class="input"
    :placeholder="placeholder"
    :type="type"
    :name="name"
    :id="id"
  />
</template>

<script setup>
const props = defineProps({
  name: String,
  id: String,
  placeholder: String,
  type: { type: String, default: "text" },
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
  color: #ffffff;

  box-sizing: border-box;
  display: flex;
  align-items: center;
  height: 48px;
  padding: 12px 20px;

  border: none;
  border-radius: 2px;
  background-color: #171424;

  &:focus {
    outline: none;
  }
}
</style>
