<script setup lang="ts">
interface Iprops {
  click: boolean;
}

const props = defineProps<Iprops>();
</script>

<template>
  <div :class="props.click ? `Position` : `hidden`">
    <p class="font-bold text-[8px] lg:text-[14px] text-white">сохранено</p>
  </div>
</template>

<style scoped>
.Position {
  @apply flex items-center justify-center w-[50px] rounded-[30px] h-[20px] fixed top-0 z-[2] bg-black lg:w-[100px] lg:h-[50px];
}
</style>
