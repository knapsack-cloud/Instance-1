<template>
  <div
    v-bind:class="[
      'card',
      {
        [`text-${textAlign}`]: true,
      },
    ]"
  >
    <img :src="imgSrc" class="card-img-top" alt="image alt" />

    <div class="card-body">
      <h5 class="card-title" v-if="cardTitle">{{ cardTitle }}</h5>
      <p class="card-text">
        <slot></slot>
      </p>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: String,
    cardTitle: {
      type: String,
      required: true,
    },
    /**
     * @values left, center, right
     */
    textAlign: {
      type: String,
      default: 'left',
      required: false,
    },
  },
};
</script>

<style scoped lang="scss">
.card {
}
</style>
