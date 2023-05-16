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
const emit = defineEmits(["clicked"])
</script>
<template> 
  <div class="stylizSizeColorDisplayCard lg:lgStylizSizeColorDisplayCard md:mdStylizSizeColorDisplayCard"  :id="props.id">
    <span @click="emit('clicked')"  :class="props.isFavorive ? `icon-heart before: clickedIconHeard lg:lgPositionIconHeart md:mdPositionIconHeart`: `icon-heart before: noneClickedIconHeard lg:lgPositionIconHeart md:mdPositionIconHeart`" ></span>
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
 