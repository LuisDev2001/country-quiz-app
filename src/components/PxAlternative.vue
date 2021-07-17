<template>
  <div class="question__answer">
    <span class="question__answer-letter">A</span>
    <span class="question__answer-text">Vietnam</span>
  </div>
</template>

<script>
export default {
  name: "PxAlternative",
  props: {
    letter: String,
    text: String,
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/sass/components/_PxAlternative.scss";
</style>
