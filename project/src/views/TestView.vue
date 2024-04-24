<script setup>
    import MainLinkButton from '../components/MainLinkButton.vue';
</script>


<template>
    <div class="content-view-container">
      <div class="buttons">
        <MainLinkButton title = "Przemysł Wysokich Technologii W Polsce" grid_area_id = "title" background_color = "#003300" to_page = "/"/>
        <MainLinkButton title = "Test"  background_color = "#993399" to_page = "/test"/>
        <MainLinkButton title = "Test2" background_color = "#cc0000" to_page = "/test"/>
        <MainLinkButton title = "Test3" background_color = "#ff9900" to_page = "/test"/>
        <MainLinkButton title = "Test4" background_color = "#666699" to_page = "/test"/>
      </div>
    </div>
</template>
  
<style scoped>

.content-view-container {
    height: 90vh;
    width: 600vh;

    border: 1px solid black;

    display: flex;
    
    align-items: center;
    
    flex-flow: column;
}

.buttons {
    width: 100%;
    height: 5vh;
    border: 1px solid white;

    display: flex;
    justify-content: center;
    align-items: center;
}

.main-link-button {
    color: red;

}

.router-link {
    color: red;
}

</style>
  