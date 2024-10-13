<script setup>
// Import the header, footer, and main content components
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <!-- Use the header, main content, and footer components -->
  <Header />
  <main class="container">
    <RouterView />
  </main>
</template>

<style scoped>
/* You can add global styles here if necessary */
</style>