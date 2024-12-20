<template>
  <input v-model="todo.text" type="text" />
  <button @click="addtodo()">ok</button>
</template>
<script>
export default {
  mounted: function () {
    this.updetetodo();
  },
  data() {
    return {
      todolist: [],
      todo: {
        id: "",
        text: "",
        time: "",
      },
    };
  },
  methods: {
    addtodo() {
      this.todo.id = this.todolist.length + 1;
      this.todo.time = new Date().toLocaleDateString();
      this.todolist.push(this.todo);
      this.todo = { id: "", text: "", time: "" };
      this.add2();
    },
    add2() {
      localStorage.setItem("todos", JSON.stringify(this.todolist));
    },
    updetetodo() {
      if (localStorage.getItem("todos")) {
        this.todolist = JSON.parse(localStorage.getItem("todos"));
      }
    },
  },
};
</script>
