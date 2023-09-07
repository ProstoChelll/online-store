<script setup lang="ts">
import { PageTemplate } from "../layouts";
import { emptyBag, fullBag, BagTotal } from "../components";
import { useHeadphones } from "../store/HeadphonesData";
import { useWirelessHeadphones } from "../store/WirelesseHeadphonesData";
import { usePhones } from "../store/phonesData";
const headphones = useHeadphones();
const WirelessHeadphones = useWirelessHeadphones();
const phones = usePhones();
const choosenProducts = headphones.bagProducts.length + WirelessHeadphones.bagProducts.length + phones.bagProducts.length;

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
