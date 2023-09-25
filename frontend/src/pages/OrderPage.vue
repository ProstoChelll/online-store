<script setup lang="ts">
import { PageTemplate } from "../layouts";
import { OrderPageDelivery, PriceCard, PaymentMethodCard, NuberCard, FinishCard } from "../components";
import { useHeadphones } from "../store/HeadphonesData";
import { useWirelessHeadphones } from "../store/WirelesseHeadphonesData";
import getDefiniteData from "../server/getDefiniteData";
import { useUser } from "../store/user";
import { useRouter } from "vue-router";

const user = useUser();
const headphones = useHeadphones();
const wirelessHeadphones = useWirelessHeadphones();
const route = useRouter();

function finishOrder() {
  const userData = {
    token: user.token,
    data: {
      bagProducts: {
        wireles: [],
        headphones: [],
      },
      favoritesProducts: {
        wireles: [...wirelessHeadphones.favoritesProducts],
        headphones: [...headphones.favoritesProducts],
      },
    },
  };
  getDefiniteData(userData, "/updateDate");
  route.push({ name: "main" });
}
</script>

<template>
  <PageTemplate>
    <template #header><span></span></template>
    <template #body>
      <div class="flex justify-start w-full mt-[90px]"><p>Оформление заказа</p></div>
      <div class="flex gap-[30px]">
        <OrderPageDelivery />
        <div>
          <PriceCard />
          <PaymentMethodCard />
          <NuberCard />
          <FinishCard @click="finishOrder()" />
        </div>
      </div>
    </template>
    <template #footer></template>
  </PageTemplate>
</template>

<style scoped></style>
