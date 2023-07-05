<script setup lang="ts">
// import {useWirelessHeadphones} from "../../store/WirelesseHeadphonesData"
// import {useHeadphones} from "../../store/HeadphonesData"

// const headphones = useHeadphones();
// const WirelessHeadphones = useWirelessHeadphones();
</script>

<template>
  <div class="card mt-auto mb-[10px]">
    <div class="flex justify-between pt-[22px] pr-[21px] pl-[23px]">
      <p>ИТОГО</p>
      <!-- <p>{{ headphones.getAllCost + WirelessHeadphones.getAllCost }} &#8376</p> -->
    </div>
    <button class="w-[100% h-[55px] text-white bg-black rounded-[15px] mt-auto">Перейти к оформлению</button>
  </div>
</template>

<style scoped>
.card {
  @apply w-[280px] h-[124px] bg-white flex flex-col shadow-[0px_0px_20px_0px_rgba(0,0,0,0.5)] rounded-[15px];
}
</style>
