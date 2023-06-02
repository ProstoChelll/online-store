<script setup lang="ts"></script>
<template>
  <slot>
    <div class="Footer">
      <div class="mt-[12px] ml-[18px]">
        <router-link to="/"><div class="Logo">QPICK</div></router-link>
      </div>
      <div class="mt-[23px]">
        <ul class="ListUl">
          <li class="ListLi">
            <router-link to="/favorites">Избранное</router-link>
          </li>
          <li class="ListLi">
            <router-link to="/bag">Корзина</router-link>
          </li>
          <li class="ListLi">
            <router-link to="/contacts">Контакты</router-link>
          </li>
        </ul>
      </div>
      <div class="mt-[13px]">
        <p class="TxtConditions">Условия сервиса</p>
        <div class="LangPosition">
          <span class="icon-RU text-[#838383] text-[20px] mb-[7px]"></span>
          <p class="TextLags cursor-pointer">Каз</p>
          <p class="TextLags cursor-pointer">Рус</p>
          <p class="TextLags cursor-pointer">Eng</p>
        </div>
      </div>
      <div class="flex gap-[8px] mt-[10px] mr-[10px]">
        <a target="_blank" href="https://vk.com/"
          ><span class="icon-vk footerIconsStyle lg:text-[30px]"></span
        ></a>
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

<style scoped>
.Footer {
  @apply w-[280px] h-[60px] bg-white flex justify-between mt-auto rounded-t-[30px] lg:w-[768px] lg:h-[149px] md:w-[1110px];
}
.Logo {
  @apply font-bold text-[13px] text-[#101010] lg:text-[25px];
}
.ListUl {
  @apply flex flex-col gap-[10px] lg:gap-[20px];
}
.ListLi {
  @apply font-medium text-[6px] leading-[0px] hover:text-[#FFA542] lg:text-[17px];
}
.TxtConditions {
  @apply font-normal text-[6px] leading-[21px] lg:text-[17px];
}
.LangPosition {
  @apply flex items-center gap-[4px] mt-[-18px] lg:mt-[12px] lg:gap-[10px];
}
.TextLags {
  @apply font-medium text-[5px] leading-[18px] text-[#101010] hover:text-[#FFA542] lg:text-[15px];
}
</style>
