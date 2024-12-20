import { defineStore } from "pinia";
export const mystore2 = defineStore("mystore2", {
  state: () => ({
    result: [],
  }),
  getters: {},
  actions: {
    async getruslt(item) {
      this.result.push(item);
      console.log(this.result);
    },
  },
});
