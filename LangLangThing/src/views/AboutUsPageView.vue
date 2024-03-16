<!-- 第二頁 關於浪浪的事 -->
<script>
import AboutUsArea from '@/components/AboutUsArea.vue';
import ContactUsArea from '@/components/ContactUsArea.vue';
import FooterPage from '@/components/FooterPage.vue';
import NavPage from '@/components/NavPage.vue';

export default {
  components: {
    AboutUsArea,
    ContactUsArea,
    NavPage,
    FooterPage
  },
  data() {
    return {
      confirm: "確認",
      showGreenButton: false,
      isPopUpVisible: false,
      isShow: false,
      now: false,
    }
  },
};
</script>

<template>
  <NavPage></NavPage>
  <main>
    <AboutUsArea></AboutUsArea>
    <ContactUsArea></ContactUsArea>
  </main>
  <FooterPage />
</template>

<style scoped>
main {
  width: 100vw;
  max-width: 100%;
  padding-bottom: 181px;
}
</style>
