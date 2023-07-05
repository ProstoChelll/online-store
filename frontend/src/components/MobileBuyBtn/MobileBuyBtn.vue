<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import { saveNotice } from "../../components";
import { useHeadphones } from "../../store/HeadphonesData";
import { useWirelessHeadphones } from "../../store/WirelesseHeadphonesData";

const headphones = useHeadphones();
const wirelessHeadphones = useWirelessHeadphones();

const route = useRoute();
let saveToogle = ref(false);

const productId = route.params.id.slice(11);

function noticeHandler() {
  saveToogle.value = !saveToogle.value;
  setTimeout(() => {
    saveToogle.value = !saveToogle.value;
  }, 1100);
}

function toogleBag() {
  let productClass = route.params.id.slice(1, 11);
  if (productClass == "headhpones") {
    headphones.toogleBag(productId as string);
  } else if (productClass == "wirelessHd") {
    wirelessHeadphones.toogleBag(productId as string);
  }
  console.log(wirelessHeadphones.bagProducts, headphones.bagProducts);
}
function addBag() {
  let productClass = route.params.id.slice(1, 11);
  if (productClass == "headhpones") {
    headphones.addBag(productId as string);
  } else if (productClass == "wirelessHd") {
    wirelessHeadphones.addBag(productId as string);
  }
}
</script>

<template>
  <slot>
    <div class="flex gap-[17px] mt-[20px]">
      <div class="littleCard" @click="noticeHandler(), toogleBag()">
        <p class="icon-basket" :class="$style.bagStyle"></p>
      </div>
      <router-link to="/bag">
        <div class="bigCard" @click="addBag()">
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
  @apply flex items-center justify-center w-[45px] h-[45px] bg-[#101010] rounded-[15px] cursor-pointer;
}
.bigCard {
  @apply flex items-center justify-center w-[165px] h-[45px] bg-[#101010] rounded-[15px] cursor-pointer;
}
</style>
<style module scoped>
.bagStyle {
  @apply text-white text-[22px];
}
</style>
