<script setup lang="ts">
interface Iprops {
  placeholder?: string;
  type?: string;
  state: "default" | "error" | "disabled";
}

const props = withDefaults(defineProps<Iprops>(), { placeholder: "", type: "text", state: "default" });
</script>

<template>
  <input
    :class="{
      'text-[#8E8E8E] bg-[#D6D6D6] pl-[14px] rounded-[15px] w-full h-[45px]': props.state == 'default',
      'text-[#ffffff] bg-[#ff0000] pl-[14px] rounded-[15px] w-full h-[45px]': props.state == 'error',
      'text-[#000000] bg-[#79e240] pl-[14px] rounded-[15px] w-full h-[45px]': props.state == 'disabled',
    }"
    :type="props.type"
    :placeholder="props.placeholder"
  />
</template>

<style scoped></style>
