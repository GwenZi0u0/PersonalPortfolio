<script>
import NavPage from '../components/NavPage.vue'
import SponsorPopUp from '@/components/SponsorPopUp.vue';
import SponsorSuccess from '@/components/SponsorSuccess.vue';
import FooterPage from '@/components/FooterPage.vue';
import IconChangeButton from '@/components/icons/IconChangeButton.vue';
export default {
  components: {
    SponsorPopUp,
    NavPage,
    SponsorSuccess,
    FooterPage,
    IconChangeButton
  },
  data() {
    return {
      // 進入畫面時 關閉
      rightnow: false,
      showSuccess: false,
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        // behavior行動= 平滑
        behavior: 'smooth',
      });
    },
    // SponsorPopUp裡 點擊到前往贊助 執行Popup關閉&Success開啟
    closeModel() {
      this.rightnow = false;
      this.showSuccess = true;
      this.hidden();
    },
    // SponsorPopUp裡 點擊到前往贊助 執行Popup關閉&Success關閉
    closePopup() {
      this.rightnow = false;
      this.showSuccess = false;
      this.showScrollbar();
    },
    // 視窗開啟時scrollBar隱藏
    hidden() {
      document.body.style.overflow = 'hidden';
      // 讓scrollBar在router後平滑的回至頂部
      this.scrollToTop();
    },
    showScrollbar() {
      document.body.style.overflow = 'auto';
    }
  },
};
</script>

<template>
  <NavPage />
  <section class="sponsor-container">
    <!-- 上半部區塊 -->
    <div class="sponsor-rightnow">
      <div class="sponsor-title">
        <div class="sponsor-titlecn">立即贊助</div>
        <div class="sponsor-titleen">Sponsor Us</div>
      </div>
      <div class="sponsor-banner">
        <div class="arrow"></div>
        <div class="cats"></div>
      </div>
      <div class="sponsor-text">
        <div class="notice">請同意並瞭解以下內容才能贊助</div>
        <div><input type="checkbox" class="input-checkbox">
          <span class="sign">*</span>
          <span class="sign-text">我已瞭解浪浪的事平台是製作流浪動物相關服務，讓毛小孩可以順利被認養、尋獲、協尋...的平台。</span>
        </div>
        <div><input type="checkbox" class="input-checkbox">
          <span class="sign">*</span>
          <span class="sign-text"> 我已瞭解浪浪的事平台是做資訊整合，收集公立收容、私人收容或個人刊登毛小孩資訊，提供毛小孩相關資訊的平台，並非公立收容所或任何私立收容單位。</span>


        </div>
        <div><input type="checkbox" class="input-checkbox">
          <span class="sign">*</span>
          <span class="sign-text">
            我已瞭解浪浪的事平台，並無收容毛小孩且看過 <span class="sponsor-aboutus">關於我們</span>
            內容瞭解平台是製作系統服務讓毛小孩資訊可以更多人看見。</span>
        </div>
      </div>
    </div>
    <!-- 分線 -->
    <div class="interval">
      <div class="line">
        <div class="squre"></div>
        <div class="line-left"></div>
      </div>

      <div class="line-text">填寫資料</div>
      <div class="line">
        <div class="line-right"></div>
        <div class="squre"></div>
      </div>
    </div>
    <!-- 下半部區塊 -->
    <div class="information">
      <div class="box">
        <span>姓名 *</span>
        <div class="name-input">
          <input type="text">
          <input type="text">
        </div>
      </div>
      <div class="box">
        <span>Email</span>
        <div class="email-input">
          <input type="text">
        </div>
        <span class="content">建議您填寫以利未來查詢贊助資訊</span>
      </div>
      <div class="box">
        <span>手機號碼</span>
        <div class="email-input">
          <input type="text">
        </div>
        <span class="content">
          建議您填寫以利未來查詢贊助資訊，格式：0912345678，請勿加入任何符號</span>
      </div>
      <div class="box">
        <span>金額（單位：新台幣TWD） *</span>
        <div class="email-input">
          <input type="text">
        </div>
      </div>
      <div class="box pay">
        <span>支付方式 *<input class="card" type="radio"> 信用卡</span>
      </div>
      <div class="box ">
        <div class="agree-text"><input class="agree" type="checkbox">
          <span class="">
            * 同意本網站
            <span class="sponsor-aboutus">隱私權政策</span>
            ，並瞭解姓名、Email、手機號碼，「皆」有填寫未來才能查詢您的查詢贊助資訊！
          </span>
        </div>
      </div>
      <div class="box ">
        <IconChangeButton class="sponsornow-btn" text="確認並送出" textColor="var(--white-color)"
          bgColor="var(--primary-color)" w="201px" h="64px" @click="rightnow = !rightnow, hidden()" />
        <!-- Popup 執行closeModel closePopup-->
        <SponsorPopUp v-if="rightnow" @close-type="closeModel" @closePopup="closePopup">
        </SponsorPopUp>
        <!-- Success -->
        <SponsorSuccess v-if="showSuccess" @closePopup="closeCurrentPopup" />
      </div>
    </div>
  </section>
  <FooterPage />
