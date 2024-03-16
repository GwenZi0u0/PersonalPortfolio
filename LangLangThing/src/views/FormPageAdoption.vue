<script>
import AnimalForm from '@/components/AnimalForm.vue';
import FooterPage from '@/components/FooterPage.vue';
import NavPage from '@/components/NavPage.vue';

export default {
    components: {
        NavPage,
        FooterPage,
        AnimalForm,
    },
    data() {
        return {
            myRouter:"/adoptionpetinformation/EAAAG1121120003"
        }
    },
    mounted() {
        // 刪除段落 "發現浪浪之時間和地點 *" >>.time-place
        const elremove = this.$refs.animalFrame;
        const timePlaceElement = elremove.$el.querySelector(".time-place");
        if (timePlaceElement) {
            timePlaceElement.remove();
        }
        // // 刪除彈跳視窗小字
        // const popupRemove = this.$refs.dataSubmitted;
        // const smalltext = popupRemove.$el.querySelector(".small");
        // console.log(popupRemove.$el);
        // if (smalltext) {
        //     smalltext.remove();
        // }
    },
}
</script>
<template>
    <NavPage />
    <main>
    <AnimalForm ref="animalFrame" pagename="認養中心" title="填寫送養資料" inputTitleColor="#52A038" 
            uploadPicBorder="#52A038"
                svgColor="#52A038" 
                uploadPicColor="#52A038" 
                inputTextBorder="2px solid #52A038" submitBgColor="#52A038"
                popStyle="#52A038" 
                confirmpopStyle="#52A038" 
                successSvgColor="#52A038"
                successtextcolor="#52A038" 
                successBtnbgColor="#52A038" 
                :targetRoute="myRouter" />
    </main>
    <FooterPage />
</template>
<style scoped>
</style>