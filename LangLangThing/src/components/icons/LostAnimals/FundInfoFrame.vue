<script>
export default {
    components: {
    },
    props: {
        animalData: Object,
        numberBg: String, //晶片號碼背景色
        iconColor: String,  //表格外框色
        borderTh: String,
        textColor: String,  //文字顏色
        lineApp: String,
    },
    data() {
        return {
            animals: [],
        }
    },
}
</script>
<template>
    <div class="cardFrameAll">
        <!-- 卡片表格區域-->
        <div class="CardFrame">
            <div class="ChipNumber" :style="{ backgroundColor: numberBg }">
                <span>晶片號碼：{{ animalData.名稱 }}</span>
            </div>
            <table>
                <tbody>
                    <tr>
                        <th :style="{ color: textColor, borderColor: borderTh }">類別</th>
                        <td :style="{ borderColor: borderTh }">{{ animalData.類型 }}</td>
                        <th :style="{ color: textColor, borderColor: borderTh }">體型</th>
                        <td :style="{ borderColor: borderTh }">{{ animalData.體型 }}</td>
                    </tr>
                    <tr>
                        <th :style="{ color: textColor, borderColor: borderTh }">年齡</th>
                        <td :style="{ borderColor: borderTh }">{{ animalData.年齡 }}</td>
                        <th :style="{ color: textColor, borderColor: borderTh }">性別</th>
                        <td :style="{ borderColor: borderTh }">{{ animalData.性別 }}</td>
                    </tr>
                    <tr>
                        <th :style="{ color: textColor, borderColor: borderTh }">是否已結紮</th>
                        <td :style="{ borderColor: borderTh }">{{ animalData.是否已結紮 }}</td>
                        <th :style="{ color: textColor, borderColor: borderTh }">顏色</th>
                        <td :style="{ borderColor: borderTh }">{{ animalData.顏色 }}</td>
                    </tr>
                    <tr>
                        <th :style="{ color: textColor, borderColor: borderTh }">發現地點</th>
                        <td colspan="3" :style="{ borderColor: borderTh }">{{ animalData.找到地點 }}</td>
                    </tr>
                    <tr>
                        <th :style="{ color: textColor, borderColor: borderTh }">聯絡方式</th>
                        <td colspan="3" :style="{ borderColor: borderTh }">09XX-XXX-XXX</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="timeShare">
            <div class="platformTime">
                <div class="time">
                    <span>平台建立時間</span>
                    <p class="creationTime">{{ animalData.建立 }}</p>
                </div>
                <div class="time">
                    <span>平台更新時間</span>
                    <p class="updateTime">{{ animalData.更新 }}</p>
                </div>
            </div>
            <div class="shareIcon" :style="{ color: textColor }">
                <span>分享至</span>
                <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Vector"
                        d="M52.5 26.25C52.5 11.76 40.74 0 26.25 0C11.76 0 0 11.76 0 26.25C0 38.955 9.03 49.5338 21 51.975V34.125H15.75V26.25H21V19.6875C21 14.6213 25.1213 10.5 30.1875 10.5H36.75V18.375H31.5C30.0562 18.375 28.875 19.5563 28.875 21V26.25H36.75V34.125H28.875V52.3688C42.1313 51.0563 52.5 39.8738 52.5 26.25Z"
                        :fill="lineApp" />
                </svg>
                <svg width="54" height="53" viewBox="0 0 54 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Vector"
                        d="M32.7978 20.3719V28.7833C32.7978 28.9962 32.629 29.1618 32.412 29.1618H31.0379C30.9054 29.1618 30.7848 29.0908 30.7245 29.008L26.7951 23.8027V28.7951C26.7951 29.008 26.6263 29.1737 26.4094 29.1737H25.0353C24.8183 29.1737 24.6496 29.008 24.6496 28.7951V20.3837C24.6496 20.1708 24.8183 20.0051 25.0353 20.0051H26.3973C26.5179 20.0051 26.6504 20.0643 26.7107 20.1708L30.6402 25.3761V20.3837C30.6402 20.1708 30.8089 20.0051 31.0259 20.0051H32.4C32.617 19.9933 32.7978 20.1708 32.7978 20.3719ZM22.9138 19.9933H21.5397C21.3228 19.9933 21.154 20.1589 21.154 20.3719V28.7833C21.154 28.9962 21.3228 29.1618 21.5397 29.1618H22.9138C23.1308 29.1618 23.2996 28.9962 23.2996 28.7833V20.3719C23.2996 20.1708 23.1308 19.9933 22.9138 19.9933ZM19.5991 27.0442H15.8505V20.3719C15.8505 20.1589 15.6817 19.9933 15.4647 19.9933H14.0906C13.8737 19.9933 13.7049 20.1589 13.7049 20.3719V28.7833C13.7049 28.8897 13.7411 28.9725 13.8134 29.0435C13.8857 29.1027 13.9701 29.15 14.0786 29.15H19.5871C19.804 29.15 19.9728 28.9844 19.9728 28.7714V27.4228C19.9728 27.2216 19.804 27.0442 19.5991 27.0442ZM40.0299 19.9933H34.5214C34.3165 19.9933 34.1357 20.1589 34.1357 20.3719V28.7833C34.1357 28.9844 34.3045 29.1618 34.5214 29.1618H40.0299C40.2469 29.1618 40.4156 28.9962 40.4156 28.7833V27.4346C40.4156 27.2216 40.2469 27.056 40.0299 27.056H36.2812V25.6364H40.0299C40.2469 25.6364 40.4156 25.4708 40.4156 25.2578V23.8973C40.4156 23.6844 40.2469 23.5188 40.0299 23.5188H36.2812V22.0991H40.0299C40.2469 22.0991 40.4156 21.9335 40.4156 21.7205V20.3719C40.4036 20.1708 40.2348 19.9933 40.0299 19.9933ZM54 9.66542V43.4174C53.9879 48.7174 49.5643 53.0118 44.1522 53H9.76341C4.36341 52.9881 -0.0120287 48.6346 2.48444e-05 43.3346V9.5826C0.0120784 4.28261 4.44779 -0.011806 9.84778 2.43843e-05H44.2366C49.6366 0.0118547 54.012 4.35359 54 9.66542ZM46.575 24.1694C46.575 15.5333 37.7518 8.50604 26.9156 8.50604C16.0795 8.50604 7.25627 15.5333 7.25627 24.1694C7.25627 31.9065 14.2473 38.3895 23.6973 39.6199C25.9996 40.1049 25.7344 40.933 25.2161 43.9734C25.1317 44.4585 24.8183 45.8781 26.9156 45.0145C29.0129 44.1509 38.2339 38.4723 42.3683 33.8111C45.2129 30.7353 46.575 27.6239 46.575 24.1694Z"
                        :fill="lineApp" />
                </svg>
            </div>
            <!-- 手機版icon -->
            <div class="shareIcon-sm" :style="{ color: textColor }">
                <span>分享至</span>
                <svg width="34" height="34" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Vector"
                        d="M52.5 26.25C52.5 11.76 40.74 0 26.25 0C11.76 0 0 11.76 0 26.25C0 38.955 9.03 49.5338 21 51.975V34.125H15.75V26.25H21V19.6875C21 14.6213 25.1213 10.5 30.1875 10.5H36.75V18.375H31.5C30.0562 18.375 28.875 19.5563 28.875 21V26.25H36.75V34.125H28.875V52.3688C42.1313 51.0563 52.5 39.8738 52.5 26.25Z"
                        :fill="lineApp" />
                </svg>
                <svg width="34" height="34" viewBox="0 0 54 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Vector"
                        d="M32.7978 20.3719V28.7833C32.7978 28.9962 32.629 29.1618 32.412 29.1618H31.0379C30.9054 29.1618 30.7848 29.0908 30.7245 29.008L26.7951 23.8027V28.7951C26.7951 29.008 26.6263 29.1737 26.4094 29.1737H25.0353C24.8183 29.1737 24.6496 29.008 24.6496 28.7951V20.3837C24.6496 20.1708 24.8183 20.0051 25.0353 20.0051H26.3973C26.5179 20.0051 26.6504 20.0643 26.7107 20.1708L30.6402 25.3761V20.3837C30.6402 20.1708 30.8089 20.0051 31.0259 20.0051H32.4C32.617 19.9933 32.7978 20.1708 32.7978 20.3719ZM22.9138 19.9933H21.5397C21.3228 19.9933 21.154 20.1589 21.154 20.3719V28.7833C21.154 28.9962 21.3228 29.1618 21.5397 29.1618H22.9138C23.1308 29.1618 23.2996 28.9962 23.2996 28.7833V20.3719C23.2996 20.1708 23.1308 19.9933 22.9138 19.9933ZM19.5991 27.0442H15.8505V20.3719C15.8505 20.1589 15.6817 19.9933 15.4647 19.9933H14.0906C13.8737 19.9933 13.7049 20.1589 13.7049 20.3719V28.7833C13.7049 28.8897 13.7411 28.9725 13.8134 29.0435C13.8857 29.1027 13.9701 29.15 14.0786 29.15H19.5871C19.804 29.15 19.9728 28.9844 19.9728 28.7714V27.4228C19.9728 27.2216 19.804 27.0442 19.5991 27.0442ZM40.0299 19.9933H34.5214C34.3165 19.9933 34.1357 20.1589 34.1357 20.3719V28.7833C34.1357 28.9844 34.3045 29.1618 34.5214 29.1618H40.0299C40.2469 29.1618 40.4156 28.9962 40.4156 28.7833V27.4346C40.4156 27.2216 40.2469 27.056 40.0299 27.056H36.2812V25.6364H40.0299C40.2469 25.6364 40.4156 25.4708 40.4156 25.2578V23.8973C40.4156 23.6844 40.2469 23.5188 40.0299 23.5188H36.2812V22.0991H40.0299C40.2469 22.0991 40.4156 21.9335 40.4156 21.7205V20.3719C40.4036 20.1708 40.2348 19.9933 40.0299 19.9933ZM54 9.66542V43.4174C53.9879 48.7174 49.5643 53.0118 44.1522 53H9.76341C4.36341 52.9881 -0.0120287 48.6346 2.48444e-05 43.3346V9.5826C0.0120784 4.28261 4.44779 -0.011806 9.84778 2.43843e-05H44.2366C49.6366 0.0118547 54.012 4.35359 54 9.66542ZM46.575 24.1694C46.575 15.5333 37.7518 8.50604 26.9156 8.50604C16.0795 8.50604 7.25627 15.5333 7.25627 24.1694C7.25627 31.9065 14.2473 38.3895 23.6973 39.6199C25.9996 40.1049 25.7344 40.933 25.2161 43.9734C25.1317 44.4585 24.8183 45.8781 26.9156 45.0145C29.0129 44.1509 38.2339 38.4723 42.3683 33.8111C45.2129 30.7353 46.575 27.6239 46.575 24.1694Z"
                        :fill="lineApp" />
                </svg>
            </div>
        </div>
    </div>
