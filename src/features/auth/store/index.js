import { defineStore } from "pinia";

import { useUserStore } from "@/entities/user/model";

export const useLogoutModalStore = defineStore("logout-modal", {
  state: () => ({
    isOpen: false,
  }),
  actions: {
    openModal() {
      this.isOpen = true;
    },
    closeModal() {
      this.isOpen = false;
    },
    logout() {
      const userStore = useUserStore();
      this.isOpen = false;
      userStore.logOut();
    },
  },
});
