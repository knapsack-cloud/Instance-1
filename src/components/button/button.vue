<template>
  <button
    v-bind:class="[
      'bootstrap',
      'btn',
      { [`btn-${type}`]: true, [`btn-${size}`]: true },
    ]"
    v-on:click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    /**
     * @values primary, secondary, success, danger, warning, info, light, dark, link
     */
    type: {
      type: String,
      default: 'secondary',
    },
    /**
     * @values sm, md, lg
     */
    size: {
      type: String,
      required: false,
      default: 'md',
    },
  },
  methods: {
    handleClick(event) {
      /**
       * Triggers when clicked
       */
      this.$emit('btn-click');
    },
  },
};
</script>

<style scoped>
/* .btn.bootstrap {
  font-size: 2em;
} */
</style>
