<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <RouterView class = "router-view" />
  </header>
</template>

<style scoped>


header {
  line-height: 1.5;
  max-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}



</style>
