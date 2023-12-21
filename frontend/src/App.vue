<script setup lang="ts">
import { Header } from "./layouts";
</script>

<template>
  <div class="h-full w-full flex justify-center">
    <Header />
    <router-view />
  </div>
</template>
