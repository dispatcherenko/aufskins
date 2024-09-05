<template>
  <div class="wrapper">
    <input
      class="input"
      :placeholder="placeholder"
      type="text"
      :name="name"
      :id="id"
    />
    <Button2 class="button" :text="buttonText" :onclick="action" />
  </div>
</template>

<script setup>
import Button2 from "../Buttons/Button2.vue";

const props = defineProps({
  name: String,
  id: String,
  placeholder: String,
  buttonText: String,
  action: Function,
});
</script>

<style lang="scss" scoped>
.wrapper {
  height: 48px;
  position: relative;
}
.input {
  width: 95%;
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

.button {
  position: absolute;
  top: 0;
  right: 0;
  background-color: #231f36;
  gap: 0;
  width: auto;
  height: 100%;
  padding: 12px 20px;
}
</style>
