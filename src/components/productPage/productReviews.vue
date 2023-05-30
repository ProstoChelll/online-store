<script setup lang="ts"></script>

<template>
  <div class="reviews">
    <p class="reviewsTxt">Отзывы</p>
    <div class="flex items-center">
      <p class="icon-star pr-[3px] text-[#FFCE7F]"></p>
      <p class="reviewsReating">4.7</p>
      <p class="-rotate-90 pb-[25px] text-[30px] text-[#101010]">&lsaquo;</p>
    </div>
  </div>
</template>

<style scoped>
.reviews {
  @apply flex items-center justify-between mt-[30px] w-[377px] h-[65px] bg-white rounded-[15px] cursor-pointer;
}
.reviewsTxt {
  @apply pl-[23px] text-[17px] leading-[21px] font-semibold;
}
.reviewsReating {
  @apply pr-[27px] font-semibold text-[17px] leading-[21px] text-[#838383];
}
</style>
