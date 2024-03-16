<script>
export default {
    props: {
        cardBorderColor: String,  //卡片
        checkBoxColor: String,  //卡片裡的色塊
        AnimalData: Object, //單一動物資料
        prefix: String, //../的暫時替代方案
        myurl:String,//IconCard路由
    },
    data() {
        return {
            // imagePath:'@/assets/Image/CarouselImage/beagledog.svg',
            imagePath: "",
        }
    },
    mounted() {
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
        // getImageUrl() {
        //     return process.env.BASE_URL + this.imagePath;
        // }
    },
}
</script>
<template>
    <router-link :to="{ name: myurl , params: { name: AnimalData.名稱 } }">
        <div class="card-container">
            <div class="card-ccontent" :style="{ borderColor: cardBorderColor }">
                <div class="image"
                    :style="{ backgroundImage: 'url(' + imagePath + AnimalData.path + '),url(' + imagePath + 'src/assets/Image/DogPawGreen.svg)' }">
                    <!-- <img :src="imgPath" alt=""> -->
                    <p class="check" :style="{ backgroundColor: checkBoxColor }">查看詳細資訊</p>
                </div>
                <div class="text">
                    <!-- 原先資料內容 2023-11-28 00:00:00
                    split(" ")[0] => [2023-11-28,00:00:00] =>切陣烈
                    .split("-") => [2023,11,28] => 切陣列
                    .join("/") => "2023/11/28" => 組合成字串 
                -->
                    <span>建立時間 : {{ AnimalData.建立.split(" ")[0].split("-").join("/") }}</span>
                    <br>
                    <span>上次更新 : {{ AnimalData.更新.split(" ")[0].split("-").join("/") }}</span>
                </div>
            </div>
        </div>
    </router-link>
</template>

<style scoped>
a {
    background-color: transparent;
}

.card-ccontent {
    width: 250px;
    height: 277px;
    border: 1px solid var(--primary-color);
    border-radius: 30px;
    padding: 19px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--white-color);
    cursor: pointer;
}

.image {
    width: 200px;
    height: 200px;
    background-image: url(src/assets/Image/DogPawGreen.svg);
    background-size: cover;
    background-repeat: no-repeat;
    margin-bottom: 17px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    text-align: center;
    color: var(--white-color);
    font-size: 16px;
    font-family: 'ABeeZee';
}

.check {
    background-color: var(--primary-color);
    padding: 8px 0;
    opacity: 0.8;
}

.text {
    font-size: 12px;
    font-family: 'ABeeZee';
    letter-spacing: 2px;
    text-align: center;
    color: var(--gray-color);
}
</style>