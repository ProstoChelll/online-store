<script setup lang="ts">
import { CardList, PageTemplate } from "../layouts";
import { AdBlock, CardCategory, CardProduct } from "../components";
import useHttp from "../server/server";
import { ref } from "vue";
import { useHeadphones } from "../store/HeadphonesData";
import { useWirelessHeadphones } from "../store/WirelesseHeadphonesData";

const headphones = useHeadphones();
const wirelessHeadphones = useWirelessHeadphones();

let loading = ref(false);
let error = ref();
let headphonesList = ref();
let coversList = ref();
let wirelessHeadphonesList = ref();

useHttp("/unWirelessHeadphonesData").then((data) => {
  headphonesList.value = data.respons.value.unWirelessHeadphonesData;
  loading.value = data.loading.value;
  error.value = data.error.value;
});
useHttp("/coversData").then((data) => {
  coversList.value = data.respons.value.coversData;
  loading.value = data.loading.value;
  error.value = data.error.value;
});

useHttp("/wirelessHeadphonesData").then((data) => {
  wirelessHeadphonesList.value = data.respons.value.wirelessHeadphonesData;
  loading.value = data.loading.value;
  error.value = data.error.value;
});

function favoriteHandler(id: string, data: string) {
  if (data == "unWirelessHeadphonesData") {
    headphones.addFavorites(id);
  } else {
    wirelessHeadphones.addFavorites(id);
  }
}
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
            @click="favoriteHandler(item.id, 'unWirelessHeadphonesData')"
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
            @click="favoriteHandler(item.id, 'wirelessHeadphonesData')"
          />
        </template>
      </CardList>
    </template>
    <template #footer></template>
  </PageTemplate>
</template>
<!-- зделать суму доставки в пинию, исправить баг с суммой заказа и удаление товара в корзине, (в карточке товара добавть картинку и данные(написать в бекенде функцию которая отдает конкретный товар )) -->
