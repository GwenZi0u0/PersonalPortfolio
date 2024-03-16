<script>
import FooterPage from '@/components/FooterPage.vue';
import NavPage from '@/components/NavPage.vue';
import TitleAndLine from '@/components/TitleAndLine.vue';
import PetsCardImage from '@/components/PetsCardImage.vue';
import PetsCardFrame from '@/components/PetsCardFrame.vue';
import IconCard from '@/components/icons/LostAnimals/IconCard.vue';
import Animals from '@/json/Animals.json';
import PetsCardImageFrame from '@/components/PetsCardImageFrame.vue';

export default {
    components: {
        NavPage,
        FooterPage,
        TitleAndLine,
        PetsCardFrame,
        IconCard,
        PetsCardImage,
        PetsCardImageFrame
    },
    data() {
        return {
            parentStyle: {
                gap: '65px',
                color: '#52A038',
                fontSize: "2.25rem",
            },
            parentStyleTwo: {
                gap: '37px',
                color: '#52A038',
                fontSize: "2.25rem",
            },
            parentStyleThree: {
                gap: '31px',
                color: '#52A038',
                fontSize: "1.6rem",
            },
            parentStyleFour: {
                gap: '4px',
                color: '#52A038',
                fontSize: "1.25rem",
            },
            parenttwoStyle: {
                gap: '35px',
                color: '#52A038',
                fontSize: "2.25rem",
            },
            parenttwoStyleTwo: {
                gap: '35px',
                color: '#52A038',
                fontSize: "2.25rem",
            },
            parenttwoStyleThree: {
                gap: '33px',
                color: '#52A038',
                fontSize: "1.6rem",
            },
            parenttwoStyleFour: {
                gap: '7px',
                color: '#52A038',
                fontSize: "1.25rem",
            },
            // 傳入動物資料
            Animals: Animals,
            // 隨機動物資料
            randomAnimals: [],
            // 找到動物
            foundAnimal: "",
            // 收藏動物
            likeAnimals: [],
        };
    },
    // 從主頁挑轉進來時
    created() {
        this.randomAnimals = this.getRandomAnimals(Animals, 5);
        this.lookingAnimal();
        this.getLikeAnimals();
        this.scrollToTop();
        // console.log(this.foundAnimal);
        // 卡片點擊後重新渲染整個頁面
        // 監聽網址改變
        this.$watch(
            () => this.$route.params,
            async () => {
                this.randomAnimals = this.getRandomAnimals(Animals, 5);
                this.lookingAnimal();
                this.getLikeAnimals();
                this.scrollToTop();
            }
        )
    },
    methods: {
        getRandomAnimals(arr, n) {
            return arr.sort(() => Math.random() - 0.5).slice(0, n);
        },
        lookingAnimal() {
            this.foundAnimal = this.Animals.find(x => x.名稱 == this.$route.params.name)
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
            // console.log(this.likeAnimals);
            // 如果在this.likeAnimals的動物名字裡未找到ani,就要push; 如果找到就remove;
            if (this.likeAnimals.find(x => x.名稱 == this.foundAnimal.名稱)) {
                this.removeFromArray(this.likeAnimals, this.foundAnimal);
            } else {
                this.likeAnimals.push(this.foundAnimal);
            }
            // 儲存更新 stringify JS物件轉JSON文字
            localStorage.likeAnimals = JSON.stringify(this.likeAnimals);
        },
        // 移除ani
        removeFromArray(arr) {
            // 從陣列找到第幾個喜歡的
            const index = arr.findIndex(animal => animal.名稱 === this.foundAnimal.名稱);

            if (index !== -1) {
                // 使用 splice(刪除) 陣列中移除 index(第幾個)元素, 刪除1
                arr.splice(index, 1);
            }
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
                // behavior行動= 平滑
                behavior: 'smooth',
            });
        },
    },
    // 不斷自動更新
    computed: {
        // 檢查愛心 是否存在喜歡的動物清單
        isAnimalLiked() {
            return this.likeAnimals.find(x => x.名稱 == this.foundAnimal.名稱) ? true : false;
        }
    }
}
</script>
<template>
    <NavPage />
    <main>
        <!-- 所有可以超連結的 都要用router-link 假設V-for ani in animals  name = ani.名稱    -->
        <!-- <router-link :to="{ name: 'adoptionpetinformation', params: { name: 'VAAAG112120503' } }">
            <div>{{ $route.params.name }}</div>
        </router-link> -->

        <div class="adoptionCenteTitle">
            <span>認養中心</span>
            <p>> 毛小孩詳細資訊</p>
        </div>
        <!-- 上方卡片區 1980 & 1280-->
        <div class="furryBabiesCard">
            <!-- 卡片區圖 -->
            <PetsCardImage @favoriteAnimal="updateLikeAnimal" :AnimalData="this.foundAnimal"
                :inputIsFavorite="isAnimalLiked" />
            <!-- 愛心傳參數PetsCardImage -->
            <!-- 卡片區表格 -->
            <PetsCardFrame :animalData="this.foundAnimal" />
        </div>
        <!-- 上方卡片區 768 & 368版 -->
        <div class="furryBabiesCardSmall">
            <PetsCardImageFrame @favoriteAnimal="updateLikeAnimal" :AnimalData="this.foundAnimal" />
        </div>
        <!-- 送養中心 -->
        <div class="adoptionInstructions">
            <!-- 1980標題 -->
            <TitleAndLine class="LineOne" text="送養說明" linew="1300px" :customStyle="parentStyle" />
            <!-- 1280標題 -->
            <TitleAndLine class="LineTwo" text="送養說明" linew="648px" :customStyle="parentStyleTwo" />
            <!-- 768標題 -->
            <TitleAndLine class="LineThree" text="送養說明" linew="350px" :customStyle="parentStyleThree" />
            <!-- 375標題  -->
            <TitleAndLine class="LineFour" text="送養說明" linew="200px" :customStyle="parentStyleFour" />
            <div class="instructionsText">
                二貓都是女生，都作完結育及用全能貓作體內外驅蟲了。年紀都還很輕，未滿一歲，只是都曾生育過。
                <br>
                <br>
                目前正漸漸養胖中。白黃貓親人花貓警戒心較重，但相信有主人耐心的愛一定能讓她融化她的戒心的。
            </div>
        </div>
        <!-- 更多毛小孩 -->
        <div class="manyFurryBabies">
            <!-- 1980標題 -->
            <TitleAndLine class="manyLineOne" text="更多毛小孩" linew="1282px" :customStyle="parenttwoStyle" />
            <!-- 1280標題 -->
            <TitleAndLine class="manyLineTwo" text="更多毛小孩" linew="568px" :customStyle="parenttwoStyleTwo" />
            <!-- 768標題 -->
            <TitleAndLine class="manyLineThree" text="更多毛小孩" linew="313px" :customStyle="parenttwoStyleThree" />
            <!-- 375標題  -->
            <TitleAndLine class="manyLineFour" text="更多毛小孩" linew="173px" :customStyle="parenttwoStyleFour" />
            <!-- 卡片區 -->
            <div class="furryBabiesCardFrame">
                <div class="BabiesCard">
                    <IconCard v-for="animal in randomAnimals" :AnimalData="animal" :prefix="'../'" />
                </div>
            </div>
        </div>
    </main>
    <FooterPage />
