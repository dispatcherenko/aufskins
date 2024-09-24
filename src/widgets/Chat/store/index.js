import { defineStore } from "pinia";

export const useChatStore = defineStore("chat", {
  state: () => ({
    isOpen: false,
    isSetting: false,
    inputText: "",
    nickname: "Аноним",
    messageQuery: [
      {
        type: "outcoming",
        message: "Привет, я новенький!",
        time: "16:30",
      },
      {
        type: "incoming",
        nickname: "www",
        message: "Привет, новенький!",
        time: "16:30",
      },
      {
        type: "incoming",
        nickname: "the_killer",
        status: "VIP 1",
        message: "Привет, я VIP!",
        time: "16:30",
      },
    ],
  }),
  actions: {
    openMenu() {
      this.isOpen = true;
      this.slideDown();
    },
    closeMenu() {
      this.isOpen = false;
    },
    openSettings() {
      this.isSetting = true;
    },
    closeSettings() {
      this.isSetting = false;
    },
    sendMessage() {
      if (this.inputText.length > 0) {
        const dateTime = new Date();
        const newMessage = {
          type: "outcoming",
          nickname: this.nickname,
          message: this.inputText,
          time: `${dateTime.getHours()}:${dateTime.getMinutes()}`,
        };

        this.messageQuery.push(newMessage);

        this.inputText = "";

        this.slideDown();
      }
    },
    slideDown() {
      setTimeout(() => {
        const chatMid = document.getElementById("chatMid");
        if (chatMid) {
          chatMid.scrollTop = chatMid.scrollHeight;
        }
      }, 0);
    },
  },
});
