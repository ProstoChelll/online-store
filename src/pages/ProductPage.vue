<script setup lang="ts">
import { PageTemplate } from "../layouts";

import { onMounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

onMounted(() => {
  console.log("Product mounted!");
});
</script>
<template>
  <PageTemplate>
    <template #header><span></span></template>
    <template #body
      ><div>
        <h1>страница продукта</h1>
        <p>номер продукта {{ route.params.id }}</p>
      </div></template
    >
    <template #footer></template>
  </PageTemplate>

  <slot></slot>
</template>
