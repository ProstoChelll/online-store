<script setup lang="ts"></script>
<template>
  <slot>
    <div class="w-[1110px] h-[149px] bg-white flex justify-between mt-[30px] rounded-t-[30px] max-[1235px]:hidden">
      <div class="mt-[29px] ml-[29px]">
        <router-link to="/"><div class="font-bold text-[25px] text-[#101010]">QPICK</div></router-link>
      </div>
      <div class="mt-[29px]">
        <ul class="flex flex-col gap-[10px]">
          <li class="font-normal text-[17px] leading-[21px] hover:text-[#FFA542]">
            <router-link to="/favorites">Избранное</router-link>
          </li>
          <li class="font-normal text-[17px] leading-[21px] hover:text-[#FFA542]">
            <router-link to="/bag">Корзина</router-link>
          </li>
          <li class="font-normal text-[17px] leading-[21px] hover:text-[#FFA542]">
            <router-link to="/contacts">Контакты</router-link>
          </li>
        </ul>
      </div>
      <div class="mt-[29px]">
        <p class="font-normal text-[17px] leading-[21px]">Условия сервиса</p>
        <div class="flex items-center gap-[15px] mt-[34px]">
          <span class="icon-RU text-[#838383] text-[20px]"></span>
          <p class="font-medium text-[15px] leading-[18px]">Каз</p>
          <p class="font-medium text-[15px] leading-[18px] text-[#FFA542]">Рус</p>
          <p class="font-medium text-[15px] leading-[18px]">Eng</p>
        </div>
      </div>
      <div class="flex gap-[18px] mt-[29px] mr-[26px]">
        <a target="_blank" href="https://vk.com/"
          ><span class="icon-vk text-[#838383] text-[30px] hover:text-[#FFA542]"></span
        ></a>
        <a target="_blank" href="https://www.instagram.com/"
          ><span class="icon-Instagram text-[#838383] text-[30px] hover:text-[#FFA542]"></span
        ></a>
        <a target="_blank" href="https://web.telegram.org/"
          ><span class="icon-telegram text-[#838383] text-[30px] hover:text-[#FFA542]"> </span
        ></a>
      </div>
    </div>

    <div
      class="w-[1110px] h-[149px] bg-white justify-between mt-[30px] rounded-t-[30px] hidden max-[1235px]:flex max-[1235px]:w-[810px] max-[880px]:w-[540px]"
    >
      <div class="ml-[29px]">
        <div class="mt-[19px]">
          <router-link to="/"><div class="font-bold text-[25px] text-[#101010]">QPICK</div></router-link>
        </div>
        <div class="mt-[9px]">
          <ul class="flex flex-col gap-[10px]">
            <li class="font-normal text-[17px] leading-[21px] hover:text-[#FFA542]">
              <router-link to="/favorites">Избранное</router-link>
            </li>
            <li class="font-normal text-[17px] leading-[21px] hover:text-[#FFA542]">
              <router-link to="/bag">Корзина</router-link>
            </li>
            <li class="font-normal text-[17px] leading-[21px] hover:text-[#FFA542]">
              <router-link to="/contacts">Контакты</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="mt-[29px]">
        <p class="font-normal text-[17px] leading-[21px]">Условия сервиса</p>
        <div class="flex items-center gap-[15px] mt-[34px]">
          <span class="icon-RU text-[#838383] text-[20px]"></span>
          <p class="font-medium text-[15px] leading-[18px]">Каз</p>
          <p class="font-medium text-[15px] leading-[18px] text-[#FFA542]">Рус</p>
          <p class="font-medium text-[15px] leading-[18px]">Eng</p>
        </div>
      </div>
      <div class="flex gap-[18px] mt-[29px] mr-[26px]">
        <a target="_blank" href="https://vk.com/"
          ><span class="icon-vk text-[#838383] text-[30px] hover:text-[#FFA542]"></span
        ></a>
        <a target="_blank" href="https://www.instagram.com/"
          ><span class="icon-Instagram text-[#838383] text-[30px] hover:text-[#FFA542]"></span
        ></a>
        <a target="_blank" href="https://web.telegram.org/"
          ><span class="icon-telegram text-[#838383] text-[30px] hover:text-[#FFA542]"> </span
        ></a>
      </div>
    </div>
  </slot>
</template>

<style module scoped></style>
