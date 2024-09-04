<template>
  <section class="opening">
    <div class="opening--wrapper-left"></div>
    <div class="opening--wrapper-right"></div>
    <div class="opening--wrapper-middle"></div>
    <h1 class="opening-title">
      Открой для себя<br />
      новые возможности<br />
      любимых игр
    </h1>
    <div class="opening-games">
      <div class="opening-games--game">
        <img src="@/assets/mainpage/cs.svg" alt="cs" />
        <p class="opening-games--title">CS 2</p>
      </div>
      <div class="opening-games--game">
        <img src="@/assets/mainpage/dota.svg" alt="dota" />
        <p class="opening-games--title">Dota 2</p>
      </div>
      <div class="opening-games--game">
        <img src="@/assets/mainpage/rust.svg" alt="rust" />
        <p class="opening-games--title">Rust</p>
      </div>
      <div class="opening-games--game">
        <img src="@/assets/mainpage/TF2.svg" alt="tf2" />
        <p class="opening-games--title">Team Fortress 2</p>
      </div>
    </div>
    <Button1
      class="opening-button"
      :img="Money"
      alt="money"
      text="Начать обмен"
    ></Button1>
  </section>
</template>

<script setup>
import Button1 from "@/shared/UI/Buttons/Button1.vue";
import Money from "@/assets/mainpage/money.svg";
</script>

<style scoped>
.opening {
  height: 731px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  overflow: hidden;
  background-color: #100e19;
}
.opening--wrapper-left {
  position: absolute;
  left: -20%;
  bottom: -80%;
  width: 50%;
  height: 731px;
  background: radial-gradient(#b5153f 50%, #6e29f6 80%, #100e19 10%);
  border-radius: 40%;
  filter: blur(170px);
}
.opening--wrapper-right {
  position: absolute;
  right: -40%;
  bottom: -60%;
  width: 50%;
  height: 731px;
  /* background-image: linear-gradient(to bottom #6E29F6, #D9194B #B5157F); */
  background: linear-gradient(
    30.52deg,
    #b5157f 33.29%,
    rgba(217, 25, 75, 0.743958) 54.57%,
    rgba(110, 41, 246, 0.23) 97.27%
  );
  border-radius: 40%;
  filter: blur(170px);
}
.opening--wrapper-middle {
  width: 529px;
  height: 495px;
  opacity: 0.6px;
  transform: rotate(-26deg);
  position: absolute;
  top: 15%;
  right: -40%;
  background: linear-gradient(
    30.52deg,
    #e61f53 37.05%,
    #6e29f6 81.16%,
    #ff9595 94.3%
  );
  filter: blur(80px);
}
.opening-title {
  color: #fff;
  font-size: 72px;
  font-weight: 700;
  text-align: center;
}
.opening-games {
  display: flex;
  align-items: center;
  justify-content: center;
  /* gap: 50px; */
  width: 550;
  flex-wrap: wrap;
}
.opening-games--game {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 200px;
  height: 70px;
  min-width: 140px;
  margin-top: 30px;
}
.opening-games--title {
  font-size: 18px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.5);
}
.opening-button {
  width: 211px;
  height: 56px;
}

@media (max-width: 1280px) {
  .opening {
    width: 95%;
  }
  .opening-title {
    font-size: 48px;
  }
  .opening--wrapper-right {
    right: -50%;
  }
  .opening--wrapper-middle {
    right: -50%;
  }
}
@media (max-width: 768px) {
  .opening {
    width: 100%;
  }
  .opening-title {
    font-size: 28px;
  }
  .opening--wrapper-right {
    right: -90%;
    filter: blur(150px);
  }
  .opening--wrapper-middle {
    right: -70%;
    filter: blur(150px);
  }
  .opening--wrapper-left {
    left: -60%;
  }
  .opening-games {
    flex: wrap;
    width: 550px;
  }
}
@media (max-width: 600px) {
  .opening--wrapper-right {
    right: -100%;
  }
  .opening--wrapper-middle {
    right: -100%;
  }
  .opening--wrapper-left {
    left: -60%;
  }
}
</style>
