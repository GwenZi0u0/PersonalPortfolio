<script>
import IconCard from '@/components/icons/LostAnimals/IconCard.vue';

export default {
    components: {
        IconCard
    },
    props: {
        listTitleColor: String,  //列表的上方框
        listborderColor: String, //列表下框
        AnimalsData: Array,
    },
    data() {
        return {

        }
    },
    mounted() {
        // console.log(this.AnimalsData);

    },
    methods: {

    }
}
</script>

<template>
    <div class="all-container">
        <div class="list-container">
            <div class="title" :style="{ backgroundColor: listTitleColor }">毛小孩列表</div>
            <div class="cards" :style="{ borderColor: listborderColor }">
                <IconCard class="card" v-for="animal in AnimalsData" :AnimalData="animal" myurl="adoptionpetinformation" />
            </div>
        </div>
    </div>
</template>
<style scoped>
.all-container {
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
}

.list-container {
    width: 840px;
}

.title {
    letter-spacing: 6px;
    text-align: center;
    padding: 14px 0;
    color: var(--white-color);
    background-color: var(--primary-color);
    border-radius: 40px 40px 0 0;
}

.cards {
    height: 840px;
    overflow: scroll;
    border: 2px solid var(--primary-color);
    border-radius: 0 0 30px 30px;
    padding: 30px 20px;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 20px;
    background-color: var(--white-color);
}

.cards::-webkit-scrollbar {
    display: none;
}

.card {
    width: 250px;
    height: 277px;
}

@media screen and (max-width:720px) {
    .all-container {
        align-items: center;
        font-size: 0.8rem;
        width: 100%;
    }

    .list-container {
        width: 350px;
        height: 977px;
    }

    .title {
        font-size: 1.5rem;
    }

    .cards {
        justify-content: center;
        height: 977px;
        padding: 40px 0;
        gap: 30px;
    }
}

@media screen and (max-width:768px) and (min-width:720px) {
    .list-container {
        width: 640px;
    }

    .cards {
        justify-content: center;
        height: 851px;
        padding: 30px 26px;
        column-gap: 30px;
        row-gap: 20px;
    }
}
</style>