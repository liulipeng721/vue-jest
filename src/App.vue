<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <TodoList></TodoList>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
import TodoList from "./components/TodoList";

// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  data:{

  },
  components: {
    TodoList
    // HelloWorld
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
