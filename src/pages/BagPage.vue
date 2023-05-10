<script setup lang="ts">
import { onMounted } from "vue";
import { useStore } from "../store/store";

import { PageTemplate } from "../layouts/allLayout";
const store = useStore();

onMounted(() => {
  store.setDocumentTitle("bag");
});
</script>
<template>
  <PageTemplate>
    <template #header><span></span></template>
    <template #footer></template>
  </PageTemplate>
</template>
