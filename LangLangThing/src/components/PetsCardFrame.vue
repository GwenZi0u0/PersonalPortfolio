<script>
export default {
    props: {
        animalData: Object,
    },
    data() {
        return {

        }
    },
    methods: {

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
                <span>晶片號碼：{{ animalData.名稱 }}</span>
            </div>
            <table>
                <tbody>
                    <tr>
                        <th>類別</th>
                        <td>{{ animalData.類型 }}</td>
                        <th>體型</th>
                        <td>{{ animalData.體型 }}</td>
                    </tr>
                    <tr>
                        <th>年齡</th>
                        <td>{{ animalData.年齡 }}</td>
                        <th>性別</th>
                        <td>{{ animalData.性別 }}</td>
                    </tr>
                    <tr>
                        <th>是否已結紮</th>
                        <td>{{ animalData.是否已結紮 }}</td>
                        <th>顏色</th>
                        <td>{{ animalData.顏色 }}</td>
                    </tr>
                    <tr>
                        <th>聯絡方式</th>
                        <td colspan="3">09XX-XXX-XXX</td>
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
            <div class="shareIcon">
                <span>分享至</span>
                <div class="Icon"><img src="../assets/Image/CardImage/IconFb.svg" alt=""></div>
                <div class="Icon"><img src="../assets/Image/CardImage/IconLine.svg" alt=""></div>
            </div>
        </div>
    </div>
</template>
<style scoped>
/*卡片表格區域*/

.cardFrameAll {
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
}

.CardFrame {
    display: flex;
    flex-direction: column;
    width: 850px;
    /* height: 24.8rem; */
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-bottom: 38px;
}

/* 晶片號碼 */
.ChipNumber {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 460px;
    max-width: 460px;
    /* height: 4rem; */
    background-color: var(--primary-color);
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
    width: 53.1rem;
    height: 20.8rem;
    border-collapse: collapse;
    font-style: normal;
    line-height: normal;
    font-size: 1.5rem;
}

th {
    padding-left: 2.5rem;
    width: 200px;
    height: 85px;
    color: var(--primary-color);
    border: 3px solid var(--primary-color);
    font-weight: 900;
}

td {
    padding-left: 2.5rem;
    font-weight: 400;
    border: 3px solid var(--primary-color);
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
    font-size: 1.25rem;
    gap: 10px;
}

.time {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 4.5px 0 4.5px 0;
    gap: 1rem;
    color: var(--gray-color);
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
    color: var(--primary-color);
    letter-spacing: 6px;
    font-size: 1.5rem;
    height: 3.3rem;
}

.Icon {
    width: 3.25rem;
    height: 3.25rem;
}

@media screen and (max-width:1280px) and (min-width:769px) {

    /* 晶片號碼 */
    .ChipNumber {

    }
}
</style>