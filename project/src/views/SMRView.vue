<script setup>
    import { RouterLink } from 'vue-router';
    import ContentComponent from '../components/ContentComponent.vue';
</script>


<template>

    <ContentComponent 
        title = "SMR - małe reaktory modułowe" 
        :sources = "['https://www.orlen.pl/pl/zrownowazony-rozwoj/projekty-transformacyjne/smr','Orlen.pl']" 
        :images = "['/src/assets/images/smr/01.jpg','/src/assets/images/smr/02.png','/src/assets/images/smr/03.png','/src/assets/images/smr/04.png']"
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
  