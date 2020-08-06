<template>
  <div role="alert"
    v-bind:class="[
      'alert',
      {[`alert-${type}`]: true}
    ]"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    /**
     * @values primary, secondary, success, danger, warning, info, light, dark
     */
    type: {
      type: String,
      default: 'secondary',
    },
  }
}
</script>

<style lang="scss">

</style>