</template>
<style scoped>
/*卡片表格區域*/
.cardFrameAll {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: var(--white-color);
}

.CardFrame {
    display: flex;
    flex-direction: column;
    width: 850px;
    height: 480px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 28px;
}

/* 晶片號碼 */
.ChipNumber {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 460px;
    height: 65px;
    background-color: var(--olivegreen-color);
    border-radius: 0.6rem 0.6rem 0 0;
}

.ChipNumber span {
    color: var(--white-color);
    font-size: 1.5rem;
    letter-spacing: 1.68px;
    padding: 0.6rem 0.9rem;
}

/* 表格 */
table {
    text-align: left;
    width: 850px;
    height: 415px;
    border-collapse: collapse;
    font-style: normal;
    line-height: normal;
    font-size: 24px;
}

th {
    padding-left: 2.5rem;
    width: 200px;
    height: 85px;
    color: var(--olivegreen-color);
    border: 3px solid var(--olivegreen-color);
    font-weight: 900;
}

td {
    padding-left: 2.5rem;
    border: 3px solid var(--olivegreen-color);
}

/* 卡片時間區 */
.timeShare {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-weight: 400;
    font-style: normal;
    line-height: normal;
    padding-bottom: 0.6rem;
    margin-right: 0.9rem;
}

.platformTime {
    display: flex;
    flex-direction: column;
    font-size: 24px;
}

