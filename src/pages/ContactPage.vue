<script setup lang="ts">
import { PageTemplate } from "../layouts";

import { onMounted } from "vue";
import { useStore } from "../store/store";
const store = useStore();

onMounted(() => {
  store.setDocumentTitle("Contacts");
  console.log(store.documentTitle);
});
</script>
<template>
  <PageTemplate>
    <template #header><span></span></template>
    <template #body
      ><slot><p>ContactPage</p></slot></template
    >
    <template #footer></template>
  </PageTemplate>
</template>

<style module scoped></style>
