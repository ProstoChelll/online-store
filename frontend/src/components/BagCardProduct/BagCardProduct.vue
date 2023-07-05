<script setup lang="ts">
interface Props {
  img: string;
  name: string;
  cost: number;
  id: string
  quantityProduct: number
}

const props = defineProps<Props>();
  const emit = defineEmits(["click","plus","minus"]) 
</script>

<template>
  <div
    class="pl-[30px] pt-[18px] pr-[32px] mt-[13px] card"
  >
        <div class="flex justify-between">
          <div class = "flex">
            <img class="w-[70px] h-[76px]" :src="`../../${props.img}`" />
            <div>
              <p>{{ props.name }}</p>
              <p>{{ props.cost }} &#8376</p>
            </div>
          </div>
        <span @click="emit('click')" class="icon-delete cursor-pointer h-[20px] text-[#DF6464]"></span>
        </div>
        <div class="flex mt-[20px] justify-between">
          <div class="flex gap-[20px]">
            <button class="font-extrabold w-[30px] h-[30px] rounded-full bg-[#FFCE7F] text-white" @click="emit('minus')">-</button>
            <p>{{ props.quantityProduct }}</p>
            <button class="font-extrabold w-[30px] h-[30px] rounded-full bg-[#FFCE7F] text-white" @click="emit('plus')">+</button>
          </div>
          <p>{{ props.quantityProduct * props.cost }} &#8376</p>
        </div>
  </div>
</template>

<style scoped>

.card{
  @apply w-[280px] h-[160px] bg-white flex flex-col shadow-[0px_0px_20px_0px_rgba(0,0,0,0.5)] rounded-[15px] lg:w-[400px] md:w-[600px]
}
.btn{
  @apply font-extrabold w-[30px] h-[30px] rounded-full bg-[#FFCE7F] text-white
}
</style>