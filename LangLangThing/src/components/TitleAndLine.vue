<script>
import IconLineAndSqure from './icons/IconLineAndSqure.vue';

export default {
    components: {
        IconLineAndSqure
    },
    props: {
        // 文字
        text: String,
        // style物件 //文字顏色大小跟gap
        customStyle: Object,
        // 線長
        linew: String,
        // 線顏色
        linecolor: String,
    },
    data() {
        return {
            bgline : this.linecolor,
        }
    },
    
}
</script>
<template>
    <div class="contactTitleArea">
        <div class="contactTitle" :style="customStyle">
            <span>{{ text }}</span>
            <IconLineAndSqure :linewidth="linew" />
        </div>

    </div>
</template>
<style scoped>
.contactTitleArea {
    display: flex;
    flex-direction: row;
}

.contactTitle {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
}

.contactTitle span {
    display: flex;
    justify-content: center;
    align-items: center;
    /* color: var(--primary-color); */
    font-weight: 400;
    letter-spacing: 9px;
}
</style>