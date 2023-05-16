<script setup lang="ts">
import { useHeadphones } from "../../store/HeadphonesData";
import { useWirelessHeadphones } from "../../store/WirelesseHeadphonesData";

const headphones = useHeadphones();

const WirelessHeadphones = useWirelessHeadphones();
</script>

<template>
  <slot name="right">
    <div class="flex gap-[15px] mt-[15px] ml-[30px] lg: md:ml-[614px]">
      <router-link to="/favorites" class="icon-heart text-[#838383] text-[7px] hover:text-red-700 lg:text-[22px]">
        <span class="stylezSizeColorInfavoritesAndBagCircle lg:lgStylezSizeColorInfavoritesAndBagCircle">{{
          headphones.getActiveCard.length + WirelessHeadphones.getActiveCard.length
        }}</span>
      </router-link>
      <router-link to="/bag" class="icon-basket text-[#838383] text-[7px] hover:text-black lg:text-[22px]">
        <span class="stylezSizeColorInfavoritesAndBagCircle lg:lgStylezSizeColorInfavoritesAndBagCircle">//</span>
      </router-link>
    </div>
  </slot>
</template>

<style scoped></style>
