<template>
  <div class="continer">
    <h1>result</h1>
    <div v-for="(item, i) in this.result" :key="item.i">
      {{ item[i] }}
    </div>
    <div>{{ this.r }}</div>
  </div>
</template>

<script>
import { mapState } from "pinia";
import { mystore2 } from "../store/index";
export default {
  data() {
    return {
      todos: [],
      r: this.result,
    };
  },
  computed: {
    ...mapState(mystore2, ["result"]),
  },
  methods: {
    upddettodo() {
      if (localStorage.getItem("ser")) {
        this.todos = JSON.parse(localStorage.getItem("ser"));
      }
    },
    add2() {
      localStorage.setItem("ser", JSON.stringify(this.todos));
    },
  },
  async mounted() {
    this.upddettodo();
  },
};
</script>

<style lang="css" scoped></style>
