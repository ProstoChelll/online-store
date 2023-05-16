<script setup lang="ts">
import { PageTemplate } from "../layouts";
import { useHeadphones } from "../store/HeadphonesData";
import { useWirelessHeadphones } from "../store/WirelesseHeadphonesData";
import { CardList, CardProduct } from "../components";
import { ref } from "vue";

const headphones = useHeadphones();
let headphonesList = ref(headphones.getActiveCard);

const wirelessHeadphones = useWirelessHeadphones();
let wirelessHeadphonesList = ref(wirelessHeadphones.getActiveCard);

function toogleIconHeart(id: string, data: any) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === id) {
      if (data == headphonesList.value) {
        headphones.getActiveCard;
        headphones.tooggleIcons(i);
      } else {
        wirelessHeadphones.tooggleIcons(i);
        wirelessHeadphones.getActiveCard;
      }
    }
  }
  console.log(headphonesList.value);
}
</script>
<template>
  <PageTemplate>
    <template #header><span></span></template>
    <template #body>
      <h2 class="favoritesTxtInFavoritsPage lg:lgFavoritesTxtInFavoritsPage">Избранное</h2>
      <CardList v-if="headphonesList.length !== 0" title="Наушники">
        <template v-for="item in headphonesList">
          <CardProduct
            :img="item.img"
            :name="item.name"
            :rating="item.rating"
            :cost="item.cost"
            :oldCost="item.oldCost"
            :id="item.id"
            :isFavorive="item.isFavorive"
            @clicked="toogleIconHeart(item.id, headphonesList)"
          />
        </template>
      </CardList>
      <CardList v-if="wirelessHeadphonesList.length !== 0" title="Беспроводные наушники ">
        <template v-for="item in wirelessHeadphonesList">
          <CardProduct
            :img="item.img"
            :name="item.name"
            :rating="item.rating"
            :cost="item.cost"
            :oldCost="item.oldCost"
            :id="item.id"
            :isFavorive="item.isFavorive"
            @clicked="toogleIconHeart(item.id, wirelessHeadphonesList)"
          />
        </template>
      </CardList>
    </template>
    <template #footer></template>
  </PageTemplate>
</template>

<style module scoped></style>
