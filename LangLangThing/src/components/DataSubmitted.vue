<script>
export default {
    props: {
        // 視窗
        isShowSub: Boolean,
        // SVG顏色
        myFillColor: String,
        // 文字顏色
        myTextColor: String,
        // 大字大小
        textSize: String,
        // 大字內文
        submitResult: String,
        // 小字內文
        submitText: String,
        submitTextTwo: String,
        // 按鈕文字
        submitBtnText: String,
        // 按鈕顏色
        submitBtnColor: String,
        // 按鈕指令
        myurl: String,
    },
    data() {
        return {
            fillcolor: "var(--primary-color)",
            textColor: "var(--primary-color)",
        }
    },
    methods: {
        // 前往下一頁按鈕
        goPage(myurl) {
            this.$router.push(myurl);
            // 視窗離開時scrollBar打開
            document.body.style.overflow = 'auto';
            // 讓scrollBar在router後平滑的回至頂部
            this.scrollToTop();
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
                // behavior行動= 平滑
                behavior: 'smooth',
            });
        },
    }
}
</script>
<template>
    <!-- 顯示視窗 -->
    <div class="ScreenFrame" v-show="isShowSub">
        <div class="Success">
            <div class="img">
                <!-- 圖 -->
                <svg class="img" width="65" height="66" viewBox="0 0 63 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="ion:paw-outline">
                        <rect x="62.2773" y="0.702637" width="65.2662" height="60.8014" rx="10"
                            transform="rotate(90.6621 62.2773 0.702637)" :fill="myFillColor" />
                        <path id="Vector"
                            d="M53.2797 24.0441C52.918 23.8576 52.5274 23.751 52.1287 23.73L52.087 23.7277C49.9796 23.6457 47.4934 25.7536 46.0652 29.0719C44.3535 33.0416 44.8057 37.2261 47.0864 38.4227C47.4477 38.6091 47.8379 38.7157 48.2363 38.7367C50.3521 38.8549 52.8714 36.7357 54.3113 33.3955C56.0126 29.4252 55.55 25.2401 53.2797 24.0441ZM38.8123 39.1C36.2159 33.4684 35.0782 31.3413 31.7589 31.1559C28.4395 30.9706 27.0609 32.9702 23.8543 38.2647C21.1094 42.7928 16.0669 42.9013 14.593 46.795C14.2983 47.5069 14.1274 48.2749 14.0898 49.0565C13.9097 52.2803 15.9351 55.0113 18.6073 55.1605C21.9266 55.3459 26.6145 52.5879 30.5601 52.8082C34.5057 53.0286 38.8365 56.2903 42.1558 56.4757C44.828 56.6249 47.1344 54.1371 47.3145 50.912C47.3605 50.1301 47.2727 49.3477 47.0557 48.608C46.0253 44.5601 41.0359 43.9056 38.8123 39.1ZM25.423 25.5688C25.5628 25.5768 25.703 25.5727 25.8425 25.5566C28.2876 25.2923 30.013 21.5636 29.7045 17.2266C29.4145 13.138 27.415 9.98029 25.1468 9.85362C25.0071 9.84568 24.8668 9.84978 24.7273 9.86587C22.2823 10.1301 20.5568 13.8588 20.8654 18.1959C21.156 22.2726 23.1548 25.4422 25.423 25.5688ZM44.0246 19.4893C44.8141 15.2135 43.5146 11.3159 41.1142 10.781C40.9773 10.7495 40.8384 10.7298 40.6987 10.7222C38.4304 10.5955 36.096 13.5111 35.3515 17.542C34.562 21.8177 35.8615 25.7153 38.2619 26.2502C38.3987 26.2817 38.5376 26.3014 38.6774 26.3091C40.9456 26.4357 43.2849 23.5085 44.0246 19.4893ZM15.7207 36.671C18.1174 35.7344 19.0318 31.6226 17.7746 27.4919C16.7166 24.0122 14.4511 21.6258 12.3384 21.5078C11.9401 21.4843 11.5405 21.5468 11.1606 21.6918C8.76391 22.6284 7.84949 26.7402 9.10669 30.8709C10.1647 34.3507 12.4302 36.737 14.5429 36.855C14.9412 36.8785 15.3408 36.816 15.7207 36.671Z"
                            stroke="white" stroke-width="3" stroke-miterlimit="10" />
                    </g>
                </svg>
            </div>
            <div class="SendText" :textColor="myTextColor">
                <span class="big" :fontSize="textSize">{{ submitResult }}</span>
                <p class="small">{{ submitText }}<br>{{ submitTextTwo }}</p>
            </div>
            <button class="button" @click="goPage(myurl)" :bgColor="submitBtnColor">{{ submitBtnText }}</button>
        </div>
    </div>
</template>
<style scoped>
.ScreenFrame {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    color: var(--primary-color);
    height: 100vh;
    width: 100vw;
    max-width: 100%;
    background: rgba(255, 255, 255, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 6;
}

.Success {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 35rem;
    height: 24rem;
    background-color: var(--white-color);
    border: 2px solid var(--primary-color);
    border-radius: 30px;
    gap: 2rem;
    padding: 3rem;
}

.img {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.SendText {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.SendText span {
    font-size: 1.5rem;
    text-align: center;
    letter-spacing: 6px;
    font-weight: bold;
    margin-left: 40px;
}

.SendText p {
    font-size: 1.25rem;
    text-align: center;
    letter-spacing: 5px;
    word-wrap: break-word;
}

.button {
    width: 12.8rem;
    height: 4rem;
    color: var(--white-color);
    background-color: var(--primary-color);
    border-radius: 30px;
    font-size: 1.25rem;
    letter-spacing: 5px;
    box-shadow: none;
}

@media screen and (max-width:720px) {
    .Success {
        width: 350px;
        height: 320px;
        padding: 2rem;
    }

    .SendText span {
        font-size: 1.25rem;
        letter-spacing: 5px;
    }

    .SendText p {
        font-size: 1rem;
        letter-spacing: 3.5px;
    }

    .button {
        width: 205px;
        height: 65px;
        font-size: 1.25rem;
    }

}
</style>