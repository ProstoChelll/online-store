<script setup lang="ts">
import { PageTemplate } from "../layouts";
import { Registration } from "../components";
</script>

<template>
  <PageTemplate>
    <template #header></template>
    <template #body>
      <Registration />
    </template>
    <template #footer></template>
  </PageTemplate>
</template>

<style module scoped>
.btnReg {
  @apply h-[50px] w-[430px] rounded-[5px] text-[#fff];
}
</style>
