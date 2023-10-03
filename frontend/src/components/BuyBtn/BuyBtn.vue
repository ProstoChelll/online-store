<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import { saveNotice } from "../../components";
import { useHeadphones } from "../../store/HeadphonesData";
import { useWirelessHeadphones } from "../../store/WirelesseHeadphonesData";
import { usePhones } from "../../store/phonesData";
import getDefiniteData from "../../server/getDefiniteData";
import { useUser } from "../../store/user";

const headphones = useHeadphones();
const wirelessHeadphones = useWirelessHeadphones();
const phones = usePhones();
const user = useUser();

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
  } else {
    phones.toogleBag(productId as string);
  }
}
function addBag() {
  let productClass = route.params.id.slice(1, 11);
  if (productClass == "headhpones") {
    headphones.addBag(productId as string);
  } else if (productClass == "wirelessHd") {
    wirelessHeadphones.addBag(productId as string);
  } else {
    phones.addBag(productId as string);
  }
}
function addToDb() {
  const userBag = {
    token: user.token,
    bagProducts: {
      wireles: [...wirelessHeadphones.bagProducts],
      headphones: [...headphones.bagProducts],
    },
  };
  getDefiniteData(userBag, "/updateBag");
}
</script>

<template>
  <slot>
    <div class="flex flex-col gap-[17px] mt-[20px]">
      <router-link to="/bag">
        <div class="bigCard" @click="addBag(), addToDb()">
          <p class="text-white">Купить!</p>
        </div>
      </router-link>
      <div class="littleCard" @click="toogleBag(), addToDb(), noticeHandler()">
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
