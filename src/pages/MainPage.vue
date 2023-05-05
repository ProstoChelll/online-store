<script setup lang="ts">
import { PageTemplate } from "../layouts/allLayout";
import { AdBlock } from "../components/allComponents";
import { ChoseCovers } from "../components/allComponents";
import { Headphones } from "../components/allComponents";
import { WirelessHeadphones } from "../components/allComponents";
</script>

<template>
  <PageTemplate>
    <template #header><span></span></template>
    <template #ad><AdBlock class="mt-[22px] mb-11" /></template>
    <template #body>
      <div><ChoseCovers /></div>
      <div class="ml-[90px]"><Headphones /></div>
      <div><WirelessHeadphones /></div>
    </template>
    <template #footer> </template>
  </PageTemplate>
</template>
