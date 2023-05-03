<script setup lang="ts"></script>
<template>
  <div class="w-full flex justify-center">
    <div class="w-full md:w-[1140px] flex flex-col items-center">
      <slot name="header"> </slot>
      <slot name="ad"> </slot>
      <slot name="body"> </slot>
      <slot name="footer"> </slot>
    </div>
  </div>
</template>

<style module scoped></style>
