import { defineStore } from "pinia";
import useHttp from "../server/server";

async function getCoversData() {
  const data = await useHttp("/");
  return data.respons.value.coversList;
}
const coversList = await getCoversData();

export const useCovers = defineStore("Covers", {
  state: () => ({
    coversList,
  }),
  getters: {},
  actions: {},
});
