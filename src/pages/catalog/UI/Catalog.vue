<script setup>
import { onMounted } from "vue";

import { useUserStore } from "@/entities/user/model";
const userStore = useUserStore();

onMounted(() => {
  userStore.logIn();
});
</script>

<template>
  <router-view></router-view>
</template>

<style lang="scss" scoped>
.catalog {
  width: 100%;
  display: grid;
  grid-template-areas: "game search search search" "filters title sort update" "filters matrix matrix matrix";
  grid-template-columns: 234px calc(100% - 234px - 287px - 148px - 16px) 287px 148px;
  grid-template-rows: 48px 48px 687px;
  row-gap: 24px;
  column-gap: 8px;

  margin-bottom: 104px;
  margin-top: 32px;
  height: 100%;
  max-width: 1696px;

  @media (max-width: 1280px) {
    grid-template-areas:
      "filters filters filters"
      "title title title"
      "search search search"
      "game sort update"
      "matrix matrix matrix";
    grid-template-columns: 261px calc(100% - 261px - 148px - 32px) 148px;
    grid-template-rows: 60px 48px 48px 48px auto;

    column-gap: 16px;
    row-gap: 12px;

    margin-bottom: 80px;
    margin-top: 0;
  }

  @media (max-width: 768px) {
    grid-template-areas:
      "filters filters filters"
      "title title title"
      "search search search"
      "game game update"
      "matrix matrix matrix";
    grid-template-columns: calc(100% - 56px - 24px) 0 56px;
    grid-template-rows: 60px 60px 48px 48px auto;

    column-gap: 16px;

    margin-bottom: 80px;
    margin-top: 16px;
  }
}

:deep .menu {
  width: 100%;
  &__select {
    grid-area: game;
  }

  &__filters {
    grid-area: filters;

    height: 759px;
    overflow: auto;

    &--mobile {
      grid-area: filters;
      display: none;
    }

    &-button {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 4px;

      &:hover {
        background-color: transparent;
      }
    }
    @media (max-width: 1280px) {
      display: none;

      &--mobile {
        display: flex;
        width: 100%;

        justify-content: space-between;
      }
    }
  }
  &__filter {
    display: flex;
    flex-direction: column;
    gap: 9px;
  }
  &__checkbox {
    display: flex;
    gap: 16px;

    p {
      color: white;
    }
  }
}

:deep .right {
  display: flex;
  flex-direction: column;
  gap: 32px;

  &__search {
    grid-area: search;
  }

  &__title {
    grid-area: title;
  }

  &__buttons {
    grid-area: buttons;

    display: flex;
    justify-content: right;
    gap: 16px;

    &-dropdown {
      grid-area: sort;
      width: 100%;
    }

    &-update {
      grid-area: update;
      background-color: #171424;
      flex-direction: row-reverse;
      gap: 12px;
      padding: 12px 16px;
    }
  }

  &__list {
    grid-area: matrix;
    height: 100%;
    overflow: scroll;
  }

  @media (max-width: 1280px) {
    &__list {
      grid-area: matrix;
      height: 100%;
      overflow: auto;
    }

    &__buttons {
      &-dropdown {
        display: none;
      }
    }
  }

  @media (max-width: 768px) {
    &__list {
      grid-area: matrix;
      height: 100%;
      overflow: auto;
    }

    &__buttons {
      &-dropdown {
        width: 70%;
      }
      &-update {
        p {
          display: none;
        }
      }
    }
  }
}
</style>
