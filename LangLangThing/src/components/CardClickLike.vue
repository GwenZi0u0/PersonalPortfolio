<script>

export default {
    props: {
        inputIsFavorite: Boolean,
    },
    data() {
        return {
            // 預設空的愛心
            isFavorite: false,
        };
    },
    mounted() {
        // 如果有資料 就會改為傳入資料(滿的愛心 => true)
        if (this.inputIsFavorite == true) {
            this.isFavorite = this.inputIsFavorite;
        }
    },
    methods: {
        toggleFavorite() {
            this.isFavorite = !this.isFavorite;
            this.$emit("favorite")
        },
    },

};
</script>
<template>
    <div @click="toggleFavorite" class="heartButton">
        <svg :class="{ active: isFavorite }" class="heartIcon" width="78" height="68" viewBox="0 0 78 68"
            xmlns="http://www.w3.org/2000/svg">
            <path id="Vector"
                d="M7.00292 7.79132L7.00372 7.79044C10.6518 3.75984 15.8834 1.50523 22.152 1.50523C27.3301 1.50523 31.5465 3.41232 34.7742 7.01648C35.8989 8.29209 36.8733 9.69444 37.6779 11.1956L39 13.6623L40.3221 11.1956C41.1267 9.69444 42.1011 8.29209 43.2258 7.01648C46.4542 3.41155 50.6709 1.5 55.848 1.5C62.0957 1.5 67.3283 3.7494 70.9821 7.77113C74.6143 11.7725 76.5 17.3135 76.5 23.6102C76.5 34.3791 71.01 43.1318 63.8431 50.0594L63.8424 50.0601C56.6948 56.9783 47.6717 62.2909 40.1017 66.2308C39.7593 66.4089 39.3798 66.5011 38.9953 66.5C38.6108 66.4989 38.2318 66.4045 37.8904 66.2244L37.889 66.2236C30.3141 62.2368 21.2868 56.9658 14.1448 50.0839C6.98083 43.1795 1.5 34.4587 1.5 23.6102C1.5 17.3382 3.37615 11.792 7.00292 7.79132Z"
                stroke="#FFAFAF" stroke-width="3" />
        </svg>
    </div>
</template>
<style scoped>
.heartButton {
    background: none;
    border: none;
    cursor: pointer;
    /* position: fixed; */
}

.heartIcon {
    fill: white;
    transition: fill 0.3s ease;
}

.heartIcon.active {
    fill: #FFAFAF;
}

@media screen and (max-width:720px) {
    .heartIcon {
        width: 33px;
        height: 29px;
    }
}
</style>