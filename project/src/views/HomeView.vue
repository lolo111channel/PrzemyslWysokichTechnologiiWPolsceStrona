<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MainLinkButton from '../components/MainLinkButton.vue';
</script>

<template>

  
  <div class="main-container">
    <div class="buttons">
      <MainLinkButton title = "Przemysł Wysokich Technologii W Polsce" grid_area_id = "title" background_color = "#003300"/>
      <MainLinkButton title = "Robots" grid_area_id = "test" background_color = "#993399" to_page = "/easyrobots"/>
      <MainLinkButton title = "SMR" grid_area_id = "test2" background_color = "#cc0000" to_page = "/smr"/>
      <MainLinkButton title = "Dolina lotnicza" grid_area_id = "test3" background_color = "#ff9900" to_page = "/dolinalotnicza"/>
      <MainLinkButton title = "Izera" grid_area_id = "test4" background_color = "#666699" to_page = "/izera"/>
    </div>
    <div>
      <h1>Autor Strony: Cezary Brejda</h1>
    </div>
  </div>
  

</template>

<style scoped>

h1{
  margin-top: 1vh;
}

.main-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
}

.buttons {
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
