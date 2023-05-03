<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  console.log("BagPage mounted!");
});
</script>
<template>
  <h1>Bag Page</h1>
  <slot></slot>
</template>
