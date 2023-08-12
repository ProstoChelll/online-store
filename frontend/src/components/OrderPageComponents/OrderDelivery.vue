<script setup lang="ts">
import { ref,Ref } from 'vue';
import { InputBase } from '../';
import { useDeliver } from "../../store/Deliver";

const deliver = useDeliver()

const city = ref("");
let state: Ref<"default"> | Ref<"error"> | Ref<"disabled">;

state = ref("default");

const isValidateCity = (event: any) => {
  const validaion = /[^0-9]/.test(event.target.value);
  if (validaion) {
    state.value = "disabled";
  } else {
    state.value = "error";
  }
};

</script>

<template>
  <div class="card mt-[12px]">
    <div class="flex justify-between mt-[23px]">
        <p>Доставка курьером</p>
        <p> {{ deliver.deliver.cost }} &#8376</p>
    </div>
    <iframe
      class="mt-[20px] w-[375px]"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d511707.262927943!2d28.846952629046793!3d59.934523369008296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696378cc74a65ed%3A0x6dc7673fab848eff!2z0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LMsINCg0L7RgdGB0LjRjw!5e0!3m2!1sru!2sua!4v1685444902903!5m2!1sru!2sua"
      height="146"
      style="border: 0"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
    <div class="mt-[20px]"><p class="icon-geolocation" >Адрес доставки</p></div>
    <form class="mt-[18px]">
      <InputBase :state="state" v-model="city" @input="isValidateCity" class="mb-[10px]" placeholder="Город" />
      <InputBase state="default" class="mb-[10px]" placeholder="Улица / Район" />
        <div class="flex gap-[15px]">
            <div class=" flex flex-col w-full">
              <InputBase state="default" class="mb-[10px]" placeholder="Дом" />
              <InputBase state="default" placeholder="Квартира" />
            </div>
            <InputBase state="default" placeholder="Подъезд" />
      </div>
    </form>
  </div>
</template>

<style scoped>
.card {
  @apply w-[445px] h-[513px] bg-[#FFFFFF] rounded-[30px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.10)] pl-[38px] pr-[31px];
}
</style>
