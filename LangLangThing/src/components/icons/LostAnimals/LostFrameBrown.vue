<script>
import NoHoverButton from '@/components/NoHoverButton.vue';
import IconChangeButton from '../IconChangeButton.vue';
import IconCard from './IconCard.vue';
import IconPaperAirplane from '../IconPaperAirplane.vue';
import LostPopupBrown from './LostPopupBrown.vue'

export default {
    components: {
        NoHoverButton, IconChangeButton, IconCard, IconPaperAirplane, LostPopupBrown
    },
    props: {
        AnimalsData: Array,
    },
    data() {
        return {
            show: false,  //彈跳視窗【協尋通報】
            formData: {
                species: '', // 動物類型
                location: "所有縣市",// 地區選擇
                bodyshape: '', // 體型選擇
                gender: '', // 性別選擇
                colors: '', // 花色選擇
                age: '', // 年齡選擇
                neutered: '', // 是否已絕育
            },
        };
    },
    mounted() {
        // console.log(this.AnimalsData);
    },
    methods: {
        clearOptions() {
            // 重置所有選項
            this.formData.location = "所有縣市";
            this.formData.species = "";
            this.formData.bodyshape = "";
            this.formData.gender = "";
            this.formData.colors = "";
            this.formData.age = "";
            this.formData.neutered = "";
        },
        search() {
            // 搜尋相關
            this.$emit('search', this.formData);
            // 這裡添加搜尋邏輯，發送API請求
        },
        // 彈跳視窗的功能
        showpopup() {
            this.show = true;
            document.body.style.overflow = 'hidden';
        },
        close() {
            this.show = false;
            // 視窗離開時scrollBar打開
            document.body.style.overflow = 'auto';
        },
    }
}
</script>

