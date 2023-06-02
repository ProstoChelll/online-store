<script setup lang="ts">
interface Props {
  img: string;
  name: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="w-[250px] h-[100px] bg-white flex">
    <img class="w-[100px]" :src="`../../${props.img}`" />
    <div>
      <p>{{ props.name }}</p>
    </div>
  </div>
</template>

<style scoped></style>
