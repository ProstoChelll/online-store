<script setup lang="ts">
import { ref } from "vue";
import { useDeliver } from "../../store/Deliver";
import {useAllBagHeadphones} from "../../store/allBagHeadphones"
const deliver = useDeliver()

const x = ref(0)
const xOne = ref(0)

const headphones = useAllBagHeadphones()
</script>

<template>
  <div class="card pl-[20px] pt-[15px] pr-[9px] mt-[12px] mb-[14px]">
    <p class="mb-[25px]">Ваш заказ</p>
    <div class=" flex flex-col gap-[5px]">
      <div class="flex justify-between"><p>товар</p><p>&#8376 {{ headphones.getAllCost.map(i=>x+=i, x=0).reverse()[0] }}</p></div>
      <div class="flex justify-between"><p>Доставка</p><p>&#8376 {{ deliver.deliver.cost }}</p></div>
      <div class="flex justify-between"><p>К оплате</p><p>&#8376 {{headphones.getAllCost.map(i=>xOne+=i, xOne=0).reverse()[0] + deliver.deliver.cost  }}</p></div>
    </div>
  </div>
</template>

<style scoped>
.card {
  @apply w-[444px] h-[155px] bg-[#FFF] rounded-[30px] shadow-[0px_0px_20px_0px_rgba(0,_0,-0,_0.10)];
}
</style>
