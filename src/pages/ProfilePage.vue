<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  console.log("Profile mounted!");
});
</script>
<template>
  <h1>Profile Page</h1>
  <slot></slot>
</template>
