<script>
import NoHoverButton from '@/components/NoHoverButton.vue';
export default {
    data() {
        return {
            text: "毛小孩資訊",
            mytexttwo: "尋找心目中的毛小孩",
            mybgcolor: 'var(--primary-color)',
            mytextcolor: 'var(--white-color)',
            myw: '12.5rem',
            myh: '4rem',
            mylinew: '80rem',
            parenttwoStyle: {
                gap: '0.5rem',
            }
        }
    },
    props: {
        isShow: Boolean,
    },
    // emits 回傳資料給父層
    emits: ['close'],
    methods: {
        // 回到上一頁
        back() {
            this.$router.push('/');
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
                // behavior行動= 平滑
                behavior: 'smooth',
            });
        },
        //導到[我的動物走失了]
        next() {
            this.$router.push('/myanimallostform');
            this.scrollToTop();
        },
        close() {
            this.$emit('close', false);
        }
    },
    components: {
        NoHoverButton,
    }
}
</script>
<template>
    <!-- 顯示視窗 -->
    <!-- 關閉視窗@click.self="closePopup" -->
    <div class="container-bg" v-show="isShow">
        <div class="container">
            <!-- svg圖 -->
            <svg width="62" height="66" viewBox="0 0 62 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="61.1846" y="0.356445" width="65.2662" height="60.8014" rx="10"
                    transform="rotate(90.0142 61.1846 0.356445)" fill="#B68337" />
                <path
                    d="M52.6982 23.4453C52.3344 23.2629 51.9427 23.1608 51.5437 23.1443L51.5019 23.1424C49.3938 23.0843 46.9316 25.2201 45.541 28.5543C43.8743 32.5431 44.3737 36.7223 46.6678 37.893C47.0313 38.0754 47.4227 38.1775 47.8213 38.194C49.9383 38.2882 52.4334 36.1408 53.8355 32.7845C55.4917 28.7952 54.9818 24.6156 52.6982 23.4453ZM38.4019 38.6639C35.742 33.062 34.5804 30.9479 31.2591 30.8001C27.9379 30.6522 26.582 32.6673 23.4355 37.9977C20.742 42.5565 15.701 42.7221 14.2712 46.6322C13.9846 47.3474 13.8224 48.1173 13.7936 48.8992C13.65 52.1249 15.7061 54.8328 18.3798 54.9518C21.701 55.0996 26.3574 52.2888 30.3053 52.4645C34.2532 52.6402 38.6205 55.8528 41.9417 56.0006C44.6154 56.1196 46.8935 53.6058 47.0371 50.379C47.0744 49.5966 46.9777 48.8152 46.7524 48.078C45.6762 44.042 40.6798 43.444 38.4019 38.6639ZM24.8605 25.2849C25.0004 25.2913 25.1406 25.2856 25.2799 25.268C27.7218 24.976 29.4049 21.2281 29.0474 16.8948C28.7112 12.8097 26.6761 9.67487 24.4066 9.57385C24.2668 9.5675 24.1266 9.57318 23.9873 9.59085C21.5454 9.88275 19.8622 13.6307 20.2198 17.964C20.5565 22.0372 22.591 25.1839 24.8605 25.2849ZM43.3921 18.9954C44.1333 14.711 42.7898 10.8284 40.3835 10.3207C40.2463 10.2907 40.1072 10.2726 39.9673 10.2665C37.6978 10.1655 35.3965 13.1073 34.6976 17.1463C33.9565 21.4307 35.3 25.3134 37.7063 25.8211C37.8435 25.851 37.9826 25.8692 38.1225 25.8753C40.392 25.9763 42.698 23.0228 43.3921 18.9954ZM15.2843 36.4961C17.6703 35.5325 18.5382 31.4106 17.2343 27.2944C16.1371 23.8268 13.8447 21.4662 11.7308 21.3721C11.3323 21.3532 10.9334 21.4201 10.5552 21.5694C8.16924 22.5331 7.30137 26.6549 8.6052 30.7712C9.70244 34.2387 11.9949 36.5993 14.1087 36.6934C14.5072 36.7124 14.9061 36.6454 15.2843 36.4961Z"
                    stroke="white" stroke-width="3" stroke-miterlimit="10" />
            </svg>
            <!-- svg圖 結束-->
            <div class="text">
                <span>要前往填寫動物資訊嗎？</span>
                <span class="content">*已確認沒有被重複登入</span>
            </div>
            <div class="btns">
                <NoHoverButton class="w" @click="close()" :showSvg="false" btnbgColor="var(--gray-color)" text="返回修改">
                </NoHoverButton>
                <NoHoverButton class="w" @click="next" :showSvg="false" btnbgColor="var(--B68337)" text="確認前往">
                </NoHoverButton>
            </div>
        </div>
    </div>
</template>
<style scoped>
.container-bg {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--B68337);
    height: 100vh;
    width: 100vw;
    max-width: 100%;
    background: rgba(255, 255, 255, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    font-size: 24px;

}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 550px;
    height: 409px;
    background-color: var(--white-color);
    border: 2px solid var(--B68337);
    border-radius: 30px;
    gap: 42px;
}

.text {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.content {
    font-size: 16px;
    color: var(--gray-color);
}

.btns {
    display: flex;
    gap: 38px;
}

.w {
    width: 155px;
    height: 65px;
}

/* 覆寫hover效果 */
</style>