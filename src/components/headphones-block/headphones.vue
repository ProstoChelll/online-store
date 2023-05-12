<script setup lang="ts">
import {  ref } from "vue";
import {useFavorites} from "../../store/favorites"
const favorites = useFavorites()
import { type Iproduct } from '@/types/index.ts'
 
 

const dataArr: Iproduct[] = [
  { name: "", rating: 0, cost: 0, oldCost: "", id: "", active: ref(false) },
  { name: "Apple BYZ S852I", rating: 4.7, cost: 2927, oldCost: "3527", id: "AppleBYZS852I", active:  ref(false) },
  { name: "Apple EarPods", rating: 4.5, cost: 2327, oldCost: "", id: "AppleEarPods", active:  ref(false) },
  { name: "Apple EarPods", rating: 4.5, cost: 2327, oldCost: "", id: "AppleEarPods", active:  ref(false) },
  { name: "Apple BYZ S852I", rating: 4.7, cost: 2327, oldCost: "3527", id: "AppleBYZS852I_1", active:  ref(false) },
  { name: "Apple EarPods", rating: 4.5, cost: 2327, oldCost: "", id: "AppleEarPods_1", active:  ref(false) },
  { name: "Apple EarPods", rating: 4.5, cost: 2327, oldCost: "", id: "AppleEarPods_1", active:  ref(false) },
];
function clickFavoritesHandler(data:Iproduct) {
  console.log(data)
  favorites.setFavoritesTitle(data)
  data.active.value = !data.active.value
}
</script>

<template>
  <div class="mt-[30px] mb-[10px]"><p class="cardsHeaderTxtStyle lg:lgCardsHeaderTxtStyle">Наушники</p></div>
    <div class="flex gap-[30px] mb-[30px]">
      <div v-for="i in 3" class="CardStyle lg:lgCardStyle md:mdCardStyle" :key="i" :id="dataArr[i].id">
        <span @click="clickFavoritesHandler(dataArr[i])" :class=" dataArr[i].active.value ? `icon-heart before: clickedIconHeard lg:lgPositionIconHeart md:mdPositionIconHeart`: `icon-heart before: noneClickedIconHeard lg:lgPositionIconHeart md:mdPositionIconHeart`" ></span>
        <div class="locationMiddleCard lg:gap-[20px] md:gap-[140px]">
          <div>
            <p class="middleAndBottomCardTxtStyle mt-5 lg:lgMiddleAndBottomCardTxtStyle">{{ dataArr[i].name }}</p>
            <p class="middleAndBottomCardTxtStyle mb-[5px] text-[#838383] lg:lgMiddleAndBottomCardTxtStyle"> <span class="icon-star text-[#FFCE7F] mr-[2px]"></span>{{ dataArr[i].rating }}</p>
          </div>
          <div>
            <p class="middleAndBottomCardTxtStyle text-[#FFCE7F] pb-[3px] lg:lgMiddleAndBottomCardTxtStyle">{{ dataArr[i].cost }} &#8376</p>
            <p class="middleAndBottomCardTxtCostStyle mb-[-9px] lg:lgMiddleAndBottomCardTxtCostStyle">{{ dataArr[i].oldCost }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex gap-[30px] ml-[-90px]">
      <div v-for="i in 6">
        <div v-if="i >= 4" class="CardStyle lg:lgCardStyle md:mdCardStyle" :id="dataArr[i].id">
          <span @click="clickFavoritesHandler(dataArr[i])" :class=" dataArr[i].active.value ? `icon-heart before: clickedIconHeard lg:lgPositionIconHeart md:mdPositionIconHeart`: `icon-heart before: noneClickedIconHeard lg:lgPositionIconHeart md:mdPositionIconHeart`" ></span>
          <div class="locationMiddleCard lg:gap-[20px] md:gap-[140px]">
            <div>
              <p class="middleAndBottomCardTxtStyle mt-5 lg:lgMiddleAndBottomCardTxtStyle">{{ dataArr[i].name }}</p>
              <p class="middleAndBottomCardTxtStyle mb-[5px] text-[#838383] lg:lgMiddleAndBottomCardTxtStyle"> <span class="icon-star text-[#FFCE7F] mr-[2px]"></span>{{ dataArr[i].rating }}</p>
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

<style scoped></style>
