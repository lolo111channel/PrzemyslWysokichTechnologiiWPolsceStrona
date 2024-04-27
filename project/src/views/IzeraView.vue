<script setup>
    import { RouterLink } from 'vue-router';
    import ContentComponent from '../components/ContentComponent.vue';
</script>


<template>

    <ContentComponent 
        title = "Izera" 
        :sources = "['https://izera.pl/','Izera.pl']" 
        :images = "['/src/assets/images/izera/izera_02.jpg','/src/assets/images/izera/izera_03.jpg','/src/assets/images/izera/izera_03.jpg','/src/assets/images/izera/izera_04.jpg']"
        :buttons_name = "['Strona główna','Test1','Test2','Test3']"
        :buttons_link = "['/','about','test','/']"
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
  