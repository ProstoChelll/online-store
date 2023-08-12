<script setup lang="ts">
const emit = defineEmits(["click"]);
</script>

<template>
  <button
    @click="emit('click')"
    class="text-[#FFF] rounded-[15px] w-[447px] h-[45px] bg-[#101010] shadow-[0px_0px_20px_0px_rgba(67,_216,_84,_0.25)]"
  >
    Закончить оформление
  </button>
</template>

<style scoped></style>
