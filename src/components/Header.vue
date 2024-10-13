<script setup>
import { RouterLink, useRoute } from 'vue-router';
</script>

<template>
  <!-- Fixed bottom navigation bar with icons and white text -->
  <nav class="navbar fixed-bottom navbar-light bg-primary d-flex justify-content-around">
    <!-- Home link -->
    <RouterLink to="/" v-slot="{ isActive }" class="text-center">
      <i :class="['bi bi-house-door-fill', { 'active-icon': isActive }]" style="font-size: 1.5rem;"></i>
    </RouterLink>
    <!-- Map link -->
    <RouterLink to="/map" v-slot="{ isActive }" class="text-center">
      <i :class="['bi bi-geo-alt-fill', { 'active-icon': isActive }]" style="font-size: 1.5rem;"></i>
    </RouterLink>
    <!-- Friends link -->
    <RouterLink to="/friends" v-slot="{ isActive }" class="text-center">
      <i :class="['bi bi-people-fill', { 'active-icon': isActive }]" style="font-size: 1.5rem;"></i>
    </RouterLink>
    <!-- Chat link -->
    <RouterLink to="/chats" v-slot="{ isActive }" class="text-center">
      <i :class="['bi bi-chat-dots-fill', { 'active-icon': isActive }]" style="font-size: 1.5rem;"></i>
    </RouterLink>
  </nav>
</template>

<style scoped>
/* Default white icon color */
.navbar .text-center {
  text-decoration: none;
  color: #fff;
}

/* Active icon color */
.active-icon {
  color: #000; /* Change to black when active */
}

.navbar .text-center:hover {
  color: #f0f0f0; /* Slightly lighter hover effect */
}
</style>