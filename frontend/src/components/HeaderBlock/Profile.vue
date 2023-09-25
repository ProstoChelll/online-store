<script setup lang="ts">
import { useUser } from "../../store/user";

const user = useUser();
</script>

<template>
  <router-link
    v-if="!user.getAuth"
    to="/registration"
    class="text-[35px] text-[#838383] hover:text-[#FFCE7F] icon-profile pl-[25px] pt-[3px]"
  ></router-link>
  <span v-if="user.getAuth" class="text-[30px] flex text-[#838383] icon-profile pl-[25px] pt-[3px]"
    ><p class="text-[20px]">{{ user.nickname }}</p></span
  >
</template>

<style scoped></style>
