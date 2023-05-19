import { defineStore } from "pinia";

export const useWirelessHeadphones = defineStore("wirelessHeadphones", {
  state: () => ({
    wirelessHeadphonesList: [
      {
        img: "src/images/aplleAirPods.png",
        name: "Apple AirPods",
        rating: 4.7,
        cost: 9527,
        oldCost: 0,
        id: "AppleAirPods_1",
        isFavorive: false,
      },
      {
        img: "src/images/GerlaxGh04.png",
        name: "GERLAX GH-04",
        rating: 4.7,
        cost: 6527,
        oldCost: 0,
        id: "GERLAXGH042_2",
        isFavorive: false,
      },
      {
        img: "src/images/BOROFONEBO4.png",
        name: "BOROFONEBO4",
        rating: 4.7,
        cost: 7527,
        oldCost: 0,
        id: "BOROFONEBO4_3",
        isFavorive: false,
      },
    ],
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
  },
  actions: {
    tooggleIcons(id: number): void {
      this.wirelessHeadphonesList[id].isFavorive = !this.wirelessHeadphonesList[id].isFavorive;
    },
    toogleFavoritesIcons(id: string): void {
      console.log(id);
      for (let i = 0; i <= this.wirelessHeadphonesList.length; i++) {
        if (id == this.wirelessHeadphonesList[i].id) {
          this.wirelessHeadphonesList[i].isFavorive = !this.wirelessHeadphonesList[i].isFavorive;
        }
      }
    },
  },
});
