import { defineStore } from "pinia";

export const useHeadphones = defineStore("Headphones", {
  state: () => ({
    headphonesData: [
      {
        img: "src/images/AppleByzS8521.png",
        name: "Apple BYZ S852I",
        rating: 4.7,
        cost: 2927,
        oldCost: 3527,
        id: "AppleBYZS852I_1",
        isFavorive: false,
      },
      {
        img: "src/images/AppleEarPods.png",
        name: "Apple EarPods",
        rating: 4.5,
        cost: 2327,
        oldCost: 0,
        id: "AppleEarPods_2",
        isFavorive: false,
      },
      {
        img: "src/images/AppleEarPodsInBox.png",
        name: "Apple EarPods",
        rating: 4.5,
        cost: 2327,
        oldCost: 0,
        id: "AppleEarPods_3",
        isFavorive: false,
      },
      {
        img: "src/images/AppleByzS8521.png",
        name: "Apple BYZ S852I",
        rating: 4.7,
        cost: 2927,
        oldCost: 3527,
        id: "AppleBYZS852I_4",
        isFavorive: false,
      },
      {
        img: "src/images/AppleEarPods.png",
        name: "Apple EarPods",
        rating: 4.5,
        cost: 2327,
        oldCost: 0,
        id: "AppleEarPods_5",
        isFavorive: false,
      },
      {
        img: "src/images/AppleEarPodsInBox.png",
        name: "Apple EarPods",
        rating: 4.5,
        cost: 2327,
        oldCost: 0,
        id: "AppleEarPods_6",
        isFavorive: false,
      },
    ],
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
  },
  actions: {
    tooggleIcons(id: number): void {
      this.headphonesData[id].isFavorive = !this.headphonesData[id].isFavorive;
    },
    toogleFavoritesIcons(id: string): void {
      console.log(id);
      for (let i = 0; i <= this.headphonesData.length; i++) {
        if (id == this.headphonesData[i].id) {
          this.headphonesData[i].isFavorive = !this.headphonesData[i].isFavorive;
        }
      }
    },
  },
});
