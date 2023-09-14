<script setup lang="ts">
import { ref } from "vue";
import {useAllBagHeadphones} from "../../store/allBagHeadphones"

const headphones = useAllBagHeadphones()
const x = ref(0)

</script>

<template>
  <div class="card mt-[12px]">
    <div class="flex justify-between pt-[22px] pr-[21px] pl-[23px]">
      <p>ИТОГО</p>
      <p>{{ headphones.getAllCost.map(i=>x+=i, x=0).reverse()[0] }} &#8376</p>
    </div>
    <router-link class="mt-auto" to="/order" >
      <button class="w-[100%] h-[55px] text-white bg-black rounded-[15px] ">Перейти к оформлению</button>
    </router-link>
  </div>
</template>

<style scoped>
.card {
  @apply w-[280px] h-[124px] bg-white flex flex-col shadow-[0px_0px_20px_0px_rgba(0,0,0,0.5)] rounded-[15px];
}
</style>
