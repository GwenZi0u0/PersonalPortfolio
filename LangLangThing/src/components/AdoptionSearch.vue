<script>
import NoHoverButton from '@/components/NoHoverButton.vue';
import IconChangeButton from '@/components/icons/IconChangeButton.vue';

export default {
    components: {
        NoHoverButton, IconChangeButton
    },
    props: {
        frameBorder: String, //外框色
        noticeborder: String, //notice外框線色
        textColor: String, //文字色
    },
    data() {
        return {
            formData: {
                species: '', // 動物類別
                location: "所有縣市",// 地區選擇
                bodyshape: '', // 體型選擇
                gender: '', // 性別選擇
                colors: '', // 花色選擇
                age: '', // 年齡選擇
                neutered: '', // 是否已絕育
            },
        };
    },
    methods: {
        clearOptions() {
            // 重置所有選項
            this.formData.location = "所有縣市";
            this.formData.species = "";
            this.formData.bodyShape = "";
            this.formData.gender = "";
            this.formData.colors = "";
            this.formData.age = "";
            this.formData.neutered = "";
        },
        search() {
            // 搜尋相關
            this.$emit('search', this.formData);
            // console.log("Performing search with the following data:", this.formData);
            // 這裡添加搜尋邏輯，發送API請求
        },
    },
};
</script>

<template>
    <div class="container">
        <form :style="{ borderColor: frameBorder }">
            <div class="form-group">
                <div class="group select">
                    <label for="location" :style="{ color: textColor }">地區選擇 *</label>
                    <select class="input customSelect" v-model="formData.location">
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
                <label for="species" :style="{ color: textColor }">動物類別 *</label>
                <div class="groupInput">
                    <div class="group">
                        <input type="radio" id="dog" value="犬" v-model="formData.species" name="animalType" />
                        <label for="dog">犬</label>
                    </div>
                    <div class="group">
                        <input type="radio" id="cat" value="貓" v-model="formData.species" name="animalType" />
                        <label for="cat">貓</label>
                    </div>
                    <div class="group">
                        <input type="radio" id="otherType" value="其他" v-model="formData.species" name="animalType" />
                        <label for="otherType">其他</label>
                    </div>
                </div>

            </div>
            <!-- 體型選擇 -->
            <div class="form-group">
                <label for="body-shape" :style="{ color: textColor }">體型選擇 *</label>
                <div class="groupInput">
                    <div class="group">
                        <input type="radio" id="large" value="大" v-model="formData.bodyshape" name="bodyShape" />
                        <label for="large">大型</label>
                    </div>
                    <div class="group">
                        <input type="radio" id="medium" value="中" v-model="formData.bodyshape" name="bodyShape" />
                        <label for="medium">中型</label>
                    </div>
                    <div class="group">
                        <input type="radio" id="small" value="小" v-model="formData.bodyshape" name="bodyShape" />
                        <label for="small">小型</label>
                    </div>
                </div>
            </div>
            <!-- 性別選擇 -->
            <div class="form-group">
                <label for="gender" :style="{ color: textColor }">性別選擇 *</label>
                <div class="groupInput">
                    <div class="group">
                        <input type="radio" id="male" value="公" v-model="formData.gender" name="gender">
                        <label for="male">公</label>
                    </div>
                    <div class="group">
                        <input type="radio" id="female" value="母" v-model="formData.gender" name="gender">
                        <label for="female">母</label>
                    </div>
                    <div class="group">
                        <input type="radio" id="gender-unknown" value="both" v-model="formData.gender" name="gender">
                        <label for="gender-unknown">皆可</label>
                    </div>
                </div>
            </div>
            <!-- 花色選擇 -->
            <div class="form-group">
                <label for="colors" :style="{ color: textColor }">花色選擇 *</label>
                <div class="groupInput">
                    <div class="group">
                        <input type="radio" id="solidColor" value="純色" v-model="formData.colors" name="colorType" />
                        <label for="solidColor">純色</label>
                    </div>
                    <div class="group">
                        <input type="radio" id="patternedColor" value="花色" v-model="formData.colors" name="colorType" />
                        <label for="patternedColor">花色</label>
                    </div>
                    <div class="group">
                        <input type="radio" id="undefinedColor" value="both" v-model="formData.colors" name="colorType" />
                        <label for="undefinedColor">皆可</label>
                    </div>
                </div>
            </div>
            <!-- 年齡選擇 -->
            <div class="form-group">
                <label for="age" :style="{ color: textColor }">年齡選擇 *</label>
                <div class="groupInput">
                    <div class="group">
                        <input type="radio" id="youngAge" value="幼年" v-model="formData.age" name="ageType" />
                        <label for="youngAge">幼年</label>
                    </div>
                    <div class="group">
                        <input type="radio" id="adultAge" value="成年" v-model="formData.age" name="ageType" />
                        <label for="adultAge">成年</label>
                    </div>
                    <div class="group">
                        <input type="radio" id="unknownAge" value="both" v-model="formData.age" name="ageType" />
                        <label for="unknownAge">皆可</label>
                    </div>
                </div>
            </div>
            <!-- 是否已絕育 -->
            <div class="form-group">
                <label for="neutered" :style="{ color: textColor }">是否已絕育 *</label>
                <div class="groupInput">
                    <div class="group">
                        <input type="radio" id="neuteredYes" value="已絕育" v-model="formData.neutered"
                            name="neuteredStatus" />
                        <label for="neuteredYes">已絕育</label>
                    </div>
                    <div class="group">
                        <input type="radio" id="neuteredNo" value="未絕育" v-model="formData.neutered" name="neuteredStatus" />
                        <label for="neuteredNo">未結紮</label>
                    </div>
                    <div class="group">
                        <input type="radio" id="neuteredUnknown" value="both" v-model="formData.neutered"
                            name="neuteredStatus" />
                        <label for="neuteredUnknown">皆可</label>
                    </div>
                </div>
            </div>
            <!-- 按鈕 -->
            <div class="btn-area">
                <NoHoverButton @click.prevent="clearOptions" btnbgColor="var(--gray-color)" text="清除重填"></NoHoverButton>
                <IconChangeButton @click.prevent="search" text="搜尋" textColor="var(--white-color)"
                    bgColor="var(--primary-color)" w="125px" h="54px">
                </IconChangeButton>
            </div>
            <div class="btn">
                <button class="downbtn clearbtn" @click.prevent="clearOptions">清除重填</button>
                <button class="downbtn" @click.prevent="search">搜尋</button>
            </div>

        </form>
    </div>
