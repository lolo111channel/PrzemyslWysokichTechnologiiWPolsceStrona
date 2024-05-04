<script setup>
    import { RouterLink } from 'vue-router';
    import ContentComponent from '../components/ContentComponent.vue';
    import SMR01 from "/src/assets/images/smr/01.jpg";
    import SMR02 from "/src/assets/images/smr/02.png";
    import SMR03 from "/src/assets/images/smr/03.png";
    import SMR04 from "/src/assets/images/smr/04.png";
</script>


<template>

    <ContentComponent 
        title = "SMR - małe reaktory modułowe" 
        :sources = "['https://www.orlen.pl/pl/zrownowazony-rozwoj/projekty-transformacyjne/smr','Orlen.pl']" 
        :images = "[SMR01,SMR02,SMR03,SMR04]"
        :buttons_name = "['Strona główna','Izera','Dolina Lotnicza','Easy Robots']"
        :buttons_link = "['/','/izera','/dolinalotnicza','/easyrobots']"
    >
        <p> Jest to technologia małych reaktorów jądrowych, jest to jedna z najbardziej efektywnych, najtańszych i bezpiecznych technologii produkcji energii.</p><br/>
        <p> Odpowiedzialne za przygotowanie i komercjalizację tej technologii w Polsce jest Orlen.</p><br/>
        <p>Pierwszy mały blok jądrowy ma pojawić się do 2030 roku. Nie jest znana miejsce budowy, ale na stronie są podane prawdopodobne miejsca budowy.</p>
        
    </ContentComponent>

</template>
  
<style scoped>
</style>
  