<script>
import NavBar from '@/components/NavBar.vue';
import HomePage from '@/components/HomePage.vue';
import IconHeaderLine from '@/components/icons/IconHeaderLine.vue';
import GreenButton from '@/components/GreenButton.vue';
import YellowButton from '@/components/YellowButton.vue';
import HomeCarousel from '@/components/HomeCarousel.vue';
import FooterBar from '@/components/FooterBar.vue';

export default {
  components: {
    NavBar,
    HomePage,
    GreenButton,
    YellowButton,
    HomeCarousel,
    IconHeaderLine,
    FooterBar
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        // behavior行動= 平滑
        behavior: 'smooth',
      });
    },
    // 前往認養中心
    goAdoptionPage() {
      this.$router.push('/adoptioncenter');
      this.scrollToTop();
    },
    // 前往失散協尋
    goLostPage() {
      this.$router.push('/lostandfoundsearch');
      this.scrollToTop();
    },
  },
};
</script>
 
<template>
  <NavBar />
  <header class="home-container header">
    <section>
      <div class="home-header-greenbox"></div>
      <div class="home-header-img">
        <div class="home-header-text">
          <IconHeaderLine class="line3"></IconHeaderLine>
          <span>動物走失了</span>
        </div>
        <div class="home-header-btn">
          <YellowButton id="go-adopt-btn" @click="goAdoptionPage">去認養</YellowButton>
          <GreenButton @click="goLostPage">協尋主人</GreenButton>
        </div>
      </div>
    </section>
  </header>
  <main>
    <!-- 關於浪浪的事 最新消息 -->
    <HomePage />
    <!-- 幻燈片/更多浪浪 -->
    <HomeCarousel />
  </main>
  <FooterBar />
</template>

<style scoped>
.home-container {
  width: 100vw;
  max-width: 100%;
  position: relative;
  margin-bottom: 209px;
  background-color: var(--primary-color);
}

@media (max-width: 768px) {
  .home-container {
    margin-bottom: 112px;
  }
}

@media (max-width: 720px) {
  .home-container {
    margin-bottom: 63px;
  }
}


.home-header-greenbox {
  background: var(--white-color);
  width: 100%;
  height: 440px;
  border-radius: 10px 10px 0 0;
  position: absolute;
  bottom: -5px;
  left: 0px;
}

@media (max-width: 1280px) {
  .home-header-greenbox {
    height: 224px;
  }
}
@media (max-width: 720px) {
  .home-header-greenbox {
    border-radius: 0;
  }
  }
  

.home-header-img {
  width: 97%;
  height: 947px;
  background-image: url(../assets/Image/HomeImage/HomeA-banner.svg);
  background-position: center;
  background-repeat: no-repeat;
  margin: auto;
  position: relative;
}

@media (max-width: 1280px) {
  .home-header-img {
    width: 1084px;
    height: 725px;
    background-image: url(../assets/Image/HomeImage/HomeA-banner-1280.svg);
  }
}
/* 768px */
@media (max-width: 768px) {
  .home-header-img {
    width: 695px;
    height: 466px;
    background-image: url(../assets/Image/HomeImage/HomeA-banner-751.svg);
  }
}

@media (max-width: 720px) {
  .home-header-img {
    width: 310px;
    height: 559px;
    background-image: url(../assets/Image/HomeImage/HomeA-banner-358.svg);
  }
}


/* 三條條+字 */
.home-header-text {
  width: 500px;
  height: 50px;
  position: absolute;
  top: 71%;
  left: 60%;
}

.home-header-text span {
  font-size: 28px;
  text-shadow: 1px 2px 8px rgba(0, 0, 0, 25);
  color: var(--white-color);
  position: absolute;
  top: -80%;
  left: 0%;
  transform: rotate(12deg);
}


.home-header-btn {
  display: flex;
  gap: 26px;
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
}

@media (max-width: 1280px) {
  .home-header-text {
    left: 65%;
    width: 200px;
  }
}

@media (max-width: 768px) {
  .home-header-text {
    width: 150px;
    left: 75%;
  }

  .home-header-text span {
    font-size: 16px;
    top: -52%;
    left: 3%;
    transform: rotate(20deg);
  }
}

@media (max-width: 720px) {
  .home-header-text {
    width: 80px;
    height: 15px;
    top: 25%;
    left: 60%;
  }

  .line3 {
    transform: scale(0.65);
  }

  .home-header-text span {
    font-size: 14px;
    top: -80%;
    left: 5%;
  }


  .home-header-btn {
    flex-direction: column;
    gap: 12px;
  }
}


#go-adopt-btn {
  display: flex;
  justify-content: center;
  align-items: center;
}</style>