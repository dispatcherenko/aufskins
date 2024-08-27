<script setup> 
    import { Swiper, SwiperSlide } from 'swiper/vue'
    import 'swiper/css/pagination'
    import 'swiper/css/navigation'
    import { Autoplay, Pagination, Navigation } from 'swiper/modules'
    import { ref } from 'vue'
    import 'swiper/css'
    import HugeBuys from './HugeBuys.vue'
    const fslider = ref(null);
    const sslider = ref(null);
    let sactiveIndex = ref(0);
    let factiveIndex = ref(0);
    const onSwiper = (swiper) => {
        fslider.value = swiper;
        factiveIndex.value = swiper.activeIndex;
        swiper.on('slideChange', () => {
            factiveIndex.value = swiper.activeIndex;
        });
    };
    const onsSwiper = (swiper) => {
        sslider.value = swiper;
        sactiveIndex.value = swiper.activeIndex;
        swiper.on('slideChange', () => {
            sactiveIndex.value = swiper.activeIndex;
        });
    }
    const modules = [Autoplay, Pagination, Navigation];
    const games = ref({
        cs2: true,
        dota: false,
        rust: false,
        tf2: false,
    });
    const changeGame = (name) => {
        games.value.cs2 = false;
        games.value.dota = false;
        games.value.rust = false;
        games.value.tf2 = false;
        games.value[name] = true;
    };
    const bestSkinsCs = ref({
        poseidon: {
            id: 123123,
            price: 98454, 
            st: false,
            sv: false,
            name: 'Посейдон',
            gun: 'UMP-45', 
            pattren: 0.112,
            quality: 'WW',
            image: 'src/assets/mainpage/aug.svg',
            bg: '',
            new: '',
        },
        howl: {
            id: 32123,
            price: 13130, 
            st: true,
            sv: false,
            name: 'howl',
            gun: 'M4A4', 
            pattren: 0.459,
            quality: 'FT',
            image: 'src/assets/mainpage/m4a4.svg',
            bg: 'src/assets/mainpage/sticker.svg',
            new: 'src/assets/mainpage/new.svg',
        },
        flame: {
            id: 1233213,
            price: 15200, 
            st: false,
            sv: false,
            name: 'flame',
            gun: 'Desert Eagle',
            pattren: 0.338,
            quality: 'FN',
            image: 'src/assets/mainpage/deagle.svg',
            bg: 'src/assets/mainpage/sticker.svg',
            new: 'src/assets/mainpage/new.svg',
        },
        pixel: {
            id: 444111,
            price: 2389, 
            st: false,
            sv: false,
            name: 'Pixel Kamo',
            gun: 'UMP-45', 
            pattren: 0.217,
            quality: 'FN',
            image: 'src/assets/mainpage/ump.svg',
            bg: '',
            new: 'src/assets/mainpage/new.svg',
        },
        how: {
            id: 124213,
            price: 13130, 
            st: true,
            sv: false,
            name: 'howl',
            gun: 'M4A4', 
            pattren: 0.459,
            quality: 'FT',
            image: 'src/assets/mainpage/m4a4.svg',
            bg: 'src/assets/mainpage/sticker.svg',
            new: 'src/assets/mainpage/new.svg',
        },
        fire: {
            id: 4123,
            price: 15200, 
            st: false,
            sv: true,
            name: 'flame',
            gun: 'Desert Eagle',
            pattren: 0.338,
            quality: 'FN',
            image: 'src/assets/mainpage/deagle.svg',
            bg: 'src/assets/mainpage/sticker.svg',
            new: 'src/assets/mainpage/new.svg',
        },
        kamo: {
            id: 1134,
            price: 2389, 
            st: false,
            sv: true,
            name: 'Pixel Kamo',
            gun: 'UMP-45', 
            pattren: 0.217,
            quality: 'FN',
            image: 'src/assets/mainpage/ump.svg',
            bg: '',
            new: '',
        },
        voy: {
            id: 133,
            price: 13130, 
            st: true,
            sv: false,
            name: 'howl',
            gun: 'M4A4', 
            pattren: 0.459,
            quality: 'FT',
            image: 'src/assets/mainpage/m4a4.svg',
            bg: '',
            new: 'src/assets/mainpage/new.svg',
        },
        ball: {
            id: 113,
            price: 15200, 
            st: false,
            sv: false,
            name: 'flame',
            gun: 'Desert Eagle',
            pattren: 0.338,
            quality: 'FN',
            image: 'src/assets/mainpage/deagle.svg',
            bg: 'src/assets/mainpage/sticker.svg',
            new: '',
        },
        ump: {
            id: 1134,
            price: 2389, 
            st: false,
            sv: false,
            name: 'Pixel Kamo',
            gun: 'UMP-45', 
            pattren: 0.217,
            quality: 'FN',
            image: 'src/assets/mainpage/ump.svg',
            bg: '',
            new: '',
        },
        m4: {
            id: 133,
            price: 13130, 
            st: true,
            sv: false,
            name: 'howl',
            gun: 'M4A4', 
            pattren: 0.459,
            quality: 'FT',
            image: 'src/assets/mainpage/m4a4.svg',
            bg: '',
            new: 'src/assets/mainpage/new.svg',
        },
        de: {
            id: 113,
            price: 15200, 
            st: false,
            sv: false,
            name: 'flame',
            gun: 'Desert Eagle',
            pattren: 0.338,
            quality: 'FN',
            image: 'src/assets/mainpage/deagle.svg',
            bg: '',
            new: 'src/assets/mainpage/new.svg',
        },
        kamo1: {
            id: 1134,
            price: 2389, 
            st: false,
            sv: false,
            name: 'Pixel Kamo',
            gun: 'UMP-45', 
            pattren: 0.217,
            quality: 'FN',
            image: 'src/assets/mainpage/ump.svg',
            bg: 'src/assets/mainpage/sticker.svg',
            new: 'src/assets/mainpage/new.svg',
        },
        voy1: {
            id: 133,
            price: 13130, 
            st: true,
            sv: false,
            name: 'howl',
            gun: 'M4A4', 
            pattren: 0.459,
            quality: 'FT',
            image: 'src/assets/mainpage/m4a4.svg',
            bg: 'src/assets/mainpage/sticker.svg',
            new: 'src/assets/mainpage/new.svg',
        },
        ball1: {
            id: 113,
            price: 15200, 
            st: false,
            sv: true,
            name: 'flame',
            gun: 'Desert Eagle',
            pattren: 0.338,
            quality: 'FN',
            image: 'src/assets/mainpage/deagle.svg',
            bg: 'src/assets/mainpage/sticker.svg',
            new: 'src/assets/mainpage/new.svg',
        },        
        kamo2: {
            id: 1134,
            price: 2389, 
            st: false,
            sv: false,
            name: 'Pixel Kamo',
            gun: 'UMP-45', 
            pattren: 0.217,
            quality: 'FN',
            image: 'src/assets/mainpage/ump.svg',
            bg: 'src/assets/mainpage/sticker.svg',
            new: 'src/assets/mainpage/new.svg',
        },
        voy2: {
            id: 133,
            price: 13130, 
            st: true,
            sv: false,
            name: 'howl',
            gun: 'M4A4', 
            pattren: 0.459,
            quality: 'FT',
            image: 'src/assets/mainpage/m4a4.svg',
            bg: '',
            new: 'src/assets/mainpage/new.svg',
        },
        ball2: {
            id: 113,
            price: 15200, 
            st: false,
            sv: false,
            name: 'flame',
            gun: 'Desert Eagle',
            pattren: 0.338,
            quality: 'FN',
            image: 'src/assets/mainpage/deagle.svg',
            bg: 'src/assets/mainpage/sticker.svg',
            new: '',
        },
        kamo: {
            id: 1134,
            price: 2389, 
            st: false,
            sv: false,
            name: 'Pixel Kamo',
            gun: 'UMP-45', 
            pattren: 0.217,
            quality: 'FN',
            image: 'src/assets/mainpage/ump.svg',
            bg: 'src/assets/mainpage/sticker.svg',
            new: 'src/assets/mainpage/new.svg',
        },
        voy: {
            id: 133,
            price: 13130, 
            st: true,
            sv: false,
            name: 'howl',
            gun: 'M4A4', 
            pattren: 0.459,
            quality: 'WW',
            image: 'src/assets/mainpage/m4a4.svg',
            bg: 'src/assets/mainpage/sticker.svg',
            new: 'src/assets/mainpage/new.svg',
        },
        ball: {
            id: 113,
            price: 15200, 
            st: false,
            sv: false,
            name: 'flame',
            gun: 'Desert Eagle',
            pattren: 0.338,
            quality: 'FT',
            image: 'src/assets/mainpage/deagle.svg',
            bg: 'src/assets/mainpage/sticker.svg',
            new: 'src/assets/mainpage/new.svg',
        },
    })
