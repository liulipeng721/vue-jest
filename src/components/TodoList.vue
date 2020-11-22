<template>
  <div>
    <input type="input" @keyup.enter="addTodo" v-model="newTodo" />
    <div>
      <ul>
        <li v-for="item in todos" :key="item.id">
          <!-- {{ item.content }}
          <button @click="removeTodo(item.id)">remove</button> -->
          <TodoItem
            :item="item"
            @remove="removeTodo"
            @change-state="handleChangeState"
          ></TodoItem>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";
export default {
  components: {
    TodoItem
  },
  data() {
    return {
      newTodo: "",
      todos: []
    };
  },
  methods: {
    handleChangeState({ state, id }) {
      console.log(state);
      // 找到对应的 item
      const item = this.todos.find(item => item.id === id);
      item.state = state;
      // item.state
    },
    removeTodo(id) {
      console.log("remove");
      // vue -> mvvm -> 操作数据
      // 先确定 item
      // id
      // 好多种办法 去实现一个逻辑
      //   const itemIndex = this.todos.findIndex(item => (item.id = id));
      //   this.todos.splice(itemIndex, 1);
      this.todos = this.todos.filter(item => item.id !== id);
    },
    createId() {
      return Date.now();
    },
    addTodo() {
      this.todos.push({
        content: this.newTodo,
        id: this.createId(),
        state: "active"
      });

      // reset newTodo
      this.newTodo = "";
    }
  }
};
</script>

<style></style>
