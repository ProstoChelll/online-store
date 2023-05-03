<script setup lang="ts">
import { onMounted } from "vue";
const id = "123";
onMounted(() => {
  console.log("Catalog mounted!");
});
</script>
<template>
  <h1>Catalog Page</h1>
  <div>
    <button class="border p-3 bg-slate-400">
      <router-link :to="`/catalog/:${id}`"> Go to Pruduct</router-link>
    </button>
  </div>
  <slot></slot>
</template>
