<script setup lang="ts"> 
import {ref} from 'vue'
import  {saveNotice}  from "../index"
import { useHeadphones } from "../../store/HeadphonesData";
import { useWirelessHeadphones } from "../../store/WirelesseHeadphonesData";
import { usePhones } from "../../store/phonesData";
import getDefiniteData from "../../server/getDefiniteData";
import {useUser} from "../../store/user"

const headphones = useHeadphones();
const wirelessHeadphones = useWirelessHeadphones();
const phones = usePhones()
const user = useUser()

interface Props {
    item:any
    img: string,
    id: string,
    name: string,
    rating: number,
    cost: number,
    oldCost: number,
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
  } else if (data == "iphonessss"){
    phones.addFavorites(id);
  } else {
    wirelessHeadphones.addFavorites(id);
  }
  const userData = {
    token: user.token,
    data:{
      bagProducts:{
        wireles:[...wirelessHeadphones.bagProducts],
        headphones:[...headphones.bagProducts]
      },
      favoritesProducts:{
        wireles:[...wirelessHeadphones.favoritesProducts],
        headphones:[...headphones.favoritesProducts]
      }
    }
  }
  getDefiniteData(userData,"/updateDate")
}
</script>
<template> 
  <div :class="$style.card" :id="props.id"> 
   <span @click="noticeHandler(),favoriteHandler(props.id,props.class),  toggleColor = !toggleColor"  
 
   :class="[
    $style.heart_icon,
  
  {
    'text-red-700': toggleColor,
    'icon-heart':true,
  }
   ]"/>
   <div class="link">
    <img class="ProductImage" :src="`../../${props.img}`" />
    <div class="ProductCardPositionTxt">
      <div>
        <p class="ProductCardText">{{ props.name }}</p>
        <p v-if="props.rating !== 0" class="ProductCardText text-[#838383]"> <span class="icon-star text-[#FFCE7F] "></span>{{ props.rating }}</p>
      </div>
      <div>
        <p class="ProductCardText text-[#FFCE7F]">{{ props.cost }} &#8376</p>
        <p v-if="props.oldCost > 0" class="ProductCardCostText mb-[-9px]">{{ props.oldCost }}</p>
      </div>
    </div>
  </div>
  </div>
  <saveNotice :show="saveToogle" content="Сохранено"/>
</template>
<style module scoped>
.card{
  @apply mt-[70px] bg-white rounded-[15px] flex flex-col items-center justify-end relative w-[90px] h-[120px] lg:w-[768px] lg:h-[300px] md:h-[400px] md:w-[1110px]
 
}
.heart_icon{
  @apply cursor-pointer text-[8px] absolute left-[5px] top-[5px] hover:text-red-700 lg:text-[22px] md:left-[22px] md:top-[15px];
} 
</style>
<style scoped>
.link{
  @apply flex flex-col items-center mb-[5px] lg:mb-[30px] w-auto
}
.ProductImage{
  @apply h-[auto_180px] w-[57px] lg:w-[194px] bg-cover md:h-[auto_220px] md:w-[240px];
}
.ProductCardPositionTxt{
  @apply mb-[10px] flex items-center gap-[5px] lg:gap-[550px] md:gap-[900px];
}
.ProductCardText{
  @apply font-semibold text-[5px] leading-[10px] lg:text-[17px] lg:leading-[21px];
}
.ProductCardCostText{
  @apply font-semibold text-[5px] leading-[2px] text-[#FFCE7F] lg:text-[13px] lg:leading-[16px];
}
</style>
