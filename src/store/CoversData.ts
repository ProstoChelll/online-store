import { defineStore } from "pinia";

export const useCovers = defineStore("Covers", {
  state: () => ({
    coversList: [
      {
        img: "src/images/glassCover.png",
        name: "Стеклянные",
        id: "GlassCovers",
      },
      {
        img: "src/images/siliconeCover.png",
        name: "Силиконовые",
        id: "SiliconeCovers",
      },
      {
        img: "src/images/leatherCover.png",
        name: "Кожанные",
        id: "LeatherCovers",
      },
    ],
  }),
  getters: {},
  actions: {},
});
