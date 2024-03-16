<template>
<button>
    <div class="whole-btn">
        <svg id=yellow-arrow width="41" height="39" viewBox="0 0 41 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse id=ellipse-yellow-arrow cx="19.5" cy="21" rx="14.5" ry="14" fill="white" />
            <path id=path-yellow-arrow d="M28 21L18 15.2265V26.7735L28 21ZM12 22H19V20H12V22Z" fill="#FAC60E" />
        </svg>
        <slot></slot>
    </div>
</button>
</template>

<script>
export default{
    
}
</script>

<style>
.whole-btn {
    display: flex;
    align-items: center;
    justify-content: center;
}

button{
    width: 153px;
    height: 52px;
    color: var(--white-color);
    background-color: var(--orangeyellow-color);
    border-radius: 30px;
    border: 0px;
    font-size: 18px;
    letter-spacing: 2px;
    cursor: pointer;

}

button:hover {
    background-color: var(--white-color);
    color: var(--orange-color);
    box-shadow: 4px 4px 4px 0px rgb(250 198, 14 ,0.25);
}

.whole-btn:hover #ellipse-yellow-arrow {
    fill: var(--orangeyellow-color); /* 改變 ellipse 的填充顏色 */
}

.whole-btn:hover #path-yellow-arrow {
    fill: var(--white-color); /* 改變 path 的填充顏色 */
}

</style>