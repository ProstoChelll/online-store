<script setup lang="ts">
import { PageTemplate, CardList } from "../layouts";
import { useHeadphones } from "../store/HeadphonesData";
import { useWirelessHeadphones } from "../store/WirelesseHeadphonesData";
import { CardProduct } from "../components/index";
import { ref } from "vue";
import useHttp from "../server/server";

let headphonesList = ref();
let wirelessHeadphonesList = ref();

useHttp("/headphonesData").then((data) => {
  headphonesList.value = data.respons.value.headphonesData;
});
useHttp("/wirelessHeadphonesList").then((data) => {
  wirelessHeadphonesList.value = data.respons.value.wirelessHeadphonesList;
});

const headphones = useHeadphones();
const wirelessHeadphones = useWirelessHeadphones();

function favoriteHandler(id: string, data: any) {
  if (data == headphones.favoritesProducts) {
    headphones.addFavorites(id);
  } else {
    wirelessHeadphones.addFavorites(id);
  }
}
// const favoritesProducts: any[] = [];
// for (let i = 0; i <= wirelessHeadphonesList.length + headphonesList.value.length; i++) {
//   if (wirelessHeadphonesList.value[i].id == wirelessHeadphones.favoritesProducts.forEach((i) => i)) {
//     favoritesProducts.push(wirelessHeadphonesList.value[i]);
//   }
// }
// console.log(favoritesProducts);
//
</script>
<template>
  <PageTemplate>
    <template #header><span></span></template>
    <template #body>
      <h2 class="MainTxt">Избранное</h2>
      <CardList v-if="headphonesList.length > 0" title="">
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
            @click="favoriteHandler(item.id, headphones.favoritesProducts)"
          />
        </template>
      </CardList>
      <CardList v-if="wirelessHeadphonesList.length > 0" title="">
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
            @click="favoriteHandler(item.id, headphones.favoritesProducts)"
          />
        </template>
      </CardList>
    </template>
    <template #footer></template>
  </PageTemplate>
</template>

<style scoped>
.MainTxt {
  @apply mt-[19px] font-semibold text-[10px] leading-[24px] lg:text-[20px] lg:mt-[55px] lg:mb-[21px];
}
</style>
