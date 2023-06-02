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
  @apply flex justify-around mt-[30px] w-[377px] bg-white rounded-[15px] cursor-pointer;
}
.descriptionTxt {
  @apply pt-[23px] pb-[23px] text-[17px] leading-[21px] font-semibold;
}
.descriptionArray {
  @apply -rotate-90 pr-[30px] pb-[23px] text-[30px] text-[#101010] h-[35px];
}
</style>
