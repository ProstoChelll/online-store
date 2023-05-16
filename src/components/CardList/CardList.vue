<script setup lang="ts">
interface Props {
  title: string;
}
const props = defineProps<Props>();
</script>

<template>
  <div class="mb-[25px] mt-[15px] lg:mt-[45px]">
    <p class="stylezHeaderTxtStyleInCards lg:lgStylezHeaderTxtStyleInCards">
      {{ props.title }}
    </p>
  </div>
  <div class="flex justify-center w-[280px] flex-wrap gap-[30px] mb-[10px] lg:w-[768px] md:w-[1140px]">
    <slot></slot>
  </div>
</template>

<style scoped></style>
