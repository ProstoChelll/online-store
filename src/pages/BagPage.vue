<script setup lang="ts">
import { PageTemplate } from "../layouts";
import { emptyBag, fullBag, BagTotal } from "../components";
import { useHeadphones } from "../store/HeadphonesData";
import { useWirelessHeadphones } from "../store/WirelesseHeadphonesData";
const headphones = useHeadphones();
const WirelessHeadphones = useWirelessHeadphones();
const choosenProducts = headphones.getActiveBag.length + WirelessHeadphones.getActiveBag.length;

let clientWidth = document.documentElement.clientWidth;
</script>
<template>
  <PageTemplate>
    <template #header><span></span></template>
    <template #body>
      <div>
        <emptyBag v-if="choosenProducts == 0" />
        <fullBag v-if="choosenProducts != 0" />
      </div>
    </template>
    <template #footer><BagTotal v-if="choosenProducts != 0 && clientWidth < 768" /></template>
  </PageTemplate>
</template>