</template>

<style scoped>
/* 下拉式選單 */
.input {
    font-size: 1.25rem;
    width: 620px;
    height: 56px;
    border: 2px solid var(--primary-color);
    background: var(--white-color);
    outline: none;
    margin-top: 1.5rem;
}

/* 下拉選單箭頭設定 */
.customSelect {
    -webkit-animation: none;
    -moz-appearance: none;
    appearance: none;
    background-image: url(../assets/Image/AboutPage2Image/select-vector.svg);
    background-position: 95% center;
    background-repeat: no-repeat;
    padding-right: 1rem;
}

.container {
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    font-size: 1.5rem;
    letter-spacing: 6px;
    width: 700px;
    height: 906px;
    font-weight: 400;
    background-color: var(--white-color);
    border: 2px solid var(--primary-color);

}



/* 表單整區 根據顏色區分*/
form {
    display: flex;
    flex-direction: column;
    gap: 64px;
    border-top: 0;
    padding: 50px 40px;
    background: var(--white-color);
    border-top: 1px solid var(--primary-color);
}


/*每個欄位的標題*/
.photo-title,
label[for="species"],
label[for="location"],
label[for="body-shape"],
label[for="gender"],
label[for="colors"],
label[for="age"],
label[for="neutered"],

/* 表單 */
.form-group input {
    margin: 0 1.25rem;
}

.form-group {
    display: flex;
    flex-direction: row;
}

.groupInput {
    display: flex;
    flex-direction: row;
}

.group {
    display: flex;
    flex-direction: row;
    gap: 10px;
}

.select {
    display: flex;
    flex-direction: column;
    gap: 0;
}

/* 所有 radio 按鈕 */
.form-group input[type="radio"] {
    transform: scale(1.5);
}

/* 讓選項按鈕和文字對齊 */
.form-group label {
    vertical-align: middle;
    margin: 0;
    font-size: 1.25rem;
}

/*按鈕*/
.btn-area {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 27px;
    font-size: 20px;
    letter-spacing: 5px;
}

.btn {
    display: none;
    visibility: visible;
}

@media screen and (max-width:720px) {
    .container {
        font-size: 1rem;
        width: 350px;
        height: auto;
        justify-content: flex-start;
        letter-spacing: 2px;
        border: 0;
    }

    .input {
        width: 280px;
        margin-top: 20px;
        font-size: 1rem;
        border: 1px solid var(--primary-color);
    }

    /* 表單整區 根據顏色區分*/
    form {
        gap: 20px;
        padding: 40px 20px;
        border: 1px solid var(--primary-color);
    }

    /* 表單 */
    .form-group {
        flex-direction: column;
        font-size: 1rem;
    }

    .group {
        gap: 0;
    }

    .form-group label {
        font-size: 1rem;
    }

    /* 所有 radio 按鈕 */
    .form-group input[type="radio"] {
        transform: scale(1);
    }

    /* 讓選項按鈕和文字對齊 */
    .form-group label {
        vertical-align: middle;
        font-size: 1rem;
    }

    /*按鈕*/
    .btn-area {
        display: none;
        visibility: hidden;
    }

    .btn {
        display: flex;
        visibility: visible;
        align-items: center;
        justify-content: center;
        font-size: 0.8rem;
        letter-spacing: 3.75px;
        gap: 25px;
        padding-top: 20px;
    }

    .downbtn {
        width: 102px;
        height: 41px;
        background-color: #52A038;
    }

    .clearbtn {
        background-color: #626262;
    }

    /* .btn-area {
        font-size: 1rem;
        letter-spacing: 3.75px;
        gap: 25px;
    } */

}

@media screen and (max-width:1280px) and (min-width:769px) {
    .input {
        width: 535px;
    }

    .container {
        display: flex;
        align-items: center;
        width: 990px;
        background-color: var(--white-color);
        border: 2px solid var(--primary-color);
    }

    form {
        border: none;
        padding: 47px 185px;
    }
}

@media screen and (max-width:768px) and (min-width:720px) {
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 650px;
        border: 2px solid var(--primary-color);
    }

    form {
        border: none;
        padding: 31px 0 0 29px;
    }

    .input {
        width: 535px;
    }
}
</style>