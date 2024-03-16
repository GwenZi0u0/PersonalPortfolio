<script>
export default {
    props: {
        linewidth: String,
    },
}
</script>
<template>
    <div class="contactLine">
        <div class="line" :style="{ width: linewidth }"></div>
        <div class="squre"></div>
    </div>
</template>
<style scoped>
.contactLine {
    display: flex;
}

.line {
    display: flex;
    align-items: center;
    justify-content: center;
    /* width: 80rem; */
    height: 2px;
    background-color: var(--primary-color);
}

.squre {
    width: 10px;
    height: 10px;
    background-color: var(--primary-color);
    transform: translate(0px, -3.5px) rotate(45deg);
}
</style>