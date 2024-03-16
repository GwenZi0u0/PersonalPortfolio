<!-- 贊助我們頁面 -->

<script>
import NavPage from '@/components/NavPage.vue';
import FooterPage from '@/components/FooterPage.vue';
import sponsorsData from '../json/SPONSORS.json';
import IconChangeButton from '@/components/icons/IconChangeButton.vue';

// 1.生成100個名字 要有獨特的id json格式 date、amount不重複、name隨機生成
// 2.存data到json

export default {
    components: {
        NavPage,
        FooterPage,
        IconChangeButton
    },
    data() {
        return {
            sponsors: sponsorsData,
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
        clickSponsorNowBtn() {
            this.$router.push('/sponsornow'); //導到立即贊助頁面
            this.scrollToTop();
        }
    },
};
</script>

<template>
    <NavPage />
    <section class="sponsor-page">
        <div class="sponsor-title">
            <span>贊助我們</span>
            <div class="sponsor-us-big" style="font-size: 20px">Sponsor<br>Us</div>
            <div class="sponsor-us">Sponsor Us</div>

            <div class="accept-criedcard">目前僅支援信用卡</div>
        </div>
        <div class="sponsor-content">
            <div class="sponsor-flow-chart">
                <div class="three-step-text">簡單三步驟</div>
                <div class="flow-chart">
                    <img src="../assets/Image/SponsorImage/sponsor-us-flow.svg">
                </div>
            </div>

            <div class="sponsor-intro-text">
                浪浪的事是一個公益性質的平台，我們希望可以達到一個良善的循環，如果你不嫌棄，歡迎贊助我們。<br>
                <span>祝福您有個美好的一天。</span>
            </div>
            <IconChangeButton text="立即贊助" textColor="var(--white-color)" bgColor="var(--primary-color)" w="9.7rem"
                h="3.25rem" @click="clickSponsorNowBtn" />
        </div>
    </section>

    <!-- 贊助名單 -->
    <section class="sponsor-page">
        <!-- 分線 -->
        <div class="interval">
            <div class="line">
                <div class="squre"></div>
                <div class="line-left"></div>
            </div>
            <div class="sponsored-list-title">贊助名單</div>
            <div class="line">
                <div class="line-right"></div>
                <div class="squre"></div>
            </div>
        </div>

        <div class="table-all">
            <table>
                <thead>
                    <tr>
                        <th>贊助日期</th>
                        <th>姓名</th>
                        <th>贊助金額</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- 使用v-for動態生成表格 -->
                    <!-- 第一筆贊助紀錄 -->
                    <tr v-for="sponsor in sponsors" :key="sponsor.id">
                        <td>{{ sponsor.date }}</td>
                        <td>{{ sponsor.name }}</td>
                        <td>{{ sponsor.amount }}</td>
                    </tr>
                </tbody>
            </table>

        </div>
    </section>

    <!-- 常見問題Q&A -->
    <section class="sponsor-page c-area">
        <div class="q-a-container">
            <div class="q-a-tittle">常見問題Q&A</div>
            <!-- 問題內容 -->
            <div class="q-a-content">
                <div class="q-a-text">
                    <div class="question">Q: 贊助會在什麼時候扣款?</div>
                    <div class="answer"> <img src="../assets/Image/SponsorImage/sponsor-us-cat-paw.svg" width="50px"
                            height="50px">單筆贊助會在贊助完成當日立即扣款。</div>
                </div>
                <div class="q-a-text">
                    <div class="question">Q: 我的姓名會被看到嗎?</div>
                    <div class="answer"> <img src="../assets/Image/SponsorImage/sponsor-us-cat-paw.svg" width="50px"
                            height="50px">贊助時，您提供的大名及金額皆會公開，但部分文字會隱藏。</div>
                </div>
                <div class="q-a-text">
                    <div class="question">Q: 我需要其他協助</div>
                    <div class="answer">
                        <img src="../assets/Image/SponsorImage/sponsor-us-cat-paw.svg" width="50px" height="50px">
                        歡迎到聯絡我們的留言區，留下您的訊息，我們會盡快答覆。
                    </div>
                </div>
            </div>
        </div>
    </section>

    <FooterPage />
</template>

<style scoped>
.sponsor-page {
    width: 100vw;
    max-width: 100%;
    position: relative;
    margin-bottom: 209px;
    /*    background-color: beige;*/
}

@media only screen and (max-width: 720px) {
    .sponsor-page {
        margin-bottom: 208px;
    }
}


.sponsor-title {
    font-size: 48px;
    color: var(--primary-color);
    letter-spacing: 5px;
    margin-top: 69px;
    margin-left: 200px;
    display: flex;
    align-items: center;
    width: 44%;
}


@media only screen and (max-width: 1836px) {
    .sponsor-title {
        margin-top: 69px;
        margin-left: 100px;
        width: 44%;
    }
}

@media only screen and (max-width: 768px) {
    .sponsor-title {
        width: 72%;
        font-size: 26px;
   
    }
}

@media only screen and (max-width: 720px) {
    .sponsor-title {
        font-size: 20px;
        margin: 30px;
    }
}

@media only screen and (max-width: 768px) {
    .sponsor-us-big {
        display: none;
    }
}

.sponsor-us {
    display: none;
}

@media only screen and (max-width: 768px) {
    .sponsor-us {
        display: block;
        font-size: 16px;
        font-family: ABeeZee;
        font-weight: 400;
        line-height: 15px;
        letter-spacing: 4px;
        word-wrap: break-word;
        margin-left: 10px;
    }
}

@media only screen and (max-width: 768px) {
    .sponsor-us {
        font-size: 14px;
    }
}

.accept-criedcard {
    font-size: 20px;
    border: 3px dashed var(--primary-color);
    margin: 10px 0px 4px 17px;
    position: relative;
}

@media only screen and (max-width: 720px) {
    .accept-criedcard {
        font-size: 14px;
        letter-spacing: 3.5px;
        margin: 10px 0px 4px 10px;
        position: absolute;
        top: 66px;
        left: 150px;
    }

}

/*
.accept-criedcard::after {
    content: "";
    background-image: url(../assets/Image/SponsorImage/sponsor-us-arrow.svg);
    position: absolute;
    background-repeat: no-repeat;
    width: 230px;
    height: 153px;
    top: 10px;
    left: 230px;
}

@media only screen and (max-width: 1836px) {
    .accept-criedcard::after {
        content: "";
        background-image:none;
    }
  }
*/


.sponsor-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 100px 0px;
}

