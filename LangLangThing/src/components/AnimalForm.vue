<script>
import NoHoverButton from './NoHoverButton.vue';
import IconChangeButton from './icons/IconChangeButton.vue';


export default {
    components: { NoHoverButton, IconChangeButton },
    props: {
        pagename: String,
        title: String, //此表單的名稱
        inputTitleColor: String, //每個欄位的標題
        inputTextBorder: String, //輸入欄文字
        uploadPicBorder: String, //上傳照片的border
        svgColor: String, // 上傳照片的 SVG 顏色
        uploadPicColor: String, //上傳照片的文字
        submitBgColor: String, //送出按鈕
        popStyle: String, //彈跳視窗
        // ----以下為點擊確認按鈕後 彈跳視窗自定義----
        confirmpopStyle: String, //確認彈跳視窗
        successSvgColor: String,//svg顏色
        successtextcolor: String, //資料成功送出文字顏色
        successBtnbgColor: String,//前往瀏覽頁面按鈕顏色 
        targetRoute: String,//goPage按鈕導入下一頁指令
    },
    data() {
        return {
            formData: {
                name: '',
                species: '',
                chipid: '',
                bodyshape: '',
                gender: '',
                colors: '',
                age: '',
                neutered: '',
                time: '',
                place: '',
                description: '',
                phone: '',
                other: '',
            },
            mysubmit: "送出",
            w: "125px",
            h: '54px',
            textColor: "#fff",
            submitbgColor: "#52A038",
            confirmClear: false, // 用於確認是否清空的標誌
            //清除重填按鈕 自定義樣式
            myinnertext: "清除重填",
            mybtnbgColor: "#626262",
            //重填的彈跳視窗框內按鈕 自定義樣式
            cancelbtnbg: '#626262',
            //點擊送出按鈕後，控制彈跳視窗是否顯示
            isSubmit: false,
            //送出後的彈跳視窗框內按鈕 自定義樣式 
            goPagebtnbg: '#52A038',
            show: false, //控制dataSubmitted組件的顯示
            uploadedImageURL: null,//動態生成上傳照片
            preview: null,
            image: null,
        };
    },
    methods: {
        scrollToTop() {
            window.scrollTo({
                top: 0,
                // behavior行動= 平滑
                behavior: 'smooth',
            });
        },
        //點擊送出按鈕
        showSubmitBtn() {
            if (this.formData.species == '' || this.formData.bodyshape == '' || this.formData.gender == '' || this.formData.colors == '' || this.formData.age == '' || this.formData.neutered == '' || this.formData.time == '' || this.formData.place == '' || this.formData.phone == '') {
                alert('請確認*必填欄位已填寫完成');
                return;
            }
            document.body.style.overflow = 'hidden';    //隱藏滾軸
            this.isSubmit = true;
            // 讓scrollBar在router後平滑的回至頂部
            this.scrollToTop();
        },
        goPage() {
            if (this.isSubmit) {
                this.$router.push(this.targetRoute);
            }
            this.isSubmit = false;
            // 視窗離開時scrollBar打開
            document.body.style.overflow = 'auto';
        },
        //點擊清除重填按鈕
        showConfirmationBtn() {
            // 顯示確認框
            this.confirmClear = true;
            document.body.style.overflow = 'hidden';    //隱藏滾軸
        },
        cancelConfirmation() {
            // 關閉確認框，不清空表單
            this.confirmClear = false;
            // 視窗離開時scrollBar打開
            document.body.style.overflow = 'auto';
        },
        clearFormBtn() {
            // 如果 confirmClear 是 true，則清空表單
            if (this.confirmClear) {
                this.formData = {
                    name: '',
                    species: '',
                    chipid: '',
                    bodyshape: '',
                    gender: '',
                    colors: '',
                    age: '',
                    neutered: '',
                    time: '',
                    place: '',
                    description: '',
                    phone: '',
                    other: '',
                };
                // 重置 confirmClear 為 false
                this.confirmClear = false;
                // 視窗離開時scrollBar打開
                document.body.style.overflow = 'auto';
            }
        },
        handleFileUpload(event) {
            var input = event.target;
            if (input.files) {
                var reader = new FileReader();
                reader.onload = (e) => {
                    this.preview = e.target.result;
                }
                this.image = input.files[0];
                reader.readAsDataURL(input.files[0]);

            }
            // 使用 $nextTick 確保 Vue 更新 DOM
            this.$nextTick(() => {
                // 移除 preview-pic-block
                const previewPicBlock = document.querySelector('.preview-pic-block');
                if (previewPicBlock) {
                    previewPicBlock.parentNode.removeChild(previewPicBlock);
                }
            })
        },
    }


}
</script>

