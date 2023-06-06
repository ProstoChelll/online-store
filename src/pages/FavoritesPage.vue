<script setup lang="ts">
import { computed } from "vue";
import { PageTemplate, CardProduct } from "../layouts";
import { useHeadphones } from "../store/HeadphonesData";
import { useWirelessHeadphones } from "../store/WirelesseHeadphonesData";
import { CardList } from "../layouts";

const headphones = useHeadphones();
let headphonesList = computed(() => headphones.getActiveCard);

const wirelessHeadphones = useWirelessHeadphones();
let wirelessHeadphonesList = computed(() => wirelessHeadphones.getActiveCard);

function favoriteHandler(id: string, data: any) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === id) {
      if (data == headphones.getActiveCard) {
        headphones.toogleFavoritesIcons(id);
      } else {
        wirelessHeadphones.toogleFavoritesIcons(id);
      }
    }
  }
}
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
            :isFavorive="item.isFavorive"
            @click="favoriteHandler(item.id, headphonesList)"
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
            :isFavorive="item.isFavorive"
            @click="favoriteHandler(item.id, wirelessHeadphonesList)"
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
