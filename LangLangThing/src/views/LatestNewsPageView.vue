<!-- 最新公告頁面 -->
<script>
import FooterPage from '@/components/FooterPage.vue';
import NavPage from '@/components/NavPage.vue';
// eslint-disable-next-line no-unused-vars
import { toHandlers } from 'vue';

export default {
  data() {
    return {
      //變量，儲存當前所選消息的索引
      selectedNews: null,
      news: [
        { date: '2023.11', 'day': '02', title: '浪浪的事改版問卷調查', content: '感謝各位會員一直以來的直支持，因為近期流量越來越大，所以網站部分功能有時候會出現500的錯誤。\n \n因為既有的系統環境無法服務到大量使用者。因此系統將執行升級改版，此次改版可能會有暫停服務時間。另外也非常歡迎各位會員提出自己的想法，可以填寫以下google 表單，選出最喜歡哪一些現在已經有的功能以及希望新增的功能。浪浪的事改版問券調查：https://forms.gle/ttEf32Dj8ABXbXZj6' },
        { date: '2023.05', 'day': '31', title: '誤發登入失敗通知', content: '真的非常不好意思，通知登入失敗的儲存位置，復原備份資料於測試環境。\n \n以至於之前若有的登入失敗過的會員，沒有發送通知信，昨天2023/5/31會被發送 登入失敗的Email真的非常抱歉請勿點選來路不明的連結，浪浪的事也不會通知任何繳費的事項。真的非常不好意思，造成您的不便敬請見諒。' },
        { date: '2022.01', 'day': '24', title: '登記公告策略改變', content: '浪浪的事是以記錄的方式將動物的所有記錄都可以記錄下來。包含看醫生的紀錄、送養轉讓紀錄、遺失快速通報功能，從出生到死亡希望都可以紀錄。\n \n但目前大部分還是以會員自主登入為主，期望未來可以越來越好！歡迎不管是不是要送養的毛小孩，都可以嘗試新增毛小孩在網站中，有任何不方便的地方，歡迎使用聯絡我們功能給我們建議喔～\n \n另外 浪浪的事主是提供平台幫助紀錄毛小孩的大小事，並無收容任何毛小孩，最近好像有會員誤會有收容動物，我們會加強網頁畫面顯示的提示。祝各位有個愉快的一天' }, { date: '2023.11', 'day': '02', title: '浪浪的事改版問卷調查', content: '感謝各位會員一直以來的直支持，因為近期流量越來越大，所以網站部分功能有時候會出現500的錯誤。\n \n因為既有的系統環境無法服務到大量使用者。因此系統將執行升級改版，此次改版可能會有暫停服務時間。\n \n另外也非常歡迎各位會員提出自己的想法，可以填寫以下google 表單，選出最喜歡哪一些現在已經有的功能以及希望新增的功能。浪浪的事改版問券調查： https://forms.gle/ttEf32Dj8ABXbXZj6' },
        { date: '2023.05', 'day': '31', title: '誤發登入失敗通知', content: '真的非常不好意思，通知登入失敗的儲存位置，復原備份資料於測試環境。以至於之前若有的登入失敗過的會員，沒有發送通知信，昨天2023/5/31會被發送 登入失敗的Email真的非常抱歉請勿點選來路不明的連結，浪浪的事也不會通知任何繳費的事項。真的非常不好意思，造成您的不便敬請見諒。' },
        { date: '2022.01', 'day': '24', title: '登記公告策略改變', content: '浪浪的事是以記錄的方式將動物的所有記錄都可以記錄下來。包含看醫生的紀錄、送養轉讓紀錄、遺失快速通報功能，從出生到死亡希望都可以紀錄。但目前大部分還是以會員自主登入為主，期望未來可以越來越好！\n \n歡迎不管是不是要送養的毛小孩，都可以嘗試新增毛小孩在網站中，有任何不方便的地方，歡迎使用聯絡我們功能給我們建議喔～另\n \n外 浪浪的事主是提供平台幫助紀錄毛小孩的大小事，並無收容任何毛小孩，最近好像有會員誤會有收容動物，我們會加強網頁畫面顯示的提示。祝各位有個愉快的一天' }, { date: '2023.11', 'day': '02', title: '浪浪的事改版問卷調查', content: '感謝各位會員一直以來的直支持，因為近期流量越來越大，所以網站部分功能有時候會出現500的錯誤。因為既有的系統環境無法服務到大量使用者。因此系統將執行升級改版，此次改版可能會有暫停服務時間。\n \n另外也非常歡迎各位會員提出自己的想法，可以填寫以下google 表單，選出最喜歡哪一些現在已經有的功能以及希望新增的功能。浪浪的事改版問券調查： https://forms.gle/ttEf32Dj8ABXbXZj6' },
        { date: '2023.05', 'day': '31', title: '誤發登入失敗通知', content: '真的非常不好意思，通知登入失敗的儲存位置，復原備份資料於測試環境。以至於之前若有的登入失敗過的會員，沒有發送通知信，昨天2023/5/31會被發送 登入失敗的Email真的非常抱歉請勿點選來路不明的連結，浪浪的事也不會通知任何繳費的事項。真的非常不好意思，造成您的不便敬請見諒。' },
        { date: '2022.01', 'day': '24', title: '登記公告策略改變', content: '浪浪的事是以記錄的方式將動物的所有記錄都可以記錄下來。包含看醫生的紀錄、送養轉讓紀錄、遺失快速通報功能，從出生到死亡希望都可以紀錄。\n \n但目前大部分還是以會員自主登入為主，期望未來可以越來越好！歡迎不管是不是要送養的毛小孩，都可以嘗試新增毛小孩在網站中，有任何不方便的地方，歡迎使用聯絡我們功能給我們建議喔～\n \n另外 浪浪的事主是提供平台幫助紀錄毛小孩的大小事，並無收容任何毛小孩，最近好像有會員誤會有收容動物，我們會加強網頁畫面顯示的提示。祝各位有個愉快的一天' }, { date: '2022.01', 'day': '24', title: '登記公告策略改變', content: '浪浪的事是以記錄的方式將動物的所有記錄都可以記錄下來。包含看醫生的紀錄、送養轉讓紀錄、遺失快速通報功能，從出生到死亡希望都可以紀錄。\n \n但目前大部分還是以會員自主登入為主，期望未來可以越來越好！歡迎不管是不是要送養的毛小孩，都可以嘗試新增毛小孩在網站中，有任何不方便的地方，歡迎使用聯絡我們功能給我們建議喔～\n \n另外 浪浪的事主是提供平台幫助紀錄毛小孩的大小事，並無收容任何毛小孩，最近好像有會員誤會有收容動物，我們會加強網頁畫面顯示的提示。祝各位有個愉快的一天' }, { date: '2023.11', 'day': '02', title: '浪浪的事改版問卷調查', content: '感謝各位會員一直以來的直支持，因為近期流量越來越大，所以網站部分功能有時候會出現500的錯誤。\n \n因為既有的系統環境無法服務到大量使用者。因此系統將執行升級改版，此次改版可能會有暫停服務時間。\n\n另外也非常歡迎各位會員提出自己的想法，可以填寫以下google 表單，選出最喜歡哪一些現在已經有的功能以及希望新增的功能。浪浪的事改版問券調查： https://forms.gle/ttEf32Dj8ABXbXZj6' },

      ],
      //變量，控制彈跳視窗的顯示狀態（空字串代表沒有公告被選中）
      //當點擊某公告時，isDetailPopupVisible會被設置相應的索引值，從而觸發彈出窗口的顯示
      isDetailPopupVisible: '',
    };
  },
  components: {
    NavPage,
    FooterPage
  },

  methods: {
    //點擊後觸發showDetails方法，接收一個index參數，表示所點擊的公告的索引，賦值給selectedNews
    showDetails(index) {
      console.log(index);
      // 當公告被點擊時觸發，更新 selectedNews 為所選公告的索引
      this.selectedNews = index;
      this.isDetailPopupVisible = index;
      // document.querySelector('.news-page-container').style.backgroundColor='rgba(82,160,56,0.15)';
      document.body.style.overflow = 'hidden';
    },
    closeDetails() {
      this.selectedNews = null;
      this.isDetailPopupVisible = ''; //關閉彈出窗口
      document.body.classList.remove('modal-open');
      document.body.style.overflow = 'auto';
    },
    calculatePopupPosition() {
      // 根據所選消息的位置計算窗口位置
      // 抓取每個news-item
      const selectedNewsElement = document.querySelectorAll('.news-item');
      const rect = selectedNewsElement.getBoundingClientRect();

      //返回一個包含動態計算的樣式對象
      return {
        top: `${rect.top}px`,
        left: `${rect.right}px`,
      }
    },
  },

}
</script>
<template>
  <NavPage />
  <main>
    <section class="news-page-container">
      <div class="latest-news-text">最新公告NEWS</div>
      <div class="green-bg">

        <ul class="news-list">
          <li class="news-item" v-for="(item, index) in news" :key="index" @click="showDetails(index)">
            <div class="news-date">
              <span class="news-date-month">{{ item.date }}</span>
              <span class="news-date-day">{{ item.day }}</span>
            </div>
            <div class="news-announcement">
              <span>{{ item.title }}</span>
              <!-- 更多按鈕 -->
              <!-- isDetailPopupVisible相應索引值 不等於 最新公告的索引值 就出現更多按鈕 -->
              <div class="news-announcement-btn" v-if="isDetailPopupVisible !== index">
                <span>更多...</span>
                <img src="../assets/Image/HomeImage/HomeC-more-btn-gray.svg">
              </div>
            </div>
          </li>
        </ul>
      </div>

    </section>

    <!-- 詳細內容 -->
    <div v-if="selectedNews !== null" class="news-detail-popup" :style="calculatePopupPosition">
      <div class="close-btn" @click="closeDetails"></div>
      <div class="news-detail-content">
        <p style="white-space: pre-line;">{{ news[selectedNews].content }}</p>
        <!-- 其他詳細內容 -->
      </div>
    </div>

  </main>
  <FooterPage />
