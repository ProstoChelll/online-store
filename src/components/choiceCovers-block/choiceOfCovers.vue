<script setup lang="ts">
import arr from "../../images/index";
console.log(arr[0].value);
</script>

<template>
  <div class="cardsHeaderTxtStyle mb-[10px] lg:lgCardsHeaderTxtStyle"><p>Чехлы</p></div>
  <div class="flex gap-[30px]">
    <div class="CardStyle lg:lgCardStyle md:mdCardStyle">
      <img :src="arr[0].value" />
      <p class="upCardTxtStyle mb-[15px] lg:lgUpCardTxtStyle">Стеклянные</p>
    </div>
    <div class="CardStyle lg:lgCardStyle md:mdCardStyle">
      <p class="upCardTxtStyle mb-[15px] lg:lgUpCardTxtStyle">Силиконовые</p>
    </div>
    <div class="CardStyle lg:lgCardStyle md:mdCardStyle">
      <p class="upCardTxtStyle mb-[15px] lg:lgUpCardTxtStyle">Кожаные</p>
    </div>
  </div>
</template>

<style scoped></style>
