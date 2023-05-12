<script setup lang="ts">
interface Props {
  title: string;
}
const props = defineProps<Props>();
</script>

<template>
  <div class="mt-[30px] mb-[10px]">
    <p class="cardsHeaderTxtStyle lg:lgCardsHeaderTxtStyle">
      {{ props.title }}
    </p>
  </div>
  <div class="flex gap-[30px] mb-[30px] flex-wrap">
    <slot></slot>
  </div>
</template>

<style scoped></style>
