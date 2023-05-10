import { defineStore } from "pinia";
import {ref, Ref } from "vue";

// interface state{
//   favorites: Iproduct[] | []
//   favoritesCount: Ref<number>
// }

// TODO добавить типизацию
import { type Iproduct } from '../types'
export const useFavorites = defineStore("favorites", {
  state: (): any => ({
    favorites: [] as Iproduct[] | [] ,
    favoritesCount: ref(0),
  }),
  getters: {},
  actions: {
    setFavoritesTitle(product:Iproduct ) {
      this.favoritesCount = this.favorites.length || 0;
      this.favorites = [...this.favorites, product];
    },
  },
});