</template>
<style scoped>
main {
    width: 100vw;
    max-width: 100%;
    padding: 68px 144px 213px 174px;
}

/* 標題 */
.adoptionCenteTitle {
    display: flex;
    flex-direction: row;
    padding: 0 0 103px 26px;
    font-size: 3rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 12px;
}

.adoptionCenteTitle span {
    color: var(--primary-color);
}

.adoptionCenteTitle p {
    color: #D7D7D7;
    padding-left: 27px;
}

/* 上方卡片區域 */
.furryBabiesCard {
    display: flex;
    flex-direction: row;
    padding: 0 0 110px 24px;
}

.furryBabiesCardSmall {
    display: none;
    visibility: hidden;
}

/* 送養說明 */
.adoptionInstructions {
    display: flex;
    flex-direction: column;
}

.instructionsText {
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.8rem;
    letter-spacing: 6px;
    padding: 0 13px 0 75px;
    margin: 4.6rem 0;
}

.manyFurryBabies {
    display: flex;
    flex-direction: column;
}

.furryBabiesCardFrame {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 73px;
    width: 1570px;
}

.BabiesCard {
    display: flex;
    flex-direction: row;
    padding: 0 3.75rem;
    gap: 50px;
}

/* 1280標題 */
.LineTwo {
    display: none;
    visibility: hidden;
}

/* 768標題  */
.LineThree {
    display: none;
    visibility: hidden;
}

/* 375標題  */
.LineFour {
    display: none;
    visibility: hidden;
}

.manyLineTwo {
    display: none;
    visibility: hidden;
}