<template>
    <main>
        <div class="header-container">
            <span class="header-title">{{ pagename }}</span>
            <span class="header-text">
                <span class="arrow-icon"> > </span>
                {{ title }} </span>
        </div>
        <form>
            <div class="form-group">
                <div class="custom-file-upload">
                    <span class="photo-title" :style="{ color: inputTitleColor }">照片 *</span>
                    <label for="photo" :style="{ borderColor: uploadPicBorder }">
                        <!-- 上傳照片前面的svg -->
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="entypo:image" clip-path="url(#clip0_847_5412)">
                                <path id="Vector" fill-rule="evenodd" clip-rule="evenodd"
                                    d="M26.6 2.7998H1.4C1.0287 2.7998 0.672601 2.9473 0.410051 3.20986C0.1475 3.47241 0 3.8285 0 4.1998L0 23.7998C0 24.1711 0.1475 24.5272 0.410051 24.7898C0.672601 25.0523 1.0287 25.1998 1.4 25.1998H26.6C26.9713 25.1998 27.3274 25.0523 27.59 24.7898C27.8525 24.5272 28 24.1711 28 23.7998V4.1998C28 3.8285 27.8525 3.47241 27.59 3.20986C27.3274 2.9473 26.9713 2.7998 26.6 2.7998ZM25.2 22.3998H2.8V5.5998H25.2V22.3998ZM20.041 15.2276L15.5176 17.4746L10.2396 8.9332L5.6 19.5998H22.4L20.041 15.2276ZM18.55 12.5998C19.0141 12.5998 19.4592 12.4154 19.7874 12.0872C20.1156 11.7591 20.3 11.3139 20.3 10.8498C20.3 10.3857 20.1156 9.94056 19.7874 9.61237C19.4592 9.28418 19.0141 9.0998 18.55 9.0998C18.0859 9.0998 17.6408 9.28418 17.3126 9.61237C16.9844 9.94056 16.8 10.3857 16.8 10.8498C16.8 11.3139 16.9844 11.7591 17.3126 12.0872C17.6408 12.4154 18.0859 12.5998 18.55 12.5998Z"
                                    :fill="svgColor" />
                            </g>
                            <defs>
                                <clipPath id="clip0_847_5412">
                                    <rect width="28" height="28" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <span :style="{ color: uploadPicColor }">上傳照片</span></label>
                    <!-- 將[傳送檔案]的樣式opacity -->
                    <input type="file" id="photo" accept="image/*" @change="handleFileUpload" />

                    <div class="preview-pic-block">預覽照片</div>

                    <div v-if="preview" class="preview-pic">
                        <img :src="preview" />
                    </div>

                </div>
            </div>

            <div class="form-group">
                <label for="chip-id" :style="{ color: inputTitleColor }">晶片號碼</label>
                <input type="text" id="chip-id" v-model="formData.chipid" :style="{ border: inputTextBorder }" />
            </div>

            <div class="form-group">
                <label for="species" :style="{ color: inputTitleColor }">動物類別 *</label>
                <input type="radio" id="dog" value="犬" v-model="formData.species" name="animalType" />
                <label for="dog">犬</label>

                <input type="radio" id="cat" value="貓" v-model="formData.species" name="animalType" />
                <label for="cat">貓</label>

                <input type="radio" id="otherType" value="其他" v-model="formData.species" name="animalType" />
                <label for="otherType">其他</label>

            </div>

            <div class="form-group">
                <label for="body-shape" :style="{ color: inputTitleColor }">體型 *</label>
                <input type="radio" id="large" value="大型" v-model="formData.bodyshape" name="bodyShape" />
                <label for="large">大型</label>

                <input type="radio" id="medium" value="中型" v-model="formData.bodyshape" name="bodyShape" />
                <label for="medium">中型</label>

                <input type="radio" id="small" value="小型" v-model="formData.bodyshape" name="bodyShape" />
                <label for="small">小型</label>
            </div>

            <div class="form-group">
                <label for="gender" :style="{ color: inputTitleColor }">性別 *</label>
                <input type="radio" id="male" value="公" v-model="formData.gender" name="gender">
                <label for="male">公</label>
                <input type="radio" id="female" value="母" v-model="formData.gender" name="gender">
                <label for="female">母</label>
                <!-- 棕色表單不需要未知選項 -->
                <input type="radio" class="brown-unnecessary" id="gender-unknown" value="未知" v-model="formData.gender"
                    name="gender">
                <label for="gender-unknown" class="brown-unnecessary">未知</label>
            </div>

            <div class="form-group">
                <label for="colors" :style="{ color: inputTitleColor }">花色 *</label>
                <input type="radio" id="solidColor" value="純色" v-model="formData.colors" name="colorType" />
                <label for="solidColor">純色</label>

                <input type="radio" id="patternedColor" value="花色" v-model="formData.colors" name="colorType" />
                <label for="patternedColor">花色</label>
                <input type="radio" class="brown-unnecessary" id="undefinedColor" value="未定義" v-model="formData.colors"
                    name="colorType" />
                <label for="undefinedColor" class="brown-unnecessary">未定義</label>
            </div>

            <div class="form-group">
                <label for="age" :style="{ color: inputTitleColor }">年齡 *</label>
                <input type="radio" id="youngAge" value="幼年" v-model="formData.age" name="ageType" />
                <label for="youngAge">幼年</label>

                <input type="radio" id="adultAge" value="成年" v-model="formData.age" name="ageType" />
                <label for="adultAge">成年</label>
                <input type="radio" class="brown-unnecessary" id="unknownAge" value="未知" v-model="formData.age"
                    name="ageType" />
                <label for="unknownAge" class="brown-unnecessary">未知</label>
            </div>

            <div class="form-group">
                <label for="neutered" :style="{ color: inputTitleColor }">是否已絕育 *</label>
                <input type="radio" id="neuteredYes" value="已絕育" v-model="formData.neutered" name="neuteredStatus" />
                <label for="neuteredYes">已絕育</label>

                <input type="radio" id="neuteredNo" value="未結紮" v-model="formData.neutered" name="neuteredStatus" />
                <label for="neuteredNo">未結紮</label>
                <input type="radio" class="brown-unnecessary" id="neuteredUnknown" value="未知" v-model="formData.neutered"
                    name="neuteredStatus" />
                <label for="neuteredUnknown" class="brown-unnecessary">未知</label>
            </div>

            <div class="form-group time-place">
                <div class="time-place-title" :style="{ color: inputTitleColor }">發現浪浪之時間和地點 *</div>
                <div class="time-place-text">
                    <label for="time" hidden></label>
                    <input type="text" id="time" v-model="formData.time" placeholder="年/月/日"
                        :style="{ border: inputTextBorder }">

                    <label for="place" :style="{ color: inputTitleColor }"></label>
                    <select id="place" class="customSelect" v-model="formData.place" :style="{ border: inputTextBorder }">
                        <option value="" disabled selected>請選擇縣市</option>
                        <option value="0">臺北市</option>
                        <option value="1">新北市</option>
                        <option value="2">臺中市</option>
                        <option value="3">高雄市</option>
                        <!-- 添加更多的選項 -->
                    </select>


                    <label for="description"></label>
                    <input type="text" id="description" v-model="formData.description" :style="{ border: inputTextBorder }"
                        placeholder="詳細地點描述">

                </div>
            </div>

            <div class="form-group contact-area">
                <label for="phone" :style="{ color: inputTitleColor }">聯絡方式 *</label>
                <div class="phone-area">
                    <input type="text" id="phone" v-model="formData.phone" :style="{ border: inputTextBorder }">
                    <span>請留下手機號碼或電子信箱</span>
                </div>

            </div>

            <div class="form-group other">
                <label for="other" :style="{ color: inputTitleColor }">其他說明</label>
                <textarea id="other" v-model="formData.other" :style="{ border: inputTextBorder }"></textarea>
            </div>

            <div class="btn-area">
                <!-- 清除重填按鈕 -->
                <NoHoverButton class="btn-1" @click.prevent="showConfirmationBtn" :text="myinnertext"
                    :btnbgColor="mybtnbgColor">
                </NoHoverButton>

                <!-- 送出按鈕 -->
                <IconChangeButton class="btn-1" :text="mysubmit" @click.prevent="showSubmitBtn" :style="{
                    color: textColor, backgroundColor: submitBgColor, width: w, height: h
                }"></IconChangeButton>
                <!-- 手機版-清除重填按鈕 -->
                <NoHoverButton class="btn-2" @click.prevent="showConfirmationBtn" :text="myinnertext"
                    :btnbgColor="mybtnbgColor">
                </NoHoverButton>

                <!-- 手機版-送出按鈕 -->
                <IconChangeButton class="btn-2" :text="mysubmit" @click.prevent="showSubmitBtn" w="96px" h="41px" :style="{
                    color: textColor, backgroundColor: submitBgColor,
                }"></IconChangeButton>


                <!-- 重填確認框 彈跳窗-->
                <div v-if="confirmClear" class="confirmation-modal">
                    <div class="container" :style="{ borderColor: popStyle }">
                        <div>
                            <svg width="63" height="66" viewBox="0 0 63 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="ion:paw-outline">
                                    <rect x="62.2773" y="0.702637" width="65.2662" height="60.8014" rx="10"
                                        transform="rotate(90.6621 62.2773 0.702637)" :fill="successSvgColor" />
                                    <path id="Vector"
                                        d="M53.2797 24.0441C52.918 23.8576 52.5274 23.751 52.1287 23.73L52.087 23.7277C49.9796 23.6457 47.4934 25.7536 46.0652 29.0719C44.3535 33.0416 44.8057 37.2261 47.0864 38.4227C47.4477 38.6091 47.8379 38.7157 48.2363 38.7367C50.3521 38.8549 52.8714 36.7357 54.3113 33.3955C56.0126 29.4252 55.55 25.2401 53.2797 24.0441ZM38.8123 39.1C36.2159 33.4684 35.0782 31.3413 31.7589 31.1559C28.4395 30.9706 27.0609 32.9702 23.8543 38.2647C21.1094 42.7928 16.0669 42.9013 14.593 46.795C14.2983 47.5069 14.1274 48.2749 14.0898 49.0565C13.9097 52.2803 15.9351 55.0113 18.6073 55.1605C21.9266 55.3459 26.6145 52.5879 30.5601 52.8082C34.5057 53.0286 38.8365 56.2903 42.1558 56.4757C44.828 56.6249 47.1344 54.1371 47.3145 50.912C47.3605 50.1301 47.2727 49.3477 47.0557 48.608C46.0253 44.5601 41.0359 43.9056 38.8123 39.1ZM25.423 25.5688C25.5628 25.5768 25.703 25.5727 25.8425 25.5566C28.2876 25.2923 30.013 21.5636 29.7045 17.2266C29.4145 13.138 27.415 9.98029 25.1468 9.85362C25.0071 9.84568 24.8668 9.84978 24.7273 9.86587C22.2823 10.1301 20.5568 13.8588 20.8654 18.1959C21.156 22.2726 23.1548 25.4422 25.423 25.5688ZM44.0246 19.4893C44.8141 15.2135 43.5146 11.3159 41.1142 10.781C40.9773 10.7495 40.8384 10.7298 40.6987 10.7222C38.4304 10.5955 36.096 13.5111 35.3515 17.542C34.562 21.8177 35.8615 25.7153 38.2619 26.2502C38.3987 26.2817 38.5376 26.3014 38.6774 26.3091C40.9456 26.4357 43.2849 23.5085 44.0246 19.4893ZM15.7207 36.671C18.1174 35.7344 19.0318 31.6226 17.7746 27.4919C16.7166 24.0122 14.4511 21.6258 12.3384 21.5078C11.9401 21.4843 11.5405 21.5468 11.1606 21.6918C8.76391 22.6284 7.84949 26.7402 9.10669 30.8709C10.1647 34.3507 12.4302 36.737 14.5429 36.855C14.9412 36.8785 15.3408 36.816 15.7207 36.671Z"
                                        stroke="white" stroke-width="3" stroke-miterlimit="10" />
                                </g>
                            </svg>
                        </div>
                        <div class="text">
                            <span :style="{ color: successtextcolor }">是否清除重填？</span>
                        </div>
                        <div class="btns">
                            <NoHoverButton @click="cancelConfirmation" text="返回修改" :btnbgColor="cancelbtnbg">
                            </NoHoverButton>
                            <div class="clearBtn">
                                <button @click="clearFormBtn" :style="{ backgroundColor: successBtnbgColor }">
                                    確認重填
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 送出確認框 彈跳窗-->
                <div v-if="isSubmit" class="ScreenFrame">
                    <div class="container" :style="{ borderColor: confirmpopStyle }">
                        <div>
                            <svg width="63" height="66" viewBox="0 0 63 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="ion:paw-outline">
                                    <rect x="62.2773" y="0.702637" width="65.2662" height="60.8014" rx="10"
                                        transform="rotate(90.6621 62.2773 0.702637)" :fill="successSvgColor" />
                                    <path id="Vector"
                                        d="M53.2797 24.0441C52.918 23.8576 52.5274 23.751 52.1287 23.73L52.087 23.7277C49.9796 23.6457 47.4934 25.7536 46.0652 29.0719C44.3535 33.0416 44.8057 37.2261 47.0864 38.4227C47.4477 38.6091 47.8379 38.7157 48.2363 38.7367C50.3521 38.8549 52.8714 36.7357 54.3113 33.3955C56.0126 29.4252 55.55 25.2401 53.2797 24.0441ZM38.8123 39.1C36.2159 33.4684 35.0782 31.3413 31.7589 31.1559C28.4395 30.9706 27.0609 32.9702 23.8543 38.2647C21.1094 42.7928 16.0669 42.9013 14.593 46.795C14.2983 47.5069 14.1274 48.2749 14.0898 49.0565C13.9097 52.2803 15.9351 55.0113 18.6073 55.1605C21.9266 55.3459 26.6145 52.5879 30.5601 52.8082C34.5057 53.0286 38.8365 56.2903 42.1558 56.4757C44.828 56.6249 47.1344 54.1371 47.3145 50.912C47.3605 50.1301 47.2727 49.3477 47.0557 48.608C46.0253 44.5601 41.0359 43.9056 38.8123 39.1ZM25.423 25.5688C25.5628 25.5768 25.703 25.5727 25.8425 25.5566C28.2876 25.2923 30.013 21.5636 29.7045 17.2266C29.4145 13.138 27.415 9.98029 25.1468 9.85362C25.0071 9.84568 24.8668 9.84978 24.7273 9.86587C22.2823 10.1301 20.5568 13.8588 20.8654 18.1959C21.156 22.2726 23.1548 25.4422 25.423 25.5688ZM44.0246 19.4893C44.8141 15.2135 43.5146 11.3159 41.1142 10.781C40.9773 10.7495 40.8384 10.7298 40.6987 10.7222C38.4304 10.5955 36.096 13.5111 35.3515 17.542C34.562 21.8177 35.8615 25.7153 38.2619 26.2502C38.3987 26.2817 38.5376 26.3014 38.6774 26.3091C40.9456 26.4357 43.2849 23.5085 44.0246 19.4893ZM15.7207 36.671C18.1174 35.7344 19.0318 31.6226 17.7746 27.4919C16.7166 24.0122 14.4511 21.6258 12.3384 21.5078C11.9401 21.4843 11.5405 21.5468 11.1606 21.6918C8.76391 22.6284 7.84949 26.7402 9.10669 30.8709C10.1647 34.3507 12.4302 36.737 14.5429 36.855C14.9412 36.8785 15.3408 36.816 15.7207 36.671Z"
                                        stroke="white" stroke-width="3" stroke-miterlimit="10" />
                                </g>
                            </svg>

                        </div>
                        <div class="text">
                            <span :style="{ color: successtextcolor }">資料成功送出!</span>
                        </div>
                        <div class="sendBtn">
                            <button @click="goPage" :style="{ backgroundColor: successBtnbgColor }">
                                前往瀏覽頁面
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>

    </main>
