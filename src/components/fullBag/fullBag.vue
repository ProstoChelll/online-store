<script setup lang="ts">
import { computed } from "vue";
import { useHeadphones } from "../../store/HeadphonesData";
import { useWirelessHeadphones } from "../../store/WirelesseHeadphonesData";
import { bagCardProduct, bagDelivery } from "../index";
import { BagTotal } from "../../layouts";
const headphones = useHeadphones();
const WirelessHeadphones = useWirelessHeadphones();

let activeBagWireless = computed(() => WirelessHeadphones.getActiveBag);
let activeBagHeadphones = computed(() => headphones.getActiveBag);

function bagHandler(id: string, data: any) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === id) {
      if (data == headphones.getActiveBag) {
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
    <div v-for="item in activeBagHeadphones">
      <bagCardProduct
        :img="item.img"
        :name="item.name"
        :cost="item.cost"
        :id="item.id"
        :quantityProduct="item.quantity"
        @click="bagHandler(item.id, activeBagHeadphones)"
        @plus="item.quantity++"
        @minus="item.quantity <= 1 ? item.quantity : item.quantity--"
      />
    </div>
    <BagTotal v-if="clientWidth > 768" />
  </div>
  <div v-for="item in activeBagWireless">
    <bagCardProduct
      :img="item.img"
      :name="item.name"
      :cost="item.cost"
      :id="item.id"
      :quantityProduct="item.quantity"
      @click="bagHandler(item.id, activeBagWireless)"
      @plus="item.quantity++"
      @minus="item.quantity <= 1 ? item.quantity : item.quantity--"
    />
  </div>
  <bagDelivery />
</template>

<style scoped></style>