</template>

<style scoped>
.sponsor-container {
  width: 100vw;
  max-width: 100%;
  padding: 0 164px 150px;
  color: var(--primary-color);
  font-size: 24px;
  letter-spacing: 6px;
}


@media only screen and (max-width: 768px) {
  .sponsor-container {
    padding: 0px 20px 100px;

  }

}

.sponsor-rightnow {
  padding: 50px 0 100px 0;
}

.sponsor-title {
  display: flex;
  align-items: center;
  margin-bottom: 50px;
}

@media only screen and (max-width: 768px) {
  .sponsor-titlecn {
    font-size: 26px;
  }
}

.sponsor-titleen {
  font-size: 20px;
  letter-spacing: 5px;
  width: 150px;
  line-height: 24px;
}

.sponsor-banner {
  display: flex;
}

.arrow {
  width: 90px;
  height: 335px;
  background-image: url('../assets/Image/SponsorImage/arrow.svg');
  background-repeat: no-repeat;
  background-position: top;
  margin-right: 20px;
}

@media only screen and (max-width: 1836px) {
  .arrow {
    position: absolute;
    top: 356px;
    left: 59px;
  }
}

@media only screen and (max-width: 768px) {
  .arrow {
    display: none;
  }
}

.cats {
  width: 1465px;
  height: 265px;
  background-image: url('../assets/Image/SponsorImage/banner.svg');
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: top;
}

@media only screen and (max-width: 768px) {
  .cats {
    width: 711px;
    height: 135px;
  }
}

@media only screen and (max-width: 720px) {
  .cats {
    width: 358px;
    height: 98px;
    background-size: 140%;
    padding: 0;
    margin: 0;
  }
}

.sponsor-text {
  display: flex;
  flex-direction: column;
  row-gap: 55px;
  text-indent: -38px;
  margin-top: -20px;
  padding-left: 125px;
  color: var(--gray-color);
}

@media only screen and (max-width: 1836px) {
  .sponsor-text {
    padding-left: 44px;
    margin-top: 0px;

  }
}

input.input-checkbox {
  width: 20px;
  height: 20px;
}

.sign {
  margin-left: 10px;
}

@media only screen and (max-width: 720px) {
  .sign-text {
    font-size: 14px;
    letter-spacing: 25%;
  }
}

.notice {
  font-weight: bold;
}

@media only screen and (max-width: 720px) {
  .notice {
    font-size: 14px;
  }
}

.sponsor-aboutus {
  text-decoration: underline;
}

/* 分線 */
.interval {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 32px;
  letter-spacing: 8px;
  margin: auto;
}