</template>

<style scoped>
main {
    width: 100vw;
    max-width: 100%;
}

.header-container {
    font-size: 48px;
    font-weight: 400;
    letter-spacing: 12px;
    margin: 147px 0px 0px 162px;
}

@media (max-width: 1280px) {
    .header-container {
        margin: 69px 0px 0px 100px;
    }
}

@media (max-width: 768px) {
    .header-container {
        font-size: 26px;
        letter-spacing: 6.5px;
        margin: 22px 0px 0px 33px;
    }
}

@media (max-width: 720px) {
    .header-container {
        font-size: 20px;
        letter-spacing: 4.8px;
        margin: 22px 23px 0px 34px;
    }
}


.header-title {
    color: var(--primary-color);
}

.header-text {
    color: #D7D7D7;
}

form {
    display: flex;
    flex-direction: column;
    gap: 45px;
    font-size: 24px;
    letter-spacing: 6px;
    font-weight: 400;
    width: 100%;
    padding: 75px 200px 100px 300px
}

@media (max-width: 1280px) {
    form {
        padding: 70px 237px 152px 150px;
        gap: 60px;
    }
}

@media (max-width: 768px) {
    form {
        padding: 104px 113px 132px 69px;
        gap: 50px;
    }
}

@media (max-width:720px) {
    form {
        padding: 67px 23px 77px 23px;
        gap: 25px;
    }
}


