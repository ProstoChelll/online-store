<script setup lang="ts">
import { ref } from "vue";
import { PageTemplate } from "../../layouts";
import { validationNick, validationPassword, checkSamePasswords, fullCheck } from "../../functions/registValidationFuncions";
import getDefiniteData from "../../server/getDefiniteData";
import { useWirelessHeadphones } from "../../store/WirelesseHeadphonesData";
import { useHeadphones } from "../../store/HeadphonesData";
const wirelesseHeadphones = useWirelessHeadphones();
const headphones = useHeadphones();

let nikcname = ref("");
let password = ref("");
let password2 = ref("");

function sendUserData() {
  if (!fullCheck()) {
    let user = {
      nickname: nikcname.value,
      password: password.value,
    };

    const bagData = {
      nickname: user.nickname,
      wireles: [...wirelesseHeadphones.bagProducts],
      headphones: [...headphones.bagProducts],
    };
    const favoritesData = {
      nickname: user.nickname,
      wireles: [...wirelesseHeadphones.favoritesProducts],
      headphones: [...headphones.favoritesProducts],
    };

    getDefiniteData(user, "/registration").then((data) => {
      if (data.respons.value == true) {
        getDefiniteData(favoritesData, "/addFavoritesData");
        getDefiniteData(bagData, "/addBagData");
      }
    });
  }
}
</script>

<template>
  <PageTemplate>
    <template #header></template>
    <template #body>
      <div class="mt-[120px] w-[500px] bg-white h-[500px]">
        <h2 class="m-[35px] text-[24px] font-bold">Регистрация</h2>
        <div class="flex flex-col items-center gap-[20px]">
          <div class="w-[430px]">
            <p class="font-semibold">
              Ник:<span class="pl-[10px] font-bold text-red-500">{{ validationNick(nikcname) }}</span>
            </p>
            <input
              type="text"
              v-model="nikcname"
              class="bg-[rgb(231,238,254)] h-[40px] w-[430px] mt-[15px] rounded-[5px] p-[10px]"
            />
          </div>
          <div class="w-[430px]">
            <p class="font-semibold">
              Пароль: <span class="pl-[10px] font-bold text-red-500">{{ validationPassword(password) }}</span>
            </p>
            <input
              v-model="password"
              placeholder="Введите пароль"
              type="password"
              class="bg-[rgb(231,238,254)] h-[40px] w-[430px] mt-[15px] rounded-[5px] p-[10px]"
            />
          </div>
          <div>
            <p class="font-semibold">
              Пароль ещё раз: <span class="pl-[10px] font-bold text-red-500">{{ checkSamePasswords(password, password2) }}</span>
            </p>
            <input
              v-model="password2"
              placeholder="Введите пароль"
              type="password"
              class="bg-[rgb(231,238,254)] h-[40px] w-[430px] mt-[15px] rounded-[5px] p-[10px]"
            />
          </div>
        </div>
        <div class="flex justify-center mt-[35px]">
          <button
            @click="sendUserData()"
            :class="[
              $style.btnReg,
              {
                'cursor-default': fullCheck(),
                'bg-[rgb(80,111,137)]': fullCheck(),
                'bg-[rgb(85,138,184)]': !fullCheck(),
                'cursor-pointer': !fullCheck(),
              },
            ]"
          >
            <span v-if="fullCheck()">Зарегистрироваться</span>
            <router-link v-if="!fullCheck()" to="/entrance">Зарегистрироваться</router-link>
          </button>
        </div>
      </div>
      <div class="w-[500px] h-[40px] bg-white mt-[30px] flex justify-center items-center">
        <p class="text-[14px]">
          Уже зарегистрированы? <router-link to="/entrance" class="text-[rgb(97,130,208)]">Войдите</router-link>
        </p>
      </div>
    </template>
    <template #footer><span></span></template>
  </PageTemplate>
</template>

<style module scoped>
.btnReg {
  @apply h-[50px] w-[430px] rounded-[5px] text-[#fff];
}
</style>
