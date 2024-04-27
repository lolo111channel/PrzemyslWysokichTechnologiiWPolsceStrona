<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MainLinkButton from './components/MainLinkButton.vue';
</script>

<template>
  <header>
    <RouterView class = "router-view"/>
  </header>
</template>

<style scoped>



.main-container {
  width: auto;

  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto;

  grid-template-areas: 
    "test2 test4 test"
    "test2 title test"
    "test3 test3 test";

}


header {
  line-height: 1.5;
  max-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;


}



</style>
