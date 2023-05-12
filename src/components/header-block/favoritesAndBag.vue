<script setup lang="ts">
import { nextTick, ref, watchEffect } from "vue";
import { useFavorites } from "../../store/favorites";

const { favorites, favoritesCount } = useFavorites();
console.log(favorites);

const a = ref(favoritesCount);
console.log(a);
watchEffect(() => {
  nextTick(() => {
    console.log(favoritesCount);
    a.value = favoritesCount;
  });
});
</script>

<template>
  <slot name="right">
    <div class="flex gap-[15px] mt-[15px] ml-[30px] lg: md:ml-[614px]">
      <router-link to="/favorites" class="icon-heart text-[#838383] text-[7px] hover:text-red-700 lg:text-[22px]">
        <span class="favoritesAndBagCircleStyle lg:lgFavoritesAndBagCircleStyle">{{ favoritesCount }}</span>
      </router-link>
      <router-link to="/bag" class="icon-basket text-[#838383] text-[7px] hover:text-black lg:text-[22px]">
        <span class="favoritesAndBagCircleStyle lg:lgFavoritesAndBagCircleStyle">//</span>
      </router-link>
    </div>
  </slot>
</template>

<style scoped></style>
