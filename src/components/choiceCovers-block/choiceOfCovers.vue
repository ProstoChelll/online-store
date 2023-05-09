<script setup lang="ts">
import arr from "../getImages";
</script>

<template>
  <div class="txt text-[#838383] font-semibold text-xl leading-6 mb-5"><p>Чехлы</p></div>
  <div class="allcard flex gap-[30px]">
    <div
      class="card w-[350px] h-[470px] bg-white rounded-[30px] flex flex-col items-center justify-end max-[1235px]:w-[250px] max-[1235px]:h-[350px] max-[880px]:w-[140px] max-[880px]:h-[130px]"
    >
      <img class="max-[880px]:hidden" :src="arr[0].value" />
      <p class="font-semibold text-[17px] leading-[21px] a mb-[50px] mt-5">Стеклянные</p>
    </div>
    <div
      class="card w-[350px] h-[470px] bg-white rounded-[30px] flex flex-col items-center justify-end max-[1235px]:w-[250px] max-[1235px]:h-[350px] max-[880px]:w-[140px] max-[880px]:h-[130px]"
    >
      <p class="font-semibold text-[17px] leading-[21px] mb-[50px] mt-5">Силиконовые</p>
    </div>
    <div
      class="card w-[350px] h-[470px] bg-white rounded-[30px] flex flex-col items-center justify-end max-[1235px]:w-[250px] max-[1235px]:h-[350px] max-[880px]:w-[140px] max-[880px]:h-[130px]"
    >
      <p class="font-semibold text-[17px] leading-[21px] mb-[50px] mt-5">Кожаные</p>
    </div>
  </div>
</template>

<style scoped></style>
