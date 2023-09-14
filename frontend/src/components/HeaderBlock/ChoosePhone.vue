<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
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
const ChooseModelPhone = ref(null);

function clickOutside(e: any): any {
  if (e.target.id == "PhoneCard") {
  } else {
    tog.value = false;
  }
}
onMounted(() => {
  document.addEventListener("click", (e) => clickOutside(e));
}),
  onUnmounted(() => {
    document.removeEventListener("click", (e) => clickOutside(e));
  });
</script>

<template>
  <slot name="left">
    <div ref="ChooseModelPhone" class="ChooseModelPhone">
      <router-link to="/"><div class="Logo">QPICK</div></router-link>
      <div class="flex items-center mt-[9px]">
        <div class="mt-[-3px] mr-[5px] icon-phone text-[#838383] text-[7px] lg:text-[14px] lg:mt-[10px]"></div>
        <div @click.stop="tog = true" class="flex items-center gap-[8px]">
          <p class="cursor-pointer text-[5px] lg:text-[15px]">Выбрать модель телефона</p>

          <span
            :class="{
              '-rotate-[90deg]': tog,
            }"
            class="text-[24px] cursor-pointer rotate-90 transition-all"
            >&lsaquo;</span
          >
        </div>
        <transition name="expand">
          <div v-if="tog" id="PhoneCard" class="PhoneCard">
            <div v-for="i in 9" :key="i">
              <div id="PhoneCard" class="PhoneCardPosition">
                <p
                  id="PhoneCard"
                  @click="dataArr[i].tog.value = !dataArr[i].tog.value"
                  :class="dataArr[i].tog.value ? `PhoneCardTextActive` : `PhoneCardText`"
                >
                  {{ dataArr[i].name }}
                </p>
                <select
                  id="PhoneCard"
                  class="ml-[10px]"
                  @click="dataArr[i].tog.value = !dataArr[i].tog.value"
                  :class="dataArr[i].tog.value ? `SelectRotate` : `Select`"
                ></select>
              </div>
              <transition name="expandInMenu">
                <div v-if="dataArr[i].tog.value" class="MenuProducts">
                  <router-link
                    to="/catalog/:iphonessssiPhone12"
                    id="PhoneCard"
                    class="ChoosePhoneCardListSelectValueTxt lg:lgChoosePhoneCardListSelectValueTxt"
                    >iPhone 12</router-link
                  >
                  <router-link
                    to="/catalog/:iphonessssiPhone12Pro"
                    id="PhoneCard"
                    class="ChoosePhoneCardListSelectValueTxt lg:lgChoosePhoneCardListSelectValueTxt"
                  >
                    iPhone 12 Pro
                  </router-link>
                  <router-link
                    to="/catalog/:iphonessssiPhone12ProMax"
                    id="PhoneCard"
                    class="ChoosePhoneCardListSelectValueTxt lg:lgChoosePhoneCardListSelectValueTxt"
                  >
                    iPhone 12 Pro Max
                  </router-link>
                  <router-link
                    to="/catalog/:iphonessssiPhone13"
                    id="PhoneCard"
                    class="ChoosePhoneCardListSelectValueTxt lg:lgChoosePhoneCardListSelectValueTxt"
                    >iPhone 13</router-link
                  >
                  <router-link
                    to="/catalog/:iphonessssiPhone13Pro"
                    id="PhoneCard"
                    class="ChoosePhoneCardListSelectValueTxt lg:lgChoosePhoneCardListSelectValueTxt"
                  >
                    iPhone 13 Pro
                  </router-link>
                  <router-link
                    to="/catalog/:iphonessssiPhone13ProMax"
                    id="PhoneCard"
                    class="ChoosePhoneCardListSelectValueTxt lg:lgChoosePhoneCardListSelectValueTxt"
                  >
                    iPhone 13 Pro Max
                  </router-link>
                  <router-link
                    to="/catalog/:iphonessssiPhone14"
                    id="PhoneCard"
                    class="ChoosePhoneCardListSelectValueTxt lg:lgChoosePhoneCardListSelectValueTxt"
                    >iPhone 14</router-link
                  >
                </div>
              </transition>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </slot>
</template>
<style scoped>
@import url("../../css/transition.css");
.ChooseModelPhone {
  @apply flex items-center gap-[25px] mt-[5px] lg:gap-[75px];
}
.Logo {
  @apply font-bold text-[11px] text-[#101010] lg:text-[25px];
}
.PhoneCard {
  @apply w-[90px] h-[105px] bg-[#EAEAEA] absolute top-[40px] block overflow-y-scroll rounded-b-[15px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.1)] lg:w-[255px] lg:h-[300px] lg:top-[60px] z-10;
}
.PhoneCardPosition {
  @apply flex justify-start h-[20px] lg:mt-[10px] lg:h-[40px];
}
.PhoneCardText {
  @apply w-[65px] ml-[4px] font-medium text-[10px] leading-[21px] text-[#1C1C27] hover:text-[#FFA542] cursor-pointer lg:ml-[15px] lg:mt-[2px] lg:text-[18px];
}
.PhoneCardTextActive {
  @apply w-[65px] ml-[4px] text-[#FFA542] font-medium text-[10px] leading-[21px] cursor-pointer lg:ml-[15px] lg:mt-[2px] lg:text-[18px];
}
.SelectRotate {
  @apply transform rotate-180 bg-[#EAEAEA] cursor-pointer h-[20px];
}
.Select {
  @apply bg-[#EAEAEA] cursor-pointer h-[20px];
}
.MenuProducts {
  @apply w-[60px] h-[125px] bg-[#EAEAEA] block relative mt-[4px] ml-[10px];
}
.ChoosePhoneCardListSelectValueTxt {
  @apply block w-[130px];
}
</style>
