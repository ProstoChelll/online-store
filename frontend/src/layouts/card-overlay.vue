<script setup lang="ts"></script>
<template>
  <div :class="$style.overlay">
    <slot> </slot>
  </div>
</template>

<style module scoped>
.overlay {
  @apply bg-white rounded-[15px] flex flex-col items-center justify-end relative hover:scale-[1.1] hover:shadow-[0px_0px_20px_0px_rgba(0,0,0,0.5)] cursor-pointer transition-all;
}
</style>
