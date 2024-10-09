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

    <RouterView />
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
}

.nav-links {
  list-style: none;
  display: flex;
}

.nav-links li {
  margin-right: 1rem;
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
</style>