.custom-file-upload {
    width: 100%;
    position: relative;
    display: flex;
    gap: 72px;
}

@media (max-width: 768px) {
    .custom-file-upload {
        gap: 60px;
    }
}

@media (max-width:720px) {
    .custom-file-upload {
        gap: 25px;
        align-items: center;
        margin-bottom: 270px;
        justify-content: flex-end;
        padding-right: 47px;
    }
}


/*自訂上傳照片按鈕*/
.custom-file-upload label {
    background-color: #ffffff;
    border: 2px solid var(--primary-color);
    border-radius: 4px;
    padding: 30px 15px;
    border-radius: 5px;
    cursor: pointer;
}

@media (max-width:720px) {
    .custom-file-upload label {
        padding: 10px 15px;
        border-radius: 5px;
        cursor: pointer;
    }
}


/*傳送檔案預設樣式隱藏*/
.custom-file-upload input[type="file"] {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    cursor: pointer;
    display: flex;
}

.preview-pic {
    position: absolute;
    top: 0;
    right: -79%;
    z-index: 100;
    border: 5px dashed lightgrey;
    padding: 10px;
    display: flex;
    width: 500px;
    height: 500px;
}

@media (max-width: 1280px) {
    .preview-pic {
        width: 350px;
        height: 350px;
        right: -16%;
    }
}

