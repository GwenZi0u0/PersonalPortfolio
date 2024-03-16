<script>
import IconGotop from './icons/IconGotop.vue';

export default {
    components: {
        IconGotop,
    },
    data() {
        return {
            showGoTop: false,
        };
    },
    methods: {
        scrollToTop() {
            const currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
            if (currentPosition > 0) {
                // Smooth scroll animation
                window.requestAnimationFrame(this.scrollToTop);
                window.scrollTo(0, currentPosition - currentPosition / 10);
            }
        },
        handleScroll() {
            const scrollPosition = window.scrollY || document.documentElement.scrollTop;
            // console.log(scrollPosition);
            if (scrollPosition > 500) {
                this.showGoTop = true;
            } else {
                this.showGoTop = false;
            }
        },
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
};
</script>
<template>
    <div id="goTop" @click="scrollToTop" v-if="showGoTop">
        <IconGotop></IconGotop>
    </div>
</template>

<style scoped>
#goTop {
    display: flex;
    width: 81px;
    height: 80px;
    z-index: 5;
    position: fixed;
    right: 33px;
    bottom: 250px;
    cursor: pointer;
    opacity: 0.9;
    transform: opacity 0.3s ease;
}

#goTop:hover {
    opacity: 1;
}


@media screen and (max-width:1280px) and (min-width:769px) {
    #goTop {
        right: 18px;
        bottom: 200px;
    }
}

@media screen and (max-width:768px) and (min-width:720px) {
    #goTop {
        right: 18px;
        bottom: 180px;
    }
}

@media screen and (max-width:720px) {
    #goTop {
        width: 51px;
        height: 50px;
        right: 18px;
        bottom: 150px;
    }
}
</style>