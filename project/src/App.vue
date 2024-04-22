<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MainLinkButton from './components/MainLinkButton.vue';
</script>

<template>
  <header>
    <div class="main-container">
      <MainLinkButton title = "Przemysł Wysokich Technologii W Polsce" grid_area_id = "title" background_color = "#003300"/>
      <MainLinkButton title = "Test" grid_area_id = "test" background_color = "#993399"/>
      <MainLinkButton title = "Test2" grid_area_id = "test2" background_color = "#cc0000"/>
      <MainLinkButton title = "Test3" grid_area_id = "test3" background_color = "#ff9900"/>
      <MainLinkButton title = "Test4" grid_area_id = "test4" background_color = "#666699"/>

    </div>
  </header>
</template>

<style scoped>

.main-container {
  width: 100%;

  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto;

  grid-template-areas: 
    "test2 test4 test"
    "test2 title test"
    "test3 test3 test";

}


header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
