<script setup lang="ts">
import pageHeader from "./page-header.vue";
import pageFooter from "./page-footer.vue";
</script>
<template>
  <div class="flex flex-col items-center h-[100vh] md:w-[1140px]">
    <slot name="header">
      <pageHeader />
    </slot>
    <slot name="ad"> </slot>
    <slot name="body"> </slot>
    <slot name="footer">
      <pageFooter class="mt-auto" />
    </slot>
  </div>
</template>

<style module scoped></style>
