<script setup lang="ts">
import { useHeadphones } from "../../store/HeadphonesData";
import { useWirelessHeadphones } from "../../store/WirelesseHeadphonesData";
import { usePhones } from "../../store/phonesData";

const headphones = useHeadphones();
const WirelessHeadphones = useWirelessHeadphones();
const phones = usePhones();
</script>

<template>
  <slot name="right">
    <div class="RightIcons">
      <router-link to="/favorites" class="icon-heart text-[#838383] text-[7px] hover:text-red-700 lg:text-[22px]">
        <span class="Circle">{{
          headphones.favoritesProducts.length + WirelessHeadphones.favoritesProducts.length + phones.favoritesProducts.length
        }}</span>
      </router-link>
      <router-link to="/bag" class="icon-basket text-[#838383] text-[6px] hover:text-black lg:text-[22px]">
        <span class="Circle">{{
          headphones.bagProducts.length + WirelessHeadphones.bagProducts.length + phones.bagProducts.length
        }}</span>
      </router-link>
    </div>
  </slot>
</template>

<style scoped>
.RightIcons {
  @apply flex gap-[15px] mt-[18px] ml-[30px];
}
.Circle {
  @apply ml-[-7px] absolute rounded-full bg-[#FFA542] w-[5px] h-[5px] pl-[1.6px] text-white top-[15px] font-medium text-[3.3px] lg:w-[17px] lg:h-[17px] lg:text-[14px] lg:pl-[5px];
}
</style>
