<!-- 沒有hover效果的純按鈕 -->

<script>
export default {
    // 設定參數
    props: {
        text: String,
        btnbgColor: String,
    },
}
</script>


<template>
    <button :style="{ backgroundColor: btnbgColor }">
       {{ text }}
    </button>
</template>
  

<style scoped>
button {
    width: 125px;
    height: 54px;
    color: var(--white-color);
    /* background-color:#626262;*/
    border-radius: 30px;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 5px;
    box-shadow: none;
    cursor: pointer;
}

</style>
  