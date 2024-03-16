<!-- 主頁Nav -->
<script>
import IconHamOpen from './icons/IconHamOpen.vue';
import IconHamClose from './icons/IconHamClose.vue';
import IconLogo from './icons/IconLogo.vue';
import IconNavWave from './icons/IconNavWave.vue';

export default {
    components: {
        IconLogo,
        IconNavWave,
        IconHamClose,
        IconHamOpen,
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
    },

};
</script>

<template>
    <div class="nav-container">
        <div class="boxall">
            <div id="logo" @click="gohomePage">
                <IconLogo id="logo"></IconLogo>
            </div>
            <div class="logotext" @click="gohomePage">
                <img class="titleen" src="../assets/Image/HomeImage/HomeA-title_en.svg">
                <img class="titlecn" src="../assets/Image/HomeImage/HomeA-title.svg">
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
                <!-- <div class="bg-white" v-show="isMenuOpen"></div> -->
            </div>
        </div>
        <div id="wave">
            <IconNavWave></IconNavWave>
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
    padding-right: 38px;
}

#logo {
    width: 180px;
    height: 170px;
    margin-top: 45px;
    margin-left: 10px;
    transform: rotate(-2deg);
    z-index: 2;
    cursor: pointer;
}

.logotext {
    display: flex;
    flex-direction: column;
    z-index: 2;
    cursor: pointer;
}

.titleen {
    width: 161px;
    height: 30px;
    position: absolute;
    top: 90%;
    left: 14%;
}

.titlecn {
    width: 397px;
    height: 123px;
    position: absolute;
    top: 125%;
    left: 13%;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5));
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

#wave {
    position: absolute;
    top: 99%;
    z-index: 1;
}

/* 漢堡條 */
.ham {
    display: none;
    visibility: hidden;
}

@media screen and (max-width:1280px) and (min-width:769px) {
    #wave {
        transform: scale(0.9);
        top: 55%;
        left: -5%;
    }

    #logo {
        width: 171px;
        height: 157px;
        margin-top: 7%;
        margin-left: 0%;
    }

    .titleen {
        left: 16%;
    }

    .titlecn {
        width: 322px;
        height: 91px;
    }

    span {
        padding: 25px 10px;
        z-index: 2;
    }

    span:hover {
        background-image: url(../assets/Image/HomeImage/HomeA-hover.svg);
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100%;
        color: var(--primary-color);
        cursor: pointer;
    }
}

/* 平板 */
@media screen and (max-width:768px) and (min-width:720px) {
    .box {
        display: none;
        visibility: hidden;
    }

    .boxall {
        height: 0;
        padding: 0;
    }

    #wave {
        /* visibility: hidden; */
        transform: scale(0.5);
        left: -123px;
        margin-top: -80px;
    }

    #logo {
        width: 151px;
        height: 101px;
        margin-top: 42px;
        margin-left: -8px;
        /* transform: scale(0.77);
        margin-top: 80px;
        margin-left: -15px; */
    }

    .titleen {
        width: 120px;
        height: 22px;
        top: 35px;
        left: 120px;
    }

    .titlecn {
        width: 240px;
        height: 68px;
        top: 55px;
        left: 108px;
    }

    .ham {
        display: block;
        visibility: visible;
        position: absolute;
        top: 12px;
        right: 20px;
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
        left: -328px;
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

    #wave {
        display: none;
        visibility: hidden;
    }

    .boxall {
        height: 70px;
        padding: 0;
    }

    #logo {
        width: 68px;
        height: 93px;
        transform: scale(0.9);
        margin-top: 0%;
        margin-left: 2%;
    }

    .titleen {
        width: 79px;
        height: 15px;
        top: 12%;
        left: 40%;
    }

    .titlecn {
        width: 125px;
        height: 39px;
        top: 28%;
        left: 35%;
        /* top: 22px; */
    }

    .ham {
        display: block;
        visibility: visible;
        position: absolute;
        top: 5px;
        right: 10px;
        z-index: 2;
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
        width: 63vw;
        height: 100vh;
        padding: 0;
        gap: 32px;
        position: absolute;
        top: 0;
        left: -226px;
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