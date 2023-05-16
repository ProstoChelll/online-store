<script setup lang="ts">
import { ref } from "vue";
import { type IArr } from "@/types";

let tog = ref(false);

const dataArr: IArr[] = [
  { name: "", tog: ref(false) },
  { name: "Apple", tog: ref(false) },
  { name: "INOI", tog: ref(false) },
  { name: "Nokia", tog: ref(false) },
  { name: "Oppo", tog: ref(false) },
  { name: "Xiaomi", tog: ref(false) },
  { name: "Realme", tog: ref(false) },
  { name: "Samsung", tog: ref(false) },
  { name: "Sony", tog: ref(false) },
  { name: "Vivo", tog: ref(false) },
];
</script>

<template>
  <slot name="left">
    <div class="flex gap-[25px] mt-[5px] lg:gap-[75px]">
      <router-link to="/"><div class="font-bold text-[11px] text-[#101010] mt-[9px] lg:text-[25px]">QPICK</div></router-link>
      <div class="flex mt-[9px]">
        <div class="mt-[5px] mr-[5px] icon-phone text-[#838383] text-[7px] lg:lgStylezSizeAndMarginHeaderPhoneLogo"></div>
        <div @click="tog = !tog" class="flex items-center">
          <p class="cursor-pointer text-[5px] lg:text-[15px]">Выбрать модель телефона</p>
          <select :class="tog == true ? ` choosePhoneCardListSelectActive` : `choosePhoneCardListSelectInactive`"></select>
        </div>
        <div v-if="tog" class="stylezSizeColorDisplayInPhoneCard lg:lgStylezSizeColorDisplayInPhoneCard">
          <div v-for="i in 9" :key="i">
            <div class="flex justify-between h-[40px] ml-[11px] lg:mt-[10px]">
              <p
                @click="dataArr[i].tog.value = !dataArr[i].tog.value"
                class="stylezTxtStyleInChoosePhoneCardList lg:lgStylezTxtStyleInchoosePhoneCardList"
              >
                {{ dataArr[i].name }}
              </p>
              <select
                @click="dataArr[i].tog.value = !dataArr[i].tog.value"
                :class="
                  dataArr[i].tog.value
                    ? `choosePhoneCardListSelectActive lg:mr-[78px]`
                    : `choosePhoneCardListSelectInactive lg:mr-[78px]`
                "
              ></select>
            </div>
            <div
              v-if="dataArr[i].tog.value"
              class="stylezSizeColorInChoosePhoneCardListSelect mt-[4px] ml-[10px] lg:lgHeaderChoosePhoneCardListSelect"
            >
              <p class="stylezSizeColorInchoosePhoneCardListSelectValueTxt lg:lgStylezHeaderChoosePhoneCardListSelectValueTxt">
                iPhone 12
              </p>
              <p class="stylezSizeColorInchoosePhoneCardListSelectValueTxt lg:lgStylezHeaderChoosePhoneCardListSelectValueTxt">
                iPhone 12 Max
              </p>
              <p class="stylezSizeColorInchoosePhoneCardListSelectValueTxt lg:lgStylezHeaderChoosePhoneCardListSelectValueTxt">
                iPhone 12 Pro Max
              </p>
              <p class="stylezSizeColorInchoosePhoneCardListSelectValueTxt lg:lgStylezHeaderChoosePhoneCardListSelectValueTxt">
                iPhone 13
              </p>
              <p class="stylezSizeColorInchoosePhoneCardListSelectValueTxt lg:lgStylezHeaderChoosePhoneCardListSelectValueTxt">
                iPhone 13 Max
              </p>
              <p class="stylezSizeColorInchoosePhoneCardListSelectValueTxt lg:lgStylezHeaderChoosePhoneCardListSelectValueTxt">
                iPhone 13 Pro Max
              </p>
              <p class="stylezSizeColorInchoosePhoneCardListSelectValueTxt lg:lgStylezHeaderChoosePhoneCardListSelectValueTxt">
                iPhone 14
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </slot>
</template>