</template>

<style scoped>
main {
  width: 100vw;
  max-width: 100%;
  /*height: 100vh;*/
  font-family: 'ABeeZee';
}

.news-page-container {
  width: 100%;
  height: 100%;
}

/*
@media only screen and (max-width: 375px) {
  .news-page-container {
    background-image: url("../assets/Image/SponsorImage/news-green.svg");
    background-size: 250%;
  }
}*/

.latest-news-text {
  font-weight: 400;
  letter-spacing: 12px;
  font-size: 48px;
  color: var(--primary-color);
  margin: 68px 0px 0px 200px;
}

@media only screen and (max-width: 1870px) {
  .latest-news-text {
    margin: 68px 0px 0px 100px;
  }
}

@media only screen and (max-width: 768px) {
  .latest-news-text {
    font-size: 26px;
    letter-spacing: 6.5px;
    margin: 44px 0px 14px 40px;
  }
}

@media only screen and (max-width: 720px) {
  .latest-news-text {
    font-size: 20px;
    letter-spacing: 4.8px;
    margin: 22px 0px 14px 33px;
  }
}



/* 綠色背景內 */
.green-bg {
  background-image: url("../assets/Image/SponsorImage/news-green.svg");
  background-repeat: repeat;
  background-size: 100%;
  width: 1588px;
  padding-bottom: 100px;
  margin: 62px 0px 0px 158px;

}


