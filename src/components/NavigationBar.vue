<script setup lang="ts"></script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <div class="flex gap-4">
      <router-link to="/catalog">Catalog</router-link>
      <router-link to="/bag">Bag</router-link>
      <router-link to="/profile">Profile</router-link>
      <router-link to="/">Home</router-link>
    </div>
    <router-view />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