@media (max-width: 768px) {
    .preview-pic {
        width: 200px;
        height: 200px;
        right: -14%;
    }
}

@media (max-width:720px) {
    .preview-pic {
        width: 250px;
        height: 250px;
        top: 160%;
        right: 12%;
    }
}



.preview-pic img {
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.preview-pic-block {
    position: absolute;
    top: 0;
    right: -79%;
    color: var(--white-color);
    width: 529px;
    height: 477px;
    font-size: 48px;
    letter-spacing: 12px;
    text-align: center;
    line-height: 477px;
    background-color: #D8D8D8;
}

@media (max-width: 1280px) {
    .preview-pic-block {
        width: 382px;
        height: 344px;
        line-height: 344px;
        font-size: 36px;
        letter-spacing: 9px;
        right: -16%;
    }
}

@media (max-width: 768px) {
    .preview-pic-block {
        width: 193px;
        height: 174px;
        line-height: 174px;
        font-size: 16px;
        letter-spacing: 4px;
        right: -14%;
    }
}

@media (max-width:720px) {
    .preview-pic-block {
        width: 249px;
        height: 224px;
        line-height: 224px;
        top: 160%;
        right: 12%;
    }
}


label[for="photo"] {
    display: flex;
    width: 200px;
    height: 56px;
    justify-content: space-around;
    align-items: center;
}

@media (max-width:720px) {
    label[for="photo"] {
        width: 174px;
        height: 41px;
    }
}


.form-group {
    width: 793px;
    display: flex;
    align-items: center;
    color: #000;
    font-size: 24px;
    font-weight: 400;
}

@media (max-width: 1280px) {
    .form-group {
        width: 100%;
    }
}

@media (max-width: 768px) {
    .form-group {
        font-size: 20px;
    }
}

@media (max-width:720px) {
    .form-group {
        font-size: 16px;
        flex-wrap: wrap;
        gap: 10px 2px;
    }
}

/*每個欄位的標題*/
.photo-title,
label[for="photo"],
label[for="species"],
label[for="chip-id"],
label[for="body-shape"],
label[for="gender"],
label[for="colors"],
label[for="age"],
label[for="neutered"],
label[for="time"],
label[for="phone"],
label[for="other"],
.time-place-title {
    margin-right: 15px;
}

@media (max-width: 1280px) {

    .photo-title,
    label[for="photo"],
    label[for="species"],
    label[for="chip-id"],
    label[for="body-shape"],
    label[for="gender"],
    label[for="colors"],
    label[for="age"],
    label[for="neutered"],
    label[for="time"],
    label[for="phone"],
    label[for="other"],
    .time-place-title {
        margin-right: 35px;
    }
}

@media (max-width: 768px) {

    .photo-title,
    label[for="photo"],
    label[for="species"],
    label[for="chip-id"],
    label[for="body-shape"],
    label[for="gender"],
    label[for="colors"],
    label[for="age"],
    label[for="neutered"],
    label[for="time"],
    label[for="phone"],
    label[for="other"],
    .time-place-title {
        margin-right: 0px;
        font-size: 16px;
        letter-spacing: 4px;
    }
}

@media (max-width:720px) {

    label[for="species"],
    label[for="chip-id"],
    label[for="body-shape"],
    label[for="gender"],
    label[for="colors"],
    label[for="age"],
    label[for="neutered"] {
        width: 100%;
    }

    label[for="time"],
    label[for="phone"],
    label[for="other"],
    .time-place-title {
        margin-left: 40px;
    }

}


.form-group input,
select {
    margin: 0px 20px 0px 30px;
    border-radius: 4px;
}

@media (max-width: 1280px) {
    .form-group input,
    select {
        margin: 0px 28px;
    }
}

@media (max-width: 768px) {
    .form-group input,
    select {
        margin: 0px 20px;
    }
}
@media (max-width:720px) {
    .form-group input,
    select {
        margin: 0px 15px;
    }
}

/* 所有 radio 按鈕 */
.form-group input[type="radio"] {
    transform: scale(2);
}

@media (max-width: 768px) {
    .form-group input[type="radio"] {
        transform: scale(1.5);
    }
}
@media (max-width:720px) {
    .form-group input[type="radio"] {
        transform: scale(1.2);
    }
}


/* 讓選項按鈕和文字對齊 */
.form-group label {
    vertical-align: middle;
}


/* 發現浪浪之時間和地點 */
.time-place {
    display: flex;
    align-items: start;
}

@media (max-width: 768px) {
    .time-place {
        gap: 26px;
    }
}

@media (max-width:720px) {
    .time-place {
        flex-direction: column;
        gap: 15px;
        margin: 10px 0;
    }
}



.time-place-text {
    display: flex;
    flex-wrap: wrap;
    height: 125px;
    width: 100%;
    gap: 5px;
}

#time {
    margin: 0;
}

