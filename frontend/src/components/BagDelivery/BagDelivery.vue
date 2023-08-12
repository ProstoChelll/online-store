<script setup lang="ts">
import { useDeliver } from "../../store/Deliver";
const deliver = useDeliver()
</script>

<template>
  <div class="card mt-[20px]">
    <div class="flex justify-between">
      <p>Доставка</p>
      <p>{{ deliver.deliver.cost }} &#8376</p>
    </div>
    <iframe
      class="mt-[20px] w-[240px] lg:w-[365px] md:h-[145px] md:w-[565px]"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d511707.262927943!2d28.846952629046793!3d59.934523369008296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696378cc74a65ed%3A0x6dc7673fab848eff!2z0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LMsINCg0L7RgdGB0LjRjw!5e0!3m2!1sru!2sua!4v1685444902903!5m2!1sru!2sua"
      height="100"
      style="border: 0"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
    <div class="flex justify-between mt-[10px]">
      <div class="flex gap-[10px] items-center">
        <span class="icon-car"></span>
        <p>Доставка курьером</p>
      </div>
      <select></select>
    </div>
  </div>
</template>

<style scoped>
.card {
  @apply w-[280px] h-[200px] pt-[15px] pr-[17px] pl-[17px] bg-white flex flex-col shadow-[0px_0px_20px_0px_rgba(0,0,0,0.5)] rounded-[15px] lg:w-[400px] md:w-[600px] md:h-[250px];
}
</style>
