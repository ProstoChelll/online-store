<script setup lang="ts"></script>

<template>
  <div class="Display">
    <img src="../../../public/bag.png" class="mt-[85px]" />
    <h3 class="BagEmpty">Корзина пуста</h3>
    <p class="BagText">Но это никогда не поздно исправить :)</p>
    <router-link to="/"><button class="BagBtn">В каталог товаров</button></router-link>
  </div>
</template>

<style scoped>
.Display {
  @apply flex flex-col justify-center items-center;
}
.BagEmpty {
  @apply font-medium text-[20px] leading-[37px] text-[#101010] lg:font-medium lg:text-[30px] lg:leading-[37px] lg:mt-[30px] lg:text-[#101010];
}
.BagText {
  @apply font-normal text-[8px] leading-[24px] text-[#838383] lg:font-normal lg:text-[20px] lg:leading-[24px] lg:text-[#838383];
}
.BagBtn {
  @apply bg-[#101010] w-[140px] h-[25px] text-white rounded-[20px] text-[10px] lg:bg-[#101010] lg:w-[540px] lg:h-[65px] lg:mb-[103px] lg:mt-[30px] lg:text-white lg:rounded-[20px] lg:text-[20px];
}
</style>
