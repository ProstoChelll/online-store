import { defineStore } from "pinia";

interface Idata {
  favoritesProducts: string[];
  bagProducts: string[];
}

export const useWirelessHeadphones = defineStore("wirelessHeadphones", {
  state: () =>
    ({
      favoritesProducts: [],
      bagProducts: [],
    } as Idata),
  getters: {},
  actions: {
    toogleBag(id: string) {
      let index = this.bagProducts.findIndex((i: string) => i == id);
      if (index == -1) {
        this.bagProducts.push(id);
      } else {
        this.bagProducts.splice(index, 1);
      }
      return this.bagProducts[0];
    },
    deleteBag(id: string) {
      let index = this.bagProducts.findIndex((i: string) => i == id);
      if (index == -1) {
      } else {
        this.bagProducts.splice(index, 1);
      }
      return this.bagProducts[0];
    },
    addBag(id: string) {
      let index = this.bagProducts.findIndex((i: string) => i == id);
      if (index == -1) {
        this.bagProducts.push(id);
      }
      return this.bagProducts[0];
    },
    addFavorites(id: string) {
      let index = this.favoritesProducts.findIndex((i: string) => i == id);
      if (index == -1) {
        this.favoritesProducts.push(id);
      } else {
        this.favoritesProducts.splice(index, 1);
      }
      return this.favoritesProducts[0];
    },
  },
});
