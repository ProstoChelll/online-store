<script setup lang="ts">
interface Iprops {
  show?: boolean;
  content?: string;
}

const props = defineProps<Iprops>();
</script>

<template>
  <teleport to="body">
    <transition name="expand">
      <div
        v-if="props.show"
        class="absolute top-[60px] right-[100px] w-fit py-2 px-3 bg-black rounded-[10px]"
      >
        <slot>
          <p class="font-bold text-[12px] lg:text-[18px] text-white">
            {{ props.content }}
          </p>
        </slot>
      </div>
    </transition>
  </teleport>
</template>

<style scoped>
.Position {
  @apply flex items-center justify-center w-[50px] rounded-[30px] h-[20px] fixed top-0 z-[2] bg-black lg:w-[100px] lg:h-[50px];
}
.expand-enter-from {
  top: -300px;
  right: 100px;
  opacity: 0;
}
.expand-enter-to {
  top: 60px;
  right: 100px;
  opacity: 1;
  transition: 0.5s;
}
.expand-leave-to {
  top: -300px;
  opacity: 0;
  transition: 0.5s;
}
</style>