</script>

<template>
    <section class="main">
        <div class="opening">
            <div class="opening--wrapper-left"></div>
            <div class="opening--wrapper-right"></div>
            <div class="opening--wrapper-middle"></div>
            <h1 class="opening-title">Открой для себя<br>
                новые возможности<br>
                любимых игр</h1>
            <div class="opening-games">
                <div class="opening-games--game">
                    <img src="../assets/mainpage/cs.svg" alt="cs">
                    <p class="opening-games--title">CS 2</p>
                </div>
                <div class="opening-games--game">
                    <img src="../assets/mainpage/dota.svg" alt="dota">
                    <p class="opening-games--title">Dota 2</p>
                </div>
                <div class="opening-games--game">
                    <img src="../assets/mainpage/rust.svg" alt="rust">
                    <p class="opening-games--title">Rust</p>
                </div>
                <div class="opening-games--game">
                    <img src="../assets/mainpage/TF2.svg" alt="tf2">
                    <p class="opening-games--title">Team Fortress 2</p>
                </div>
            </div>
            <button class="opening-button">
                <img src="../assets/mainpage/money.svg" alt="money">
                <p class="opening-button--title">Начать обмен</p>
            </button>
        </div>
        <!-- <MainSlider /> -->
         <div class="fswiper-wrapper">
            <swiper
                @swiper="onSwiper"
                :spaceBetween="30"
                :centeredSlides="true"
                :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
                }"
                :modules="modules"
                id="fswiper"
            >
                <swiper-slide class="fswiper__slide">Slide 1</swiper-slide>
                <swiper-slide class="fswiper__slide">Slide 2</swiper-slide>
                <swiper-slide class="fswiper__slide">Slide 3</swiper-slide>
                <swiper-slide class="fswiper__slide">Slide 4</swiper-slide>
            </swiper> 
            <div>
                <img @click='() => fslider.slidePrev()' class="swiper__left" src="../assets/mainpage/leftarrow.svg" alt="arrow">
                <img @click='() => fslider.slideNext()' class="swiper__right" src="../assets/mainpage/rightarrow.svg" alt="arrow">
                <div class="swiper__carousel">
                    <span class="swiper__carousel-item" :class="factiveIndex == 0 ? 'swiper__carousel-item active': ''" @click="fslider.slideTo(0)"></span>
                    <span class="swiper__carousel-item" :class="factiveIndex == 1 ? 'swiper__carousel-item active': ''" @click="fslider.slideTo(1)"></span>
                    <span class="swiper__carousel-item" :class="factiveIndex == 2 ? 'swiper__carousel-item active': ''" @click="fslider.slideTo(2)"></span>
                    <span class="swiper__carousel-item" :class="factiveIndex == 3 ? 'swiper__carousel-item active': ''" @click="fslider.slideTo(3)"></span>
                </div>
            </div>
         </div>
        <div class="offers">
            <h1 class="offres__title">Лучшие предложения</h1>
            <div class="offers__main">
                <div class="offers__main-select">
                    <p @click="changeGame('cs2')" class="offers__main-select__game">CS2<span v-if="games.cs2" class="offers__main-select__game--active"></span></p>
                    <p @click="changeGame('dota')" class="offers__main-select__game">Dota 2<span v-if="games.dota" class="offers__main-select__game--active"></span></p>
                    <p @click="changeGame('rust')" class="offers__main-select__game">Rust<span v-if="games.rust" class="offers__main-select__game--active"></span></p>
                    <p @click="changeGame('tf2')" class="offers__main-select__game">TF2<span v-if="games.tf2" class="offers__main-select__game--active"></span></p>
                </div>
                <div v-if="games.cs2" class="offers__main-elems">
                    <div v-for="skin in bestSkinsCs" :key="skin.id" class="offers__main-elems-elem">
                        <img src="../assets/mainpage/purple.svg" alt="bg" style="position: absolute; top: -5%; left: 13%;">
                        <img :src="skin.image" alt="skin" style="position: absolute; top: 10%; left: 13%;">
                        <div class="offers__main-elems-elem__sickers">
                            <img v-if="skin.new" :src="skin.new" alt="sticker">
                            <img v-if="skin.bg" :src="skin.bg" alt="sticker">
                        </div>
                        <div class="offers__main-elems-elem__info">
                            <p class="offers__main-elems-elem__info-price">{{ skin.price }} <span style="color: rgba(255, 255, 255, .5); margin-left: 5px">₽</span></p>
                            <p class="offers__main-elems-elem__info-name">{{ skin.name }} <span style="font-size: 12px; color: rgba(255, 255, 255, .5); margin-left: 5px">{{ skin.gun }}</span></p>
                            <img class="offers__main-elems-elem__info-bar"  src="../assets/mainpage/bar.svg" alt="bar"> 
                            <div class="offers__main-elems-elem__info-bottom">
                                <p class="offers__main-elems-elem__info-bottom__quality">
                                    <span class="offers__main-elems-elem__info-bottom__quality--gold" v-if="skin.sv">SV </span>
                                    <span class="offers__main-elems-elem__info-bottom__quality--orange" v-if="skin.st">ST </span>
                                    <span v-if="skin.st  || skin.sv" style="display: block;">|</span>
                                    {{ skin.quality }}</p>
                                <p class="offers__main-elems-elem__info-bottom__pattern">{{ skin.pattren }}</p>   
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="games.dota" class="offers__main-elems">Скины дота</div>
                <div v-if="games.rust" class="offers__main-elems">Скины раст</div>
                <div v-if="games.tf2" class="offers__main-elems">Скины tf2</div>
                <button class="offers__button">Посмотреть все товары</button>
            </div>  
        </div>
        <div class="sswiper">
            <h1 class="sswiper-title">Популярные игры</h1>
            <div class="sswiper-wrapper">
                <swiper
                @swiper="onsSwiper"
                :spaceBetween="30"
                :centeredSlides="true"
                :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
                }"
                :modules="modules"
                id="sswiper"
            >
                <swiper-slide class="sswiper__slide">
                    <img src="../assets/mainpage/cs2slider.png" alt="cs" width='100%' height='100%' style="z-index: 1;">
                    <div class="slide-info">
                        <h1 class="slide-info__title">CS2</h1>
                        <p class="slide-info__text">Уникальные ножи, AWP и все другое, что вы так сильно<br>
                            любите, только на AUFSKINS</p>
                        <button class="slide-info__button">Перейти в раздел</button>
                    </div>
                </swiper-slide>
                <swiper-slide class="sswiper__slide">
                    <img src="../assets/mainpage/dota2slider.jpg" alt="dota" width='100%' height='100%'>
                    <div class="slide-info">

                    </div>
                </swiper-slide>
                <swiper-slide class="sswiper__slide">
                    <img src="../assets/mainpage/rustslider.jpg" alt="rust" width='100%' height='100%'>
                    <div class="slide-info">

                    </div>
                </swiper-slide>
                <swiper-slide class="sswiper__slide">
                    <img src="../assets/mainpage/tf2slider.jpg" alt="tf2" width='100%' height='100%'>
                    <div class="slide-info">

                    </div>
                </swiper-slide>
            </swiper> 
            <div>
                <img @click='() => sslider.slidePrev()' class="swiper__left" src="../assets/mainpage/leftarrow.svg" alt="arrow">
                <img @click='() => sslider.slideNext()' class="swiper__right" src="../assets/mainpage/rightarrow.svg" alt="arrow">
                <div class="swiper__carousel">
                    <span class="swiper__carousel-item" :class="sactiveIndex == 0 ? 'swiper__carousel-item active': ''" @click="sslider.slideTo(0)"></span>
                    <span class="swiper__carousel-item" :class="sactiveIndex == 1 ? 'swiper__carousel-item active': ''" @click="sslider.slideTo(1)"></span>
                    <span class="swiper__carousel-item" :class="sactiveIndex == 2 ? 'swiper__carousel-item active': ''" @click="sslider.slideTo(2)"></span>
                    <span class="swiper__carousel-item" :class="sactiveIndex == 3 ? 'swiper__carousel-item active': ''" @click="sslider.slideTo(3)"></span>
                </div>
            </div>
            </div>
        </div>
        <HugeBuys />
    </section>
