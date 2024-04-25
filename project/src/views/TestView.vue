<script setup>
    import { RouterLink } from 'vue-router';
    import MainLinkButton from '../components/MainLinkButton.vue';
</script>


<template>
    <div class="content-view-container">
      <div class="buttons">

        <RouterLink class="button-router-link" to="/">
            Strona główna
        </RouterLink>
      </div>

      <div class="two-columns">

        <div class="content">

        </div>

        <div class="column-container">
            <div class="images">

                <div>
                    <div class="image"></div>
                    <div class="image"></div>
                </div>
                <div>
                    <div class="image"></div>
                    <div class="image"></div>
                </div>

            </div>

            <div class="sources">

            </div>
        </div>

      </div>


    </div>
</template>
  
<style scoped>



.column-container {
    width: 50%;
    height: 80%;

    margin: 1vh;

    display: flex;
    justify-content: center;
    align-items: center;

    flex-flow: column nowrap;
}

.images {
    width: 100%;
    height: 80%;
    
    margin-bottom: 1vh;
    
    display: flex;
    justify-content: center;
    align-items: center;

}


.image {
    border: 1px solid white;

    width: 5vh;
    height: 5vh;

    margin: 1vh;
}

.sources {
    width: 100%;
    height: 10%;

    margin-top: 1vh;
    border: 1px solid white;
}


.content { 
    width: 70%;
    height: 70%;

    margin:1vh;

    border: 1px solid white;
}

.two-columns {

    width: 95%;
    height: 90%;

    display: flex;
    justify-content: center;
    align-items: center;

    flex-flow: row nowrap;
}

.button-router-link {
    border: 1px solid black;
    color: white;    
    padding: 1vh;

    background-color: #003300;
}




.content-view-container {
    height: 90vh;
    width: 100vh;

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

    margin: 1vh;
}


</style>
  