@media only screen and (max-width: 1836px) {
  .interval {
    justify-content: unset;
    width: 999px;
    padding: 0px 0px 100px 0px;
  }
}

@media only screen and (max-width: 768px) {
  .interval {
    justify-content: unset;
    width: 731px;
    padding: 0px 0px 100px 0px;
    margin: auto;
  }
}

@media only screen and (max-width: 720px) {
  .interval {
    justify-content: unset;
    width: 293px;
    padding: 0px 0px 100px 0px;
    margin: auto;

  }
}


@media only screen and (max-width: 1280px) {
  .line-text {
    margin: 0px 19px;
  }
}

@media only screen and (max-width: 768px) {
  .line-text {
    font-size: 26px;
  }
}

@media only screen and (max-width: 720px) {
  .line-text {
    font-size: 16px;
    margin: 0px 1px;
  }
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
    width: 390px;
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
    width: 390px;
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

/* 下半部區塊 */
.information {
  padding: 143px 311px 0 311px;
  display: flex;
  flex-direction: column;
  gap: 50px;
}

@media only screen and (max-width: 1836px) {

  .information {
    padding: 0px;
    display: flex;
    flex-direction: column;
    gap: 50px;
  }
}

@media only screen and (max-width: 768px) {

  .information {
    padding: 0px;
    display: flex;
    flex-direction: column;
    gap: 50px;
  }
}

@media only screen and (max-width: 720px) {

  .information {
    padding: 0px 10px;
    display: flex;
    flex-direction: column;
    gap: 50px;
  }
}

.information input {
  width: 100%;
  height: 85px;
  font-size: 24px;
  border-radius: 4px;
  border: 2px solid var(--primary-color);
}

.box {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.name-input {
  display: flex;
  justify-content: space-between;
}

@media only screen and (max-width: 768px) {
  .name-input {
    justify-content: flex-start;
  }
}

@media only screen and (max-width: 720px) {
  .name-input {
    justify-content: flex-start;
  }
}

.name-input input {
  width: 429px;
  height: 85px;
}

@media only screen and (max-width: 768px) {
  .name-input {
    display: flex;
    gap: 10px;
  }
}

@media only screen and (max-width: 768px) {
  .name-input input {
    justify-content: flex-start;
    width: 314px;
    height: 70px;
  }
}

@media only screen and (max-width: 720px) {
  .name-input input {
    justify-content: flex-start;
    width: 133px;
    height: 43px;
  }
}

@media only screen and (max-width: 768px) {
  .email-input {
    width: 642px;
    height: 70px;
  }
}

@media only screen and (max-width: 720px) {
  .box .email-input {
    width: 277px;
  }
}

@media only screen and (max-width: 720px) {
  .box .email-input input {
    height: 43px;
  }
}

.content {
  font-size: 20px;
  letter-spacing: 5px;
  color: var(--gray-color);
}

@media only screen and (max-width: 768px) {
  .content {
    font-size: 20px;
    letter-spacing: 3.5px;
    margin-top: 10px;
  }
}

@media only screen and (max-width: 720px) {
  .content {
    font-size: 14px;
    letter-spacing: 3.5px;
    margin-top: -30px;
  }
}



@media only screen and (max-width: 720px) {
  .box span:nth-child(1) {
    font-size: 14px;
    letter-spacing: 3.5px;
    margin-top: -40px;
  }
}

.box .card {
  width: 18px;
  height: 18px;
  margin-left: 48px;
}

.box .agree-text {
  text-indent: -25px;
}

@media only screen and (max-width: 768px) {
  .box .agree-text {
    width: 681px;
  }
}

@media only screen and (max-width: 720px) {
  .box .agree-text {
    font-size: 12px;
    width: 260px;
  }
}

.box .agree {
  width: 18px;
  height: 18px;
  margin-left: 26px;
}

.sponsornow-btn {
  margin: auto;
  /* font-size: 32px; */
  /* transform: scale(1.3); */
}
</style>