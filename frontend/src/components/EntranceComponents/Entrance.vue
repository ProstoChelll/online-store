<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref } from "vue";
import { PageTemplate } from "../../layouts";
import getDefiniteData from "../../server/getDefiniteData";
import { useUser } from "../../store/user";

const user = useUser();

let nikcname = ref("");
let password = ref("");

const route = useRouter();

const checkUsersdata = () => {
  const userData = {
    nikcname: nikcname.value,
    password: password.value,
  };
  getDefiniteData(userData, "/entrance").then((data) => {
    if (data.respons.value) {
      user.changeNickname(userData.nikcname);
      user.authentication = true;
      localStorage.setItem("token", `${data.respons.value.token}`);
      user.changeToken(data.respons.value.token);
      user.changeBagWireles(data.respons.value.bagProducts.wireles);
      user.changeBagHeadphones(data.respons.value.bagProducts.headphones);
      user.changeFavoritesWireles(data.respons.value.favoritesProducts.wireles);
      user.changeFavoritesHeadphones(data.respons.value.favoritesProducts.headphones);
      route.push({ name: "main" });
    }
  });
};
</script>

<template>
  <PageTemplate>
    <template #header></template>
    <template #body>
      <div class="mt-[200px] w-[500px] bg-white h-[400px]">
        <h2 class="m-[35px] text-[24px] font-bold">Вход</h2>
        <div class="flex flex-col items-center gap-[20px]">
          <div class="w-[430px]">
            <p class="font-semibold">Ник:</p>
            <input v-model="nikcname" class="bg-[rgb(231,238,254)] h-[40px] w-[430px] mt-[15px] rounded-[5px] p-[10px]" />
          </div>
          <div class="w-[430px]">
            <p class="font-semibold">Пароль:</p>
            <input
              v-model="password"
              placeholder="Введите пароль"
              type="password"
              class="bg-[rgb(231,238,254)] h-[40px] w-[430px] mt-[15px] rounded-[5px] p-[10px]"
            />
          </div>
        </div>
        <div class="flex justify-center mt-[35px]">
          <button @click="checkUsersdata()" class="bg-[rgb(85,138,184)] h-[50px] w-[430px] rounded-[5px] text-[#fff]">
            Войти
          </button>
        </div>
      </div>
      <div class="w-[500px] h-[40px] bg-white mt-[30px] flex justify-center items-center">
        <p class="text-[14px]">
          Ещё нет аккаунта? <router-link to="/registration" class="text-[rgb(97,130,208)]">Зарегестируйтесь</router-link>
        </p>
      </div>
    </template>
    <template #footer><span></span></template>
  </PageTemplate>
</template>

<style scoped></style>
