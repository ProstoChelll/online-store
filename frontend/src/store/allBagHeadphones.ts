import { defineStore } from "pinia";
import { Ref, ref } from "vue";

interface Iproduct {
  img: string;
  name: string;
  rating: number;
  cost: number;
  oldCost: number;
  id: string;
  isOnBag: boolean;
  quantity: number;
  class: string;
  allCost: number;
}

interface Idata {
  headphones: Iproduct[];
}

export const useAllBagHeadphones = defineStore("AllBagHeadphones", {
  state: () =>
    ({
      headphones: [],
    } as Idata),
  getters: {
    getAllCost() {
      const costArr: Ref<number[]> = ref([]);
      for (let i = 0; i < this.headphones.length; i++) {
        costArr.value.push(this.headphones[i].cost * this.headphones[i].quantity);
      }
      return costArr.value;
    },
  },
  actions: {
    addHeadphones(product: Iproduct) {
      if (this.headphones.find((elem) => elem.id == product.id)) {
      } else {
        this.headphones.push(product);
      }
      return this.headphones[0].id;
    },
    deleteHeadphones(index: number) {
      this.headphones.splice(index, 1);
      return this.headphones[0];
    },
  },
});
