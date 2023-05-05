<script setup lang="ts">
import * as image from "../transmitsImages";
</script>

<template>
  <div class="text-[#838383] font-semibold text-xl leading-6 mb-5"><p>Чехлы</p></div>
  <div class="flex gap-[30px]">
    <div class="w-[350px] h-[470px] bg-white rounded-[30px] flex flex-col items-center justify-end">
      <span class="icon-heart before: block mr-[308px] mb-[51px] cursor-pointer hover:text-red-700"></span>
      <image.GlassCover />
      <p class="font-semibold text-[17px] leading-[21px] a mb-[50px] mt-5">Стеклянные</p>
    </div>
    <div class="w-[350px] h-[470px] bg-white rounded-[30px] flex flex-col items-center justify-end">
      <span class="icon-heart before: block mr-[308px] mb-[51px] cursor-pointer hover:text-red-700"></span>
      <image.SiliconeCover />
      <p class="font-semibold text-[17px] leading-[21px] mb-[50px] mt-5">Силиконовые</p>
    </div>
    <div class="w-[350px] h-[470px] bg-white rounded-[30px] flex flex-col items-center justify-end">
      <span class="icon-heart before: block mr-[308px] mb-[51px] cursor-pointer hover:text-red-700"></span>
      <image.LeaverCover />
      <p class="font-semibold text-[17px] leading-[21px] mb-[50px] mt-5">Кожаные</p>
    </div>
  </div>
</template>

<style scoped></style>