.sponsor-flow-chart {
    display: flex;
    align-items: center;
    padding: 0px 40px;
}

@media only screen and (max-width: 720px) {
    .sponsor-flow-chart {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: flex-start;
        padding: 0px ;
        margin: -60px 0px 0px;
    }
}

.three-step-text {
    font-size: 40px;
    line-height: 40px;
    letter-spacing: 10px;
    color: var(--primary-color);
    margin: 0px 35px 0px 0px;
}

@media only screen and (max-width: 1836px) {
    .three-step-text {
        margin: 0px -3px 0px 40px;
    }
}

@media only screen and (max-width: 768px) {
    .three-step-text {
        font-size: 26px;
    }
}

@media only screen and (max-width: 720px) {
    .three-step-text {
        font-size: 16px;
        letter-spacing: 4px;
        width: 173px;
        margin-left: 12px;
    }
}

.flow-chart img {
    width: 919px;
}

@media only screen and (max-width: 1836px) {
    .flow-chart img {
        width: 812px;
    }
}

@media only screen and (max-width: 768px) {
    .flow-chart img {
        width: 396px;
    }
}

@media only screen and (max-width: 720px) {
    .flow-chart img {
        width: 335px;
    }
}


.sponsor-intro-text {
    font-size: 28px;
    font-weight: 400;
    letter-spacing: 7px;
    border: 1px solid #626262;
    border-radius: 30px;
    width: 64%;
    height: 40%;
    padding: 34px 62px;
    margin: 15px 351px 50px;
}

@media only screen and (max-width: 1836px) {
    .sponsor-intro-text {
        margin: 66px 351px;
    }
}

@media only screen and (max-width: 768px) {
    .sponsor-intro-text {
        margin: 66px 46px;
        font-size: 20px;
        width: 589px;
        padding: 40px 35px;
    }
}

@media only screen and (max-width: 720px) {
    .sponsor-intro-text {
        margin: 66px 46px;
        font-size: 20px;
        width: 350px;
        padding: 20px 30px;
    }
}

.sponsor-intro-text span {
    display: flex;
    justify-content: end;
}



/*贊助名單*/
.sponsored-list-title {
    color: var(--primary-color);
    font-size: 32px;
    letter-spacing: 8px;
    font-weight: 400;
    text-align: center;
    margin: 0px 28px;
}

@media only screen and (max-width: 1836px) {
    .sponsored-list-title {
        min-width: 152px;
    }
}

@media only screen and (max-width: 768px) {
    .sponsored-list-title {
        min-width: 124px;
        font-size: 26px;
    }
}

@media only screen and (max-width: 720px) {
    .sponsored-list-title {
        min-width: 76px;
        font-size: 16px;
    }
}

.interval {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    letter-spacing: 8px;
    margin: 60px 0px;
    width: 100%;
}

.line {
    display: flex;
    align-items: center;
}

.squre {
    width: 10px;
    height: 10px;
    background-color: var(--primary-color);
    transform: translate(0px, -0.5px) rotate(45deg);
}

.line-left {
    width: 633px;
    height: 2px;
    background-color: var(--primary-color);
    stroke: var(--primary-color);
}

@media only screen and (max-width: 1836px) {
    .line-left {
        width: 400px;
    }
}

@media only screen and (max-width: 768px) {
    .line-left {
        width: 260px;
    }
}

@media only screen and (max-width: 720px) {
    .line-left {
        width: 87px;
    }
}

.line-right {
    width: 633px;
    height: 2px;
    background-color: var(--primary-color);
    stroke: var(--primary-color);
}



