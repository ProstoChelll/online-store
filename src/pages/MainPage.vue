<script setup lang="ts">
import { PageTemplate } from "../layouts";
import { AdBlock, CardList, CardProduct, CardCategory } from "../components";
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
          <router-link :to="`/catalog/:${item.id}`">
            <CardProduct
              :item="item"
              :img="item.img"
              :name="item.name"
              :rating="item.rating"
              :cost="item.cost"
              :oldCost="item.oldCost"
              :id="item.id"
              :isFavorive="item.isFavorive"
              @click="favoriteHandler(item.id, headphonesList), tooggleSave()"
            />
          </router-link>
        </template>
      </CardList>

      <CardList title="Беспроводные наушники ">
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
