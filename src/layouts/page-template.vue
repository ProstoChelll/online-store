<script setup lang="ts">
import pageHeader from "./page-header.vue";
import pageFooter from "./page-footer.vue";
</script>
<template>
  <div class="w-full flex justify-center">
    <div class="w-full md:w-[1140px] flex flex-col items-center">
      <slot name="header">
        <pageHeader />
      </slot>
      <slot name="ad"> </slot>
      <slot name="body"> </slot>
      <slot name="footer">
        <pageFooter />
      </slot>
    </div>
  </div>
</template>

<style module scoped></style>
