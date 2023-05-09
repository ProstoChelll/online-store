<script setup lang="ts">
import { PageTemplate } from "../layouts/allLayout";
import { AdBlock, ChoseCovers, Headphones, WirelessHeadphones } from "../components";
</script>

<template>
  <PageTemplate>
    <template #header><span class=""></span></template>
    <template #ad><AdBlock class="mt-[22px] mb-11" /></template>
    <template #body>
      <ChoseCovers />
      <Headphones />
      <WirelessHeadphones />
    </template>
    <template #footer> </template>
  </PageTemplate>
</template>
