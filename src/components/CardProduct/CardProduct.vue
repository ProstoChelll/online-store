<script setup lang="ts"> 
import {   Ref } from "vue";
interface Props {
    isFavorive: Ref<boolean>,
    id: string,
    name: string,
    rating: number,
    cost: number,
    oldCost: number
}

const props = defineProps<Props>()
const emit = defineEmits(["click"])
</script>
<template> <div   class="CardStyle lg:lgCardStyle md:mdCardStyle"  :id="props.id">
    <span @click="emit('click')"  :class="props.isFavorive ? `icon-heart before: clickedIconHeard lg:lgPositionIconHeart md:mdPositionIconHeart`: `icon-heart before: noneClickedIconHeard lg:lgPositionIconHeart md:mdPositionIconHeart`" ></span>
    <div class="locationMiddleCard lg:gap-[20px] md:gap-[140px]">
      <div>
        <p class="middleAndBottomCardTxtStyle mt-5 lg:lgMiddleAndBottomCardTxtStyle">{{ props.name }}</p>
        <p class="middleAndBottomCardTxtStyle mb-[5px] text-[#838383] lg:lgMiddleAndBottomCardTxtStyle"> <span class="icon-star text-[#FFCE7F] mr-[2px]"></span>{{ props.rating }}</p>
      </div>
      <div>
        <p class="middleAndBottomCardTxtStyle text-[#FFCE7F] pb-[3px] lg:lgMiddleAndBottomCardTxtStyle">{{ props.cost }} &#8376</p>
        <p v-if="props.oldCost > 0" class="middleAndBottomCardTxtCostStyle mb-[-9px] lg:lgMiddleAndBottomCardTxtCostStyle">{{ props.oldCost }}</p>
      </div>
    </div>
  </div>
</template>
 