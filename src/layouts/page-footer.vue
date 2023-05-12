<script setup lang="ts"></script>
<template>
  <slot>
    <div class="w-[280px] h-[60px] bg-white flex justify-between mt-[30px] rounded-t-[30px] lg:lgFooter md:w-[1110px]">
      <div class="mt-[12px] ml-[18px] mr-[30px]">
        <router-link to="/"><div class="font-bold text-[13px] text-[#101010] lg:text-[25px]">QPICK</div></router-link>
      </div>
      <div class="mt-[23px] mr-[10px]">
        <ul class="flex flex-col gap-[10px] lg:gap-[20px]">
          <li class="footerMenuStyle lg:text-[17px]">
            <router-link to="/favorites">Избранное</router-link>
          </li>
          <li class="footerMenuStyle lg:text-[17px]">
            <router-link to="/bag">Корзина</router-link>
          </li>
          <li class="footerMenuStyle lg:text-[17px]">
            <router-link to="/contacts">Контакты</router-link>
          </li>
        </ul>
      </div>
      <div class="mt-[13px]">
        <p class="font-normal text-[6px] leading-[21px] lg:text-[17px]">Условия сервиса</p>
        <div class="flex items-center gap-[4px] mt-[-18px] lg:lgFooterLangStyle">
          <span class="icon-RU text-[#838383] text-[20px] mb-[7px]"></span>
          <p class="footerMenuLangStyle lg:text-[15px]">Каз</p>
          <p class="footerMenuLangStyle text-[#FFA542] lg:text-[15px]">Рус</p>
          <p class="footerMenuLangStyle lg:text-[15px]">Eng</p>
        </div>
      </div>
      <div class="flex gap-[8px] mt-[10px] mr-[10px] md:mr-[20px]">
        <a target="_blank" href="https://vk.com/"><span class="icon-vk footerIconsStyle lg:text-[30px]"></span></a>
        <a target="_blank" href="https://www.instagram.com/"
          ><span class="icon-Instagram footerIconsStyle lg:text-[30px]"></span
        ></a>
        <a target="_blank" href="https://web.telegram.org/"
          ><span class="icon-telegram footerIconsStyle lg:text-[30px]"> </span
        ></a>
      </div>
    </div>
  </slot>
</template>

<style module scoped></style>
