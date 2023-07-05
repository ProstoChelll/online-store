<script setup lang="ts">
import { ref } from "vue";

let tog = ref(false);
</script>

<template>
  <div
    @click="tog = !tog"
    :class="[
      $style.description,

      {
        'h-[200px]': tog,
      },
    ]"
  >
    <p :class="$style.descriptionTxt">Описание и характеристики</p>
    <p :class="$style.descriptionArray">&lsaquo;</p>
  </div>
</template>

<style module scoped>
.description {
  @apply flex justify-around pl-[10px] pr-[5px] mt-[30px] w-[280px] bg-white rounded-[15px] cursor-pointer lg:w-[377px] md:w-[724px] md:justify-center;
}
.descriptionTxt {
  @apply pt-[13px] pb-[13px] text-[17px] leading-[21px] font-semibold lg:pt-[23px] lg:pb-[23px];
}
.descriptionArray {
  @apply -rotate-90 pr-[30px] pb-[13px] text-[30px] text-[#101010] h-[22px] lg:h-[35px] lg:pb-[23px] md:pt-[40px] md:pl-[20px];
}
</style>
