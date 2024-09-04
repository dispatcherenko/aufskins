<template>
  <div class="loading">
    <img src="./avatar.svg" alt="" />
    <div class="loader-wrapper">
      <div class="loader-spinner">
        <span class="loader"></span>
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
.loader {
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: relative;
  /* animation: rotate 1s linear infinite; */
}
.loader::before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  inset: 0px;
  border-radius: 50%;
  border: 2px solid #c41341;
  animation: prixClipFix 2s linear infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes prixClipFix {
  0% {
    clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
  }
  12.5% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
  }
  25% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
  }
  37.5% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
  }
  50% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
  }
  62.5% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
  }
  75% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
  }
  87.5% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
  }
  100% {
    clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
  }
}
</style>
