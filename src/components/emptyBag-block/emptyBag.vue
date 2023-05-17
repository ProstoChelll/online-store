<script setup lang="ts"></script>

<template>
  <div class="flex flex-col justify-center items-center">
    <img src="src/images/bag.svg" class="mt-[85px]" />
    <h3 class="catalogMainTxt lg:lgCatalogMainTxt">Корзина пуста</h3>
    <p class="catalogTxtStyle lg:lgCatalogTxtStyle">Но это никогда не поздно исправить :)</p>
    <router-link to="/catalog"><button class="catalogBtnStyle lg:lgCatalogBtnStyle">В каталог товаров</button></router-link>
  </div>
</template>

<style scoped></style>
