<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <!-- Responsive Header with Navigation using Bootstrap classes -->
  <header class="bg-dark text-white py-3">
    <div class="container d-flex justify-content-between align-items-center flex-column flex-md-row">
      <h1 class="h3 mb-0">PackerBackers.io</h1>
      <nav class="d-flex flex-column flex-md-row">
        <RouterLink to="/" class="text-white my-2 my-md-0 mx-md-3">Home</RouterLink>
        <RouterLink to="/map" class="text-white my-2 my-md-0 mx-md-3">Map</RouterLink>
        <RouterLink to="/friends" class="text-white my-2 my-md-0 mx-md-3">Friends</RouterLink>
        <RouterLink to="/chats" class="text-white my-2 my-md-0 mx-md-3">Chat</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
/* Add custom styles for the header if needed */
</style>