<script setup>
    import { RouterLink } from 'vue-router';
    import ContentComponent from '../components/ContentComponent.vue';
    import Izera01 from "/src/assets/images/izera/izera_02.jpg";
    import Izera02 from "/src/assets/images/izera/izera_03.jpg";
    import Izera03 from "/src/assets/images/izera/izera_04.jpg";
    import Izera04 from "/src/assets/images/izera/izera_05.jpg";
</script>


<template>

    <ContentComponent 
        title = "Izera" 
        :sources = "['https://izera.pl/','Izera.pl']" 
        :images = "[Izera01,Izera02,Izera03,Izera04]"
        :buttons_name = "['Strona główna','Dolina Lotnicza','SMR','Easy Robots']"
        :buttons_link = "['/','/dolinalotnicza','/smr','/easyrobots']"
    >
        <p> Izera to Polski samochód elektryczny, tworzony przez spółke ElectroMobility Poland S.A. </p><br/>
        <p> Samochód ten będzie korzystał z architektury SEA.</p><br/>
        <p>
            Spółka na stronie chwali się że: <br/>
            "Auta polskiej marki Izera osiągną przyspieszenie od 0 do 100 km/h w niecałe 7 sekund!" i <br/> 
            "Zdecydowaliśmy się zastosować baterie litowo-jonowe nowej generacji – dostępne w dwóch pojemnościach. Dzięki temu z większą baterią będziemy mogli przejechać na jednym ładowaniu ok 440 km (mierzonych zgodnie z procedurą WLTP). ".
        </p>
    </ContentComponent>

</template>
  
<style scoped>
</style>
  