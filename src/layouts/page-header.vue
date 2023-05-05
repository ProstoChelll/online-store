<script setup lang="ts"></script>
<template>
  <slot>
    <div class="flex justify-between w-[1109px]">
      <slot name="left">
        <div class="flex gap-[75px] mt-[10px]">
          <router-link to="/"><div class="font-bold text-[25px] text-[#101010]">QPICK</div></router-link>
          <div class="flex mt-[9px]">
            <div class="mt-[5px] mr-[15px] icon-phone text-[#838383] text-[15px]"></div>
            <div class="flex">
              <p>Выбрать модель телефона</p>
              <select class="bg-[#eaeaea]"></select>
            </div>
          </div>
        </div>
      </slot>
      <slot name="right">
        <div class="flex gap-[45px] mt-[12px]">
          <router-link to="/favorites" class="icon-heart text-[#838383] text-[22px] hover:text-red-700">
            <span
              class="ml-[-5px] absolute rounded-full bg-[#FFA542] w-[17px] pl-[5px] text-white top-[9px] font-medium text-[15px] leading-[18px]"
              >2</span
            >
          </router-link>
          <router-link to="/bag" class="icon-basket text-[#838383] text-[22px] hover:text-black">
            <span
              class="ml-[-5px] absolute rounded-full bg-[#FFA542] w-[17px] pl-[5px] text-white top-[9px] font-medium text-[15px] leading-[18px]"
              >1</span
            >
          </router-link>
        </div>
      </slot>
    </div>
  </slot>
</template>

<style module scoped></style>
