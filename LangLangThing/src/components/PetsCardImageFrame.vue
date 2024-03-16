<script>
import CardClickLike from '@/components/CardClickLike.vue';
import IconFb from './icons/IconFb.vue';
import IconLine from './icons/IconLine.vue';

export default {
    components: {
        CardClickLike,
        IconFb,
        IconLine
    },
    props: {
        AnimalData: Object, //單一動物資料
    },
    data() {
        return {

        }
    },
    methods: {
        favoriteAnimal() {
            this.$emit("favoriteAnimal");
        }
    },
    mounted() {
        // console.log(this.animalData.名稱);
    },
}
</script>
<template>
    <div class="cardFrameAll">
        <!-- 卡片表格區域-->
        <div class="CardFrame">
            <div class="ChipNumber">
                <span>晶片號碼：{{ AnimalData.名稱 }}</span>
                <div class="furryBabiesImage">
                    <div class="img"
                        :style="{ backgroundImage: 'url(../' + AnimalData.path + '),url(../src/assets/Image/DogPawGreen.svg)' }">
                    </div>
                    <CardClickLike class="heart" @favorite="favoriteAnimal"></CardClickLike>
                </div>
            </div>
            <table>
                <tbody>
                    <tr>
                        <th>類別</th>
                        <td>{{ AnimalData.類型 }}</td>
                        <th>體型</th>
                        <td>{{ AnimalData.體型 }}</td>
                    </tr>
                    <tr>
                        <th>年齡</th>
                        <td>{{ AnimalData.年齡 }}</td>
                        <th>性別</th>
                        <td>{{ AnimalData.性別 }}</td>
                    </tr>
                    <tr>
                        <th>是否已結紮</th>
                        <td>{{ AnimalData.是否已結紮 }}</td>
                        <th>顏色</th>
                        <td>{{ AnimalData.顏色 }}</td>
                    </tr>
                    <tr class="col">
                        <th>聯絡方式</th>
                        <td colspan="3">09XX-XXX-XXX</td>
                    </tr>
                    <tr class="cols">
                        <th colspan="4">聯絡方式</th>
                    </tr>
                    <tr class="cols">
                        <td colspan="4">09XX-XXX-XXX</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="timeShare">
            <div class="platformTime">
                <div class="time">
                    <span>平台建立時間</span>
                    <p class="creationTime">{{ AnimalData.建立 }}</p>
                </div>
                <div class="time">
                    <span>平台更新時間</span>
                    <p class="updateTime">{{ AnimalData.更新 }}</p>
                </div>
            </div>
            <div class="shareIcon">
                <span>分享至</span>
                <div class="Icon">
                    <IconFb />
                </div>
                <div class="Icon">
                    <IconLine />
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
@media screen and (max-width:720px) {
    .cardFrameAll {
        display: flex;
        flex-direction: column;
        width: 350px;
    }

    .CardFrame {
        display: flex;
        flex-direction: column;
        width: 350px;
        font-weight: 400;
    }

    /* 晶片號碼 */
    .ChipNumber {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 350px;
        height: 297px;
        font-weight: 400;
        background-color: var(--primary-color);
        border-radius: 10px 10px 0px 0px;
    }

    .ChipNumber span {
        text-align: center;
        color: var(--white-color);
        font-size: 1rem;
        letter-spacing: 1.6px;
        padding: 16px 0 10px;
        font-weight: 600;
    }

    /* 收藏圖片 */
    .furryBabiesImage {
        display: flex;
        align-items: center;
        position: relative;
    }

    .img {
        width: 278px;
        height: 230px;
        background-repeat: no-repeat;
        background-size: cover;
    }

    /* 卡片愛心 */
    .furryBabiesImage .heart {
        position: absolute;
        bottom: 12px;
        left: 16px;
    }

    /* 表格 */
    table {
        text-align: center;
        width: 350px;
        height: 192px;
        border-collapse: collapse;
        font-size: 1rem;
    }

    th {
        width: 96px;
        height: 48px;
        color: #52A038;
        border: 3px solid #52A038;
        font-weight: 400;
    }

    td {
        width: 81px;
        height: 48px;
        border: 3px solid #52A038;
        font-weight: 400;
    }

    .col {
        display: none;
        visibility: hidden;
    }

    /* 卡片時間區 */
    .timeShare {
        display: flex;
        flex-direction: column;
        font-weight: 400;
        gap: 30px;
        padding-top: 20px;
    }

    .platformTime {
        display: flex;
        align-items: center;
        flex-direction: column;
        font-size: 1rem;
        gap: 9px;
    }

    .time {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0;
        gap: 17px;
        color: #626262;
    }

    .time span {
        font-weight: 700;
    }

    /* 分享區 */
    .shareIcon {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-direction: row;
        gap: 24px;
        color: #52A038;
        letter-spacing: 4px;
        font-size: 1rem;
    }

    .Icon {
        width: 32px;
        height: 32px;
    }
}

@media screen and (max-width:768px) and (min-width:720px) {
    .cols {
        display: none;
        visibility: hidden;
    }

    /*卡片表格區域*/
    .cardFrameAll {
        display: flex;
        flex-direction: column;
        width: 65vw;
        gap: 39px;
    }

    .CardFrame {
        display: flex;
        flex-direction: column;
        width: 65vw;
        font-weight: 400;
    }

    /* 晶片號碼 */
    .ChipNumber {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 65vw;
        height: 477px;
        background-color: var(--primary-color);
        border-radius: 10px 10px 0px 0px;
    }

    .ChipNumber span {
        color: var(--white-color);
        font-size: 1.25rem;
        letter-spacing: 2px;
        padding: 27px 0 21px 0;
        font-weight: 600;
    }

    /* 收藏圖片 */
    .furryBabiesImage {
        display: flex;
        align-items: center;
        position: relative;
    }

    .img {
        width: 58vw;
        height: 36vh;
        background-repeat: no-repeat;
        background-size: cover;
    }

    /* 卡片愛心 */
    .furryBabiesImage .heart {
        position: absolute;
        width: 53px;
        height: 46px;
        bottom: 40px;
        left: 24px;
    }

    /* 表格 */
    table {
        text-align: center;
        width: 65vw;
        height: 26vh;
        border-collapse: collapse;
        font-size: 1rem;
    }

    th {
        width: 17vw;
        height: 6vh;
        color: #52A038;
        border: 3px solid #52A038;
        font-weight: 400;
    }

    td {
        width: 15vw;
        height: 6vh;
        border: 3px solid #52A038;
        font-weight: 400;
    }

    /* 卡片時間區 */
    .timeShare {
        display: flex;
        flex-direction: column;
        font-weight: 400;
        gap: 39px;
    }

    .platformTime {
        display: flex;
        flex-direction: column;
        font-size: 1.25rem;
        gap: 9px;
    }

    .time {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 7px 0;
        gap: 17px;
        color: #626262;
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
        color: #52A038;
        letter-spacing: 6px;
        font-size: 1.5rem;
    }

    .Icon {
        width: 53px;
        height: 53px;
    }
}
</style>