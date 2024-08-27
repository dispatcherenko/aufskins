<script setup>
    import { ref } from 'vue'
    const hugebuys = ref({
        poseidon: {
            id: 123123,
            price: 98454, 
            name: 'Посейдон',
            gun: 'UMP-45', 
            image: 'src/assets/mainpage/aug.svg',
        },
        howl: {
            id: 32123,
            price: 13130, 
            name: 'howl',
            gun: 'M4A4', 
            image: 'src/assets/mainpage/m4a4.svg',
        },
        flame: {
            id: 1233213,
            price: 15200, 
            name: 'flame',
            gun: 'Desert Eagle',
            image: 'src/assets/mainpage/deagle.svg',
        },
        pixel: {
            id: 444111,
            price: 2389, 
            name: 'Pixel Kamo',
            gun: 'UMP-45', 
            image: 'src/assets/mainpage/ump.svg',
        },
        how: {
            id: 124213,
            price: 13130, 
            name: 'howl',
            gun: 'M4A4', 
            image: 'src/assets/mainpage/m4a4.svg',
        },
        fire: {
            id: 4123,
            price: 15200, 
            name: 'flame',
            gun: 'Desert Eagle',
            image: 'src/assets/mainpage/deagle.svg',
        },
        kamo: {
            id: 1134,
            price: 2389, 
            name: 'Pixel Kamo',
            gun: 'UMP-45', 
            image: 'src/assets/mainpage/ump.svg',
        },
        voy: {
            id: 133,
            price: 13130, 
            name: 'howl',
            gun: 'M4A4', 
            image: 'src/assets/mainpage/m4a4.svg',
        },
        ball: {
            id: 113,
            price: 15200, 
            name: 'flame',
            gun: 'Desert Eagle',
            image: 'src/assets/mainpage/deagle.svg',
        },
        ump: {
            id: 1134,
            price: 2389, 
            name: 'Pixel Kamo',
            gun: 'UMP-45', 
            image: 'src/assets/mainpage/ump.svg',
        },
        m4: {
            id: 133,
            price: 13130, 
            name: 'howl',
            gun: 'M4A4', 
            image: 'src/assets/mainpage/m4a4.svg',
        },
        de: {
            id: 113,
            price: 15200, 
            name: 'flame',
            gun: 'Desert Eagle',
            image: 'src/assets/mainpage/deagle.svg',
        },
    })
</script>

<template>
    <section class="wrapper">
        <h1 class="title">Крупные покупки 24 часа</h1>
        <div class="courusel">
            <div v-for="skin in hugebuys" :key="skin.id" class="courusel__element">
                <img src="../assets/mainpage/red.svg" alt="bg" style="position: absolute; top: 0; left: 13%;">
                <img :src="skin.image" alt="skin" style="position: absolute; top: 20%; left: 13%;">
                <div class="courusel__element__info">
                    <p class="courusel__element__info-price">{{ skin.price }} <span class="courusel__element__info-price--gray">₽</span></p>
                    <p class="courusel__element__info-name">{{ skin.name }} <span class="courusel__element__info-name--gray">{{ skin.gun }}</span></p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2  0px;
        align-items: start;
        margin-bottom: 20px;
    }
    .title {
        font-size: 24px;
        font-weight: 700;
        color: #fff;
        margin-bottom: 30px;
    }
    .courusel {
        width: 105%;
        display: flex;
        flex-wrap: nowrap;
        gap: 20px;
        height: 174px;
        overflow: hidden;
        overflow-x: scroll;
        scrollbar-width: none;
    }
    .courusel::-webkit-scrollbar {
        width: 0;
        height: 0;
    }
    .courusel__element {
        width: 184px;
        min-width: 184px;
        height: 100%;
        background: rgba(23, 20, 36, 1);
        position: relative;
        display: flex;
        align-items: end;
        justify-content: center
    }
    .courusel__element__info {
        width: 80%;
        display: flex;
        flex-direction: column;
        gap: 5px;
        align-items: start;
        margin-bottom: 10px;
    }   
    .courusel__element__info-price {
        font-size: 18px;
        font-weight: 500;
        color: #fff;
    }
    .courusel__element__info-name {
        font-size: 14px;
        font-weight: 500;
        color: #fff;
    }
    .courusel__element__info-price--gray {
        color: rgba(255, 255, 255, .5); 
        font-size: 12px;
    }
    .courusel__element__info-name--gray {
        color: rgba(255, 255, 255, .5); 
        font-size: 12px;
        margin-left: 5px;
    }
    @media(max-width: 1280px) {
        .title {
            margin-left: 30px
        }
        .courusel {
            margin-left: 30px;
        }
    }
</style>