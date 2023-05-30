<script setup lang="ts">
import { PageTemplate } from "../layouts";
import { AdBlock, CardList, CardProduct, CardCategory } from "../components";
import { useHeadphones } from "../store/HeadphonesData";
import { useCovers } from "../store/CoversData";
import { useWirelessHeadphones } from "../store/WirelesseHeadphonesData";

const headphones = useHeadphones();
const headphonesList = headphones.headphonesData;

const covers = useCovers();
const coversList = covers.coversList;

const wirelessHeadphones = useWirelessHeadphones();
const wirelessHeadphonesList = wirelessHeadphones.wirelessHeadphonesList;

function favoriteHandler(id: string, data: any) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === id) {
      if (data == headphonesList) {
        headphones.tooggleIcons(i);
      } else {
        wirelessHeadphones.tooggleIcons(i);
      }
    }
  }
}
</script>

<template>
  <PageTemplate>
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
            :isFavorive="item.isFavorive"
            @click="favoriteHandler(item.id, headphonesList)"
          />
        </template>
      </CardList>

      <CardList title="Беспроводные наушники ">
        <template v-for="item in wirelessHeadphonesList">
          <CardProduct
            :item="item"
            :img="item.img"
            :name="item.name"
            :rating="item.rating"
            :cost="item.cost"
            :oldCost="item.oldCost"
            :id="item.id"
            :isFavorive="item.isFavorive"
            @click="favoriteHandler(item.id, wirelessHeadphonesList)"
          />
        </template>
      </CardList>
    </template>
    <template #footer>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d511707.262927943!2d28.846952629046793!3d59.934523369008296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696378cc74a65ed%3A0x6dc7673fab848eff!2z0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LMsINCg0L7RgdGB0LjRjw!5e0!3m2!1sru!2sua!4v1685444902903!5m2!1sru!2sua"
        width="1200"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </template>
  </PageTemplate>
</template>