@media (max-width: 1280px) {
    .time-place-text {
        height: 137px;
    }
}

@media (max-width:720px) {
    .time-place-text {
        display: flex;
        flex-wrap: nowrap;
        flex-direction: column;
        height: 167px;
        justify-content: space-between;
        align-items: center;
    }
}


/* 設定 所有input 文字大小 */
.form-group input[type="text"],
select#place {
    font-size: 24px;
    text-align: center;
    color: #b1b1b1;
    letter-spacing: 6px;
}

@media (max-width: 768px) {

    .form-group input[type="text"],
    select#place {
        font-size: 16px;
        letter-spacing: 4px;
    }
}

.time-place-text span,
.phone-area span {
    font-size: 16px;
    margin-left: 20px;
    letter-spacing: 4px;
    color: var(--gray-color)
}

@media (max-width:720px) {
    .phone-area span {
        font-size: 14px;
        letter-spacing: 3.5px;
        margin: 0;
    }
}


/*聯絡方式*/
.contact-area {
    display: flex;
    align-items: flex-start;
}

.phone-area {
    display: flex;
    flex-direction: column;
}

@media (max-width:720px) {
    .contact-area {
        margin: 15px 0;
}
    .phone-area {
        gap: 10px;
        margin-left: 40px;
    }
}



