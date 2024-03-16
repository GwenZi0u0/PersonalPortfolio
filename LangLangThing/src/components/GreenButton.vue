<!-- 綠色按鈕 -->
<template>
    <button>
        <div class="whole-btn">
            <!-- 箭頭svg -->
            <svg v-if="showSvg" id=green-arrow width="41" height="39" viewBox="0 0 41 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse id=ellipse-green-arrow cx="19.5" cy="21" rx="14.5" ry="14" fill="white" />
                <path id=path-green-arrow d="M28 21L18 15.2265V26.7735L28 21ZM12 22H19V20H12V22Z" fill="#52A038" />
            </svg>
            
            <slot></slot>
        </div>
    </button>
</template>
  
<script>
export default {
    props:{
        showSvg:{
            type:Boolean,
            default:true,//顯示箭頭SVG
        }
    }
}
</script>
  
<style scoped>
.whole-btn {
    display: flex;
    align-items: center;
    justify-content: center;
}

button {
    width: 153px;
    height: 52px;
    color: var(--white-color);
    background-color: var(--primary-color);
    border-radius: 30px;
    border: 0px;
    font-size: 18px;
    letter-spacing: 2px;
    cursor: pointer;

}

button:hover {
    background-color: var(--white-color);
    color: var(--primary-color);
    box-shadow: 4px 4px 4px 0px rgb(82, 160, 56,0.25);
}

.whole-btn:hover #ellipse-green-arrow {
    fill: var(--primary-color); /* 改變 ellipse 的填充顏色 */
}
.whole-btn:hover #path-green-arrow {
    fill: var(--white-color); /* 改變 path 的填充顏色 */
}
</style>
  