.manyLineThree {
    display: none;
    visibility: hidden;
}

.manyLineFour {
    display: none;
    visibility: hidden;
}

@media screen and (max-width:720px) {
    main {
        padding: 22px 0 84px;
    }

    /* 標題 */
    .adoptionCenteTitle {
        padding: 0 0 55px 33px;
        font-size: 1.25rem;
        letter-spacing: 4.8px;
    }

    .adoptionCenteTitle p {
        padding-left: 9px;
    }

    /* 上方卡片區 */
    .furryBabiesCard {
        display: none;
        visibility: hidden;
    }

    .furryBabiesCardSmall {
        display: flex;
        visibility: visible;
        align-items: center;
        justify-content: center;
        padding-left: 5px;
    }

    /* 送養中心 */
    .adoptionInstructions {
        padding: 54px 0 0 33px;
    }

    .instructionsText {
        font-size: 1rem;
        line-height: 120%;
        letter-spacing: 4px;
        padding: 25px 25px 59px 33px;
        margin: 0;
    }

    .LineOne {
        display: none;
        visibility: hidden;
    }

    .LineFour {
        display: flex;
        visibility: visible;
    }

    /* 更多毛小孩 */
    .manyLineOne {
        display: none;
        visibility: hidden;
    }

    .manyLineFour {
        display: flex;
        visibility: visible;
    }

    .manyFurryBabies {
        padding: 0 0 32px 25px;
    }

    /* 卡片區 */
    .furryBabiesCardFrame {
        padding-top: 32px;
        width: 368px;
    }

    .BabiesCard {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        padding: 0;
        gap: 30px;
        height: 940px;
        overflow: hidden;
    }

}

@media screen and (max-width:1280px) and (min-width:769px) {
    main {
        padding: 69px 100px 156px;
    }

    /* 認養中心 */
    .adoptionCenteTitle {
        padding-bottom: 122px;
    }

    .furryBabiesCard {
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 0 0 76px 107px;
        gap: 69px;
    }

    /* 送養中心 */
    .LineOne {
        display: none;
        visibility: hidden;
    }

    .LineTwo {
        display: flex;
        visibility: visible;
        padding-left: 80px;
    }

    .instructionsText {
        padding: 0 48px 0 132px;
    }

    /* 更多毛小孩 */
    /* 1980標題 */
    .manyLineOne {
        display: none;
        visibility: hidden;
    }

    /* 1280標題 */
    .manyLineTwo {
        display: flex;
        visibility: visible;
    }

    .manyFurryBabies {
        padding-left: 80px;
    }

    .furryBabiesCardFrame {
        display: flex;
        align-items: center;
        width: 998px;
        padding-top: 52px;

    }

    .BabiesCard {
        display: flex;
        align-items: flex-start;
        flex-wrap: wrap;
        flex-direction: none;
        padding: 0;
        width: 904px;
    }
}

@media screen and (max-width:768px) and (min-width:720px) {
    main {
        padding: 44px 86px 197px 40px;
    }

    /* 認養中心 */
    .adoptionCenteTitle {
        font-size: 1.6rem;
        letter-spacing: 6.5px;
    }

    .adoptionCenteTitle p {
        padding: 0 0 0 2.5rem;
    }

    /* 上方卡片區 */
    .furryBabiesCard {
        display: none;
        visibility: hidden;
    }

    .furryBabiesCardSmall {
        display: flex;
        visibility: visible;
        align-items: center;
        flex-direction: column;
        padding: 0 0 104px 81px;
    }

    /* 送養中心 */
    .LineOne {
        display: none;
        visibility: hidden;
    }

    .LineThree {
        display: flex;
        visibility: visible;
    }

    .adoptionInstructions {
        padding-left: 55px;
    }

    .instructionsText {
        letter-spacing: 6px;
        padding: 0;
    }

    /* 更多毛小孩 */
    .manyFurryBabies {
        padding-left: 55px;
    }

    /* 1980標題 */
    .manyLineOne {
        display: none;
        visibility: hidden;
    }

    /* 768標題 */
    .manyLineThree {
        display: flex;
        visibility: visible;
    }

    /* 卡片區 */
    .furryBabiesCardFrame {
        width: 751px;
        padding-top: 45px;
    }

    .BabiesCard {
        display: flex;
        flex-direction: none;
        align-items: flex-start;
        flex-wrap: wrap;
        width: 751px;
        padding: 0;
        column-gap: 40px;
        row-gap: 20px;
    }


}
</style>