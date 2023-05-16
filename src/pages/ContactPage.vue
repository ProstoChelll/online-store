<script setup lang="ts">
import { PageTemplate } from "../layouts";
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
