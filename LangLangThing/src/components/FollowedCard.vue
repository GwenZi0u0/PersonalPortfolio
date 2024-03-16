<script>
import CardClickLike from './CardClickLike.vue';
export default {
    components: { CardClickLike },
    props: {
        AnimalData: Object, //單一動物資料
        prefix: String
    },
    data() {
        return {
        }
    },
    created() {
        // ../的暫時替代方案 如果有前綴 把imagePath設為前綴;反之則"空"
        if (this.prefix) {
            this.imagePath = this.prefix
        }
        else {
            this.imagePath = ""
        }
        // console.log(this.imagePath)
    },
    methods: {
        favoriteAnimal() {
            this.$emit("favoriteAnimal", this.AnimalData);
        },
        getLikeAnimals() {
            // 讀取localStorage.likeAnimals
            const tmp = localStorage.getItem("likeAnimals");
            // console.log(tmp);
            // 如果有資料
            if (tmp) {
                // parse JSON文字轉JS物件
                this.likeAnimals = JSON.parse(tmp);
            }
        },
        updateLikeAnimal() {
            this.getLikeAnimals();
            // 如果在this.likeAnimals的(indexOf)列表裡未找到ani,就要push; 如果找到就remove;
            if (this.likeAnimals.indexOf(this.foundAnimal) == -1) {
                this.likeAnimals.push(this.foundAnimal);
            } else {
                removeFromArray(this.likeAnimals, this.foundAnimal);
            }
            // 儲存更新 stringify JS物件轉JSON文字
            localStorage.likeAnimals = JSON.stringify(this.likeAnimals);
        },
        removeFromArray(arr, elem) {
            const index = arr.indexOf(elem);
            if (index !== -1) {
                // 使用splice方法從陣列中移除元素
                arr.splice(index, 1);
            }
        }
    }
}
</script>
<template>
    <div class="card"
        :style="{ backgroundImage: 'url(' + imagePath + AnimalData.path + '),url(' + imagePath + 'src/assets/Image/DogPawGreen.svg)' }">
        <CardClickLike class="heart" @favorite="favoriteAnimal" :inputIsFavorite="true"></CardClickLike>
    </div>
</template>
<style scoped>
.card {
    width: 300px;
    height: 300px;
    border: 15px solid var(--primary-color);
    border-radius: 70px;
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: end;
    position: relative;
    top: 0;
    left: 0;
}

.card:nth-child(3)::before,
.card:nth-child(8)::before {
    content: "已送養";
    color: var(--white-color);
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 235px;
    letter-spacing: 6px;
    width: 300px;
    height: 300px;
    background-color: rgba(37, 37, 37, 0.6);
    border: 15px solid #B7B7B7;
    border-radius: 70px;
    position: absolute;
    top: -15px;
    left: -15px;
}

.heart {
    transform: scale(0.6);
}

@media screen and (max-width:720px) {
    .card {
        width: 205px;
        height: 205px;
        border-radius: 40px
    }

    .card:nth-child(3)::before,
    .card:nth-child(8)::before {
        font-size: 1rem;
        width: 205px;
        height: 205px;
        border-radius: 40px;
        line-height: normal;
    }

    .heart {
        width: 30px;
        height: 25px;
        position: absolute;
        left: 10px;
        bottom: 10px;
    }

}
</style>