/*設定每個input樣式*/
input#chip-id {
    width: 535px;
    height: 56px;
    margin-left: 38px;
}

@media (max-width: 1280px) {
    input#chip-id {
        width: 300px;
    }
}

@media (max-width: 768px) {
    input#chip-id {
        width: 250px;
    }
}

@media (max-width:720px) {
    input#chip-id {
        width: 298px;
        height: 41px;
        margin: 0;
    }
}


input#time {
    width: 275px;
    height: 56px;
    margin-right: 20px;
}

select#place {
    width: 257px;
    height: 56px;
}

@media (max-width: 768px) {
    input#time {
        width: 185px;
        margin-right: 11px;
    }

    select#place {
        width: 180px;
        letter-spacing: 4px;
    }
}

@media (max-width:720px) {
    input#time {
        width: 255px;
        height: 41px;
        margin-right: 0px;
    }

    select#place {
        width: 255px;
        height: 41px;
        letter-spacing: 4px;
    }
}


select.customSelect {
    /*取消下拉式選單預設按鈕樣式*/
    -webkit-animation: none;
    -moz-appearance: none;
    appearance: none;
    /*放入圖片*/
    background-image: url(../assets/Image/AboutPage2Image/select-vector.svg);
    background-position: 95% center;
    background-repeat: no-repeat;
    padding-right: 1rem;
    margin: 0;
}

