<script setup lang="ts">
import { onMounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

onMounted(() => {
  console.log("Product mounted!");
});
</script>
<template>
  <div>
    <h1>страница продукта</h1>
    <p>номер продукта {{ route.params.id }}</p>
  </div>
  <slot></slot>
</template>
