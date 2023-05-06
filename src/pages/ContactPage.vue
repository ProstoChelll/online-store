<script setup lang="ts">
import { onMounted } from "vue";
import { useStore } from "../store/store";
const store = useStore();

onMounted(() => {
  store.setDocumentTitle("Contacts");
  console.log(store.documentTitle);
});
</script>
<template>
  <slot><p>ContactPage</p></slot>
</template>

<style module scoped></style>
