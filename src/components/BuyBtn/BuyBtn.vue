<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import { saveNotice } from "../../components";
import { useHeadphones } from "../../store/HeadphonesData";
import { useWirelessHeadphones } from "../../store/WirelesseHeadphonesData";

const headphones = useHeadphones();
const headphonesList = headphones.headphonesData;

const wirelessHeadphones = useWirelessHeadphones();
const wirelessHeadphonesList = wirelessHeadphones.wirelessHeadphonesList;

const route = useRoute();
let saveToogle = ref(false);

let tog = ref(true);

const productId = route.params.id.slice(1);

function noticeHandler() {
  saveToogle.value = !saveToogle.value;
  setTimeout(() => {
    saveToogle.value = !saveToogle.value;
  }, 1100);
}
function toogleBag() {
  for (let i = 0; i <= wirelessHeadphonesList.length + headphonesList.length; i++) {
    if (wirelessHeadphonesList[i].id == productId) {
      wirelessHeadphonesList[i].isOnBag = !wirelessHeadphonesList[i].isOnBag;
    }
    if (headphonesList[i].id == productId) {
      headphonesList[i].isOnBag = !headphonesList[i].isOnBag;
    }
  }
}
function AddToBag() {
  for (let i = 0; i <= wirelessHeadphonesList.length + headphonesList.length; i++) {
    if (wirelessHeadphonesList[i].id == productId) {
      wirelessHeadphonesList[i].isOnBag = true;
    }
    if (headphonesList[i].id == productId) {
      headphonesList[i].isOnBag = true;
    }
  }
}
</script>

<template>
  <slot>
    <div class="flex flex-col gap-[17px] mt-[20px]">
      <router-link to="/bag">
        <div class="bigCard" @click="AddToBag()">
          <p class="text-white">Купить!</p>
        </div>
      </router-link>
      <div class="littleCard" @click="(tog = !tog), noticeHandler(), toogleBag()">
        <span class="icon-basket text-[20px] text-white pr-[10px]"></span>
        <p :class="$style.bagStyle">Добавить в корзину</p>
      </div>
    </div>
  </slot>
  <saveNotice :show="saveToogle" content="Сохранено" />
</template>

<style scoped>
.littleCard {
  @apply flex items-center justify-center w-[265px] h-[45px] bg-[#101010] rounded-[15px] cursor-pointer;
}
.bigCard {
  @apply flex items-center justify-center w-[265px] h-[45px] bg-[#101010] rounded-[15px] cursor-pointer;
}
</style>
<style module scoped>
.bagStyle {
  @apply text-white text-[22px];
}
</style>
