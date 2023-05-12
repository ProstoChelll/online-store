<script setup lang="ts">
import { onMounted } from "vue";
import { useStore } from "../store/store";

import { PageTemplate } from "../layouts";
import { emptyBag } from "../components";
const store = useStore();

onMounted(() => {
  store.setDocumentTitle("bag");
});
</script>
<template>
  <PageTemplate>
    <template #header><span></span></template>
    <template #body><emptyBag /> </template>
    <template #footer></template>
  </PageTemplate>
</template>
