import { defineStore } from "pinia";
import useHttp from "../server/server";

async function getWirelessHeadphonesList() {
  const data = await useHttp("/");
  return data.respons.value.wirelessHeadphonesList;
}
const wirelessHeadphonesList = await getWirelessHeadphonesList();

export const useWirelessHeadphones = defineStore("wirelessHeadphones", {
  state: () => ({
    wirelessHeadphonesList,
  }),
  getters: {
    getActiveCard() {
      const activeCard: any[] = [];
      for (let i = 0; i < this.wirelessHeadphonesList.length; i++) {
        if (this.wirelessHeadphonesList[i].isFavorive == true) {
          activeCard.push(this.wirelessHeadphonesList[i]);
        }
      }
      return activeCard;
    },
    getActiveBag() {
      const activeBag: any[] = [];
      for (let i = 0; i < this.wirelessHeadphonesList.length; i++) {
        if (this.wirelessHeadphonesList[i].isOnBag == true) {
          activeBag.push(this.wirelessHeadphonesList[i]);
        }
      }
      return activeBag;
    },
    getAllCost() {
      let cost: number = 0;
      for (let i = 0; i < this.wirelessHeadphonesList.length; i++) {
        if (this.wirelessHeadphonesList[i].isOnBag == true) {
          cost = (cost + this.wirelessHeadphonesList[i].cost) * this.wirelessHeadphonesList[i].quantity;
        }
      }
      return cost;
    },
  },
  actions: {
    tooggleIcons(id: number): void {
      this.wirelessHeadphonesList[id].isFavorive = !this.wirelessHeadphonesList[id].isFavorive;
    },
    toogleFavoritesIcons(id: string): void {
      for (let i = 0; i <= this.wirelessHeadphonesList.length; i++) {
        if (id == this.wirelessHeadphonesList[i].id) {
          this.wirelessHeadphonesList[i].isFavorive = !this.wirelessHeadphonesList[i].isFavorive;
        }
      }
    },
    toogleBag(id: string): void {
      for (let i = 0; i <= this.wirelessHeadphonesList.length; i++) {
        if (id == this.wirelessHeadphonesList[i].id) {
          this.wirelessHeadphonesList[i].isOnBag = !this.wirelessHeadphonesList[i].isOnBag;
        }
      }
    },
  },
});
