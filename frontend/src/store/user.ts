import { defineStore } from "pinia";

interface Iuser {
  nickname: string;
  authentication: boolean;
  token: string;
  getsData: boolean;
  bagProducts: { wireles: any[]; headphones: any[] };
  favoritesProducts: { wireles: any[]; headphones: any[] };
}

export const useUser = defineStore("User", {
  state: () =>
    ({
      nickname: "",
      authentication: false,
      token: "",
      getsData: false,
      bagProducts: { wireles: [], headphones: [] },
      favoritesProducts: { wireles: [], headphones: [] },
    } as Iuser),
  getters: {
    getToken(): any {
      return this.token;
    },
    getNickname(): any {
      return this.nickname;
    },
    getAuth(): any {
      return this.authentication;
    },
    getFavoritesHeadphones(): any {
      return this.favoritesProducts.headphones;
    },
  },
  actions: {
    changeToken(token: string) {
      this.token = token;
    },
    changeNickname(newName: string) {
      this.nickname = newName;
    },
    changeAuth() {
      this.authentication = !this.authentication;
    },
    changeBagWireles(data: any) {
      this.bagProducts.wireles.push(data);
    },
    changeBagHeadphones(data: any) {
      this.bagProducts.headphones.push(data);
    },
    changeFavoritesWireles(data: any) {
      this.favoritesProducts.wireles.push(data);
    },
    changeFavoritesHeadphones(data: any) {
      this.favoritesProducts.headphones.push(data);
    },
  },
});
