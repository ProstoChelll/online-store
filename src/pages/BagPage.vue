<script setup lang="ts">
import { onMounted } from "vue";
import { useStore } from "../store/store";
const store = useStore();

onMounted(() => {
  store.setDocumentTitle("Bag");
});
</script>
<template>
  <h1>Bag Page</h1>
  <slot></slot>
</template>
