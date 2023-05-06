<script setup lang="ts">
import { onMounted } from "vue";
import { useStore } from "../store/store";
const store = useStore();

onMounted(() => {
  store.setDocumentTitle("Catalog");
});
const id = "123";
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
