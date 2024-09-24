<template>
  <div class="links">
    <div class="link">
      <p>Главная</p>
      <a href="https://aufskins.hpace.ru/">https://aufskins.hpace.ru/</a>
    </div>

    <div class="link">
      <p>Профиль</p>
      <a href="https://aufskins.hpace.ru/profile"
        >https://aufskins.hpace.ru/profile</a
      >
    </div>

    <div class="link">
      <p>Уведомления</p>
      <a href="https://aufskins.hpace.ru/profile/notifications"
        >https://aufskins.hpace.ru/profile/notifications</a
      >
    </div>

    <div class="link">
      <p>Инвентарь</p>
      <a href="https://aufskins.hpace.ru/profile/inventory"
        >https://aufskins.hpace.ru/profile/inventory</a
      >
    </div>

    <div class="link">
      <p>Ошибка</p>
      <a href="https://aufskins.hpace.ru/errorpage"
        >https://aufskins.hpace.ru/errorpage</a
      >
    </div>

    <div class="link">
      <p>Каталог CS</p>
      <a href="https://aufskins.hpace.ru/catalog/cs"
        >https://aufskins.hpace.ru/catalog/cs</a
      >
    </div>

    <div class="link">
      <p>Каталог DOTA</p>
      <a href="https://aufskins.hpace.ru/catalog/dota"
        >https://aufskins.hpace.ru/catalog/dota</a
      >
    </div>

    <div class="link">
      <p>Каталог RUST</p>
      <a href="https://aufskins.hpace.ru/catalog/rust"
        >https://aufskins.hpace.ru/catalog/rust</a
      >
    </div>

    <div class="link">
      <p>Каталог TF</p>
      <a href="https://aufskins.hpace.ru/catalog/tf"
        >https://aufskins.hpace.ru/catalog/tf
      </a>
    </div>

    <div class="link">
      <p>О нас</p>
      <a href="https://aufskins.hpace.ru/about"
        >https://aufskins.hpace.ru/catalog/about
      </a>
    </div>

    <div class="link">
      <p>Текстовая страница</p>
      <a href="https://aufskins.hpace.ru/text"
        >https://aufskins.hpace.ru/catalog/text
      </a>
    </div>

    <div class="link">
      <p>Страница предмета</p>
      <a href="https://aufskins.hpace.ru/item/1"
        >https://aufskins.hpace.ru/catalog/item
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const htmlContent = ref("");

onMounted(async () => {
  try {
    const response = await fetch("/path/to/links.html");
    htmlContent.value = await response.text();
  } catch (error) {
    console.error("Failed to load HTML content:", error);
  }
});
</script>

<style scoped>
.links {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.link {
  display: flex;
  width: 30%;
  justify-content: space-between;
  align-items: center;
}
</style>
