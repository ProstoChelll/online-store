<script setup lang="ts">
import {  ref } from "vue";
import {useFavorites} from "../../store/favorites"
import { type Iproduct } from '@/types'
const favorites = useFavorites()



const dataArr: Iproduct[] = [
  { img: "none", name: "", rating: 0, cost: 0, oldCost: "", id: "", active:  ref(false) },
  { img: "none", name: "Apple AirPods", rating: 4.7, cost: 9527, oldCost: "", id: "AppleAirPods_1", active: ref(false) },
  { img: "none", name: "GERLAX GH-04", rating: 4.7, cost: 6527, oldCost: "", id: "GERLAXGH-04_1", active:  ref(false) },
  { img: "none", name: "BOROFONE BO4", rating: 4.5, cost: 7527, oldCost: "", id: "BOROFONEBO4_1", active: ref(false) },
];
</script>

<template>
  <div class="mt-[50px] mb-[10px]"><p class="cardsHeaderTxtStyle lg:lgCardsHeaderTxtStyle">Беспроводные наушники</p></div>
  <div class="block">
    <div class="flex gap-[30px] mb-[5px]">
      <div v-for="i in 3" class="CardStyle lg:lgCardStyle md:mdCardStyle" :id="dataArr[i].id">
        <span @click="favorites.setFavoritesTitle(dataArr[i]),
         dataArr[i].active.value = !dataArr[i].active.value"
        :class=" dataArr[i].active.value ? `icon-heart before: clickedIconHeard lg:lgPositionIconHeart md:mdPositionIconHeart `: `icon-heart before: noneClickedIconHeard lg:lgPositionIconHeart md:mdPositionIconHeart`" >
        </span>
        <img src="" />
        <div class="flex items-center gap-[5px] lg:gap-[25px] md:gap-[140px]">
          <div>
            <p class="middleAndBottomCardTxtStyle mt-5 lg:lgMiddleAndBottomCardTxtStyle">{{ dataArr[i].name }}</p>
            <p class="middleAndBottomCardTxtStyle mb-[5px] lg:lgMiddleAndBottomCardTxtStyle"> <span class="icon-star text-[#FFCE7F] mr-[2px]"></span>{{ dataArr[i].rating }}</p>
          </div>
          <div>
            <p class="middleAndBottomCardTxtStyle text-[#FFCE7F] pb-[3px] lg:lgMiddleAndBottomCardTxtStyle">{{ dataArr[i].cost }} &#8376</p>
            <p class="middleAndBottomCardTxtCostStyle mb-[-9px] lg:lgMiddleAndBottomCardTxtCostStyle">{{ dataArr[i].oldCost }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>


</style>
