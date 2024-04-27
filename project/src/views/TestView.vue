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

        <RouterLink class="button-router-link" to="/">
            Test1
        </RouterLink>

        <RouterLink class="button-router-link" to="/">
            Test2
        </RouterLink>

        <RouterLink class="button-router-link" to="/">
            Test3
        </RouterLink>
      </div>

      <div class="two-columns">

        <div class="content-container">
            <h1>Izera</h1>
            <div class="content">
                <p> Izera to Polski samochód elektryczny, tworzony przez spółke ElectroMobility Poland S.A. </p><br/>
                <p> Samochód ten będzie korzystał z architektury SEA.</p><br/>
                <p>
                    Spółka na stronie chwali się że: <br/>
                    "Auta polskiej marki Izera osiągną przyspieszenie od 0 do 100 km/h w niecałe 7 sekund!" i <br/> 
                    "Zdecydowaliśmy się zastosować baterie litowo-jonowe nowej generacji – dostępne w dwóch pojemnościach. Dzięki temu z większą baterią będziemy mogli przejechać na jednym ładowaniu ok 440 km (mierzonych zgodnie z procedurą WLTP). ".

                </p>

            </div>
        </div>

        <div class="column-container">
            <div class="images">

                <div>
                    <div class="image">
                        <img src="../assets/images/izera/izera_02.jpg">
                    </div>
                    <div class="image">
                        <img src="../assets/images/izera/izera_03.jpg">
                    </div>
                </div>
                <div>
                    <div class="image">
                        <img src="../assets/images/izera/izera_04.jpg">
                    </div>
                    <div class="image">
                        <img src="../assets/images/izera/izera_05.jpg">
                    </div>
                </div>

            </div>

            <div class="sources">
                <p>Źródła:</p>
                <a href="https://izera.pl/">Izera.pl</a>
            </div>
        </div>

      </div>


    </div>
</template>
  
<style scoped>

#app {
    background-image: url("../assets/images/izera/izera_01.jpg");
}


.column-container {
    width: 50%;
    height: 80%;

    margin: 1vh;

    display: flex;
    justify-content: space-between;
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

    width: 25vh;
    height: 25vh;

    margin: 1vh;
}

.image img {
    width: 100%;
    height: 100%;
}

.sources {
    width: 100%;
    height: 10%;

    margin-top: 1vh;
    border: 1px solid white;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
}


.content-container { 
    width: 70%;
    height: 80%;

    margin:1vh;

    border: 1px solid white;

    display: flex;
    justify-content: center;
    align-items: center;

    flex-flow: column nowrap;

    color: white;
}

.content-container h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20%;
    font-weight: bolder;
    letter-spacing: 0.24vh;
    text-align: center
}

.content {
    height: 80%;
    width: 75%;
    font-size: 1.2em;
}

.two-columns {

    width: 100%;
    height: 90%;

    display: flex;
    justify-content: center;
    align-items: center;

    flex-flow: row nowrap;
}

.button-router-link {
    border: 1px solid white;
    color: white;    
    padding: 1vh;

    width: 15vh;
    text-align: center;
    margin: 1vh;
}




.content-view-container {
    height: 90vh;
    width: 150vh;

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
    padding: 3vh;
}


</style>
  