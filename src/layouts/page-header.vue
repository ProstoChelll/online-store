<script setup lang="ts">
import { ref } from "vue";
import { useFavorites } from "../store/favorites";

const favorites = useFavorites();
console.log(favorites.favoritesArray);
console.log(typeof favorites.favoritesArray);

// interface IArr {
//   name: string;
//   tog: Ref<boolean>;
// }

let tog = ref(false);
let tog1 = ref(false);

// const dataArr: IArr[] = [
//   { name: "Apple", tog: ref(false) },
//   { name: "INOI", tog: ref(false) },
//   { name: "Nokia", tog: ref(false) },
//   { name: "Oppo", tog: ref(false) },
//   { name: "Xiaomi", tog: ref(false) },
//   { name: "Realme", tog: ref(false) },
//   { name: "Samsung", tog: ref(false) },
//   { name: "Sony", tog: ref(false) },
//   { name: "Vivo", tog: ref(false) },
// ];
</script>
<template>
  <slot>
    <div class="flex justify-center">
      <slot name="left">
        <div class="flex gap-[75px] mt-[10px] max-[880px]:gap-[30px]">
          <router-link to="/"><div class="font-bold text-[25px] text-[#101010]">QPICK</div></router-link>
          <div class="flex mt-[9px]">
            <div class="mt-[5px] mr-[15px] icon-phone text-[#838383] text-[15px]"></div>
            <div @click="tog = !tog" class="flex">
              <p>Выбрать модель телефона</p>
              <select :class="tog == true ? ` transform rotate-180 bg-[#eaeaea]` : `bg-[#eaeaea]`"></select>
            </div>
            <div v-if="tog" class="w-[240px] h-auto bg-[#EAEAEA] absolute top-[60px] block">
              <div v-for="i in 9" :key="i">
                <div class="flex justify-between ml-[28px]">
                  <p class="font-medium text-[17px] lea-[21px] text-[#1C1C27]">Apple</p>
                  <select
                    @click="tog1 = !tog1"
                    :class="tog1 ? ` transform rotate-180 mr-[78px] bg-[#EAEAEA]` : `mr-[78px] bg-[#EAEAEA]`"
                  ></select>
                </div>
                <div v-if="tog1" class="w-[139px] h-[162px] bg-[#EAEAEA] mt-[12px] ml-[46px] mb-[26px] block">
                  <p class="font-medium text-[15px] lea-[18px] text-[#101010]">iPhone 12</p>
                  <p class="font-medium text-[15px] lea-[18px] text-[#101010]">iPhone 12 Max</p>
                  <p class="font-medium text-[15px] lea-[18px] text-[#101010]">iPhone 12</p>
                  <p class="font-medium text-[15px] lea-[18px] text-[#101010]">iPhone 13</p>
                  <p class="font-medium text-[15px] lea-[18px] text-[#101010]">iPhone 13 Max</p>
                  <p class="font-medium text-[15px] lea-[18px] text-[#101010]">iPhone 13 Pro Max</p>
                  <p class="font-medium text-[15px] lea-[18px] text-[#101010]">iPhone 14</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </slot>
      <slot name="right">
        <div class="bagAndFavorite flex gap-[45px] mt-[12px] ml-[600px] max-[1235px]:ml-[300px] max-[880px]:ml-[80px]">
          <router-link to="/favorites" class="icon-heart text-[#838383] text-[22px] hover:text-red-700">
            <span
              class="ml-[-5px] absolute rounded-full bg-[#FFA542] w-[17px] pl-[5px] text-white top-[9px] font-medium text-[15px] leading-[18px]"
              >{{ favorites.favorites }}</span
            >
          </router-link>
          <router-link to="/bag" class="icon-basket text-[#838383] text-[22px] hover:text-black">
            <span
              class="ml-[-5px] absolute rounded-full bg-[#FFA542] w-[17px] pl-[5px] text-white top-[9px] font-medium text-[15px] leading-[18px]"
              >//</span
            >
          </router-link>
        </div>
      </slot>
    </div>
  </slot>
</template>

<style module scoped></style>
