<script setup lang="ts">
import { useHeadphones } from "../../store/HeadphonesData";
import { useWirelessHeadphones } from "../../store/WirelesseHeadphonesData";
import { CardList } from "../index";
import { bagCardProduct } from "../index";

const headphones = useHeadphones();
const WirelessHeadphones = useWirelessHeadphones();

const activeBagWireless = WirelessHeadphones.getActiveBag;
const activeBagHeadphones = headphones.getActiveBag;
</script>

<template>
  <CardList title="наушники">
    <template v-for="item in activeBagHeadphones">
      <bagCardProduct :img="item.img" :name="item.name" />
    </template>
  </CardList>
  <CardList title="Беспроводные наушники">
    <template v-for="item in activeBagWireless">
      <bagCardProduct :img="item.img" :name="item.name" />
    </template>
  </CardList>
</template>

<style scoped></style>
