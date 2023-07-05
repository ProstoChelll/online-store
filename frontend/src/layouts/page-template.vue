<script setup lang="ts">
import pageHeader from "./page-header.vue";
import pageFooter from "./page-footer.vue";
</script>
<template>
  <div class="w-full flex justify-center h-full">
    <div class="w-full flex flex-col items-center md:w-[1140px] h-full">
      <slot name="header">
        <pageHeader />
      </slot>
      <slot name="ad"> </slot>
      <slot name="body"> </slot>
      <slot name="footer">
        <pageFooter class="mt-auto" />
      </slot>
    </div>
  </div>
</template>

<style module scoped></style>
