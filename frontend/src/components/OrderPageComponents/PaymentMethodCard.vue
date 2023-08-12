<script setup lang="ts"></script>

<template>
  <div class="card pl-[14px] pt-[15px] pr-[9px] mb-[20px]">
    <p class="mb-[25px]">Способ оплаты</p>
    <div class="flex flex-col gap-[5px]">
      <div class="flex justify-between">
        <div class="flex items-center gap-[5px]">
          <p class="icon-visa"></p>
          <p>icon-visa</p>
        </div>
        <p class="text-[13px] icon-arrow"></p>
      </div>
      <div class="flex justify-between">
        <div class="flex items-center gap-[5px]">
          <p class="icon-promo"></p>
          <p>Есть промокод?</p>
        </div>
        <p class="text-[5px] rotate-[-90deg] icon-arrow"></p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  @apply w-[445px] h-[127px] bg-[#FFF] rounded-[30px] shadow-[0px_0px_20px_0px_rgba(0,_0,-0,_0.10)];
}
</style>
