<script setup lang="ts">
import { CardList, PageTemplate } from "../layouts";
import { AdBlock, CardCategory, CardProduct } from "../components";
import useHttp from "../server/server";
import { ref } from "vue";
import { useHeadphones } from "../store/HeadphonesData";
import { useWirelessHeadphones } from "../store/WirelesseHeadphonesData";

const headphones = useHeadphones();
const wirelessHeadphones = useWirelessHeadphones();

let loading = ref(false);
let error = ref();
let headphonesList = ref();
let coversList = ref();
let wirelessHeadphonesList = ref();

useHttp("/headphonesData").then((data) => {
  headphonesList.value = data.respons.value.headphonesData;
  loading.value = data.loading.value;
  error.value = data.error.value;
});
useHttp("/coversList").then((data) => {
  coversList.value = data.respons.value.coversList;
  loading.value = data.loading.value;
  error.value = data.error.value;
});

useHttp("/wirelessHeadphonesList").then((data) => {
  wirelessHeadphonesList.value = data.respons.value.wirelessHeadphonesList;
  loading.value = data.loading.value;
  error.value = data.error.value;
});

function favoriteHandler(id: string, data: any) {
  if (data == headphonesList) {
    headphones.addFavorites(id);
  } else {
    wirelessHeadphones.addFavorites(id);
  }
}
</script>

<template>
  <PageTemplate>
    <template #header><span></span></template>
    <template #ad><AdBlock /></template>
    <template #body>
      <CardList title="Чехлы">
        <template v-for="item in coversList">
          <CardCategory :img="item.img" :name="item.name" :id="item.id" />
        </template>
      </CardList>
      <CardList title="Наушники">
        <template v-for="item in headphonesList">
          <CardProduct
            :item="item"
            :img="item.img"
            :name="item.name"
            :rating="item.rating"
            :cost="item.cost"
            :oldCost="item.oldCost"
            :id="item.id"
            :class="item.class"
            @click="favoriteHandler(item.id, headphonesList)"
          />
        </template>
      </CardList>
      <CardList title="Беспроводные наушники">
        <template v-for="item in wirelessHeadphonesList">
          <CardProduct
            :item="item"
            :img="item.img"
            :name="item.name"
            :rating="item.rating"
            :cost="item.cost"
            :oldCost="item.oldCost"
            :id="item.id"
            :class="item.class"
            @click="favoriteHandler(item.id, wirelessHeadphonesList)"
          />
        </template>
      </CardList>
    </template>
    <template #footer></template>
  </PageTemplate>
</template>