@media only screen and (max-width: 1836px) {
    .line-right {
        width: 400px;
    }
}

@media only screen and (max-width: 768px) {
    .line-right {
        width: 260px;
    }
}

@media only screen and (max-width: 720px) {
    .line-right {
        width: 87px;
    }
}


.table-all {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: auto;
    align-items: center;
    overflow: scroll;
    width: 1001px;
    height: 1553px;
}

@media only screen and (max-width: 768px) {
    .table-all {
        width: 640px;
        height: 973px;
    }
}

@media only screen and (max-width: 720px) {
    .table-all {
        width: 293px;
        height: 245px;
    }
}

table {
    font-family: 'ABeeZee', sans-serif;
    border-collapse: separate;
    width: 100%;
    height: 1553px;
    border-spacing: 0;
    border: 2px solid #D7D7D7;
    font-weight: 400;
    letter-spacing: 8px;
}

thead {
    background-color: var(--primary-color);
    color: #ffffff;
    width: 767px;
    height: 93px;
    font-size: 32px;
    position: sticky;
    top: 0;
}

@media only screen and (max-width: 720px) {
    thead {
        font-size: 16px;
        height: 43px;
    }
}

tbody {
    color: var(--gray-color);
    /*width: 100%;
    height: 98px;*/
    font-size: 32px;
    text-align: center;

}

td {
    height: 98px;
    border-bottom: 1px solid #D7D7D7;
}

@media only screen and (max-width: 720px) {
    td {
        height: 43px;
    }
}


td:nth-child(1) {
    width: 258px;
}

td:nth-child(2),
td:nth-child(3) {
    width: 371.5px;
}

td:nth-child(3) {
    text-align: end;
}

tr td:nth-child(1),
td:nth-child(3) {
    font-size: 24px;
    letter-spacing: 6px;
}

@media only screen and (max-width: 768px) {
    tr td:nth-child(1) {
        font-size: 16px;
        width: 110px;
    }
}

@media only screen and (max-width: 720px) {
    tr td:nth-child(1) {
        font-size: 13px;
        width: 110px;
    }
}

@media only screen and (max-width: 768px) {

    tr td:nth-child(2),
    td:nth-child(3) {
        font-size: 24px;
    }
}

@media only screen and (max-width: 720px) {

    tr td:nth-child(2),
    td:nth-child(3) {
        font-size: 16px;
    }
}


th:nth-child(2),
td:nth-child(2) {
    border-left: 1px solid #D7D7D7;
    border-right: 1px solid #D7D7D7;
}

tbody tr:nth-child(odd) {
    background-color: #EFEFEF;
    color: #626262;
}

tbody tr:nth-child(even) {
    background-color: #fff;
    color: #626262;
}


/* 常見問題Q&A */
.sponsor-page.c-area {
    display: flex;
    justify-content: center;
    position: relative;
    margin: 300px 0px 209px 0px;
}

@media only screen and (max-width: 768px) {
    .sponsor-page.c-area {
        margin: -50px 0px 209px 0px;
    }
}
@media only screen and (max-width: 720px) {
    .sponsor-page.c-area {
        margin: -152px 0px 209px 2px;
    }
}

.q-a-container {
    width: 1584px;
    border: 1px solid var(--primary-color);
    opacity: 0.97;
    display: flex;
    flex-direction: column;
    padding: 50px 0px;
    font-weight: 400;

}


@media only screen and (max-width: 1836px) {
    .q-a-container {
        margin: 10px 132px;
    }
}

@media only screen and (max-width: 768px) {
    .q-a-container {
        width: 589px;
        margin: 0px;
    }
}
@media only screen and (max-width: 720px) {
    .q-a-container {
        width: 310px;
        margin: 0px;
    }
}

.q-a-tittle {
    color: var(--gray-color);
    font-size: 48px;
    margin-left: 53px;
    letter-spacing: 12px;

}

@media only screen and (max-width: 768px) {
    .q-a-tittle {
        font-size: 26px;
        letter-spacing: 6.5px;
    }

}
@media only screen and (max-width: 720px) {
    .q-a-tittle {
        font-size: 20px;
        letter-spacing: 6.5px;
    }

}

.q-a-content {
    color: var(--primary-color);
    font-size: 32px;
    letter-spacing: 8px;
    padding: 0px 77px;
}

@media only screen and (max-width: 768px) {
    .q-a-content {
        font-size: 20px;
        letter-spacing: 5px;
        padding: 0px 36px;
    }
}
@media only screen and (max-width: 720px) {
    .q-a-content {
        font-size: 14px;
        letter-spacing: 5px;
        padding: 0px 0px 0px 5px;
    }
}


.q-a-text {
    margin: 45px 0px;
}

.answer {
    display: flex;
    align-items: center;
    margin-top: 20px;
}

.answer img {
    margin: 0px 7px 0px 30px;
}

@media only screen and (max-width: 720px) {
    .answer img  {
   width: 18px;
   height: 18px;
   margin: 0px 7px 0px 8px;
    }
}



</style>