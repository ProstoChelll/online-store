<script setup lang="ts">
import { PageTemplate } from "../layouts";
import { emptyBag } from "../components";
</script>
<template>
  <PageTemplate>
    <template #header><span></span></template>
    <template #body><emptyBag /> </template>
    <template #footer></template>
  </PageTemplate>
</template>