@media only screen and (max-width: 1870px) {
  .green-bg {
    width: 999px;
    background-repeat: space;
  }
}

@media only screen and (max-width: 1195px) {
  .green-bg {
    width: 660px;
    margin: 14px 0px 0px 95px;
    transform: translate(-60px, -5px);
    background-repeat: space;
  }
}

@media only screen and (max-width: 720px) {
  .green-bg {
    width: 370px;
    background-size: 194%;
    background-position: center;
    margin: 0px 0px 0px 60px;
    background-repeat: repeat-y;
  }
}


.news-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--gray-color);
  margin: 62px 0px 0px 134px;
  width: 935px;
}

@media only screen and (max-width: 1870px) {
  .news-list {
    margin: 62px 0px 0px -11px;
  }
}

@media only screen and (max-width: 768px) {
  .news-list {
    width: 100%;
    margin: 0px 0px 80px 80px;

  }
}

@media only screen and (max-width: 720px) {
  .news-list {
    width: 280px;
    margin: 0px 0px 80px 70px;

  }
}





.news-item {
  display: flex;
  margin: 20px 0px;
  width: 935px;
  height: 84px;
  font-family: 'ABeeZee', sans-serif;
}

@media only screen and (max-width: 768px) {
  .news-item {
    width: 600px;
  }
}

