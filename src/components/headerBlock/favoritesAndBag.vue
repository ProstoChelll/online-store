<script setup lang="ts">
import { useHeadphones } from "../../store/HeadphonesData";
import { useWirelessHeadphones } from "../../store/WirelesseHeadphonesData";

const headphones = useHeadphones();

const WirelessHeadphones = useWirelessHeadphones();
</script>

<template>
  <slot name="right">
    <div class="RightIcons">
      <router-link to="/favorites" class="icon-heart text-[#838383] text-[7px] hover:text-red-700 lg:text-[22px]">
        <span class="Circle">{{ headphones.getActiveCard.length + WirelessHeadphones.getActiveCard.length }}</span>
      </router-link>
      <router-link to="/bag" class="icon-basket text-[#838383] text-[7px] hover:text-black lg:text-[22px]">
        <span class="Circle">//</span>
      </router-link>
    </div>
  </slot>
</template>

<style scoped>
.RightIcons {
  @apply flex gap-[15px] mt-[15px] ml-[30px] md:ml-[614px];
}
.Circle {
  @apply ml-[-3px] absolute rounded-full bg-[#FFA542] w-[5px] h-[5px] pl-[1.6px] text-white top-[15px] font-medium text-[3.7px] lg:w-[17px] lg:h-[17px] lg:text-[12px] lg:pl-[5px];
}
</style>
