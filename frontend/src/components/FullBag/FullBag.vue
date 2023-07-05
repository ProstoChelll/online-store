<script setup lang="ts">
import { useHeadphones } from "../../store/HeadphonesData";
import { useWirelessHeadphones } from "../../store/WirelesseHeadphonesData";
import { bagCardProduct, bagDelivery, BagTotal } from "../index";
import {} from "../../layouts";
const headphones = useHeadphones();
const WirelessHeadphones = useWirelessHeadphones();

function bagHandler(id: string, data: any) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === id) {
      if (data == headphones.bagProducts) {
        headphones.toogleBag(id);
      } else {
        WirelessHeadphones.toogleBag(id);
      }
    }
  }
}

let clientWidth = document.documentElement.clientWidth;
</script>

<template>
  <h2 class="mt-[89px]">Корзина</h2>
  <div class="lg:flex lg:justify-between lg:w-[768px] md:w-[1100px]">
    <div v-for="item in headphones.bagProducts">
      <bagCardProduct
        :img="item.img"
        :name="item.name"
        :cost="item.cost"
        :id="item.id"
        :quantityProduct="item.quantity"
        @click="bagHandler(item.id, headphones.bagProducts)"
        @plus="item.quantity++"
        @minus="item.quantity <= 1 ? item.quantity : item.quantity--"
      />
    </div>
    <BagTotal v-if="clientWidth > 768" />
  </div>
  <div v-for="item in WirelessHeadphones.bagProducts">
    <bagCardProduct
      :img="item.img"
      :name="item.name"
      :cost="item.cost"
      :id="item.id"
      :quantityProduct="item.quantity"
      @click="bagHandler(item.id, WirelessHeadphones.bagProducts)"
      @plus="item.quantity++"
      @minus="item.quantity <= 1 ? item.quantity : item.quantity--"
    />
  </div>
  <bagDelivery />
</template>

<style scoped></style>
