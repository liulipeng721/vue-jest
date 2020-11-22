<template>
  <div :class="classes">
    {{ item.content }}
    <button data-test="removeBtn" @click="removeTodo">remove</button>
    <button @click="completeTodo">completeTodo</button>
  </div>
</template>

<script>
export default {
  props: ["item"],
  methods: {
    removeTodo() {
      console.log("remove-----");
      this.$emit("remove", this.item.id);
    },
    completeTodo() {
      // 可以切换
      if (this.item.state === "completed") {
        this.$emit("change-state", { state: "active", id: this.item.id });
      } else {
        this.$emit("change-state", { state: "completed", id: this.item.id });
      }
    }
  },
  computed: {
    classes() {
      return {
        completed: this.item.state === "completed"
      };
    }
  }
};
</script>

<style>
.completed {
  text-decoration: line-through;
}
</style>
