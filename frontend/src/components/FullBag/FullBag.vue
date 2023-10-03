<script setup lang="ts">
import useHttp from "../../server/server";
import { useHeadphones } from "../../store/HeadphonesData";
import { useWirelessHeadphones } from "../../store/WirelesseHeadphonesData";
import { useAllBagHeadphones } from "../../store/allBagHeadphones";
import { usePhones } from "../../store/phonesData";
import { bagCardProduct, bagDelivery, BagTotal } from "../index";
import { onMounted, ref } from "vue";
import getDefiniteData from "../../server/getDefiniteData";
import { useUser } from "../../store/user";

const user = useUser();

interface Iproduct {
  img: string;
  name: string;
  rating: number;
  cost: number;
  oldCost: number;
  id: string;
  isOnBag: boolean;
  quantity: number;
  class: string;
  allCost: number;
}
let clientWidth = document.documentElement.clientWidth;

const unWirelessHeadphones = useHeadphones();
const WirelessHeadphones = useWirelessHeadphones();
const phone = usePhones();

const unWirelessHeadphonesBag = unWirelessHeadphones.bagProducts;
const wirelessHeadphonesBag = WirelessHeadphones.bagProducts;
const phonesBag = phone.bagProducts;

const AllBagHeadphones = useAllBagHeadphones();

let quantityProduct = ref(1);

async function getFavoriteProduct() {
  let headphonesList = ref<Iproduct[]>([]);
  let wirelessHeadphonesList = ref<Iproduct[]>([]);
  let phonesList = ref<Iproduct[]>([]);

  await useHttp("/unWirelessHeadphonesData").then((data) => {
    headphonesList.value = data.respons.value[0].unWirelessHeadphonesData;
  });
  await useHttp("/wirelessHeadphonesData").then((data) => {
    wirelessHeadphonesList.value = data.respons.value[0].wirelessHeadphonesData;
  });
  await useHttp("/iphonessss").then((data) => {
    phonesList.value = data.respons.value[0].iphonesData;
  });
  let data = [...wirelessHeadphonesList.value, ...headphonesList.value, ...phonesList.value];
  let bag = [...unWirelessHeadphonesBag, ...wirelessHeadphonesBag, ...phonesBag];

  bag.forEach((id) => {
    let headphones = data.find((headphones) => id == headphones.id);
    if (headphones) {
      headphones.allCost = headphones.quantity * headphones.cost;
      AllBagHeadphones.addHeadphones(headphones);
    }
  });
}
function deleteFavoriteProduct(id: string) {
  let index = AllBagHeadphones.headphones.findIndex((i) => i.id == id);
  AllBagHeadphones.deleteHeadphones(index);
  WirelessHeadphones.deleteBag(id);
  unWirelessHeadphones.deleteBag(id);
  phone.deleteBag(id);
}

function addToDb() {
  const userBag = {
    token: user.token,
    bagProducts: {
      wireles: [...wirelessHeadphonesBag],
      headphones: [...unWirelessHeadphonesBag],
    },
  };
  getDefiniteData(userBag, "/updateBag");
}

onMounted(() => {
  getFavoriteProduct();
});
</script>

<template>
  <h2 class="mt-[89px]">Корзина</h2>
  <div class="w-[768px] flex justify-between">
    <div class="lg:block md:w-[1100px]">
      <div v-for="item in AllBagHeadphones.headphones">
        <bagCardProduct
          :img="item.img"
          :name="item.name"
          :cost="item.cost"
          :id="item.id"
          :quantityProduct="item.quantity"
          @plus="item.quantity++, quantityProduct++"
          @minus="
            if (!(item.quantity <= 1)) {
              item.quantity--, quantityProduct--;
            }
          "
          @click="deleteFavoriteProduct(item.id), addToDb()"
        />
      </div>
      <bagDelivery />
    </div>
    <BagTotal v-if="clientWidth > 768" />
  </div>
</template>

<style scoped></style>
