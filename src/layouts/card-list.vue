<script setup lang="ts">
interface Props {
  title: string;
}
const props = defineProps<Props>();
</script>

<template>
  <div class="mt-[15px]">
    <p class="HeaderTxtInCards">
      {{ props.title }}
    </p>
  </div>
  <div class="PositionCards">
    <slot></slot>
  </div>
</template>

<style scoped>
.HeaderTxtInCards {
  @apply text-[#838383] font-semibold text-[10px] leading-[0px] lg:text-[20px] lg:leading-[24px];
}
.PositionCards {
  @apply flex justify-center mt-[25px] w-[280px] flex-wrap gap-[30px] mb-[10px] lg:mb-[60px] lg:w-[768px] md:w-[1140px];
}
</style>
