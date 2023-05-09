<script setup lang="ts">
import { Ref, ref } from "vue";
import useFavorites from "../transferUseFavorites"
const favorites = useFavorites()

interface Idata {
  img: string;
  name: string;
  rating: number;
  cost: number;
  oldCost: string;
  id:string
  active: Ref<boolean>
}

const dataArr: Idata[] = [
  { img: "none", name: "", rating: 0, cost: 0, oldCost: "", id: "", active:  ref(false) },
  { img: "none", name: "Apple AirPods", rating: 4.7, cost: 9527, oldCost: "", id: "AppleAirPods_1", active: ref(false) },
  { img: "none", name: "GERLAX GH-04", rating: 4.7, cost: 6527, oldCost: "", id: "GERLAXGH-04_1", active:  ref(false) },
  { img: "none", name: "BOROFONE BO4", rating: 4.5, cost: 7527, oldCost: "", id: "BOROFONEBO4_1", active: ref(false) },
];
</script>

<template>
  <div class="mt-[50px] mb-[20px]"><p class="text-[#838383] font-semibold text-xl leading-6">Беспроводные наушники</p></div>
  <div class="block">
    <div class="flex gap-[30px] mb-[30px] max-[880px]:block">
      <div v-for="i in 3" class="w-[350px] h-[470px] bg-white rounded-[30px] flex flex-col items-center justify-end max-[1235px]:w-[250px] max-[1235px]:h-[350px] max-[880px]:mb-[30px]" :id="dataArr[i].id">
        <span @click="favorites.setFavoritesTitle(dataArr[i]), dataArr[i].active.value = !dataArr[i].active.value" :class=" dataArr[i].active.value ? `icon-heart before: block mr-[308px] mb-[343px] cursor-pointer bg-red-700 max-[1235px]:mr-[200px] max-[1235px]:mb-[210px]`: `icon-heart before: block mr-[308px] mb-[343px] cursor-pointer hover:text-red-700 max-[1235px]:mr-[200px] max-[1235px]:mb-[210px]`" ></span>
        <img src="" />
        <div class="flex items-center gap-[105px]">
          <div>
            <p class="font-semibold text-[17px] leading-[21px] mt-5">{{ dataArr[i].name }}</p>
            <p class="mb-[20px] font-semibold tezt-[17px] lea-[21px] text-[#838383]"> <span class="icon-star text-[#FFCE7F] mr-[10px]"></span>{{ dataArr[i].rating }}</p>
          </div>
          <div>
            <p class="font-semibold text-[17px] leading-5 text-[#FFCE7F] pb-[3px]">{{ dataArr[i].cost }} &#8376</p>
            <p class="font-semibold text-[13px] leading-4 text-[#FFCE7F] mb-[11px]">{{ dataArr[i].oldCost }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>


</style>
