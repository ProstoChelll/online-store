<script setup lang="ts">
import { InputBase } from "../";
import { Ref, ref } from "vue";

const number = ref("");
let state: Ref<"default"> | Ref<"error"> | Ref<"disabled">;

state = ref("default");

const isValidateNumber = (event: any) => {
  const validaion = /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/.test(event.target.value);
  if (validaion) {
    state.value = "disabled";
  } else {
    state.value = "error";
  }
};
</script>

<template>
  <div class="card pl-[14px] pt-[15px] pr-[14px] mb-[28px]">
    <p class="mb-[20px]">Номер получателя</p>
    <div class="pb-[20px]">
      <InputBase :state="state" v-model="number" @input="isValidateNumber" placeholder="+7 ___ ___ __ __" />
    </div>
  </div>
</template>

<style scoped>
.card {
  @apply w-[440px] h-fit bg-[#FFF] rounded-[30px] shadow-[0px_0px_20px_0px_rgba(0,_0,-0,_0.10)];
}
</style>
