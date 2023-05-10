<script setup lang="ts">
import { PageTemplate } from "../layouts/allLayout";
import { AdBlock, ChoseCovers, Headphones, WirelessHeadphones } from "../components";
</script>

<template>
  <PageTemplate>
    <template #header><span></span></template>
    <template #ad><AdBlock class="mt-[22px] mb-11" /></template>
    <template #body>
      <ChoseCovers />
      <Headphones />
      <WirelessHeadphones />
    </template>
    <template #footer></template>
  </PageTemplate>
</template>

<!-- зделать футер на все страницы -->
<!-- для крупных проектов делать ровно 4 размера(ширина пк,ноут,планщет,тел) написано в таилвиндконфиг-->
<!-- использовать переменные в таилвинде (может быть такое что в проекте что то поменяют) + таилвинл становится чище -->
<!-- можно сделать в пути так ../../двойной выход так сказать -->
<!-- типы выносить в отдельный файл (interface) -->
<!-- зделать страницу избранного -->
<!-- зделать странцу корзины -->
<!-- зделать дизайн меню выбора телефона + зделать скролл внутри -->
