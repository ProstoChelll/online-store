<script setup lang="ts">
import { ref } from "vue";

let tog = ref(false);
</script>

<template>
  <div
    @click="tog = !tog"
    :class="[
      $style.reviews,

      {
        'h-[200px]': tog,
      },
    ]"
  >
    <p :class="$style.reviewsTxt">Отзывы</p>
    <div class="flex items-center pr-[37px] pt-[10px] pb-[20px] h-[20px] lg:pb-[30px]">
      <p class="icon-star pr-[3px] text-[#FFCE7F]"></p>
      <p class="reviewsReating">4.7</p>
      <p class="-rotate-90 text-[30px] text-[#101010]">&lsaquo;</p>
    </div>
  </div>
</template>

<style module scoped>
.reviews {
  @apply flex justify-between mt-[30px] w-[280px] bg-white rounded-[15px] cursor-pointer pt-[10px] lg:w-[377px] lg:pt-[26px];
}
.reviewsTxt {
  @apply pl-[28px] text-[17px] leading-[21px] font-semibold;
}
.reviewsReating {
  @apply pb-[17px] font-semibold text-[17px] leading-[21px] text-[#838383];
}
</style>
