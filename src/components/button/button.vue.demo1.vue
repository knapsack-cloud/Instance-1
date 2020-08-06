<template>
  <bs-vue-button size="sm" type="primary" v-on:btn-click="log">
    Click Here!
  </bs-vue-button>
</template>

<script>
import button from './button.vue';
export default {
  components: {
    'bs-vue-button': button,
  },
  methods: {
    log(event) {
      // `this` inside methods points to the Vue instance
      // `event` is the native DOM event
      console.log(`A button was clicked`, event);
    },
  },
};
</script>
