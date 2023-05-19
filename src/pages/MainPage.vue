<script setup lang="ts">
import { PageTemplate } from "../layouts";
import { AdBlock, CardList, CardProduct, CardCategory, saveNotice } from "../components";
import { useHeadphones } from "../store/headphonesData";
import { useCovers } from "../store/coversData";
import { useWirelessHeadphones } from "../store/wirelesseHeadphonesData";
import { ref } from "vue";

const headphones = useHeadphones();
const headphonesList = headphones.headphonesData;

const covers = useCovers();
const coversList = covers.coversList;

const wirelessHeadphones = useWirelessHeadphones();
const wirelessHeadphonesList = wirelessHeadphones.wirelessHeadphonesList;

function favoriteHandler(id: string, data: any) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === id) {
      if (data == headphonesList) {
        headphones.tooggleIcons(i);
      } else {
        wirelessHeadphones.tooggleIcons(i);
      }
    }
  }
}

let saveToogle = ref(false);

function tooggleSave() {
  saveToogle.value = !saveToogle.value;
  setTimeout(() => {
    saveToogle.value = !saveToogle.value;
  }, 1100);
}
console.log(saveToogle);
</script>

<template>
  <PageTemplate>
    <template #header><span></span></template>
    <template #ad><AdBlock /></template>
    <template #body>
      <saveNotice :click="saveToogle" />
      <CardList title="Чехлы">
        <template v-for="item in coversList">
          <CardCategory :img="item.img" :name="item.name" :id="item.id" />
        </template>
      </CardList>
      <CardList title="Наушники">
        <template v-for="item in headphonesList">
          <CardProduct
            :img="item.img"
            :name="item.name"
            :rating="item.rating"
            :cost="item.cost"
            :oldCost="item.oldCost"
            :id="item.id"
            :isFavorive="item.isFavorive"
            @click="favoriteHandler(item.id, headphonesList), tooggleSave()"
          />
        </template>
      </CardList>
      <CardList title="Беспроводные наушники ">
        <template v-for="item in wirelessHeadphonesList">
          <CardProduct
            :img="item.img"
            :name="item.name"
            :rating="item.rating"
            :cost="item.cost"
            :oldCost="item.oldCost"
            :id="item.id"
            :isFavorive="item.isFavorive"
            @click="favoriteHandler(item.id, wirelessHeadphonesList), tooggleSave()"
          />
        </template>
      </CardList>
    </template>
    <template #footer></template>
  </PageTemplate>
</template>
