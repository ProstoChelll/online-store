import { defineStore } from "pinia";
import { Ref } from "vue";

export const useFavorites = defineStore("favorites", {
  state: (): any => ({
    favorites: [],
  }),
  getters: {},
  actions: {
    setFavoritesTitle(title: { name: string; rating: number; cost: number; oldCost: string; id: string; active: Ref<boolean> }) {
      this.favorites.push(title);
    },
  },
});
