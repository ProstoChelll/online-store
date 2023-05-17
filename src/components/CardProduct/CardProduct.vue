<script setup lang="ts"> 
interface Props {
    img: string,
    isFavorive: boolean,
    id: string,
    name: string,
    rating: number,
    cost: number,
    oldCost: number
}

const props = defineProps<Props>()
const emit = defineEmits(["click"])

</script>
<template> 
  <div  :class="$style.card"   :id="props.id"> 
   <span @click="emit('click')"  
 
   :class="[
    $style.heart_icon,
  
  {
    'text-red-700': props.isFavorive,
    'icon-heart':true,
  }
   ]" />
    <img class="h-[209px] w-[47px] lg:w-[194px]" :src="props.img" />
    <div class="stylizDisplayInMiddleCard lg:gap-[20px] md:gap-[140px]">
      <div>
        <p class="stylezTxtStylInMiddleAndBottomCard mt-[10px] lg:lgStylezTxtStylInMiddleAndBottomCard">{{ props.name }}</p>
        <p class="stylezTxtStylInMiddleAndBottomCard mb-[5px] text-[#838383] lg:lgStylezTxtStylInMiddleAndBottomCard"> <span class="icon-star text-[#FFCE7F] mr-[2px]"></span>{{ props.rating }}</p>
      </div>
      <div>
        <p class="stylezTxtStylInMiddleAndBottomCard text-[#FFCE7F] pb-[3px] lg:lgStylezTxtStylInMiddleAndBottomCard">{{ props.cost }} &#8376</p>
        <p v-if="props.oldCost > 0" class="stylezTxtCostStylInMiddleAndBottomCard mb-[-9px] lg:lgStylezTxtCostStylInMiddleAndBottomCard">{{ props.oldCost }}</p>
      </div>
    </div>
  </div>
</template>
<style module scoped>
.card{
  @apply w-[70px] h-[100px] bg-white rounded-[15px] flex flex-col items-center justify-end md:w-[350px] md:h-[400px] lg:w-[235px] lg:h-[300px] relative;
 
}
.heart_icon{
  @apply cursor-pointer text-[22px] absolute left-[22px] top-[15px] hover:text-red-700;
} 
 
 
</style>