@media only screen and (max-width: 720px) {

  .news-item {
    width: 280px;
    height: 50px;
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

@media only screen and (max-width: 720px) {
  .news-date {
    font-size: 16px;
    margin-right: 0px;
  }
}


.news-date-month {
  font-size: 16px;
}

@media only screen and (max-width: 720px) {
  .news-date-month {
    font-size: 12px;
    font-weight: 400;
  }

}

.news-date-day {
  font-size: 32px;
  font-weight: 900;
}

@media only screen and (max-width: 720px) {
  .news-date-day {
    font-size: 16px;
    font-weight: 900;
    font-family: 'Stick';
  }
}

/* 最新消息的文字區 */
.news-announcement {
  border-bottom: 2px solid var(--gray-color);
  font-size: 28px;
  letter-spacing: 7px;
  display: inline-block;
  width: 900px;
  position: relative;
  display: flex;
  align-items: center;
}

@media only screen and (max-width: 1870px) {
  .news-announcement {
    width: 799px;
  }
}


@media only screen and (max-width: 768px) {
  .news-announcement {
    font-size: 20px;
    width: 450px;
  }
}

@media only screen and (max-width: 720px) {
  .news-announcement {
    letter-spacing: 3px;
    margin-left: 10px;
  }
}

.news-announcement span:first-child {
  margin-left: 30px;
}

@media only screen and (max-width: 768px) {
  .news-announcement span:first-child {
    margin-left: 30px;
  }
}

@media only screen and (max-width: 720px) {
  .news-announcement span:first-child {
    margin-left: 0px;
  }
}


@media only screen and (max-width: 720px) {
  .news-announcement span {
    font-size: 12px;
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


@media only screen and (max-width: 768px) {
  .news-announcement-btn span {
    opacity: 0;
  }
}

.news-announcement-btn img {
  position: absolute;
  top: 10px;
}

@media only screen and (max-width: 720px) {
  .news-announcement-btn img {
    width: 21px;
    height: 21px;
  }
}

.news-detail-popup {
  position: fixed;
  top: 28%;
  left: 65%;
  width: 470px;
  height: 364px;
  padding: 20px;
  z-index: 1000;
  overflow-y: auto;
}

@media only screen and (max-width:1570px) {
  .news-detail-popup {
    top: 30%;
    left: 15%;
    width: 890px;
    height: 500px;
  }
}


@media only screen and (max-width: 1066px) {
  .news-detail-popup {
    top: 15%;
    left: 15%;
    width: 500px;
    height: 700px;
  }
}

@media only screen and (max-width:720px) {
  .news-detail-popup {
    top: 25%;
    left: 15%;
    width: 300px;
    height: 500px;
  }
}


.close-btn {
  position: absolute;
  top: 0px;
  right: 0px;
  cursor: pointer;
  height: 24px;
  width: 24px;
  background-image: url('../assets/Image/SponsorImage/icon_xbox-x.svg');
}

@media only screen and (max-width: 1870px) {
  .close-btn {
    background-image: url('../assets/Image/SponsorImage/octicon_x-16.svg');
    top: 36px;
    right: 51px;
    z-index: 2;
    width: 36px;
    height: 36px;
  }
}

@media only screen and (max-width:720px) {
  .close-btn {
    width: 30px;
    height: 30px;
    margin: -10px -2px;
  }

}

.news-detail-content {
  letter-spacing: 2px;
  font-size: 24px;
  line-height: 2;
  word-break: break-all;
}

@media only screen and (max-width: 1570px) {
  .news-detail-content {
    width: 100%;
    height: 100%;
    padding: 50px;
    border-radius: 40px;
    overflow: auto;
    box-shadow: 0px 4px 6px 0px rgba(82, 160, 56, 0.15);
    border-radius: 40px;
    border: 1px white solid;
    backdrop-filter: blur(17.5px);
  }


  @media only screen and (max-width:720px) {
    .news-detail-content {
      font-size: 14px;
      letter-spacing: 6.3px;
      padding: 48px 25px;
      line-height: 16.625px;
    }
  }
}
</style>