.time {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 4.5px 0 4.5px 0;
    gap: 1rem;
}

.time span {
    font-weight: 700;
}

/* 分享區 */
.shareIcon {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 48px;
    color: var(--olivegreen-color);
    letter-spacing: 6px;
    font-size: 24px;
}
.shareIcon-sm{
    display: none;
}

@media (max-width: 1280px) {
    .platformTime {
        font-size: 20px;
    }
}

@media (max-width: 768px) {
    .cardFrameAll {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    .CardFrame {
        width: 100%;
        height: 341px;
        margin-bottom: 31px;
    }

    .ChipNumber {
        display: none;
    }

    /* 表格 */
    table {
        text-align: center;
        width: 497px;
        height: 341px;
        font-size: 16px;
        background-color: var(--white-color);
    }

    th {
        padding: 0;
        width: 136px;
        height: 68px;
        font-weight: 400;
    }

    td {
        padding: 0;
    }

    /* 卡片時間區 */
    .timeShare {
        display: flex;
        flex-direction: column;
        justify-items: flex-start;
        padding: 0 157px 0 0;
        margin-right: 0;
        gap: 32px;
    }

    .platformTime {
        display: flex;
        flex-direction: column;
        font-size: 20px;
        gap: 16px;
    }

    .time {
        display: flex;
        padding: 0;
        gap: 10px;
    }

    .time span {
        font-weight: 700;
    }
}


@media (max-width: 720px) {
    .cardFrameAll {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    .CardFrame {
        width: 100%;
        height: 341px;
        margin-bottom: 31px;
    }

    .ChipNumber {
        display: none;
    }

    /* 表格 */
    table {
        width: 350px;
        height: 330px;
        font-size: 16px;
    }

    th {
        width: 96px;
        height: 48px;
    }


    /* 卡片時間區 */
    .timeShare {
        align-items: flex-end;
        padding: 0;
    }

    .platformTime {
        font-size: 16px;
        margin: auto;
    }

    .shareIcon {
        display: none;
    }

    .shareIcon-sm {
        display: flex;
        align-items: center;
        gap: 24px;
        letter-spacing: 4px;
        font-size: 16px;
        margin-bottom: 32px;
    }
}
</style>