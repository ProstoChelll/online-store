<script setup lang="ts">
import { PageTemplate } from "../layouts";
import { productDescription, productReviews, BuyBtnFooter, CardProducStatic, MobileBuyBtnFooter } from "../components";
import { useRoute } from "vue-router";
import { useHeadphones } from "../store/HeadphonesData";
import { useWirelessHeadphones } from "../store/WirelesseHeadphonesData";

const route = useRoute();
const headphones = useHeadphones();
const wirelessHeadphones = useWirelessHeadphones();

let clientWidth = document.documentElement.clientWidth;
</script>
<template>
  <PageTemplate>
    <template #header><span></span></template>
    <template #body>
      <template v-for="item in headphones.bagProducts">
        <CardProducStatic
          v-if="item.id == route.params.id.slice(11)"
          :item="item"
          :img="item.img"
          :name="item.name"
          :rating="0"
          :cost="item.cost"
          :oldCost="item.oldCost"
          :id="item.id"
        >
        </CardProducStatic>
      </template>
      <template v-for="item in wirelessHeadphones.bagProducts">
        <CardProducStatic
          v-if="item.id == route.params.id.slice(11)"
          :item="item"
          :img="item.img"
          :name="item.name"
          :rating="0"
          :cost="item.cost"
          :oldCost="item.oldCost"
          :id="item.id"
        >
        </CardProducStatic>
      </template>
      <div :class="clientWidth > 768 ? 'flex justify-between w-[768px] md:w-[1110px]' : 'block'">
        <productDescription />
        <productReviews v-if="clientWidth < 768" />
        <BuyBtnFooter v-if="clientWidth > 768" />
      </div>
    </template>
    <template #footer><MobileBuyBtnFooter v-if="clientWidth < 768" /></template>
  </PageTemplate>

  <slot></slot>
</template>