<template>
    <div class="big-container">
        <div class="frame-container">
            <div class="notice">
                <span>利用篩選器查看毛小孩是否被刊登在此平台上</span>
            </div>
            <form>
                <div class="form-group">
                    <div class="select">
                        <label for="location">地區選擇 *</label>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="9" viewBox="0 0 14 9" fill="none">
                            <path d="M12 2L7 7L2 2" stroke="#B68337" stroke-width="2.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                        <select v-model="formData.location" class="customSelect">
                            <option value="所有縣市">所有縣市</option>
                            <option value="臺北市">臺北市</option>
                            <option value="基隆市">基隆市</option>
                            <option value="新北市">新北市</option>
                            <option value="桃園縣">桃園縣</option>
                            <option value="新竹市">新竹市</option>
                            <option value="新竹縣">新竹縣</option>
                            <option value="苗栗縣">苗栗縣</option>
                            <option value="臺中市">臺中市</option>
                            <option value="彰化縣">彰化縣</option>
                            <option value="南投縣">南投縣</option>
                            <option value="雲林縣">雲林縣</option>
                            <option value="嘉義市">嘉義市</option>
                            <option value="嘉義縣">嘉義縣</option>
                            <option value="台南市">台南市</option>
                            <option value="高雄市">高雄市</option>
                            <option value="屏東縣">屏東縣</option>
                            <option value="台東縣">台東縣</option>
                            <option value="花蓮縣">花蓮縣</option>
                            <option value="宜蘭縣">宜蘭縣</option>
                            <option value="澎湖縣">澎湖縣</option>
                            <option value="金門縣">金門縣</option>
                            <option value="連江縣">連江縣</option>
                        </select>
                    </div>
                </div>
                <!-- 動物類別 -->
                <div class="form-group">
                    <label for="species">動物類別 *</label>
                    <input type="radio" id="dog" value="犬" v-model="formData.species" name="animalType" />
                    <label for="dog">犬</label>

                    <input type="radio" id="cat" value="貓" v-model="formData.species" name="animalType" />
                    <label for="cat">貓</label>

                    <input type="radio" id="otherType" value="其他" v-model="formData.species" name="animalType" />
                    <label for="otherType">其他</label>
                </div>
                <!-- 體型選擇 -->
                <div class="form-group">
                    <label for="body-shape">體型選擇 *</label>
                    <input type="radio" id="large" value="大" name="bodyShape" />
                    <label for="large">大型</label>

                    <input type="radio" id="medium" value="中" v-model="formData.bodyshape" name="bodyShape" />
                    <label for="medium">中型</label>

                    <input type="radio" id="small" value="小" v-model="formData.bodyshape" name="bodyShape" />
                    <label for="small">小型</label>
                </div>
                <!-- 性別選擇 -->
                <div class="form-group">
                    <label for="gender">性別選擇 *</label>
                    <input type="radio" id="male" value="公" v-model="formData.gender" name="gender">
                    <label for="male">公</label>

                    <input type="radio" id="female" value="母" v-model="formData.gender" name="gender">
                    <label for="female">母</label>
                </div>
                <!-- 花色選擇 -->
                <div class="form-group">
                    <label for="colors">花色選擇 *</label>
                    <input type="radio" id="solidColor" value="純色" v-model="formData.colors" name="colorType" />
                    <label for="solidColor">純色</label>

                    <input type="radio" id="patternedColor" value="花色" v-model="formData.colors" name="colorType" />
                    <label for="patternedColor">花色</label>
                </div>
                <!-- 年齡選擇 -->
                <div class="form-group">
                    <label for="age">年齡選擇 *</label>
                    <input type="radio" id="youngAge" value="幼年" v-model="formData.age" name="ageType" />
                    <label for="youngAge">幼年</label>

                    <input type="radio" id="adultAge" value="成年" v-model="formData.age" name="ageType" />
                    <label for="adultAge">成年</label>
                </div>
                <!-- 是否已絕育 -->
                <div class="form-group">
                    <label for="neutered">是否已絕育 *</label>
                    <input type="radio" id="neuteredYes" value="已絕育" v-model="formData.neutered" name="neuteredStatus" />
                    <label for="neuteredYes">已絕育</label>

                    <input type="radio" id="neuteredNo" value="未結紮" v-model="formData.neutered" name="neuteredStatus" />
                    <label for="neuteredNo">未結紮</label>

                </div>
                <div class="btn-area">
                    <NoHoverButton @click.prevent="clearOptions" btnbgColor="var(--gray-color)" text="清除重填"></NoHoverButton>
                    <IconChangeButton @click.prevent="search" bgColor="var(--B68337)" text="搜尋"
                        textColor="var(--white-color)">
                    </IconChangeButton>
                </div>
            </form>
        </div>
        <div class="list-container">
            <div class="btn">
                <IconChangeButton @click="showpopup" text="協尋通報" textColor="var(--gray-color)"
                    bgColor="var(--orangeyellow-color)" w="180px" h="64px" class="notify-btn">
                </IconChangeButton>
                <IconChangeButton @click="showpopup" text="協尋通報" textColor="var(--gray-color)"
                    bgColor="var(--orangeyellow-color)" w="96px" h="41px" class="notify-btn-2">
                </IconChangeButton>
                <a href="https://reurl.cc/lgNWgE">
                    <IconPaperAirplane class="airplane"/>
                    搜尋附近動物醫院
                </a>
                <!-- 顯示的彈跳視窗 -->
                <LostPopupBrown :is-show="show" @close="close"></LostPopupBrown>
            </div>
            <div class="list-content">
                <div class="title">撿到動物列表</div>
                <div class="cards">
                    <IconCard class="card" v-for="animal in AnimalsData" :AnimalData="animal"
                        cardBorderColor="var(--B68337)" checkBoxColor="var(--B68337)" myurl="myanimallostinformation" />
                </div>
            </div>
        </div>
        <LostPopup />
    </div>
</template>

<style scoped>
.big-container {
    height: 996px;
    display: flex;
}

/* 1280版-提早變版 */
@media (max-width: 1770px) {
    .big-container {
        height: 100%;
        flex-direction: column;
        align-items: center;
        gap: 125px;
    }
}

@media (max-width: 768px) {
    .big-container {
        width: 648px;
        gap: 84px;
    }
}

@media (max-width: 720px) {
    .big-container {
        width: 367px;
        gap: 37px;
    }
}

/* 左邊表格 */
.frame-container {
    width: 700px;
    margin-right: 48px;
}

/* 1280版-提早變版 */
@media (max-width: 1770px) {
    .frame-container {
        width: 100%;
        margin-right: 0;
    }
}

.notice {
    height: 80px;
    text-align: center;
    line-height: 80px;
    border: 2px solid var(--B68337);
    background-color: var(--white-color);
    color: var(--B68337);
}

@media (max-width: 720px) {
    .notice {
        height: 54px;
        line-height: normal;
        padding: 5px 35px;
        font-size: 14px;
        letter-spacing: 3.5px;
    }
}

