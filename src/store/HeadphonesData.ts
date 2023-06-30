import { defineStore } from "pinia";
import useHttp from "../server/server";

async function getHeadphonesList() {
  const data = await useHttp("/");
  return data.respons.value.headphonesData;
}
const headphonesData = await getHeadphonesList();

export const useHeadphones = defineStore("Headphones", {
  state: () => ({
    headphonesData,
  }),
  getters: {
    getActiveCard() {
      const activeCard: any[] = [];
      for (let i = 0; i < this.headphonesData.length; i++) {
        if (this.headphonesData[i].isFavorive == true) {
          activeCard.push(this.headphonesData[i]);
        }
      }
      return activeCard;
    },
    getActiveBag() {
      const activeBag: any[] = [];
      for (let i = 0; i < this.headphonesData.length; i++) {
        if (this.headphonesData[i].isOnBag == true) {
          activeBag.push(this.headphonesData[i]);
        }
      }
      return activeBag;
    },
    getActive(choose: any) {
      const active: any[] = [];
      for (let i = 0; i < this.headphonesData.length; i++) {
        if (choose == 1) {
          if (this.headphonesData[i].isFavorive == true) {
            active.push(this.headphonesData[i]);
          }
        } else if (choose == 2) {
          if (this.headphonesData[i].isOnBag == true) {
            active.push(this.headphonesData[i]);
          }
        }
      }
      return active;
    },
    getAllCost() {
      let cost: number = 0;
      for (let i = 0; i < this.headphonesData.length; i++) {
        if (this.headphonesData[i].isOnBag == true) {
          cost = (cost + this.headphonesData[i].cost) * this.headphonesData[i].quantity;
        }
      }
      return cost;
    },
  },
  actions: {
    tooggleIcons(id: number): void {
      this.headphonesData[id].isFavorive = !this.headphonesData[id].isFavorive;
    },
    toogleFavoritesIcons(id: string): void {
      for (let i = 0; i <= this.headphonesData.length; i++) {
        if (id == this.headphonesData[i].id) {
          this.headphonesData[i].isFavorive = !this.headphonesData[i].isFavorive;
        }
      }
    },
    toogleBag(id: string): void {
      for (let i = 0; i <= this.headphonesData.length; i++) {
        if (id == this.headphonesData[i].id) {
          this.headphonesData[i].isOnBag = !this.headphonesData[i].isOnBag;
        }
      }
    },
  },
});
