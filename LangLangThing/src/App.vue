<script setup>
import { RouterView } from 'vue-router'
import GoTop from './components/GoTop.vue';
</script>

<template>
  <main>
    <RouterView />
    <GoTop></GoTop>
  </main>
</template>

<style scoped></style>
