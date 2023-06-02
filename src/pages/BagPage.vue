<script setup lang="ts">
import { PageTemplate } from "../layouts";
import { emptyBag, fullBag } from "../components";
import { useHeadphones } from "../store/HeadphonesData";
import { useWirelessHeadphones } from "../store/WirelesseHeadphonesData";
const headphones = useHeadphones();
const WirelessHeadphones = useWirelessHeadphones();
const choosenProducts = headphones.getActiveBag.length + WirelessHeadphones.getActiveBag.length;
</script>
<template>
  <PageTemplate>
    <template #header><span></span></template>
    <template #body><emptyBag v-show="choosenProducts == 0" /><fullBag v-if="choosenProducts != 0" /></template>
    <template #footer></template>
  </PageTemplate>
</template>