input#description {
    width: 562px;
    height: 56px;
    margin: 0;
}

@media (max-width: 768px) {
    input#description {
        width: 388px;
        height: 56px;
        margin: 0;
    }
}

@media (max-width:720px) {
    input#description {
        width: 256px;
        height: 41px;
    }
}

input#phone {
    width: 565px;
    height: 56px;
    margin: 0;
}

@media (max-width: 768px) {
    input#phone {
        width: 392px;
    }
}

@media (max-width:720px) {
    input#phone {
        width: 202px;
        height: 41px;
        margin: 0;
    }
}


#other {
    width: 565px;
    height: 115px;
    overflow: auto;
    resize: both;
    font-size: 24px;
}

.contact-area label {
    width: 100%;
}

.other label {
    width: 212px;
}

.other {
    align-items: flex-start;
}

@media (max-width: 1280px) {

    .contact-area label,
    .other label {
        width: 230px;
    }

    #other {
        width: 565px;
        height: 115px;
        overflow: auto;
        resize: both;
        font-size: 24px;
        margin-left: 0;
    }
}

@media (max-width: 768px) {
    .contact-area label,
    .other label {
        width: 179px;
    }

    #other {
        width: 394px;
        height: 115px;
    }
}

@media (max-width:720px) {

    .contact-area label,
    .other label {
        width: 100%;
    }

    #other {
        width: 255px;
        height: 200px;
        margin: auto;
    }
}


/*其他說明的輸入欄*/
.form-group textarea {
    vertical-align: top;
    border: 2px solid var(--primary-color);
    border-radius: 4px;
}

/*按鈕*/
.btn-2 {
    display: none;
}

.btn-area {
    display: flex;
    margin-left: 350px;
    gap: 55px;
}

@media (max-width: 768px) {
    .btn-area {
        display: flex;
        margin-left: 163px;
        gap: 55px;
    }
}

@media (max-width:720px) {
    .btn-area {
        display: flex;
        margin: auto;
        gap: 25px;
    }

    .btn-1 {
        display: none;
    }

    .btn-2 {
        display: flex;
        width: 102px;
        height: 41px;
        font-size: 15px;
        align-items: center;
        justify-content: center;
    }
}

/*確認是否清除*/
.confirmation-modal {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary-color);
    height: 100vh;
    width: 100vw;
    max-width: 100%;
    background: rgba(255, 255, 255, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    font-size: 24px;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 550px;
    height: 409px;
    background-color: var(--white-color);
    border: 2px solid var(--primary-color);
    border-width: 2px;
    border-style: solid;
    border-radius: 30px;
    gap: 42px;
}

.text {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.content {
    font-size: 16px;
    color: var(--gray-color);
}

.btns {
    display: flex;
    gap: 38px;
}

.btn {
    width: 155px;
    height: 65px;
    font-size: 20px;
    letter-spacing: 5px;
}

.btn-white {
    background-color: var(--white-color);
    color: var(--gray-color);
    border: 1px solid var(--gray-color);
}

/*送出確認框*/
.ScreenFrame {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    color: var(--primary-color);
    height: 100vh;
    width: 100vw;
    max-width: 100%;
    background: rgba(255, 255, 255, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 6;
}

.Success {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 35rem;
    height: 24rem;
    background-color: var(--white-color);
    border: 2px solid var(--primary-color);
    border-radius: 30px;
    gap: 2rem;
    padding: 3rem;
}

.img {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.sendBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.clearBtn button {
    width: 125px;
    height: 54px;
    color: var(--white-color);
    border-radius: 30px;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 5px;
    box-shadow: none;
    cursor: pointer;
}

.sendBtn button {
    width: 205px;
    height: 65px;
    color: #FEFEFB;
    font-size: 20px;
    font-family: ABeeZee;
    font-weight: 400;
    letter-spacing: 5px;
    word-wrap: break-word;
    box-shadow: none;
}
</style>

