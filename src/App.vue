<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/maps">Map</RouterLink>
        <RouterLink to="/friends">Friends</RouterLink>
        <RouterLink to="/chats">Chat</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  /* Removed max-height to prevent unnecessary expansion */
}

.logo {
  display: block;
  margin: 0 1rem 0 0; /* Adjusted margin for better alignment */
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
    align-items: center; /* Corrected from place-items */
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    align-items: center; /* Corrected from place-items */
    flex-wrap: nowrap;   /* Prevent wrapping to new lines */
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 0.5rem 0; /* Reduced padding */
    margin-top: 0;     /* Removed margin-top to reduce height */
  }
}
</style>
