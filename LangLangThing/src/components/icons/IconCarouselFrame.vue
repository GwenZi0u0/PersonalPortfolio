<script>
export default {
    props: {
        framePath: String,
        imgPath: String,
    },
};
</script>
<template>
    <div class="carouselFrame">
        <img :src="framePath" alt="" class="frame">
        <img :src="imgPath" class="img">
    </div>
</template>
<style scoped>
.carouselFrame {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16.25rem;
    height: 17.8125rem;
}

.frame {
    display: flex;
    width: 100%;
    height: 100%;
    z-index: 2;
}

.img {
    display: flex;
    align-items: center;
    width: 15.4375rem;
    height: 15.0125rem;
    position: absolute;
    z-index: 1;
    top: 0.8rem;
}
</style>