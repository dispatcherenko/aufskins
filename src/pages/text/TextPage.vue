<script setup>
import HugeBuys from "@/widgets/HugeBuys/HugeBuys.vue";
</script>

<template>
  <div class="text">
    <div class="text__container">
      <h3>Заголовок</h3>
      <p class="body">
        Научная статья — законченное авторское произведение, описывающее
        результаты оригинального научного исследования (первичная научная
        статья) или посвящённая рассмотрению ранее опубликованных научных
        статей, связанных общей темой (обзорная научная статья). В первичных
        научных статьях авторами излагается существенная информация
        о проведённом исследовании в форме, позволяющей другим членам научного
        сообщества оценить исследование, воспроизвести эксперименты, а также
        оценить рассуждения и сделанные из них выводы. Обзорные научные статьи
        предназначены для обобщения, анализа, оценки, суммирования или синтеза
        ранее опубликованной информации (первичных научных публикаций). Нередко
        научная статья сочетает в себе эти два типа научных текстов, включая
        обзорную и оригинальную части.
        <br />
        <br />
        В настоящее время основным представлением для научной статьи является
        печатная форма. Эта ситуация постепенно меняется – некоторые
        издательства наряду с выпуском печатного номера журнала выкладывают
        тексты опубликованных научных статей в интернет в свободный доступ.
        Однако в большинстве случаев это делается для подписчиков или на платной
        основе, что означает фактическое отсутствие статей в интернете
        и затрудняет поиск научной информации для исследователя.
        <br />
        <br />
        Проект «КиберЛенинка» призван исправить ситуацию в этой области.
        Мы предоставляем универсальный каталог, в котором содержится множество
        статей различных научных журналов, в том числе и рекомендованных ВАК РФ,
        классифицированных с помощью Государственного рубрикатора
        научно-технической информации (ГРНТИ), в свободном доступе и бесплатно.
      </p>
    </div>
    <HugeBuys />
  </div>
</template>

<style lang="scss" scoped>
.text {
  @include container;

  &__container {
    display: flex;
    flex-direction: column;
    gap: 20px;

    margin: 40px auto 120px;

    max-width: 1012px;
  }

  @media (max-width: 768px) {
    &__container {
      margin: 24px auto 80px;
    }
  }
}
</style>
