<script setup lang="ts">
import {  ref } from "vue";
import {useFavorites} from "../../store/favorites"
const favorites = useFavorites()
import { type Iproduct } from '../../types'
 
 

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
  <div class="mt-[30px] mb-[20px]"><p class="flex justify-start text-[#838383] font-semibold text-xl leading-6">Наушники</p></div>
  <div class="flex flex-col items-center">
    <div class="flex gap-[30px] mb-[30px] max-[880px]:block">
      <div v-for="i in 3" class="w-[350px] h-[470px] bg-white rounded-[30px] flex flex-col items-center justify-end max-[1235px]:w-[250px] max-[1235px]:h-[350px] max-[880px]:mb-[30px]" :key="i" :id="dataArr[i].id">
        <span @click="clickFavoritesHandler(dataArr[i]), dataArr[i].active.value = !dataArr[i].active.value " :class=" dataArr[i].active.value ? `icon-heart before: block mr-[308px] mb-[343px] cursor-pointer bg-red-700 max-[1235px]:mr-[200px] max-[1235px]:mb-[210px]`: `icon-heart before: block mr-[308px] mb-[343px] cursor-pointer hover:text-red-700 max-[1235px]:mr-[200px] max-[1235px]:mb-[210px]`" ></span>
        <div class="flex items-center gap-[105px]">
          <div>
            <p class="font-semibold text-[17px] leading-[21px] mt-5">{{ dataArr[i].name }}</p>
            <p class="mb-[20px] font-semibold text-[17px] leading-[21px] text-[#838383]"> <span class="icon-star text-[#FFCE7F] mr-[10px]"></span>{{ dataArr[i].rating }}</p>
          </div>
          <div>
            <p class="font-semibold text-[17px] leading-5 text-[#FFCE7F] pb-[3px]">{{ dataArr[i].cost }} &#8376</p>
            <p class="font-semibold text-[13px] leading-4 text-[#FFCE7F] mb-[11px]">{{ dataArr[i].oldCost }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex gap-[30px] ml-[-90px] max-[880px]:block max-[880px]:ml-[0]">
      <div v-for="i in 6">
        <div v-if="i >= 4" class="w-[350px] h-[470px] bg-white rounded-[30px] flex flex-col items-center justify-end max-[1235px]:w-[250px] max-[1235px]:h-[350px] max-[880px]:mb-[30px]" :id="dataArr[i].id">
          <span @click="favorites.setFavoritesTitle(dataArr[i]), dataArr[i].active.value  = !dataArr[i].active.value " :class=" dataArr[i].active.value ? `icon-heart before: block mr-[308px] mb-[343px] cursor-pointer bg-red-700 max-[1235px]:mr-[200px] max-[1235px]:mb-[210px]`: `icon-heart before: block mr-[308px] mb-[343px] cursor-pointer hover:text-red-700 max-[1235px]:mr-[200px] max-[1235px]:mb-[210px]`" ></span>
          <div class="flex items-center gap-[105px]">
            <div>
              <p class="font-semibold text-[17px] leading-[21px] mt-5">{{ dataArr[i].name }}</p>
              <p class="mb-[20px] font-semibold text-[17px] leading-[21px] text-[#838383]"> <span class="icon-star text-[#FFCE7F] mr-[10px]"></span>{{ dataArr[i].rating }}</p>
            </div>
            <div>
              <p class="font-semibold text-[17px] leading-5 text-[#FFCE7F] pb-[3px]">{{ dataArr[i].cost }} &#8376</p>
              <p class="font-semibold text-[13px] leading-4 text-[#FFCE7F] mb-[11px]">{{ dataArr[i].oldCost }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
