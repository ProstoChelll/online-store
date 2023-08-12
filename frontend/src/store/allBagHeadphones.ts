import { defineStore } from "pinia";
import { ref } from "vue";

export const useAllBagHeadphones = defineStore("AllBagHeadphones", {
  state: () => ({
    headphones: [],
  }),
  getters: {
    getAllCost(): any {
      const costArr = ref([]);
      for (let i = 0; i < this.headphones.length; i++) {
        costArr.value.push(this.headphones[i].cost * this.headphones[i].quantity);
      }
      return costArr.value;
    },
  },
  actions: {
    addHeadphones(product: any) {
      if (this.headphones.find((elem) => elem.id == product.id)) {
      } else {
        this.headphones.push(product);
      }
    },
    deleteHeadphones(index: any) {
      this.headphones.splice(index, 1);
    },
  },
});
