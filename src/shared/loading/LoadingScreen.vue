<template>
  <div class="loading">
    <img src="./avatar.svg" alt="" />
    <div class="loader-wrapper">
      <div class="loader-spinner">
        <div class="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <p class="text">Загружаем скины и лучшие предложения</p>
    </div>
  </div>
</template>

<script setup></script>

<style lang="css" scoped>
.loading {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #100e19;
  overflow: hidden;
  z-index: 10000;
}
img {
  position: absolute;
  width: 283px;
  height: 102px;
  margin: auto auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.loader-wrapper {
  position: absolute;
  width: 336px;
  height: 60px;
  margin: 0 auto;
  left: 0;
  right: 0;
  bottom: 78px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.text {
  font-family: Geometria;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
}
.loader-spinner {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 12px;
}
.lds-ring {
  /* change color here */
  color: #c41341;
  width: 24px;
}
.lds-ring,
.lds-ring div {
  box-sizing: border-box;
}
.lds-ring {
  display: inline-block;
  position: relative;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 20px;
  height: 20px;
  border: 2px solid currentColor;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: currentColor transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
