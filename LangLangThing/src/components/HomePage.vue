<script>
import GreenButton from '../components/GreenButton.vue';
import YellowButton from '../components/YellowButton.vue';

export default {
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        // behavior行動= 平滑
        behavior: 'smooth',
      });
    },
    handleHover() {
      // 在滑鼠懸停時的相關處理
      // 可以在這裡添加額外的邏輯或改變按鈕的樣式
    },
    handleMouseOut() {
      // 在滑鼠離開時的相關處理
      // 可以在這裡添加額外的邏輯或改變按鈕的樣式
    },
    clickSponsorUsBtn() {
      // console.log("點到「贊助我們」");
      this.$router.push('/sponsorus'); //導到贊助我們頁面
      this.scrollToTop();
    },
    clickSeeMoreBtn() {
      this.$router.push('/aboutuspage'); //導到關於我們頁面
      this.scrollToTop();
    },
    clickMoreNews() {
      this.$router.push('/latestnewspage'); //導到關於我們頁面
      this.scrollToTop();
    }
  },
  components: { GreenButton, YellowButton },
};
</script>
 
<template>
  <!-- 關於浪浪的事 -->
  <section class="home-container home-about">
    <div class="home-about-bg">
      <div class="brown-paw-pic">
        <img src="../assets/Image/HomeImage/HomeB-paw.svg">
      </div>
      <!-- 狗掌&主人與毛小孩圖片 -->
      <div class="about-us-image"></div>
    </div>
    <!-- 關於浪浪的事文字 -->
    <div class="home-about-section">
      <div class="about-lang-text">關於浪浪的事</div>
      <!-- about us & btns -->
      <div class="home-about-and-btns">
        <div class="about-text ">About Us</div>
        <div class="home-about-btns">
          <!-- 贊助我們按鈕 -->
          <GreenButton @click="clickSponsorUsBtn">贊助我們</GreenButton>
          <!-- 瞭解更多按鈕 -->
          <YellowButton @click="clickSeeMoreBtn">瞭解更多</YellowButton>
        </div>
      </div>

      <p class="mission-statement">
        主要由喜歡毛小孩的夥伴們開發，目的是減少流浪在外的毛小孩。<br><br>
        包含毛小孩送養、協尋、收容所資訊查找的功能，希望可以達到資訊透明，從出生到當小天使，紀錄毛小孩一生。
      </p>
    </div>
  </section>
  <!-- 文字簡介 -->
  <!-- 最新消息 -->
  <section class="home-container home-news-section">
    <div class="yellow-paw-pic">
      <img src="../assets/Image/HomeImage/HomeC-paw.svg">
    </div>
    <div class="dog-cat-pic"></div>
    <div class="home-news-text">
      <div class="about-lang-text">最新消息</div>
      <div class="about-text">News</div>
    </div>

    <div class="news-area">
      <div class="green-icon-container">
        <ul class="news-list">
          <li class="news-item">
            <div class="news-date">
              <span class="news-date-month">2023.11</span>
              <span class="news-date-day">02</span>
            </div>
            <div class="news-announcement" @click="clickMoreNews">
              <span>浪浪的事改版問券調查</span>
              <!-- 更多按鈕 -->
              <div class="news-announcement-btn" @mouseover="handleHover" @mouseout="handleMouseOut">
                <span >更多...</span>
                <img src="../assets/Image/HomeImage/HomeC-more-btn.svg">
              </div>

            </div>
          </li>
          <li class="news-item">
            <div class="news-date">
              <span class="news-date-month">2023.05</span>
              <span class="news-date-day">31</span>
            </div>
            <div class="news-announcement">
              <span>誤發登入失敗通知</span>
              <div class="news-announcement-btn" @mouseover="handleHover" @mouseout="handleMouseOut">
                <span>更多...</span>
                <img src="../assets/Image/HomeImage/HomeC-more-btn.svg">
              </div>
            </div>
          </li>
          <li class="news-item">
            <div class="news-date">
              <span class="news-date-month">2023.05</span>
              <span class="news-date-day">25</span>
            </div>
            <div class="news-announcement">
              <span>活動[轉載]高雄市動物...

              </span>
              <div class="news-announcement-btn" @mouseover="handleHover" @mouseout="handleMouseOut">
                <span>更多...</span>
                <img src="../assets/Image/HomeImage/HomeC-more-btn.svg">
              </div>
            </div>
          </li>
        </ul>
        <div class="more-news-btn">
          <GreenButton @click="clickMoreNews">更多消息</GreenButton>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-container {
  width: 100vw;
  max-width: 100%;
  height: 850px;
  position: relative;
  margin-bottom: 209px;
}

/*-----首頁 關於我們-----*/
/*#region*/
.home-about-bg {
  height: 852px;
  position: relative;
  top: 0;
  left: 0;
  z-index: 0;
}

.brown-paw-pic {
  position: absolute;
  top: -23.5%;
  left: -28%;
}

