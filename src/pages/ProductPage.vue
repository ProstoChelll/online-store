<script setup lang="ts">
import { PageTemplate, MobileFooter } from "../layouts";
import {
  CardProduct,
  CardList,
  productDescription,
  productReviews,
} from "../components";
import { useRoute } from "vue-router";
import { useHeadphones } from "../store/HeadphonesData";
import { useWirelessHeadphones } from "../store/WirelesseHeadphonesData";
const route = useRoute();
const headphones = useHeadphones();
const headphonesList = headphones.headphonesData;

const wirelessHeadphones = useWirelessHeadphones();
const wirelessHeadphonesList = wirelessHeadphones.wirelessHeadphonesList;
</script>
<template>
  <PageTemplate>
    <template #header><span></span></template>
    <template #body>
      <CardList title="Наушники">
        <template v-for="item in headphonesList">
          <CardProduct
            v-if="item.id == route.params.id.slice(1)"
            :item="item"
            :img="item.img"
            :name="item.name"
            :rating="0"
            :cost="item.cost"
            :oldCost="item.oldCost"
            :id="item.id"
            :isFavorive="item.isFavorive"
            @click="item.isFavorive = !item.isFavorive"
          >
          </CardProduct>
        </template>
      </CardList>
      <CardList title="Беспроводные наушники">
        <template v-for="item in wirelessHeadphonesList">
          <CardProduct
            v-if="item.id == route.params.id.slice(1)"
            :item="item"
            :img="item.img"
            :name="item.name"
            :rating="0"
            :cost="item.cost"
            :oldCost="item.oldCost"
            :id="item.id"
            :isFavorive="item.isFavorive"
            @click="item.isFavorive = !item.isFavorive"
          >
          </CardProduct>
        </template>
      </CardList>
      <productDescription />
      <productReviews />
      <MobileFooter />
    </template>
    <template #footer> </template>
  </PageTemplate>

  <slot></slot>
</template>
