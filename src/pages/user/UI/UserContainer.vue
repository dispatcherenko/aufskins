<script setup>
import Sell from "@/assets/icons/send-square.svg?component";
import Buy from "@/assets/icons/buy.svg?component";
import Time from "@/assets/icons/time.svg?component";
import Profile from "@/assets/menu/profile.svg?component";
import sortIcon from "@/assets/control/sort.svg?url";

import ProfilePicture from "@/shared/UI/Profile/ProfilePicture.vue";
import TextInputButton from "@/shared/UI/Inputs/TextInputButton.vue";
import Dropdown from "@/shared/UI/Select/Dropdown.vue";
import ItemsList from "@/widgets/ItemsList/ItemsList.vue";

import { useItemsStore } from "@/entities/skin/model";
import { ref } from "vue";
const itemsStore = useItemsStore();

const sorts = [
  { name: "Сначала дешевые", id: "asc", img: sortIcon },
  { name: "Сначала дорогие", id: "desc", img: sortIcon },
];
let selectedSort = ref({ name: "Сначала дешевые", id: "asc", img: sortIcon });
const updateSelectedSort = (sort) => {
  selectedSort.value = sort;
};
</script>

<template>
  <div class="container">
    <div class="menu">
      <div class="menu__info">
        <div class="menu__upper">
          <span class="menu__online"></span>
          <ProfilePicture
            class="menu__pfp-big"
            image="https://i.postimg.cc/cJXrMmTG/photo.png"
            :size="156"
          />
          <ProfilePicture
            class="menu__pfp-smol"
            image="https://i.postimg.cc/cJXrMmTG/photo.png"
            :size="80"
          />
        </div>
        <div class="menu__profile">
          <p class="menu__status">VIP 1</p>
          <p class="menu__nickname">Никнейм</p>
        </div>
        <div class="menu__lower">
          <div class="menu__stats">
            <div class="menu__stat">
              <Sell />
              <div>
                <p class="footnote">Продаж</p>
                <p class="body">57</p>
              </div>
            </div>
            <div class="menu__stat">
              <Buy />
              <div>
                <p class="footnote">Покупок</p>
                <p class="body">139</p>
              </div>
            </div>
            <div class="menu__stat">
              <Time />
              <div>
                <p class="footnote">Среднее время сделки</p>
                <p class="body">15 мин</p>
              </div>
            </div>
            <div class="menu__stat">
              <Profile />
              <div>
                <p class="footnote">На AUF Skins</p>
                <p class="body">c 9 августа 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="right">
      <div class="right__header">
        <TextInputButton
          class="right__header-search"
          placeholder="Поиск по названию"
          button-text="Найти"
        />
        <Dropdown
          class="right__header-sort"
          :options="sorts"
          :selected="selectedSort"
          @update:selected="updateSelectedSort"
        />
      </div>
      <ItemsList :items="itemsStore.cs" class="right__list" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: grid;
  width: 100%;
  max-width: 1696px;
  grid-template-columns: 234px auto;
  gap: 12px;
  width: 100%;
  height: 100%;
  margin-top: 40px;
  margin-bottom: 120px;
}

.menu {
  width: 234px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  grid-column: 1;

  &__upper {
    position: relative;
  }

  &__online {
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 50%;
    width: 8px;
    height: 8px;
    background-color: #3bc76b;
    z-index: 2;
  }

  &__pfp-smol {
    display: none;
  }

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
  }

  &__profile {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__stats {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    width: 100%;

    gap: 4px;
  }

  &__stat {
    padding: 3px 16px;
    width: 100%;
    display: flex;
    align-items: center;
    text-align: left;
    gap: 12px;
  }

  &__status {
    font-family: Geometria;
    font-size: 12px;
    text-align: center;
    max-width: 47px;
    color: #c41341;
    border-radius: 2px;
    padding: 4px 8px 2px 8px;
    background-color: #c413414d;

    margin-bottom: 8px;
  }

  &__nickname {
    //styleName: desktop/upperBody;
    font-family: Geometria;
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;

    margin-bottom: 24px;
  }
}

.right {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  &__header {
    display: grid;
    grid-template-columns: 70% auto;
    width: 100%;
    gap: 12px;
  }

  &__list {
    max-height: 687px;
    overflow-y: scroll;
  }
}

@media (max-width: 1280px) {
  .container {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .menu {
    width: 100%;
    justify-content: left;

    &__info {
      width: 100%;
      display: grid;
      grid-template-areas: "upper profile" "upper lower";
      grid-template-rows: calc(8px + 22px + 18px) auto;
      justify-content: start;
      column-gap: 32px;
    }
    &__upper {
      grid-area: upper;
    }
    &__lower {
      grid-area: lower;
      display: flex;
      flex-direction: column;
    }
    &__profile {
      grid-area: profile;
      flex-direction: row-reverse;
      gap: 8px;
      align-items: start;
      justify-content: start;
    }
    &__stats {
      width: 100%;
      display: grid;
      grid-template-columns: auto auto;
    }
  }

  .right {
    &__header {
      grid-template-columns: 50% 49%;
    }

    &__list {
      left: -18px;
      max-height: none;
    }
  }
}

@media (max-width: 768px) {
  .container {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .menu {
    &__info {
      height: 100%;
      width: 100%;
      grid-template-areas: "upper profile" "lower lower";
      grid-template-columns: 80px 100%;
      grid-template-rows: 80px auto;
      column-gap: 20px;
      row-gap: 12px;
    }

    &__upper {
      height: 100%;
    }

    &__profile {
      height: 100%;
    }

    &__lower {
      width: 100%;
    }

    &__stats {
      width: 309px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 0;
    }

    &__stat {
      width: auto;
    }

    &__online {
      width: 4.5px;
      height: 4.5px;
    }

    &__pfp-big {
      display: none;
    }

    &__pfp-smol {
      display: block;
    }
  }

  .right {
    &__header {
      display: flex;
      flex-direction: column;
    }

    &__list {
      left: -18px;
      max-height: none;
    }
  }
}
</style>
