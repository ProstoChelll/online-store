<script setup lang="ts">
import { PageTemplate } from "../layouts";
import { productDescription, productReviews, BuyBtnFooter, CardProducStatic, MobileBuyBtnFooter } from "../components";
import { useRoute } from "vue-router";
import getDefiniteData from "../server/getDefiniteData";
import { ref } from "vue";

interface Iproduct {
  img: string;
  name: string;
  rating: number;
  cost: number;
  oldCost: number;
  id: string;
  isOnBag: boolean;
  quantity: number;
  class: string;
}

const route = useRoute();

const productData = {
  catalogName: String(route.params.id.slice(1, 11)),
  id: String(route.params.id.slice(11)),
};

let product = ref<Iproduct>();
getDefiniteData(productData, `/catalog/:${route.params.id.slice(1)}`).then((data) => {
  product.value = data.respons.value;
});

let clientWidth = document.documentElement.clientWidth;
</script>
<template>
  <PageTemplate>
    <template #header><span></span></template>
    <template #body
      >+
      <CardProducStatic
        v-if="product"
        :item="product"
        :img="product.img"
        :name="product.name"
        :rating="0"
        :cost="product.cost"
        :oldCost="product.oldCost"
        :id="product.id"
        :class="product.class"
      >
      </CardProducStatic>
      <div :class="clientWidth > 768 ? 'mt-[50px] flex justify-between w-[768px] md:w-[1110px]' : 'block'">
        <productDescription />
        <productReviews v-if="clientWidth < 768" />
        <BuyBtnFooter v-if="clientWidth > 768" />
      </div>
    </template>
    <template #footer><MobileBuyBtnFooter v-if="clientWidth < 768" /></template>
  </PageTemplate>

  <slot></slot>
</template>
