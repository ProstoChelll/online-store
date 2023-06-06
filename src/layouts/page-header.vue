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
  @apply bg-[#ffffff] rounded-[3px] pl-[3px] pr-[6px] z-10 flex justify-between fixed h-[20px] w-[278px] lg:pl-[6px] lg:pr-[20px] lg:h-[40px] lg:w-[766px] md:ml-[15px] md:w-[1110px];
}
</style>
