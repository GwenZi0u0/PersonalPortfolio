<script>
import IconCard from './IconCard.vue';
import IconChangeButton from '../IconChangeButton.vue'
import LostPopupBrown from './LostPopupBrown.vue';
import IconPaperAirplane from '../IconPaperAirplane.vue';

export default {
    components: {
        IconCard, IconChangeButton, LostPopupBrown, IconPaperAirplane
    },
    data() {
        return {
            show: false,
            // Button 上的文字
            AnimalsData: Array,
        }
    },
    mounted() {
        // console.log(this.AnimalsData);
    },
    methods: {
        showpopup() {
            this.show = true;
        },
        close() {
            this.show = false;
        },
    },
}
</script>

<template>
    <div class="all-container">
        <div class="btn">
            <IconChangeButton @click="showpopup" text="協尋通報" textColor="var(--gray-color)"
                bgColor="var(--orangeyellow-color)" w="180px" h="64px">
            </IconChangeButton>
            <a href="https://reurl.cc/lgNWgE">
                <IconPaperAirplane />
                搜尋附近動物醫院
            </a>
            <!-- 顯示的彈跳視窗 -->
            <LostPopupBrown :is-show="show" @close="close"></LostPopupBrown>
        </div>
        <div class="list-container">
            <div class="title">遺失動物列表</div>
            <div class="cards">
                <IconCard class="card" v-for="animal in AnimalsData" :AnimalData="animal" cardBorderColor="var(--B68337)"
                    checkBoxColor="var(--B68337)" />
            </div>
        </div>
    </div>
    <LostPopup />
</template>
<style scoped>
.all-container {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    font-size: 24px;
    font-family: 'ABeeZee';
}

.btn {
    width: 840px;
    height: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

a {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 700;
    color: var(--gray-color);
}

a:hover {
    background-color: transparent;
}

.list-container {
    display: flex;
    flex-direction: column;
    width: 840px;
    height: 907px;
}

.title {
    letter-spacing: 6px;
    text-align: center;
    padding: 14px 0;
    color: var(--white-color);
    background-color: var(--B68337);
    border-radius: 40px 40px 0 0;
}

.cards::-webkit-scrollbar {
    display: none;
}

.cards {
    height: 53rem;
    overflow: scroll;
    border: 2px solid var(--B68337);
    border-radius: 0 0 30px 30px;
    padding: 30px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    background-color: var(--white-color);
}
</style>