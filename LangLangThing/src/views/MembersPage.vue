<script>
import FooterPage from '@/components/FooterPage.vue';
import NavPage from '@/components/NavPage.vue';
import FollowedCard from '@/components/FollowedCard.vue'
import IconHistory from '@/components/icons/iconHistory.vue';

export default {
    components: {
        NavPage,
        FooterPage,
        FollowedCard,
        IconHistory
    },
    data() {
        return {
            likeAnimals: []
        }
    },
    mounted() {
        this.getLikeAnimals();
        // console.log(this.likeAnimals);
    },
    methods: {
        getLikeAnimals() {
            // this.likeAnimals = [{ 1: 1 }, { 2: 1 }]
            // 讀取localStorage.likeAnimals
            const tmp = localStorage.likeAnimals;
            // 如果有資料
            if (tmp) {
                // parse JSON文字轉JS物件
                this.likeAnimals = JSON.parse(tmp);
            }
        },
        updateLikeAnimal(ani) {
            // 如果在this.likeAnimals的(indexOf)列表裡未找到ani,就要push; 如果找到就remove;
            if (this.likeAnimals.indexOf(ani) == -1) {
                this.likeAnimals.push(ani);
            } else {
                this.removeFromArray(this.likeAnimals, ani);
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
    },

}
</script>
<template>
    <NavPage />
    <main>
        <div class="top">
            <div class="headsticker">
            </div>
            <div class="contentbox">
                <div class="contentboxtop">
                    <img class="edit" src="../assets/Image/MemberImage/ep_edit.svg">
                </div>
                <div class="contentmain">
                    <div>
                        <label>姓名</label>
                        <input class="name" type="text" placeholder="王曉明">
                    </div>
                    <div>
                        <label>電子郵件</label>
                        <input class="name" type="text" placeholder="iluvlang@gmail.com">
                    </div>
                    <div>
                        <label>手機號碼</label>
                        <input type="text" placeholder="">
                    </div>
                </div>
            </div>
        </div>
        <div class="followed">
            <div class="followedArea">
                <span class="title">我追蹤的浪浪</span>
                <div class="followedbox">
                    <FollowedCard v-for="likeani in likeAnimals" :AnimalData="likeani" @favoriteAnimal="updateLikeAnimal"
                        :prefix="'../'" />
                </div>
            </div>

        </div>
        <div class="history">
            <div class="historytop">
                <span class="title">捐款歷史</span>
                <span class="thanks">\ 謝謝您默默的支持! /</span>
            </div>

            <div class="historybox">
                <img class="bgline" src="../assets/Image/MemberImage/member-line.svg">
                <div class="historycontent">
                    <div class="historyicon">
                        <IconHistory />
                    </div>
                    <span>您在2023年11月20日贊助了100元新台幣</span>
                </div>
                <div class="historycontent">
                    <div class="historyicon">
                        <IconHistory />
                    </div>
                    <span>您在2023年11月20日贊助了100元新台幣</span>
                </div>
                <div class="historycontent">
                    <div class="historyicon">
                        <IconHistory />
                    </div>
                    <span>您在2023年11月20日贊助了100元新台幣</span>
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
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 115px 0px 276px;
}

.top {
    width: 1000px;
    padding: 50px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 30px;
    margin-bottom: 164px;
}

/* 頭貼 */
.headsticker {
    width: 250px;
    height: 250px;
    border-radius: 110px;
    background-image: url(../assets/Image/CardImage/CardCat.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

/* 個人資料 */
.contentbox {
    width: 550px;
    display: flex;
    flex-direction: column;
    gap: 27px;
}

.contentboxtop {
    height: 50px;
    display: flex;
    justify-content: end;
}

.contentmain {
    width: 426px;
    height: 230px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 1.5rem;
    text-align: left;
    letter-spacing: 6px;
    color: #626262;
}

.contentmain div {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

input {
    width: 290px;
    height: 50px;
    background-color: rgba(217, 217, 217, 0.25);
    border: none;
    border-radius: 80px;
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
    letter-spacing: 4px;
}

.name {
    font-size: 1rem;
}

/* 追蹤的浪浪 */
.followed {
    background-image: url(../assets/Image/MemberImage/blueBg.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto;
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 60px;

}

.followedArea {
    display: flex;
    flex-direction: column;
    padding: 0 257px 159px 296px;
    gap: 61px;
}

.title {
    font-size: 2rem;
    letter-spacing: 8px;
}

.followedbox {
    width: 1350px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    row-gap: 25px;
    gap: 50px;
}

/* 捐款歷史 */
.history {
    width: 1330px;
    margin: auto;
    display: flex;
    flex-direction: column;
    position: relative;
    top: 0;
    left: 0;
}

.historytop {
    margin-bottom: 107px;
}

.thanks {
    font-size: 1.25rem;
    letter-spacing: 5px;
    color: #52A038;
    transform: rotate(10deg);
    position: absolute;
    top: 7.5%;
    right: 1.5%;
}

.historybox {
    width: 962px;
    height: 449px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 2rem;
    letter-spacing: 8px;
    position: relative;
    top: 0;
    left: 0;
}

.bgline {
    width: 347px;
    position: absolute;
    top: 50%;
    left: -14%;
    transform: rotate(90deg);
    opacity: 0.2;
    z-index: -1;

}

.historycontent {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.historyicon {
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
}

@media screen and (max-width:375.9px) {
    main {
        padding: 30px 0px 109px;
    }

    .top {
        width: 340px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 40px;
        padding: 0;
    }

    /* 頭貼 */
    .headsticker {
        width: 155px;
        height: 155px;
        margin-bottom: 30px;
    }

    /* 個人資料 */
    .contentbox {
        justify-content: space-between;
        width: 280px;
        gap: 12px;
        margin-left: 50px;
    }

    .contentboxtop {
        height: 39px;
        /* position: absolute;
        right: 15px;
        top: 350px; */
    }

    .contentmain {
        width: 248px;
        justify-content: center;
        letter-spacing: 3.84px;
        font-size: 1rem;
        gap: 20px;
    }

    .contentmain div {
        flex-direction: column;
        justify-content: center;
        gap: 6px;
    }

    input {
        width: 248px;
        font-size: 0.8rem;
        letter-spacing: 2.88px;
    }

    .name {
        font-size: 0.75rem;

    }

    /* 追蹤的浪浪 */
    .followed {
        padding-top: 30px;
        align-items: center;
        justify-content: center;
        gap: 30px;
    }

    .followedArea {
        padding: 0;
        gap: 22px;
    }

    .title {
        font-size: 1.5rem;
        letter-spacing: 4px;
    }

    .followedbox {
        width: 351px;
        height: auto;
        align-items: center;
        flex-direction: column;
        gap: 22px;
    }

    /* 捐款歷史 */
    .history {
        width: 351px;
    }

    .historytop {
        margin: 25px 0 40px 0;
    }

    .title {
        font-size: 1rem;
        letter-spacing: 4px;
    }

    .thanks {
        font-size: 0.8rem;
        letter-spacing: 3.5px;
        top: 12.5%;
        right: 1.5%;
        transform: rotate(15deg);
    }

    .historybox {
        width: 300px;
        height: 310px;
        font-size: 1rem;
        letter-spacing: 4px;
    }

    .bgline {
        width: 253px;
        top: 50%;
        left: -33%;
    }

    .historycontent {
        gap: 17px;
    }

    .historyicon {
        width: 55px;
        height: 55px;
    }
}

@media screen and (max-width:1280px) and (min-width:769px) {
    main {
        padding: 65px 0px 221px;
    }

    .top {
        margin-bottom: 65px;
    }

    /* 追蹤的浪浪 */
    .followedArea {
        padding: 0 132px 115px 132px;
    }

    .followedbox {
        width: 1039px;
    }

    /* 捐款歷史 */
    .history {
        width: 1035px;
    }
}

@media screen and (max-width:768px) and (min-width:720px) {
    main {
        padding: 55px 0 200px;
    }

    .top {
        width: 610px;
        padding: 0;
        gap: 25px;
        margin-bottom: 55px;
    }

    /* 頭貼 */
    .headsticker {
        width: 159px;
        height: 159px;
    }

    /* 個人資料 */
    .contentbox {
        width: 451px;
        gap: 25px;
    }

    .contentboxtop {
        height: 40px;
    }

    .contentmain {
        width: 398px;
        height: 180px;
        font-size: 1rem;
        letter-spacing: 4px;
    }

    .contentmain div {
        padding-left: 25px;
    }

    input {
        width: 260px;
        height: 40px;
    }

    /* 我追蹤的浪浪 */
    .followed {
        width: 100%;
    }

    .followedArea {
        padding: 0 38px 100px 50px;
        gap: 55px;
    }

    .title {
        font-size: 2rem;
        letter-spacing: 6px;
    }

    .followedbox {
        width: 650px;
    }

    /* 捐款歷史 */
    .history {
        width: 619px;
    }

    .historytop {
        margin-bottom: 40px;
    }

    .thanks {
        top: 0%;
        right: 1.5%;
    }

    .historycontent {
        width: 619px;
    }

    .historycontent span {
        width: 431px;
        font-size: 1.5rem;
    }

    .bgline {
        width: 387px;
        top: 50%;
        left: -16%;
    }

}
</style>