<script setup lang="ts">
// import * as image from "../transmitsImages";

interface Idata {
  name: string;
  rating: number;
  cost: number;
  oldCost: string;
}

// const dataImg:any[] = ["",image.AppleBYZS852I]

const dataArr: Idata[] = [
  { name: "", rating: 0, cost: 0, oldCost: "" },
  { name: "Apple BYZ S852I", rating: 4.7, cost: 2927, oldCost: "3527" },
  { name: "Apple EarPods", rating: 4.5, cost: 2327, oldCost: "" },
  { name: "Apple EarPods", rating: 4.5, cost: 2327, oldCost: "" },
  { name: "Apple BYZ S852I", rating: 4.7, cost: 2327, oldCost: "3527" },
  { name: "Apple EarPods", rating: 4.5, cost: 2327, oldCost: "" },
  { name: "Apple EarPods", rating: 4.5, cost: 2327, oldCost: "" },
];
</script>

<template>
  <div class="mt-[30px] mb-[20px]"><p class="text-[#838383] font-semibold text-xl leading-6">Наушники</p></div>
  <div class="block">
    <div class="flex gap-[30px] mb-[30px]">
      <div v-for="i in 3" class="w-[350px] h-[470px] bg-white rounded-[30px] flex flex-col items-center justify-end">
        <span class="icon-heart before: block mr-[308px] mb-[343px] cursor-pointer hover:text-red-700"></span>
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
    <div class="flex gap-[30px]">
      <div v-for="i in 6">
        <div v-if="i <= 3" class="w-[350px] h-[470px] bg-white rounded-[30px] flex flex-col items-center justify-end">
          <span class="icon-heart before: block mr-[308px] mb-[343px] cursor-pointer hover:text-red-700"></span>
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
  </div>
</template>

<style scoped></style>
