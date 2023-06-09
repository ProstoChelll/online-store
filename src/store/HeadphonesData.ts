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
        isOnBag: false,
        quantity: 1,
      },
      {
        img: "src/images/AppleEarPods.png",
        name: "Apple EarPods",
        rating: 4.5,
        cost: 2327,
        oldCost: 0,
        id: "AppleEarPods_2",
        isFavorive: false,
        isOnBag: false,
        quantity: 1,
      },
      {
        img: "src/images/AppleEarPodsInBox.png",
        name: "Apple EarPods",
        rating: 4.5,
        cost: 2327,
        oldCost: 0,
        id: "AppleEarPods_3",
        isFavorive: false,
        isOnBag: false,
        quantity: 1,
      },
      {
        img: "src/images/AppleByzS8521.png",
        name: "Apple BYZ S852I",
        rating: 4.7,
        cost: 2927,
        oldCost: 3527,
        id: "AppleBYZS852I_4",
        isFavorive: false,
        isOnBag: false,
        quantity: 1,
      },
      {
        img: "src/images/AppleEarPods.png",
        name: "Apple EarPods",
        rating: 4.5,
        cost: 2327,
        oldCost: 0,
        id: "AppleEarPods_5",
        isFavorive: false,
        isOnBag: false,
        quantity: 1,
      },
      {
        img: "src/images/AppleEarPodsInBox.png",
        name: "Apple EarPods",
        rating: 4.5,
        cost: 2327,
        oldCost: 0,
        id: "AppleEarPods_6",
        isFavorive: false,
        isOnBag: false,
        quantity: 1,
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
