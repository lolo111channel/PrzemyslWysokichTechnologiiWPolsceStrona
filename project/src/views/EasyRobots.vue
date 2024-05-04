<script setup>
    import { RouterLink } from 'vue-router';
    import ContentComponent from '../components/ContentComponent.vue';
</script>


<template>

    <ContentComponent 
        title = "Easy Robots" 
        :sources = "['https://easyrobots.pl/o-nas/','EasyRobots.pl']" 
        :images = "['/src/assets/images/easyrobots/01.png','/src/assets/images/easyrobots/02.jpg','/src/assets/images/easyrobots/03.jpg','/src/assets/images/easyrobots/04.jpg']"
        :buttons_name = "['Strona główna','Izera','Dolina Lotnicza','SMR']"
        :buttons_link = "['/','/izera','/dolinalotnicza','/smr']"
    >
        <p> Jest to polska firma która zajmjue się automatyką.</p><br/>
        <p> Oferują roboty przemysłowe które służą w wielu gałeziach przemysłu</p><br/>
        <p> Fimra na stronie chwali się:</p>
        <p>"Wpisując się w światowe trendy przemysłu 4.0, dysponujemy technologiami produkcji najnowszej generacji i dbamy zarówno o nowoczesny design, który od razu przyciąga uwagę odbiorców, jak i funkcjonalność. Tworzymy dla producentów poszukujących rozwiązań, które zwiększają wydajność i poprawiają jakość produkcji."</p>
        
    </ContentComponent>

</template>
  
<style scoped>
</style>
  