</template>

<style scoped>
    .main {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
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
        background-color: #100E19;
    }
    .opening--wrapper-left {
        position: absolute;
        left: -20%;
        bottom: -80%;
        width: 50%;
        height: 731px;
        background: radial-gradient(#B5153F 50%, #6E29F6 80%, #100E19 10%); 
        border-radius: 40%;
        filter: blur(170px)
    }
    .opening--wrapper-right {
        position: absolute;
        right: -40%;
        bottom: -60%;
        width: 50%;
        height: 731px;
        /* background-image: linear-gradient(to bottom #6E29F6, #D9194B #B5157F); */
        background: linear-gradient(30.52deg, #B5157F 33.29%, rgba(217, 25, 75, 0.743958) 54.57%, rgba(110, 41, 246, 0.23) 97.27%);
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
        background: linear-gradient(30.52deg, #E61F53 37.05%, #6E29F6 81.16%, #FF9595 94.3%);
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
        background-color: rgba(196, 19, 65, 1);
        outline: none;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        color: #fff;
        font-size: 18px;
        font-weight: 500;
        clip-path: polygon(11% 0, 93% 0, 100% 69%, 89% 100%, 7% 100%, 0 27%);
        cursor: pointer;
    }
    @media(max-width: 1280px) {
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
    @media(max-width: 768px) {
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
    @media(max-width: 600px) {
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
    .fswiper-wrapper {
        width: 100%;
        position: relative;
        margin-top: 90px;
        margin-bottom: 90px;
    }
    #fswiper {
        width: 100%;
        height: 390px;
    }
    .fswiper__slide {
        width: 100%;
        height: 100%;
        background-color: #FF9595;
    }
    .swiper__left {
        position: absolute;
        top: 40%;
        z-index: 2;
        left: 0;
    }
    .swiper__right {
        position: absolute;
        top: 40%;
        right: 0;
        z-index: 2;
    }
    .swiper__carousel {
        position: absolute;
        display: flex;
        align-items: center;
        gap: 2px;
        bottom: 5%;
        left: 45%;
        z-index: 2;
    }
    .swiper__carousel-item {
        width: 8px;
        height: 4px;
        background: rgba(255, 255, 255, 0.5);
        transition: .3s;
    }
    .swiper-pagination-bullet {
        width: 8px;
        height: 4px;
        background: rgba(255, 255, 255, 0.5);
        transition: .3s;
    }
    .swiper__carousel-item.active {
        width: 77px;
        height: 4px;
        background-color: #fff;
        transition: .3s;
    }
    @media(min-width: 1900px) {
        .fswiper-wrapper {
            width: 95%;
        }
        .swiper__left {
            left: -3%;
        }
        .swiper__right {
            right: -3%;
        }
    }
    @media(max-width: 1280px) {
        .fswiper-wrapper {
            width: 95%;
        }
        #fswiper {
            height: 317px;
        }
        .swiper__left {
            display: none
        }
        .swiper__right {
            display: none
        }
    }
    @media(max-width: 768px) {
        #fswiper {
            height: 437px;
        }
    }
    .offers {
        width: 100%;
        height: 936px;
        display: flex;
        flex-direction: column;
        align-items: start;
    }
    .offres__title {
        font-size: 64px;
        font-weight: 700;
        color: #fff;
    }
    .offers__main-select {
        display: flex;
        align-items: center;
        height: 42px;
        margin-bottom: 15px;
    }
    .offers__main-select__game {
        color: #fff;
        font-size: 18px;
        font-weight: 500; 
        position: relative;
        text-align: center;
        cursor: pointer;
    }
    .offers__main-select__game:nth-child(1) {
        height: 100%;
        width: 67px;
    }
    .offers__main-select__game:nth-child(2) {
        height: 100%;
        width: 91px;
    }
    .offers__main-select__game:nth-child(3) {
        height: 100%;
        width: 74px;
    }
    .offers__main-select__game:nth-child(4) {
        height: 100%;
        width: 172px;
    }
    .offers__main-select__game--active {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 6px;
        background-color: #C41341;
        clip-path: polygon(28% 36%, 77% 51%, 100% 0, 100% 100%, 0 100%, 0 29%);
    }
    .offers__main {
        width: 100%;
        height: 749px;
        max-height: 749px;
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        align-items: start;
    }
    .offers__main-elems {
        width: 100%;
        height: 687px;
        max-height: 687px;
        display: flex;
        align-items: start;
        flex-wrap: wrap;
        gap: 5px 15px;
        overflow: scroll;
        scrollbar-width: none;
    }
    .offers__main-elems::-webkit-scrollbar {
        width: 0;
        height: 0;
    }
    .offers__main-elems-elem {
        width: 193px;
        height: 221px;
        min-width: 193px;
        background-color: #171424;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: end; 
    }
    .offers__main-elems-elem__sickers {
        position: absolute;
        top: 2%;
        right: 5%;
    }
    .offers__button {
        width: 264px;
        height: 56px;
        min-height: 56px;
        outline: none;
        border: none;
        background-color: #C41341;
        font-size: 18px;
        font-weight: 500;
        color: #fff;
        clip-path: polygon(6% 0, 90% 0, 100% 30%, 94% 100%, 10% 100%, 0 70%);
        align-self: flex-end;
        margin-top: 30px;
    }
    .offers__main-elems-elem__info {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 7px;
        margin-bottom: 10px;
    }
    .offers__main-elems-elem__info-price {
        font-size: 18px;
        font-weight: 500;
        color: #fff;
        margin-left: 5px;
    }
    .offers__main-elems-elem__info-name {
        font-size: 14px;
        color: #fff;
        font-weight: 500;
        margin-left: 5px;
    }
    .offers__main-elems-elem__info-bar {
        align-self: center;
    }
    .offers__main-elems-elem__info-bottom {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        width: 177px;
        align-self: center;
    }
    .offers__main-elems-elem__info-bottom__quality {
        font-size: 12px;
        color: rgba(255, 255, 255, 0.5);
        display: flex;
        align-items: center;
        gap: 5px;

    }
    .offers__main-elems-elem__info-bottom__pattern {
        font-size: 12px;
        color: rgba(255, 255, 255, 0.5);
    }
    .offers__main-elems-elem__info-bottom__quality--gold {
        color: gold;
        display: block;
    } 
    .offers__main-elems-elem__info-bottom__quality--orange {
        color: orange;
        display: block;
    } 
    @media(min-width: 1900px) {
        .offres__title {
            font-size: 72px;
        }
        .offers__main-elems {
            height: 454px;
            max-height: 454px;
        }
        .offers__main-elems-elem {
            width: 202px;
        }
        .offers__main-elems-elem:nth-child(17) {
            display: none;
        }
        .offers__main-elems-elem:nth-child(18) {
            display: none;
        }
    }
    @media(max-width: 1280px) {
        .offers {
            width: 100%;
        }
        .offres__title {
            font-size: 28px;
            margin-left: 30px;
        }
        .offers__main-select {
            margin-left: 30px;
        }
        .offers__button {
            margin-right: 30px;
        }
        .offers__main-elems-elem {
            width: 184px;
        }
        .offers__main-elems {
            width: 100%;
            height: 687px;
            max-height: 687px;
        }
    }
    @media(max-width: 768px) {
        .offers__main-elems {
            height: 926px;
            max-height: 926px;
        }
        .offers__main-select__game:nth-child(4) {
            width: 71px;
        }
    }
    .sswiper {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 40px;
        align-items: start;
        margin-bottom: 100px;
    }
    .sswiper-title {
        font-size: 64px;
        font-weight: 700;
        color: #fff;
    }
    .sswiper-wrapper {
        width: 100%;
        height: 524px;
        margin-bottom: 150px;
        position: relative;
    }
    #sswiper {
        width: 100%;
        height: 524px;
        position: relative;
    }
    .slide-info {
        z-index: 1000;
        position: absolute;
        top: 60%;
        left: 3%;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .slide-info__title {
        font-size: 28px;
        font-weight: 700;
        color: #fff;
    }
    .slide-info__text {
        font-size: 16px;
        font-weight: 500;
        color: #fff;
    }
    .slide-info__button {
        width: 214px;
        height: 56px;
        background: #C41341;
        text-align: center;
        clip-path: polygon(6% 0, 90% 0, 100% 30%, 94% 100%, 10% 100%, 0 70%);
        cursor: pointer;
        border: none;
        outline: none;
        color: #fff;
        font-size: 18px;
    }
    .sswiper__slide {
        width: 100%;
        height: 100%;
        position: relative;
    }
    @media(min-width: 1900px) {
        .sswiper {
            width: 95%;
        }
    }
    @media(max-width: 1280px) {
        .sswiper {
            width: 95%;
        }
        .sswiper-title {
            font-size: 28px;
        }
    }
</style>