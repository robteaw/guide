<script setup lang="ts">
import Main from './views/Home.vue'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <main>
    <Navbar>
      <router-link to="/">HTML</router-link>
      <router-link to="/css">CSS</router-link>
      <router-link to="/javascript">JavaScript</router-link>
      <router-link to="/other">Other</router-link>
    </Navbar>
    <router-view />
    <Main />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
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
}
</style>
