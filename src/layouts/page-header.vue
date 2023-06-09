<script setup lang="ts">
import { ChoosePhone, FavoritesAndBag } from "../components";
</script>
<template>
  <div class="header">
    <ChoosePhone />
    <FavoritesAndBag />
  </div>
</template>

<style scoped>
.header {
  @apply bg-[#ffffff] rounded-[3px] pl-[3px] pr-[6px] z-10 flex items-center justify-center gap-[60px] fixed left-0 h-[25px] w-full lg:pl-[6px] lg:pr-[20px] lg:h-[40px] lg:gap-[290px] md:gap-[640px];
}
</style>
