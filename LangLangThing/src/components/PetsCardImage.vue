<script>
import CardClickLike from '@/components/CardClickLike.vue';

export default {
    components: {
        CardClickLike,
    },
    props: {
        AnimalData: Object, //單一動物資料
        inputIsFavorite: Boolean,
    },
    methods: {
        favoriteAnimal() {
            this.$emit("favoriteAnimal");
        }
    }
}
</script>
<template>
    <div class="furryBabiesImage">
        <div class="img"
            :style="{ backgroundImage: 'url(../' + AnimalData.path + '),url(../src/assets/Image/DogPawGreen.svg)' }">
        </div>
        <CardClickLike class="heart" @favorite="favoriteAnimal" :inputIsFavorite="this.inputIsFavorite"></CardClickLike>
    </div>
</template>
<style scoped>
.furryBabiesImage {
    display: flex;
    align-items: center;
    margin-right: 66px;
    position: relative;
}

.img {
    width: 645px;
    height: 534px;
    background-repeat: no-repeat;
    background-size: cover;
}

/* 卡片愛心 */
.furryBabiesImage .heart {
    position: absolute;
    bottom: 28px;
    left: 35px;
}

@media screen and (max-width:1280px) and (min-width:768px) {

    .furryBabiesImage {
        display: flex;
        align-items: center;
        margin-right: 0;
        position: relative;
    }

    .img {
        width: 505px;
        height: 418px;
    }

    .furryBabiesImage .heart {
        position: absolute;
        bottom: 21.9px;
        left: 27.9px;
    }
}

@media (max-width: 768px) {
    .furryBabiesImage {
        display: flex;
        align-items: center;
        margin-right: 66px;
        position: relative;
    }

    .img {
        width: 446px;
        height: 369px;
        background-repeat: no-repeat;
        background-size: cover;
    }

    /* 卡片愛心 */
    .furryBabiesImage .heart {
        position: absolute;
        bottom: 28px;
        left: 35px;
    }
}

@media (max-width: 720px) {
    .furryBabiesImage {
        display: flex;
        align-items: center;
        margin-right: 66px;
        position: relative;
    }

    .img {
        width: 278px;
        height: 230px;
    }

    /* 卡片愛心 */
    .furryBabiesImage .heart {
        position: absolute;
        bottom: 28px;
        left: 35px;
    }
}
</style>