/*根據顏色區分*/
form {
    height: 916px;
    display: flex;
    flex-direction: column;
    background-color: var(--white-color);
    border: 2px solid var(--B68337);
    border-top: 0;
    padding: 30px 34px;
}

/* 1280版-提早變版 */
@media (max-width: 1770px) {
    form {
        width: 100%;
        padding: 46px 180px;
    }
}

@media (max-width: 768px) {
    form {
        width: 100%;
        padding: 40px 21px;
        background-color: transparent;

    }
}

/*每個欄位的標題*/
label[for="species"],
label[for="location"],
label[for="body-shape"],
label[for="gender"],
label[for="colors"],
label[for="age"],
label[for="neutered"],

.time-place-title {
    color: var(--B68337);
}

@media (max-width: 720px) {
    label[for="species"],
    label[for="location"],
    label[for="body-shape"],
    label[for="gender"],
    label[for="colors"],
    label[for="age"],
    label[for="neutered"],

    .time-place-title {
        width: 300px;
        margin-bottom: 17px;
    }
}

.select {
    display: flex;
    flex-direction: column;
}

.form-group {
    margin-bottom: 56px;
}

.form-group input {
    margin: 0 20px 0 35px;
}

/* 所有 radio 按鈕 */
.form-group input[type="radio"] {
    transform: scale(2);
}

/* 讓選項按鈕和文字對齊 */
.form-group label {
    vertical-align: middle;
    font-size: 24px;
}

@media (max-width: 768px) {
    .form-group label {
        font-size: 22px;
    }
}

@media (max-width: 720px) {
    .form-group {
        margin: 15px 0;
        display: flex;
        flex-wrap: wrap;
    }

    .form-group input {
        margin: 0px 10px 0 15px;
    }

    .form-group input[type="radio"] {
        transform: scale(1);
    }

    .form-group label {
        font-size: 16px;
        letter-spacing: 4px;
    }
}

/* 下拉選單箭頭設定 */
.customSelect {
    -moz-appearance: none;
    appearance: none;
    font-size: 20px;
    width: 620px;
    border: 2px solid var(--B68337);
    border-radius: 4px;
    outline: none;
    margin-top: 1.5rem;
    padding: 20px;
    z-index: 1;
    background-color: transparent;
    cursor: pointer;
}

/* 下拉選單的小v圖 */
form svg {
    position: absolute;
    top: 25%;
    left: 39%;
}

/* 1280版-提早變版 */
@media (max-width: 1770px) {
    form svg {
        top: 8.8%;
        left: 83%;
    }
}

@media (max-width: 768px) {
    .customSelect {
        width: 535px;
        padding: 20px;
    }

    form svg {
        top: 11.2%;
        left: 78%;
    }
}

@media (max-width: 720px) {
    .customSelect {
        width: 280px;
        margin-top: 0;
    }

    form svg {
        top: 10.5%;
        left: 75%;
    }
}

/*按鈕*/
.btn-area {
    display: flex;
    justify-content: center;
    gap: 55px;
}

@media (max-width: 720px) {
    .btn-area {
        display: flex;
        justify-content: center;
        gap: 25px;
        margin-top: 70px;
        transform: scale(0.8)
    }
}

/* --------右邊動物列表-------------------- */
.list-container {
    width: 840px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    font-size: 24px;
    font-family: 'ABeeZee';
}

/* 1280版-提早變版 */
@media (max-width: 1770px) {
    .list-container {
        flex-direction: column-reverse;
        gap: 37px;
    }
}

@media (max-width: 768px) {
    .list-container {
        width: 100%;
    }
}

@media (max-width: 720px) {
    .list-container {
        font-size: 16px;
        gap: 0px;
    }
}

.btn {
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

.notify-btn-2 {
    display: none;
}

@media (max-width: 720px) {
    .btn {
        font-size: 16px;
        padding: 0 20px;
        height: 71px;
    }

    .notify-btn {
        display: none;
    }

    .notify-btn-2 {
        display: flex;
        font-size: 15px;
        letter-spacing: 3.75px;
    }

    .airplane {
        width: 20px;
        height: 20px;
    }
}

.list-content {
    display: flex;
    flex-direction: column;
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
    height: 851px;
    overflow: hidden;
    overflow-y: scroll;
    border: 2px solid var(--B68337);
    border-radius: 0 0 30px 30px;
    padding: 30px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    background-color: var(--white-color);
}</style>