z<script setup lang="ts"> 
import {ref} from 'vue'
import  {saveNotice}  from '../index'
import { CardOverlay } from '../../layouts/index'
import { useHeadphones } from "../../store/HeadphonesData";
import { useWirelessHeadphones } from "../../store/WirelesseHeadphonesData";
import getDefiniteData from "../../server/getDefiniteData";
import {useUser} from "../../store/user"

const headphones = useHeadphones();
const wirelessHeadphones = useWirelessHeadphones();
const user = useUser()

interface Props {
    item:any
    img: string,
    id: string,
    name: string,
    rating: string,
    cost: number,
    oldCost: number
    class: string
}

const props = defineProps<Props>()

let saveToogle = ref(false);
let toggleColor = ref(false)

function noticeHandler (){
  saveToogle.value = !saveToogle.value;
  setTimeout(() => {
    saveToogle.value = !saveToogle.value;
  }, 1100);
}

function favoriteHandler(id: string, data: string) {
  if (data == "headhpones") {
    headphones.addFavorites(id);
  } else {
    wirelessHeadphones.addFavorites(id);
  };
  const userFavorites = {
    token: user.token,
    favoritesProducts:{
        wireles:[...wirelessHeadphones.favoritesProducts],
        headphones:[...headphones.favoritesProducts]
      }
  }
  getDefiniteData(userFavorites,"/userFavorites")
}
</script>
<template> 
  <CardOverlay :class="$style.card" :id="props.id"> 
   <span @click="noticeHandler(),favoriteHandler(props.id,props.class), toggleColor = !toggleColor "  
 
   :class="[
    $style.heart_icon,
  
  {
    'text-red-700': toggleColor,
    'icon-heart':true,
  }
   ]"/>
   <router-link :to="`/catalog/:${props.class + item.id}`" class="link">
    <img class="ProductImage" :src="`../../${props.img}`" />
    <div class="ProductCardPositionTxt">
      <div>
        <p class="ProductCardText mt-[10px]">{{ props.name }}</p>
        <p v-if="props.rating !== '0'" class="ProductCardText text-[#838383]"> <span class="icon-star text-[#FFCE7F] "></span>{{ props.rating }}</p>
      </div>
      <div>
        <p class="ProductCardText text-[#FFCE7F]">{{ props.cost }} &#8376</p>
        <p v-if="props.oldCost > 0" class="ProductCardCostText mb-[-9px]">{{ props.oldCost }}</p>
      </div>
    </div>
  </router-link>
  </CardOverlay>
  <saveNotice :show="saveToogle" content="Сохранено"/>
</template>
<style module scoped>
.card{
  @apply w-[70px] h-[100px] md:h-[400px] lg:w-[235px] md:w-[350px] lg:h-[300px]
 
}
.heart_icon{
  @apply cursor-pointer text-[8px] absolute left-[5px] top-[5px] hover:text-red-700 lg:text-[22px] md:left-[22px] md:top-[15px];
} 
</style>
<style scoped>
.link{
  @apply flex flex-col items-center mb-[5px] lg:mb-[20px]
}
.ProductImage{
  @apply h-[auto_180px] w-[47px] lg:w-[194px] bg-cover md:h-[auto_220px] md:w-[240px];
}
.ProductCardPositionTxt{
  @apply flex items-center gap-[5px] lg:gap-[40px] md:gap-[140px];
}
.ProductCardText{
  @apply font-semibold text-[5px] leading-[10px] lg:text-[17px] lg:leading-[21px];
}
.ProductCardCostText{
  @apply font-semibold text-[5px] leading-[2px] text-[#FFCE7F] lg:text-[13px] lg:leading-[16px];
}
</style>
