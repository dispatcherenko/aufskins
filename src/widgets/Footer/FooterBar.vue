<script setup></script>

<template>
  <footer class="footer">
    <section class="footer-wrapper">
      <div class="footer-up">
        <div class="footer-up__info">
          <img src="@/assets/footer/logo_small.svg" alt="avatar" />
          <p class="footer-up__info-about">О нас</p>
          <p class="footer-up__info-help">
            Тех. поддержка support@auf-skins.ru
          </p>
        </div>
        <div class="footer-up__pay">
          <img src="@/assets/footer/visa.svg" alt="visa" />
          <img src="@/assets/footer/master.svg" alt="mastercard" />
          <img src="@/assets/footer/mir.svg" alt="Mir" />
          <img src="@/assets/footer/tether.svg" alt="tether" />
          <img src="@/assets/footer/ymoney.svg" alt="ymoney" />
        </div>
      </div>
      <div class="footer-middle"></div>
      <div class="footer-bottom">
        <div class="footer-bottom__info">
          <p class="footer-bottom__info-text">
            ©2024 AufSkins. Все права защищены
          </p>
          <p class="footer-bottom__info-text">Правила сайта</p>
        </div>
        <div class="footer-bottom__policy">
          <p class="footer-bottom__policy-text">Политика файлов cookie</p>
          <p class="footer-bottom__policy-text">Политика конфиденциальности</p>
        </div>
      </div>
    </section>
  </footer>
</template>

<style scoped>
.footer {
  height: 194px;
  width: 100%;
  background-color: #07060e;
  display: flex;
  align-items: center;
  justify-content: center;
}
.footer-wrapper {
  width: 95%;
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.footer-up {
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.footer-up__info {
  width: 534px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.footer-up__info-about {
  color: #fff;
  font-size: 14px;
  font-weight: 500;
}
.footer-up__info-help {
  color: rgba(255, 255, 255, 0.5);
  font-size: 14px;
  font-weight: 500;
}
.footer-up__pay {
  width: 457px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.footer-middle {
  width: 100%;
  border: 1px solid #ffffff1a;
}
.footer-bottom {
  width: 100%;
  height: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footer-bottom__info {
  width: 408px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.footer-bottom__policy {
  width: 430px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.footer-bottom__info-text {
  font-size: 14px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.25);
}
.footer-bottom__policy-text {
  font-size: 14px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.25);
}
@media (max-width: 1280px) {
  .footer {
    height: 261px;
  }
  .footer-up {
    flex-direction: column;
    gap: 10px;
    align-items: start;
    justify-content: end;
  }
  .footer-bottom__info {
    flex-direction: column;
    align-items: start;
  }
  .footer-bottom__policy {
    flex-direction: column;
    align-items: end;
  }
}
@media (max-width: 768px) {
  .footer {
    height: 430px;
  }
  .footer-up {
    gap: 20px;
    justify-content: center;
  }
  .footer-wrapper {
    height: 280px;
  }
  .footer-bottom {
    flex-direction: column;
    align-items: start;
    justify-content: end;
    gap: 20px;
  }
  .footer-bottom__policy {
    align-items: start;
  }
  .footer-up__info {
    flex-direction: column;
    align-items: start;
    height: 116px;
    gap: 15px;
  }
}
</style>
