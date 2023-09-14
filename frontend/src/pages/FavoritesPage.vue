<script setup lang="ts">
import { PageTemplate, CardList } from "../layouts";
import { useHeadphones } from "../store/HeadphonesData";
import { useWirelessHeadphones } from "../store/WirelesseHeadphonesData";
import { usePhones } from "../store/phonesData";
import { CardProduct } from "../components/index";
import { Ref, onMounted, ref } from "vue";
import useHttp from "../server/server";

interface Iproduct {
  img: string;
  name: string;
  rating: string;
  cost: number;
  oldCost: number;
  id: string;
  isOnBag: boolean;
  quantity: number;
  class: string;
}

const headphones = useHeadphones();
const wirelessHeadphones = useWirelessHeadphones();
const phone = usePhones();
const wirelesFavorites = wirelessHeadphones.favoritesProducts;
const unWirelesfavorites = headphones.favoritesProducts;
const phoneFavorites = phone.favoritesProducts;
function favoriteHandler(id: string, data: string) {
  if (data == "headphonesList") {
    headphones.addFavorites(id);
  } else {
    wirelessHeadphones.addFavorites(id);
  }
}

const wirelesFavoritesProducts: Ref<any[]> = ref([]);

async function getFavoriteProduct() {
  let headphonesList = ref<Iproduct[]>([]);
  let wirelessHeadphonesList = ref<Iproduct[]>([]);
  let phonesList = ref<Iproduct[]>([]);

  await useHttp("/unWirelessHeadphonesData").then((data) => {
    headphonesList.value = data.respons.value[0].unWirelessHeadphonesData;
  });
  await useHttp("/wirelessHeadphonesData").then((data) => {
    wirelessHeadphonesList.value = data.respons.value[0].wirelessHeadphonesData;
  });
  await useHttp("/iphonessss").then((data) => {
    phonesList.value = data.respons.value[0].iphonesData;
  });

  let data = [...wirelessHeadphonesList.value, ...headphonesList.value, ...phonesList.value];

  let favorites = [...wirelesFavorites, ...unWirelesfavorites, ...phoneFavorites];

  favorites.forEach((id) => {
    let headphones = data.find((headphones) => id == headphones.id);
    if (headphones) {
      wirelesFavoritesProducts.value.push(headphones);
    }
  });
}

onMounted(() => {
  getFavoriteProduct();
});
</script>
<template>
  <PageTemplate>
    <template #header><span></span></template>
    <template #body>
      <h2 class="MainTxt">Избранное</h2>
      <CardList v-if="wirelesFavoritesProducts.length > 0" title="">
        <template v-for="item in wirelesFavoritesProducts">
          <CardProduct
            :item="item"
            :img="item.img"
            :name="item.name"
            :rating="item.rating"
            :cost="item.cost"
            :oldCost="item.oldCost"
            :id="item.id"
            :class="item.class"
            @click="favoriteHandler(item.id, 'headphonesList')"
          />
        </template>
      </CardList>
    </template>
    <template #footer></template>
  </PageTemplate>
</template>

<style scoped>
.MainTxt {
  @apply mt-[19px] font-semibold text-[10px] leading-[24px] lg:text-[20px] lg:mt-[55px] lg:mb-[21px];
}
</style>
