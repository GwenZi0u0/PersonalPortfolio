<script>
import NoHoverButton from './NoHoverButton.vue';
export default {

    components: {
        NoHoverButton,
    },

    methods: {
        // behavior行動= 平滑
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        },
        scrollToTwo() {
            window.scrollTo({
                top: 1000,
                behavior: 'smooth',
            });
        },
        // 回到首頁按鈕
        gohomePage() {
            this.$router.push('/');
            // 視窗離開時scrollBar打開
            document.body.style.overflow = 'auto';
            // 讓scrollBar在router後平滑的回至頂部
            this.scrollToTop();
        },
        // 回到贊助我們頁面
        clickSponsorUsBtn() {
            console.log("點到「贊助我們」");
            this.$router.push('/sponsorus'); //導到贊助我們頁面
            document.body.style.overflow = 'auto';
            this.scrollToTwo();
        },
    },
}
</script>

<template>
    <div class="popup-bg">
        <div class="popup-container">
            <div class="content">
                <div class="thanks">
                    <span>贊助成功!</span>
                    <span class="text">再次感謝您的支持</span>
                </div>
                <div class="dogimg"><img src="../assets/Image/SponsorImage/successdog.svg" alt=""></div>
                <div class="btns">
                    <NoHoverButton class="btn-back" btnbgColor="var(--gray-color)" text="返回首頁" @click="gohomePage">
                    </NoHoverButton>
                    <NoHoverButton class="btn" btnbgColor="var(--primary-color)" text="查看贊助名單" @click="clickSponsorUsBtn">
                    </NoHoverButton>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.popup-bg {
    width: 100vw;
    height: 100vh;
    background: rgba(255, 255, 255, 0.5);
    top: 0%;
    left: 0%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 6;
}

.popup-container {
    width: 582px;
    height: 540px;
    background-color: var(--white-color);
    border: 3px solid var(--primary-color);
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--primary-color);
}

.content {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 34px;
}

.thanks {
    font-size: 32px;
    letter-spacing: 8px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.text {
    font-size: 16px;
    letter-spacing: 4px;
    color: var(--gray-color);
}

img {
    width: 220px;
    height: 210px;
}

.btns {
    display: flex;
    gap: 24px;
}

.btn-back {
    width: 155px;
    height: 65px;
}

.btn {
    width: 205px;
    height: 65px;
}
</style>
