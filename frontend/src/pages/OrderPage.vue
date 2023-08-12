<script setup lang="ts">
import { PageTemplate } from "../layouts";
import { OrderPageDelivery, PriceCard, PaymentMethodCard, NuberCard, FinishCard } from "../components";

function validation() {}
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
          <FinishCard @click="validation()" />
        </div>
      </div>
    </template>
    <template #footer></template>
  </PageTemplate>
</template>

<style scoped></style>