.about-us-image {
  width: 1002px;
  height: 852px;
  background-image: url(../assets/Image/HomeImage/HomeB-AboutUsPic.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
}

/* 照片的遮罩 */
.about-us-image::after {
  content: "";
  width: 1002px;
  height: 853px;
  border-radius: 35px 0px 0px 35px;
  opacity: 0.97;
  background: linear-gradient(90deg, #FFFEFD, rgba(255, 242, 209, 0.66) 53%, transparent);
  filter: blur(0.5px);
  position: absolute;
  top: 0;
  left: 0;
}

.home-about-section {
  padding-left: 180px;
  z-index: 1;
  position: absolute;
  top: 0;
}

.about-lang-text {
  color: var(--primary-color);
  font-size: 64px;
  letter-spacing: 1rem;
  margin-bottom: 40px;
}

.home-about-and-btns {
  display: flex;
  gap: 50px;
  align-items: center;
  margin-bottom: 97px;
}

.about-text {
  color: var(--primary-color);
  font-size: 46px;
  letter-spacing: 1rem;
}

.home-about-btns {
  width: 333px;
  display: flex;
  justify-content: space-between;
}

.mission-statement {
  width: 864px;
  height: 461px;
  color: var(--gray-color);
  font-size: 40px;
  letter-spacing: 6px;
}

@media (max-width: 1280px) {
  .brown-paw-pic {
    top: -16%;
    left: -41%;
  }

  .about-us-image {
    width: 631px;
    height: 549px;
    position: absolute;
    top: 27%;
    right: 0%;
  }

  .about-us-image::after {
    width: 631px;
    height: 549px;
  }

  .home-about-section {
    padding-left: 66px;
  }

  .about-lang-text {
    color: var(--primary-color);
    font-size: 48px;
    letter-spacing: 12px;
    margin-bottom: 15px;
  }

  .home-about-and-btns {
    gap: 27px;
    margin-bottom: 73px;
  }

  .about-text {
    font-size: 32px;
    letter-spacing: 8px;
  }

  .mission-statement {
    width: 412px;
    height: 401px;
    font-size: 24px;
    letter-spacing: 4px;
  }
}

@media (max-width: 768px) {
  .home-container {
    height: 460px;
    margin-bottom: 165px;
  }

  .brown-paw-pic {
    top: -55%;
    left: -92%;
    transform: scale(0.65);
  }

  .about-us-image {
    display: none;
  }

  .home-about-section {
    padding-left: 85px;
  }

  .about-lang-text {
    font-size: 26px;
    letter-spacing: 6.5px;
  }

  .home-about-and-btns {
    gap: 27px;
    margin-bottom: 73px;
  }

  .home-about-btns {
    position: absolute;
    top: 5%;
    left: 50%;
  }

  .about-text {
    font-size: 24px;
    letter-spacing: 6px;
  }

  .mission-statement {
    margin-left: 165px;
    width: 429px;
    font-size: 20px;
    letter-spacing: 3.2px;
    line-height: 50px;
  }
}

/* ------------phone--------------- */
@media (max-width: 720px) {
  .home-container {
    height: 370px;
    margin-bottom: 81px;
  }

  .brown-paw-pic {
    top: -66%;
    left: -200%;
    transform: scale(0.215);
  }

  .home-about-section {
    padding-left: 24px;
    height: 100%;
  }

  .about-lang-text {
    font-size: 20px;
    letter-spacing: 5px;
    margin-bottom: 0;
  }

  .home-about-and-btns {
    margin-bottom: 17px;
  }

  .home-about-btns {
    width: 153px;
    flex-direction: column;
    gap: 17px;
    top: 67%;
    left: 50%;
  }

  .about-text {
    font-size: 14px;
    letter-spacing: 3.5px;
  }

  .mission-statement {
    margin-left: 0;
    padding: 0 23px 0 56px;
    width: 100%;
    height: 200px;
    font-size: 14px;
    letter-spacing: 2.4px;
    line-height: 27px;
  }

}

/*#endregion*/

/*-----首頁 最新消息-----*/
.home-news-section{
  margin-bottom: 200px;
}
.yellow-paw-pic {
  z-index: 0;
  position: absolute;
  top: -35%;
  left: -26.5%;
}

@media (max-width: 1280px) {
  .yellow-paw-pic {
    top: -26%;
    left: -38.5%;
  }

}

@media (max-width: 768px) {
  .yellow-paw-pic {
    top: -102%;
    left: -89%;
    transform: scale(0.65);
  }
}

@media (max-width: 720px) {
  .yellow-paw-pic {
    top: -222.4%;
    left: -195%;
    transform: scale(0.215);
  }
}



.dog-cat-pic {
  background-image: url("../assets/Image/HomeImage/HomeC-dog-cat.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  height: 268px;
  width: 268px;
  position: absolute;
  top: 0px;
  right: 225px;
  z-index: 1;
}

@media (max-width: 1280px) {
  .dog-cat-pic {
    height: 238px;
    width: 216px;
    top: 12%;
  }
}

@media (max-width: 768px) {
  .dog-cat-pic {
    transform: scale(0.5);
    top: 0%;
    right: 50px;
  }
}

@media (max-width:720px) {
  .dog-cat-pic {
    transform: scale(0.4);
    top: -15%;
    right: -20px;
  }
}


.home-news-text {
  margin-top: 65px;
  margin-left: 180px;
  position: absolute;
  top: 0;
  left: 0;
}

@media (max-width: 768px) {
  .home-news-text {
    margin-top: 0;
    margin-left: 85px;
  }
}

@media (max-width:720px) {
  .home-news-text {
    margin-left: 28px;
  }
}


/* 綠色區塊內 */
.green-icon-container {
  background-image: url("../assets/Image/HomeImage/HomeC-dot.svg");
  background-repeat: no-repeat;
  background-size: 100%;
  width: 1300px;
  height: 716px;
  position: absolute;
  top: 15%;
  right: 130px;
}

@media (max-width: 1280px) {
  .green-icon-container {
    width: 997px;
    height: 570px;
    top: 27%;
    right: 87px;
  }
}

@media (max-width: 768px) {
  .green-icon-container {
    width: 660px;
    height: 380px;
    top: 25%;
    right: 30px;
  }
}

@media (max-width:720px) {
  .green-icon-container {
    width: 100%;
    background-position: center;
    background-size: cover;
    top: 20%;
    right: 0px;
  }
}


.news-list {
  list-style: none;
  padding: 0;
  transform: translate(160px, 140px);
  height: 350px;
  width: 880px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--white-color);
}

@media (max-width: 1280px) {
  .news-list {
    transform: translate(100px, 120px);
    height: 260px;
    width: 793px;
  }
}

@media (max-width: 768px) {
  .news-list {
    transform: translate(100px, 50px);
    height: 220px;
    width: 465px;
  }
}

@media (max-width:720px) {
  .news-list {
    transform: translate(45px, 60px);
    width: 276px;
  }
}


.news-item {
  display: flex;
  height: 84px;
  font-family: 'ABeeZee', sans-serif;
  align-items: center;
}

@media (max-width: 1280px) {
  .news-item {
    height: 70px;
  }
}

/* 最新消息的日期區 */
.news-date {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 40px;
  font-family: 'Stick', sans-serif;
}

@media (max-width: 1280px) {
  .news-date {
    margin-right: 36px;
  }
}

@media (max-width:720px) {
  .news-date {
    margin-right: 14px;
  }
}


.news-date-month {
  font-size: 16px;
}

@media (max-width:720px) {
  .news-date-month {
    font-size: 12px;
  }
}


.news-date-day {
  font-size: 32px;
  font-weight: 900;
}

@media (max-width: 768px) {
  .news-date-day {
    font-size: 24px;
  }
}

@media (max-width:720px) {
  .news-date-day {
    font-size: 16px;
  }
}

/* 最新消息的文字區 */
.news-announcement {
  border-bottom: 2px solid var(--white-color);
  font-size: 28px;
  letter-spacing: 7px;
  display: inline-block;
  width: 900px;
  height: 50px;
  position: relative;
  display: flex;
  align-items: center;
}

@media (max-width: 1280px) {
  .news-announcement {
    font-size: 32px;
    letter-spacing: 8px;
    border-width: 5px;
  }
}

@media (max-width: 768px) {
  .news-announcement {
    font-size: 20px;
    letter-spacing: 5px;
  }
}

@media (max-width:720px) {
  .news-announcement {
    font-size: 12px;
    letter-spacing: 3px;
    border-bottom: 1px solid var(--white-color);

  }
}

.news-announcement span:first-child {
  margin-left: 30px;
}

@media (max-width: 768px) {
  .news-announcement span:first-child {
    margin-left: 0px;
  }
}

@media (max-width:720px) {
  .news-announcement span:first-child {
    margin-left: 5px;
  }
}
.news-announcement-btn {
  font-size: 20px;
  position: absolute;
  right: 50px;
  transition: transform 0.3s ease;
}

.news-announcement-btn:hover {
  transform: translateX(10px);
  /* 在 hover 時往右移動 10px */
}

.news-announcement-btn img {
  position: absolute;
  top: 10px
}

.more-news-btn {
  position: absolute;
  top: 660px;
  right: 150px;
}

@media (max-width: 1280px) {
  .news-announcement-btn {
    display: none;
  }

  .more-news-btn {
    position: absolute;
    top: 500px;
  }
}

@media (max-width: 768px) {
  .news-announcement-btn {
    display: block;
  }

  .news-announcement-btn span {
    display: none;
  }

  .news-announcement-btn img {
    position: absolute;
    top: -10px
  }

  .more-news-btn {
    top: 350px;
    right: 20px;
  }
}

@media (max-width:720px) {
  .news-announcement-btn img {
    transform: scale(0.7);
  }

  .more-news-btn {
    top: 400px;
    right: 50%;
    transform: translateX(50%);
  }
}
</style>