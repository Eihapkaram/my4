<template>
  <div>
    <table border style="width: 100%">
      <tr>
        <th>prodect</th>
        <th>id</th>
        <th>time</th>
      </tr>
      <tr v-for="(todo, index) in todos" :key="todo.id">
        <td>{{ todo.text }}</td>
        <td>{{ todo.id }}</td>
        <td>{{ todo.time }}</td>
        <button @click="delet(index)">del</button>
        <button @click="complet(index)">complet</button>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    upddettodo() {
      if (localStorage.getItem("todos")) {
        this.todos = JSON.parse(localStorage.getItem("todos"));
      }
    },
    add2() {
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
    delet(index) {
      this.todos.splice(index, 1);
      this.add2();
    },
    complet(index) {
      index.style.backgroundColor = "green";
      this.add2();
    },
  },
  mounted: function () {
    this.upddettodo();
  },
};
</script>
