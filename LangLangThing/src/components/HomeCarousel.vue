<script>
import IconCarouselFrame from '../components/icons/IconCarouselFrame.vue';
import IconChangeButton from './icons/IconChangeButton.vue';


export default {
    components: {
        IconCarouselFrame,
        IconChangeButton
    },
    data() {
        return {
            frame: new URL('@/assets/Image/CarouselImage/carouselframe.svg', import.meta.url).href,
            slides: [
                new URL('@/assets/Image/CarouselImage/beagledog.svg', import.meta.url).href,
                new URL('@/assets/Image/CarouselImage/orangecat.svg', import.meta.url).href,
                new URL('@/assets/Image/CarouselImage/goldendog.svg', import.meta.url).href,
                new URL('@/assets/Image/CarouselImage/tabbycat.svg', import.meta.url).href,
                new URL('@/assets/Image/CarouselImage/taiwandog.svg', import.meta.url).href,
                new URL('@/assets/Image/CarouselImage/beagledog.svg', import.meta.url).href,
                new URL('@/assets/Image/CarouselImage/orangecat.svg', import.meta.url).href,
                new URL('@/assets/Image/CarouselImage/goldendog.svg', import.meta.url).href,
                new URL('@/assets/Image/CarouselImage/tabbycat.svg', import.meta.url).href,
                new URL('@/assets/Image/CarouselImage/taiwandog.svg', import.meta.url).href,
            ],
            currentIndex: 0,
            mysubmit: "更多浪浪",
            mybgcolor: 'var(--primary-color)',
            mytextcolor: 'var(--white-color)',
            myw: '11rem',
            myh: '4rem',

        };
    },
    methods: {
        scrollToTop() {
            window.scrollTo({
                top: 0,
                // behavior行動= 平滑
                behavior: 'smooth',
            });
        },
        lostandfoundPage() {
            this.$router.push('/lostandfoundsearch');
            this.scrollToTop();
        },

    },
};
</script>
<template>
    <div class="carouselshow">
        <div class="slideshow">
            <div class="carousel" v-for="img in slides">
                <IconCarouselFrame :framePath="frame" :imgPath="img"></IconCarouselFrame>
            </div>
        </div>
    </div>
    <div class="many">
        <IconChangeButton :text="mysubmit" @click="lostandfoundPage" :textColor="mytextcolor" :bgColor="mybgcolor" :w="myw"
            :h="myh">
        </IconChangeButton>
    </div>
</template>
<style scoped>
/* 幻燈片播放 */
.carousel {
    display: flex;
    animation: translate 15s linear infinite;
}

@keyframes translate {
    100% {
        transform: translateX(calc(-106rem));
    }
}



.carouselshow {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    padding: 3.1rem 6.8rem;
    overflow: hidden;
}

.slideshow {
    display: flex;
    align-items: center;
    background-color: transparent;
    gap: 5rem;
    width: 105rem;
}

.many {
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>