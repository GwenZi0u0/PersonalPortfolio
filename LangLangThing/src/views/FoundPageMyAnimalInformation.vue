<script>
import FooterPage from '@/components/FooterPage.vue';
import NavPage from '@/components/NavPage.vue';
import TitleAndLine from '@/components/TitleAndLine.vue';
import PetsCardImage from '@/components/PetsCardImage.vue';
import FundInfoFrame from '@/components/icons/LostAnimals/FundInfoFrame.vue';
import Animals from '@/json/Animals.json';

export default {
    components: {
        NavPage,
        FooterPage,
        TitleAndLine,
        PetsCardImage,
        FundInfoFrame,
    },
    data() {
        return {
            // 分隔線設定
            mytext: "其他說明",
            parentStyle: {
                gap: '35px',
            },
            // 傳入動物資料
            Animals: Animals,
            // 找到動物
            foundAnimal: "",
            // 收藏動物
            likeAnimals: [],
        };
    },
    created() {
        this.lookingAnimal();
        // console.log(this.foundAnimal);
    },
    methods: {
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
    <NavPage />
    <main>
        <div class="adoptionCenteTitle">
            <span>失散協尋</span>
            <p>> 遺失動物資訊</p>
        </div>
        <!-- 上方卡片區 -->
        <div class="furryBabiesCard">
            <span class="sm-id">晶片號碼 : AAAHG1130116001</span>
            <!-- 卡片區圖 -->
            <PetsCardImage @favoriteAnimal="updateLikeAnimal" :AnimalData="this.foundAnimal" lineApp="var(--B68337)"
                class="petsimg"></PetsCardImage>
            <!-- 卡片區表格 -->
            <FundInfoFrame :animalData="this.foundAnimal" numberBg="var(--B68337)" borderTh="var(--B68337)"
                borderTd="var(--B68337)" textColor="var(--B68337)" lineApp="var(--B68337)" class="infoframe">
            </FundInfoFrame>
        </div>
        <div id="contactTitle">
            <span>其他說明</span>
            <div id="contactLine">
                <div id="Line"></div>
                <div id="squre"></div>
            </div>
        </div>

        <pre class="instructionsText">
年紀大約11-12歲
愛滋貓
尾巴是短尾
全口已無牙齒
背後有一塊比較深的橘色/
</pre>
    </main>
    <FooterPage />
</template>
<style scoped>
main {
    width: 100vw;
    max-width: 100%;
    padding: 182px 182px 177px 158px;
}

/* 標題 */
.adoptionCenteTitle {
    display: flex;
    flex-direction: row;
    padding: 0 0 6.25rem 1.5rem;
    font-size: 48px;
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
    padding-left: 2.5rem;
}

/* 上方卡片區域 */
.furryBabiesCard {
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    padding: 0 0 6.8rem 0;
}

.sm-id {
    display: none;
}

/*------------ 其他說明標題區------------ */

/* 標題文字 */
#contactTitle {
    display: flex;
    align-items: center;
    padding-left: 38px;
}

#contactTitle span {
    color: var(--B68337);
    font-size: 36px;
    letter-spacing: 9px;
    width: 200px;
}

/* Line */
#contactLine {
    display: flex;
    padding-left: 34px;
}

#Line {
    width: 1311px;
    height: 2px;
    background-color: var(--B68337);
}

#squre {
    width: 10px;
    height: 10px;
    background-color: var(--B68337);
    transform: translate(0px, -3.5px) rotate(45deg);
}

.instructionsText {
    width: 1431px;
    font-family: 'Inter';
    font-size: 24px;
    font-style: normal;
    white-space: pre-wrap;
    line-height: 59px;
    letter-spacing: 6px;
    margin-top: 4.6rem;
}

@media (max-width: 1280px) {
    .furryBabiesCard {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 64px;
        padding-bottom: 61px;
    }

    /* 標題文字 */
    #contactTitle {
        padding-left: 12px;
    }

    #Line {
        width: 700px;
    }

    .instructionsText {
        width: 100%;
        margin-top: 4.6rem;
        margin-left: 24px;
        word-break: break-all;
    }

}

@media (max-width: 768px) {
    main {
        padding: 39px 133px 133px 44px;
    }

    /* 標題 */
    .adoptionCenteTitle {
        padding: 0 0 78px 0;
        font-size: 24px;
        letter-spacing: 6.5px;
    }

    .adoptionCenteTitle p {
        padding-left: 8px;
    }

    /* 上方卡片區域 */
    .furryBabiesCard {
        width: 497px;
        height: 998px;
        background-color: var(--B68337);
        border-radius: 10px 10px 0 0;
        padding: 27px 0 0 0;
        gap: 0px;
        margin: 0 0 72px 81px;
    }

    .sm-id {
        display: block;
        font-size: 20px;
        color: #FFF;
        font-family: sans-serif;
        font-weight: 600;
        letter-spacing: 2px;
        margin-bottom: 21px;
    }

    .petsimg {
        margin: auto;
    }

    /* 標題文字 */
    #contactTitle {
        display: flex;
        justify-content: flex-end;
        padding-left: 0;
    }

    #contactTitle span {
        font-size: 26px;
        letter-spacing: 6.5px;
        text-align: end;
    }

    /* Line */
    #contactLine {
        padding-left: 30px;
    }

    #Line {
        width: 350px;
    }

    .instructionsText {
        width: 518px;
        margin-left: 71px;
    }
}

@media (max-width: 720px) {
    main {
        padding: 22px 4px;
    }

    /* 標題 */
    .adoptionCenteTitle {
        padding: 0 0 55px 0;
        font-size: 20px;
        letter-spacing: 4.8px;
    }

    .adoptionCenteTitle p {
        padding-left: 10px;
    }

    /* 上方卡片區域 */
    .furryBabiesCard {
        width: 350px;
        height: 850px;
        border-radius: 10px 10px 0 0;
        padding: 16px 0 0 0;
        gap: 0px;
        margin: auto;
    }

    .sm-id {
        display: block;
        font-size: 16px;
        margin-bottom: 0px;
    }

    .petsimg {
        margin: auto;
    }

    /* 標題文字 */
    #contactTitle {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
    }

    #contactTitle span {
        font-size: 20px;
        letter-spacing: 5px;
        text-align: center;
    }

    /* Line */
    #contactLine {
        padding-left: 0px;
    }

    #Line {
        width: 200px;
    }

    .instructionsText {
        width: 308px;
        margin-top: 33px;
        margin-left: 28px;
        font-size: 16px;
        letter-spacing: 4px;
    }
}</style>