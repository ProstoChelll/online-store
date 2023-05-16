<script setup lang="ts">
interface Props {
  img: string;
  id: string;
  name: string;
}
const props = defineProps<Props>();
</script>
<template>
  <div class="stylizSizeColorDisplayCard lg:lgStylizSizeColorDisplayCard md:mdStylizSizeColorDisplayCard" :id="props.id">
    <div class="w-[34px] lg:w-[120px] md:w-[151px]">
      <img :src="props.img" />
    </div>
    <div>
      <p class="upCardTxtStyle mt-5 lg:lgUpCardTxtStyle">
        {{ props.name }}
      </p>
    </div>
  </div>
</template>
