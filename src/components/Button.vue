<template>
  <div>
    <button @click="handleClick">
      <slot>默认按钮</slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "CButton",
  props: {
    disabled:{
      type:Boolean,
    },
  },
  methods: {
    handleClick() {
      if (this.disbaled) return;
      this.$emit("test-click");
    }
  }
};
</script>
