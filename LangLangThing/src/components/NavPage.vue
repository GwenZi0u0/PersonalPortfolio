<!-- 分頁Nav -->
<script>
import IconHamOpen from './icons/IconHamOpen.vue';
import IconHamClose from './icons/IconHamClose.vue';
export default {
    components: {
        IconHamOpen, IconHamClose
    },
    data() {
        return {
            // 預設漢堡條
            isMenuOpen: false,
        }
    },
    methods: {
        // 漢堡條
        clickMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        gohomePage() {
            this.$router.push('/');
        },
        aboutusPage() {
            this.$router.push('/aboutuspage');
        },
        sponsorusPage() {
            this.$router.push('/sponsorus');
        },
        adoptioncenterPage() {
            this.$router.push('/adoptioncenter');
        },
        lostandfoundPage() {
            this.$router.push('/lostandfoundsearch');
        },
        latestnewsPage() {
            this.$router.push('/latestnewspage');
        },
        memberloginPage() {
            this.$router.push('/memberlogin');
        }
    }
}
</script>

<template>
    <div class="nav-container">
        <div class="boxall">
            <div class="logotext" @click="gohomePage">
                <img class="titlecn" src="../assets/Image/HomeImage/NavPageCn.svg">
                <img class="titleen" src="../assets/Image/HomeImage/NavPageEn.svg">
            </div>
            <div class="box">
                <span @mouseover="handleHover" @mouseout="handleMouseOut" @click="aboutusPage">關於我們</span>
                <span @mouseover="handleHover" @mouseout="handleMouseOut" @click="sponsorusPage">贊助我們</span>
                <span @mouseover="handleHover" @mouseout="handleMouseOut" @click="adoptioncenterPage">認養中心</span>
                <span @mouseover="handleHover" @mouseout="handleMouseOut" @click="lostandfoundPage">失散協尋</span>
                <span @mouseover="handleHover" @mouseout="handleMouseOut" @click="latestnewsPage">最新公告</span>
                <span @mouseover="handleHover" @mouseout="handleMouseOut" @click="memberloginPage">會員中心</span>
            </div>
            <!-- 漢堡條 -->
            <div class="ham">
                <input type="checkbox" id="ham-switch" hidden>
                <label for="ham-switch" class="ham-menu" tabindex="1" :class="{ 'hamber': true, 'open': isMenuOpen }"
                    @click="clickMenu">
                    <IconHamOpen v-show="!isMenuOpen" class="switch-open"></IconHamOpen>
                    <IconHamClose v-show="isMenuOpen" class="switch-close"></IconHamClose>
                </label>
                <ul v-show="isMenuOpen" class="ham-menu-li">
                    <li tabindex="1" @click="aboutusPage">關於我們</li>
                    <li tabindex="1" @click="sponsorusPage">贊助我們</li>
                    <li tabindex="1" @click="adoptioncenterPage">認養中心</li>
                    <li tabindex="1" @click="lostandfoundPage">失散協尋</li>
                    <li tabindex="1" @click="latestnewsPage">最新公告</li>
                    <li tabindex="1" @click="memberloginPage">會員中心</li>
                </ul>
                <!-- <div class="bg-white"></div> -->
            </div>
        </div>
    </div>
</template>

<style scoped>
.nav-container {
    position: relative;
}

.boxall {
    width: 100vw;
    max-width: 100%;
    height: 82px;
    background: #52A038;
    color: #FEFEFB;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 38px;
}

span {
    font-size: 1.125rem;
    font-weight: 400;
    letter-spacing: 4.5px;
    padding: 25px 35px;
    cursor: pointer;
}

span:hover {
    background-image: url(../assets/Image/HomeImage/HomeA-hover.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 75%;
    color: #52A038;
    cursor: pointer;
}

.logotext {
    display: flex;
    align-items: center;
    cursor: pointer;
}

.titlecn {
    width: 176px;
    height: 50px;
}

.titleen {
    width: 161px;
    height: 30px;
}

.ham {
    display: none;
    visibility: hidden;
}

@media screen and (max-width:1280px) and (min-width:769px) {
    span {
        padding: 25px 10px;
    }

    span:hover {
        background-size: 100%;
    }
}

/* 漢堡條 */
.ham {
    display: none;
    visibility: visible;
}

/* 平板 */
@media screen and (max-width:768px) and (min-width:720px) {
    .box {
        display: none;
        visibility: hidden;
    }

    .ham {
        display: block;
        visibility: visible;
        position: absolute;
        top: 8px;
        right: 10px;
    }

    .ham-menu {
        z-index: 8;
        position: relative;
        cursor: pointer;
    }

    /* .bg-white {
        z-index: 6;
        width: 100vw;
        max-width: 100%;
        height: 100vh;
        background-color: rgba(255, 255, 255, 0.7);
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    } */
    .ham-menu-li {
        z-index: 6;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: #52A038;
        width: 45vw;
        height: 100vh;
        padding: 0;
        gap: 50px;
        position: absolute;
        top: 0;
        right: 0;
        /* left: -336px; */
        padding: 40px 0;
    }

    li {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100px;
        font-size: 1.5rem;
        letter-spacing: 4.5px;
        list-style: none;
    }

    li:hover {
        background-image: url(../assets/Image/HomeImage/HomeA-hover.svg);
        background-position: center;
        background-repeat: no-repeat;
        background-size: 45%;
        color: #52A038;
        cursor: pointer;
    }
}

@media screen and (max-width:720px) {
    .box {
        display: none;
        visibility: hidden;
    }

    .boxall {
        height: 46px;
        padding: 0 15px;
    }

    .logotext {
        gap: 5px;
    }

    .titlecn {
        width: 92px;
        height: 29px;
    }

    .titleen {
        width: 79px;
        height: 15px;
    }

    .ham {
        display: flex;
        visibility: visible;
        position: absolute;
        top: 1px;
        right: 6px;
    }

    .ham-menu {
        z-index: 7;
    }

    /* 
    .bg-white {
        width: 100vw;
        max-width: 100%;
        background: rgba(255, 255, 255, 0.7);
        position: absolute;
        top: 0;
        bottom: 0;
        transition: all .3s;
        transform: translateX(100vw);
        overflow: hidden;
    } */

    .ham-menu-li {
        z-index: 6;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: #52A038;
        width: 63vw;
        height: 100vh;
        padding: 0;
        gap: 32px;
        position: absolute;
        top: 0;
        /* left: -230px; */
        padding: 40px 0;
    }

    li {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100px;
        font-size: 1.25rem;
        letter-spacing: 5px;
        list-style: none;
    }

    li:hover {
        background-image: url(../assets/Image/HomeImage/HomeA-hover.svg);
        background-position: center;
        background-repeat: no-repeat;
        background-size: 55%;
        color: #52A038;
        cursor: pointer;
    }
}
</style>