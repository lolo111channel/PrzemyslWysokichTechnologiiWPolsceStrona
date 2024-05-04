<script setup>
    import { RouterLink } from 'vue-router';
    import ContentComponent from '../components/ContentComponent.vue';
    import AIRVALLEY01 from "/src/assets/images/air_valley/01.jpg";
    import AIRVALLEY02 from "/src/assets/images/air_valley/02.jpg";
    import AIRVALLEY03 from "/src/assets/images/air_valley/03.jpg";
    import AIRVALLEY04 from "/src/assets/images/air_valley/04.jpg";
</script>


<template>

    <ContentComponent 
        title = "Dolina lotnicza" 
        :sources = "['https://dolinalotnicza.pl/','Dolinalotnicza.pl']" 
        :images = "[AIRVALLEY01,AIRVALLEY02,AIRVALLEY03,AIRVALLEY04]"
        :buttons_name = "['Strona główna','Izera','SMR','Easy Robots']"
        :buttons_link = "['/','/izera','/smr','/easyrobots']"
    >
        <p> Dolina lotnicza to stowarzyszenie firm zajmujące się przemysłem lotniczym należa do niej między innym: </p>
        <ul>
            <li>LOT Aircraft Maintenance Services Sp. z o.o.</li>
            <li>3M Poland Sp.Z O.O</li>
            <li>i wiele więcej</li>
        </ul><br/>
        <p>Dolina zlokalizowana jest w połudiowo-wschodniej Polsce</p><br/>
        <p>
            Celem stowarzyszenia jest promocja polskiego przemysłu, wspieranie przedsiębiorstw z przemysłu lotniczego, dalsze rozwój badań w zakresie lotnictwa i inne cele które znajdują się na stronie.
        </p>
    </ContentComponent>

</template>
  
<style scoped>
</style>
  