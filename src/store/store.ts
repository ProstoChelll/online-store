import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => ({
    documentTitle: "Shop",
  }),
  getters: {
    getDocumentTitle(): string {
      return this.documentTitle;
    },
  },
  actions: {
    setDocumentTitle(title: string): void {
      this.documentTitle = title;
      document.title = title;
    },
  },
});
