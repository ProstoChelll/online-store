<script setup lang="ts">
import { onMounted } from "vue";
import { useStore } from "../store/store";
const store = useStore();

onMounted(() => {
  store.setDocumentTitle("bag");
});
</script>
<template>
  <h1>Bag Page</h1>
  <slot></slot>
</template>
