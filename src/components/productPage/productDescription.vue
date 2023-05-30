<script setup lang="ts"></script>

<template>
  <div class="description">
    <p class="descriptionTxt">Описание и характеристики</p>
    <p class="descriptionArray">&lsaquo;</p>
  </div>
</template>

<style scoped>
.description {
  @apply flex items-center justify-between mt-[30px] w-[377px] h-[65px] bg-white rounded-[15px] cursor-pointer;
}

.descriptionTxt {
  @apply pl-[23px] text-[17px] leading-[21px] font-semibold;
}
.descriptionArray {
  @apply -rotate-90 pb-[25px] text-[30px] text-[#101010];
}
</style>
