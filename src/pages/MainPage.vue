<script setup lang="ts">
import { PageTemplate } from "../layouts";
import { AdBlock, CardList, CardProduct, CardCategory } from "../components";
import { ref } from "vue";

import { type Iproduct } from "@/types/index.ts";

const coversList: Iproduct[] = [
  {
    name: "Apple BYZ S852I",
    rating: 4.7,
    cost: 2927,
    oldCost: 3527,
    id: "AppleBYZS852I",
    isFavorive: ref(false),
  },
];

const headphonesList: Iproduct[] = [
  { name: "", rating: 0, cost: 0, oldCost: 0, id: "", isFavorive: ref(false) },
  {
    name: "Apple BYZ S852I",
    rating: 4.7,
    cost: 2927,
    oldCost: 3527,
    id: "AppleBYZS852I",
    isFavorive: ref(false),
  },
  {
    name: "Apple EarPods",
    rating: 4.5,
    cost: 2327,
    oldCost: 0,
    id: "AppleEarPods",
    isFavorive: ref(false),
  },
  {
    name: "Apple EarPods",
    rating: 4.5,
    cost: 2327,
    oldCost: 0,
    id: "AppleEarPods",
    isFavorive: ref(false),
  },
  {
    name: "Apple BYZ S852I",
    rating: 4.7,
    cost: 2327,
    oldCost: 3527,
    id: "AppleBYZS852I_1",
    isFavorive: ref(false),
  },
  {
    name: "Apple EarPods",
    rating: 4.5,
    cost: 2327,
    oldCost: 0,
    id: "AppleEarPods_1",
    isFavorive: ref(false),
  },
  {
    name: "Apple EarPods",
    rating: 4.5,
    cost: 2327,
    oldCost: 0,
    id: "AppleEarPods_1",
    isFavorive: ref(false),
  },
];
const wirelessHeadphonesList: Iproduct[] = [
  {
    name: "Apple BYZ S852I",
    rating: 4.7,
    cost: 2927,
    oldCost: 3527,
    id: "AppleBYZS852I",
    isFavorive: ref(false),
  },
];

function editHeadphones(id: string) {
  for (let i = 0; i < headphonesList.length; i++) {
    if (headphonesList[i].id === id) {
      headphonesList[i].isFavorive.value = !headphonesList[i].isFavorive.value;
    }
  }
}
</script>

<template>
  <PageTemplate>
    <template #header><span></span></template>
    <template #ad><AdBlock class="mt-[22px] mb-11" /></template>
    <template #body>
      <CardList title="Чехлы">
        <template v-for="item in coversList">
          <CardCategory :name="item.name" :id="item.id" />
        </template>
      </CardList>
      <CardList title="Наушники">
        <template v-for="item in headphonesList">
          <CardProduct
            :name="item.name"
            :rating="item.rating"
            :cost="item.cost"
            :oldCost="item.oldCost"
            :id="item.id"
            :isFavorive="item.isFavorive"
            @click="editHeadphones(item.id)"
          />
        </template>
      </CardList>
      <CardList title="Беспроводные наушники ">
        <template v-for="item in wirelessHeadphonesList">
          <CardProduct
            :name="item.name"
            :rating="item.rating"
            :cost="item.cost"
            :oldCost="item.oldCost"
            :id="item.id"
            :isFavorive="item.isFavorive"
          />
        </template>
      </CardList>
      <CardList title="Беспроводные наушники ">
        <template v-for="item in wirelessHeadphonesList">
          <CardProduct
            :name="item.name"
            :rating="item.rating"
            :cost="item.cost"
            :oldCost="item.oldCost"
            :id="item.id"
            :isFavorive="item.isFavorive"
          />
        </template>
      </CardList>
    </template>
    <template #footer></template>
  </PageTemplate>
</template>
