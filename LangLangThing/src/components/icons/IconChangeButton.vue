<!-- 如需使用 "a" 要記得加 " a:hover{background-color: transparent;} " hover才不會有顏色 -->
<!-- hover文字顏色會跑 記得要在給文字color -->
<script>
export default {
    // 設定參數
    props: {
        text: String,
        textColor: String,
        bgColor: String,
        w: String,
        h: String,
    },
    data() {
        // 圖
        return {
            isHovered: false,
        };
    },
    methods: {
        // 顯示圖
        showIcon() {
            this.isHovered = true;
        },
        // 隱藏圖
        hideIcon() {
            this.isHovered = false;
        },
    },
};
</script>
<template>
    <!-- 滑進時顯示圖 離開時隱藏圖 -->
    <button @mouseover="showIcon" @mouseleave="hideIcon" class="custom-button" :style="{
        color: textColor,
        backgroundColor:
            bgColor,
        width: w, height: h
    }">
        <div class="button">
            <span class="text">{{ text }}</span>
            <img src="@\assets\Image\DogPaw.svg" alt="Icon" v-if="isHovered" class="icon">
        </div>

    </button>
</template>
<style scoped>
@media screen and (max-width:720px){
    .custom-button{
        font-size: 0.9rem;
    }
}
.custom-button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1.875rem;
    border: none;
    font-size: 1.25rem;
    box-shadow: none;
    letter-spacing: 5px;
    background-color: var(--primary-color)
}

.button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 11.3rem;
    height: 4rem;
}

.text {
    transition: margin-left 2s ease;
}

.icon {
    width: 1.5rem;
    height: 1.3rem;
}

.custom-button:hover {
    display: flex;
    align-items: center;
    justify-content: center;
}

.custom-button:hover .text {
    margin-left: -2px;
}

.custom-button:hover .icon {
    animation: ChangeIcon 0.5s ease;
}

/* Icon淡出效果 */
@keyframes ChangeIcon {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
</style>