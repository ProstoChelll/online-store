<script setup lang="ts">
import { CardList, PageTemplate } from "../layouts";
import { AdBlock, CardCategory, CardProduct } from "../components";
import useHttp from "../server/server";
import { ref } from "vue";
import getDefiniteData from "../server/getDefiniteData";
import { useUser } from "../store/user";
import { useHeadphones } from "../store/HeadphonesData";
import { useWirelessHeadphones } from "../store/WirelesseHeadphonesData";

const headphonesStore = useHeadphones();
const wirelesStore = useWirelessHeadphones();

const user = useUser();

let loading = ref(false);
let error = ref();
let headphonesList = ref();
let coversList = ref();
let wirelessHeadphonesList = ref();

if (localStorage.getItem("token")) {
  const token = {
    token: localStorage.getItem("token"),
  };
  getDefiniteData(token, "/getUserData").then((data) => {
    user.changeNickname(data.respons.value.nickname);
    user.authentication = true;
    user.changeToken(data.respons.value.token);
    user.changeBagWireles(data.respons.value.bagProducts.wireles);
    user.changeBagHeadphones(data.respons.value.bagProducts.headphones);
    user.changeFavoritesWireles(data.respons.value.favoritesProducts.wireles);
    user.changeFavoritesHeadphones(data.respons.value.favoritesProducts.headphones);
    headphonesStore.favoritesProducts = [...data.respons.value.favoritesProducts.headphones];
    wirelesStore.favoritesProducts = [...data.respons.value.favoritesProducts.wireles];
    headphonesStore.bagProducts = [...data.respons.value.bagProducts.headphones];
    wirelesStore.bagProducts = [...data.respons.value.bagProducts.wireles];
  });
}

useHttp("/coversData").then((data) => {
  coversList.value = data.respons.value[0].coversData;
  loading.value = data.loading.value;
  error.value = data.error.value;
});
useHttp("/unWirelessHeadphonesData").then((data) => {
  headphonesList.value = data.respons.value[0].unWirelessHeadphonesData;
  loading.value = data.loading.value;
  error.value = data.error.value;
});
useHttp("/wirelessHeadphonesData").then((data) => {
  wirelessHeadphonesList.value = data.respons.value[0].wirelessHeadphonesData;
  loading.value = data.loading.value;
  error.value = data.error.value;
});
debugger;
</script>

<template>
  <template v-if="loading">
    <div class="w-[100%] h-[100%] flex justify-center items-center"><p>загрузка...</p></div>
  </template>
  <PageTemplate v-if="!loading">
    <template #header><span></span></template>
    <template #ad><AdBlock /></template>
    <template #body>
      <CardList title="Чехлы">
        <template v-for="item in coversList">
          <CardCategory :img="item.img" :name="item.name" :id="item.id" />
        </template>
      </CardList>
      <CardList title="Наушники">
        <template v-for="item in headphonesList">
          <CardProduct
            :item="item"
            :img="item.img"
            :name="item.name"
            :rating="item.rating"
            :cost="item.cost"
            :oldCost="item.oldCost"
            :id="item.id"
            :class="item.class"
          />
        </template>
      </CardList>
      <CardList title="Беспроводные наушники">
        <template v-for="item in wirelessHeadphonesList">
          <CardProduct
            :item="item"
            :img="item.img"
            :name="item.name"
            :rating="item.rating"
            :cost="item.cost"
            :oldCost="item.oldCost"
            :id="item.id"
            :class="item.class"
          />
        </template>
      </CardList>
    </template>
    <template #footer></template>
  </PageTemplate>
</template>
