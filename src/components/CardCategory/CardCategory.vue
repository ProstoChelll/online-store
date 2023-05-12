<script setup lang="ts">
interface Props {
  id: string;
  name: string;
}

const props = defineProps<Props>();
</script>
<template>
  <div class="CardStyle lg:lgCardStyle md:mdCardStyle" :id="props.id">
    <div class="locationMiddleCard lg:gap-[20px] md:gap-[140px]">
      <div>
        <p
          class="middleAndBottomCardTxtStyle mt-5 lg:lgMiddleAndBottomCardTxtStyle"
        >
          {{ props.name }}
        </p>
      </div>
      <div></div>
    </div>
  </div>
</template>
