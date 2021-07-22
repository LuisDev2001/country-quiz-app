<template>
  <div class="question__button">
    <button :class="'question__button-' + className">
      {{ textButton }}
    </button>
  </div>
</template>

<script>
export default {
  name: "PxButton",
  props: {
    textButton: String,
    className: String,
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/sass/components/_PxButton.scss";
</style>
