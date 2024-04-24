<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MainLinkButton from '../components/MainLinkButton.vue';
</script>

<template>

  <div class="main-container">
    <MainLinkButton title = "Przemysł Wysokich Technologii W Polsce" grid_area_id = "title" background_color = "#003300"/>
    <MainLinkButton title = "Test" grid_area_id = "test" background_color = "#993399" to_page = "/test"/>
    <MainLinkButton title = "Test2" grid_area_id = "test2" background_color = "#cc0000" to_page = "/test"/>
    <MainLinkButton title = "Test3" grid_area_id = "test3" background_color = "#ff9900" to_page = "/test"/>
    <MainLinkButton title = "Test4" grid_area_id = "test4" background_color = "#666699" to_page = "/test"/>
  </div>

</template>

<style scoped>

.main-container {
  width: 100%;

  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto;

  grid-template-areas: 
    "test2 test4 test"
    "test2 title test"
    "test3 test3 test";

}



</style>
