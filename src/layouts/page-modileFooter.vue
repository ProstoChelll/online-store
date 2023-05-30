<script setup lang="ts"></script>

<template>
  <slot>
    <div class="flex gap-[17px] mt-[20px]">
      <div class="littleCard">
        <p class="icon-basket text-white text-[22px]"></p>
      </div>
      <div class="bigCard">
        <p class="text-white">Купить сейчас!</p>
      </div>
      <div class="littleCard">
        <p class="icon-Instagram text-white text-[22px]"></p>
      </div>
    </div>
  </slot>
</template>

<style scoped>
.littleCard {
  @apply flex items-center justify-center w-[65px] h-[65px] bg-[#101010] rounded-[15px] cursor-pointer;
}
.bigCard {
  @apply flex items-center justify-center w-[215px] h-[65px] bg-[#101010] rounded-[15px] cursor-pointer;
}
</style>
