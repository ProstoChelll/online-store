<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import { saveNotice } from "../components";
import { useHeadphones } from "../store/HeadphonesData";
import { useWirelessHeadphones } from "../store/WirelesseHeadphonesData";

const headphones = useHeadphones();
const headphonesList = headphones.headphonesData;

const wirelessHeadphones = useWirelessHeadphones();
const wirelessHeadphonesList = wirelessHeadphones.wirelessHeadphonesList;

const route = useRoute();
let saveToogle = ref(false);

let tog = ref(true);

function noticeHandler() {
  saveToogle.value = !saveToogle.value;
  setTimeout(() => {
    saveToogle.value = !saveToogle.value;
  }, 1100);
}
function addToBag() {
  const productId = route.params.id.slice(1);
  for (let i = 0; i <= wirelessHeadphonesList.length + headphonesList.length; i++) {
    const productIdInWirelessList = wirelessHeadphonesList[i].id;
    if (productIdInWirelessList == productId) {
      wirelessHeadphonesList[i].isOnBag = !wirelessHeadphonesList[i].isOnBag;
    }
    const productIdInHeadphoneList = headphonesList[i].id;
    if (productIdInHeadphoneList == productId) {
      headphonesList[i].isOnBag = !headphonesList[i].isOnBag;
      console.log(headphonesList[i].isOnBag);
    }
  }
}
</script>

<template>
  <slot>
    <div class="flex gap-[17px] mt-[20px]">
      <div class="littleCard" @click="(tog = !tog), noticeHandler(), addToBag()">
        <p
          :class="[
            $style.bagStyle,
            {
              'icon-basket': tog,
            },
          ]"
        ></p>
      </div>
      <router-link to="/bag">
        <div class="bigCard" @click="addToBag()">
          <p class="text-white">Купить сейчас!</p>
        </div>
      </router-link>
      <div class="littleCard">
        <p class="icon-Instagram text-white text-[22px]"></p>
      </div>
    </div>
  </slot>
  <saveNotice :show="saveToogle" content="Сохранено" />
</template>

<style scoped>
.littleCard {
  @apply flex items-center justify-center w-[65px] h-[65px] bg-[#101010] rounded-[15px] cursor-pointer;
}
.bigCard {
  @apply flex items-center justify-center w-[215px] h-[65px] bg-[#101010] rounded-[15px] cursor-pointer;
}
</style>
<style module scoped>
.bagStyle {
  @apply text-white text-[22px];
}
</style>
