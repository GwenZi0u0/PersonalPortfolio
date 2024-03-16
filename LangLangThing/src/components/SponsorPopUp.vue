<script>
import NoHoverButton from './NoHoverButton.vue';
export default {
    components: {
        NoHoverButton,
    },
    data() {
        return {
        }
    },
    // emits 回傳資料給父層
    emits: ['closeType', 'closePopup'],
    methods: {
        scrollToTop() {
            window.scrollTo({
                top: 0,
                // behavior行動= 平滑
                behavior: 'smooth',
            });
        },
        closeModel() {
            this.$emit('closeType', false);
        },
        closePopup() {
            this.$emit('closePopup', false);
        },
    },
};
</script>

<template>
    <div class="popup-bg">
        <div class="popup-container">
            <div class="top">
                <div class="title">
                    <img src="../assets/Image/PopUp-dogpaw-sm.svg">
                    <span>確認金額</span>
                </div>
            </div>
            <div class="content">
                <span class="thanks">感謝您的支持，您的贊助金額為</span>
                <div class="dogimg"></div>
                <span class="text">按下確定以後將會前往第三方支付平台（綠界科技），<br>
                    由專業的金流服務平台，完成付款動作，浪浪的事不會儲存您的信用卡卡號。</span>
                <NoHoverButton class="btn" btnbgColor="var(--primary-color)" text="確認並前往贊助"
                    @click="showSuccess = !showSuccess, closeModel()">確認並前往贊助
                </NoHoverButton>
                <NoHoverButton class="btn" btnbgColor="var(--gray-color)" text="返回修改資料" @click="closePopup()">返回修改資料
                </NoHoverButton>
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
    width: 790px;
    height: 595px;
    background-color: var(--white-color);
    border: 2px solid var(--primary-color);
    border-radius: 30px;
    color: var(--primary-color);
    z-index: 2;
}

.top {
    padding: 20px 30px;
}

.title {
    display: flex;
    gap: 10px;
    align-items: center;
    font-size: 20px;
    letter-spacing: 5px;
}

.content {
    border-top: 2px solid var(--primary-color);
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 31px;
}

.thanks {
    font-size: 32px;
    font-weight: bold;
}

.dogimg {
    width: 350px;
    height: 70px;
    background-image: url(../assets/Image/SponsorImage/Sponsor-dog.svg);
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
}

.text {
    font-size: 16px;
    letter-spacing: 4px;
    line-height: 40px;
    color: black;
}

.btn {
    width: 230px;
    height: 65px;
    border-radius: 30px;
}

.white-btn {
    color: var(--gray-color);
    border: 1px solid var(--gray-color);
    background-color: white;
}</style>