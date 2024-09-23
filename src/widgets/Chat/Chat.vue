<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { onClickOutside } from "@vueuse/core";
import { useChatStore } from "./store";

import MessageFactory from "@/entities/message/UI/MessageFactory.vue";

import Exit from "@/assets/icons/exit.svg?component";

import ArrowUp from "@/assets/icons/arrowUp.svg?component";
import Settings from "@/assets/icons/settings.svg?component";

const chatStore = useChatStore();

const closeMenu = () => {
  chatStore.closeMenu();
};

const target = ref(null);

onClickOutside(target, (e) => {
  if (!chatStore.isSetting) {
    closeMenu();
  }
});

const handleScroll = () => {
  closeMenu();
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

let selectedGame = ref("cs2");

const changeGame = (game) => {
  selectedGame.value = game;
};
</script>

<template>
  <transition>
    <div ref="target" class="chat" v-if="chatStore.isOpen">
      <a class="exit" @click="chatStore.closeMenu">
        <Exit class="cross" />
      </a>
      <div class="chat__header">
        <p class="h4 chat__title">Чат</p>
        <a class="chat__close body" @click="chatStore.closeMenu">Закрыть</a>
      </div>
      <div class="chat__games">
        <p
          @click="changeGame('cs2')"
          class="chat__game"
          :class="{
            'chat__game--active': selectedGame === 'cs2',
          }"
        >
          CS2
        </p>
        <p
          @click="changeGame('dota')"
          class="chat__game"
          :class="{
            'chat__game--active': selectedGame === 'dota',
          }"
        >
          Dota 2
        </p>
        <p
          @click="changeGame('rust')"
          class="chat__game"
          :class="{
            'chat__game--active': selectedGame === 'rust',
          }"
        >
          Rust
        </p>
        <p
          @click="changeGame('tf2')"
          class="chat__game"
          :class="{
            'chat__game--active': selectedGame === 'tf2',
          }"
        >
          Team Fortress 2
        </p>
      </div>
      <div class="chat__mid">
        <MessageFactory
          type="outcoming"
          message="Привет, я новенький!"
          time="16:30"
        />
        <MessageFactory
          type="incoming"
          nickname="www"
          message="Привет, новенький!"
          time="16:31"
        />
        <MessageFactory
          type="incoming"
          nickname="the_killer"
          status="VIP 1"
          message="Привет, я VIP!"
          time="16:31"
        />
        <MessageFactory
          type="incoming"
          nickname="antoxa2008"
          status="VIP 2"
          message="Привет, я VIP!"
          time="16:31"
        />
        <MessageFactory
          type="incoming"
          nickname="krutoy-man"
          status="VIP 3"
          message="Привет, я VIP!"
          time="16:31"
        />
      </div>
      <div class="chat__footer">
        <input
          class="chat__input"
          type="text"
          name="message"
          id="message"
          placeholder="Сообщение"
        />

        <div class="chat__buttons">
          <span class="chat__buttons-divider"></span>
          <Settings class="chat__button" @click="chatStore.openSettings" />
          <ArrowUp class="chat__button" />
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.exit {
  position: absolute;
  top: 23px;
  right: 22px;
  background: transparent;
  border: none;
  width: 16px;
  height: 16px;
  padding: 0;
  z-index: 10000;

  @media (max-width: 1280px) {
    display: none;
  }
}

.cross {
  color: #ffffff80;
  transition: all 0.2s;

  &:hover {
    color: #c41341;
  }
}

.chat {
  position: fixed;
  top: 100px;
  right: 300px;
  width: 473px;
  height: 564px;
  background-color: #100e19;
  display: flex;
  flex-direction: column;

  &__header {
    display: none;
  }

  &__games {
    display: flex;
    align-items: center;
    padding: 20px 20px 0;
    align-items: center;
    border-bottom: #ffffff1a 1px solid;
  }

  &__game {
    color: #ffffff80;
    font-size: 18px;
    font-weight: 500;
    position: relative;
    text-align: center;
    cursor: pointer;
    box-sizing: border-box;
    padding: 10px 16px;

    transition: all 0.2s;
  }

  &__game--active {
    color: #ffffff;
  }

  &__game--active::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 6px;
    background-color: #c41341;
    clip-path: polygon(28% 36%, 77% 51%, 100% 0, 100% 100%, 0 100%, 0 29%);
    transition: all 0.2s;
  }

  &__close {
    display: none;
    color: #c41341;
  }

  &__mid {
    padding: 16px 20px;
    height: 100%;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__footer {
    padding: 20px;
    display: flex;
    width: 100%;

    &-total {
      display: flex;
      justify-content: space-between;
    }

    a {
      width: 100%;
    }
  }

  &__input {
    height: 44px;
    width: 100%;
    border: none;
    padding: 10px 16px;
    background-color: #171424;
    border-radius: 2px 0 0 2px;
    color: white;

    &:focus {
      outline: none;
    }
  }

  &__buttons {
    display: flex;
    align-items: center;
    gap: 16px;
    background-color: #171424;
    border-radius: 0 2px 2px 0;
    padding-right: 16px;

    &-divider {
      height: 60%;
      width: 1px;
      background-color: #ffffff1a;
    }
  }

  &__button {
    opacity: 0.25;
    transition: all 0.2s;
    &:hover {
      opacity: 1;
      cursor: pointer;
    }
  }

  @media (max-width: 1280px) {
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 1001;
    &__title {
      display: flex;
    }
    &__header {
      display: flex;
      padding: 13px 26px;
      justify-content: space-between;
      align-items: center;
      border-bottom: #ffffff1a 1px solid;
      p {
        font-size: 24px;
      }
    }
    &__games {
      padding: 8px 20px 0;
      border-bottom: none;
    }
    &__close {
      display: block;
    }
  }

  @media (max-width: 768px) {
    &__games {
      overflow-x: scroll;
      height: 80px;
      font-size: 18px;
      text-overflow: clip;
      white-space: nowrap;
    }

    &__games::-webkit-scrollbar {
      width: 2px;
      height: 4px; /* ширина scrollbar */
      margin: -4px;
    }
    &__games::-webkit-scrollbar-track {
      display: none; /* цвет дорожки */
    }
    &__games::-webkit-scrollbar-thumb {
      background-color: #231f36; /* цвет плашки */
    }
  }
}

.v-enter-active,
.v-leave-active {
  transition: all 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  transform: translateY(-10%);
  opacity: 0;
}
</style>
