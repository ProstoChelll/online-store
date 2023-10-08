<script setup lang="ts"></script>
<template>
  <div class="AdBlock">
    <div>
      <p class="textStyleAdBlock">Аксессуары для<br />Iphone 13 Pro Max</p>
    </div>
    <div class="PositionImg">
      <img src="../../../public/adImage.png" />
    </div>
  </div>
</template>

<style scoped>
.AdBlock {
  @apply flex items-center justify-center w-[280px] h-[85px] rounded-[30px] bg-black mt-[32px] lg:mt-[92px] lg:mb-[24px] lg:w-[768px] lg:h-[197px] md:w-[1110px];
}
.textStyleAdBlock {
  @apply font-semibold text-[12px] text-white lg:font-semibold lg:text-[30px] lg:leading-[37px] lg:items-center;
}
.PositionImg {
  @apply mt-[-12px] w-[150px] lg:w-[361px] lg:mt-[-28px];
}
</style>
