<script setup lang="ts">
interface Props {
  img: string;
  id: string;
  name: string;
}
const props = defineProps<Props>();
</script>
<template>
  <div class="Cards" :id="props.id">
    <div class="ImageCard">
      <img :src="props.img" />
    </div>
    <div>
      <p class="TxtCard">
        {{ props.name }}
      </p>
    </div>
  </div>
</template>
<style scoped>
.Cards {
  @apply flex flex-col items-center justify-center w-[70px] h-[100px] rounded-[15px] bg-white shadow-[0px_0px_20px_(0,_0,_0,_0.1)] relative lg:w-[236px] lg:h-[350px] md:w-[350px] md:h-[400px];
}
.ImageCard {
  @apply w-[34px] h-auto lg:w-[120px] md:w-[151px];
}
.TxtCard {
  @apply font-semibold mt-[5px] text-[7px] lg:text-[17px] lg:leading-[21px] lg:mt-[25px];
}
</style>
