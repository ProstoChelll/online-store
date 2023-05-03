<script setup lang="ts"></script>
<template>
  <slot>
    <div class="flex justify-between w-full">
      <slot name="left"
        ><div class="flex gap-[65px]">
          <div>QPICK</div>
          <div>Menu</div>
        </div>
      </slot>
      <slot name="right"
        ><div class="flex gap-[45px]">
          <p>favorites</p>
          <p>bag</p>
        </div>
      </slot>
    </div>
  </slot>
</template>

<style module scoped></style>
