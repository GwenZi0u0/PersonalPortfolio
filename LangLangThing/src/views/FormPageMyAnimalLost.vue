<script>
import NavPage from '@/components/NavPage.vue';
import AnimalForm from '@/components/AnimalForm.vue';
import FooterPage from '@/components/FooterPage.vue';


export default {
    data() {
        return {
            yourDynamicRouteVariable: "/myanimallostinformation/VAAAG113010605",
        }
    },
    components: {
    NavPage,
    AnimalForm,
    FooterPage
},
    mounted() {
        // 刪除不需要的radio選項「未知」
        const elremove = this.$refs.animalFrame;
        const brownUnnecessaryElements = elremove.$el.querySelectorAll(".brown-unnecessary");
        // 使用 forEach 迭代 NodeList 並刪除每個元素
        brownUnnecessaryElements.forEach(element => {
            element.remove();
        });

        // 恢復滾軸功能（導入這頁之前，popup有隱藏滾軸的功能）
        document.body.style.overflow = 'auto';
    },
}
</script>

<template>
    <NavPage />
    <main>
        <div>
            <AnimalForm ref="animalFrame" pagename="失散協尋" title="我遺失了動物" inputTitleColor="#B68337" uploadPicBorder="#B68337"
                svgColor="#B68337" uploadPicColor="#B68337" inputTextBorder="2px solid #B68337" submitBgColor="#B68337"
                popStyle="#B68337" confirmpopStyle="#B68337" successSvgColor="#B68337" successtextcolor="#B68337"
                successBtnbgColor="#B68337"       :targetRoute="yourDynamicRouteVariable"
                ></AnimalForm>
        </div>
    </main>
    <FooterPage />
</template>


<style>
</style>