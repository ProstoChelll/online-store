import { defineStore } from "pinia";

export const useHeadphones = defineStore("Headphones", {
  state: () => ({
    favoritesProducts: [],
    bagProducts: [],
  }),
  getters: {},
  actions: {
    toogleBag(id: string): void {
      let index = this.bagProducts.findIndex((i: string) => i == id);
      if (index == -1) {
        this.bagProducts.push(id);
      } else {
        this.bagProducts.splice(index, 1);
      }
    },
    deleteBag(id: string) {
      let index = this.bagProducts.findIndex((i: string) => i == id);
      if (index == -1) {
      } else {
        this.bagProducts.splice(index, 1);
      }
    },
    addBag(id: string) {
      let index = this.bagProducts.findIndex((i: string) => i == id);
      if (index == -1) {
        this.bagProducts.push(id);
      }
    },
    addFavorites(id: string) {
      let index = this.favoritesProducts.findIndex((i: string) => i == id);
      if (index == -1) {
        this.favoritesProducts.push(id);
      } else {
        this.favoritesProducts.splice(index, 1);
      }
    },
  },
});
