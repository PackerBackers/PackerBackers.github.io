<template>
  <div>
    <nav class="navbar">
      <ul class="nav-links">
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/maps">Map</RouterLink></li>
        <li><RouterLink to="/friends">Friends</RouterLink></li>
        <li><RouterLink to="/chats">Chat</RouterLink></li>
      </ul>
    </nav>

    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
/* Basic reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.navbar {
  background-color: #333;
  padding: 0.5rem 1rem;
  width: 100%;       /* Ensures the navbar spans the full width */
}

.nav-links {
  list-style: none;
  display: flex;
  justify-content: center;  /* Centers the navigation links */
}

.nav-links li {
  margin: 0 1rem;  /* Spacing between links */
}

.nav-links li a {
  color: #fff;
  text-decoration: none;
}

.nav-links li a:hover {
  text-decoration: underline;
}

/* Active link styling */
.nav-links li a.router-link-exact-active {
  font-weight: bold;
}

/* Optional: Make the navbar fixed at the top */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

/* Adjust the content to not be hidden under the fixed navbar */
.content {
  margin-top: 3rem; /* Adjust this value to match the navbar height */
}
</style>
