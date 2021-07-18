<template>
  <div class="question__answer">
    <span class="question__answer-letter">{{ letter }}</span>
    <span class="question__answer-text">{{ textAlternative }}</span>
  </div>
</template>

<script>
export default {
  name: "PxAlternative",
  props: {
    letter: String,
    textAlternative: String,
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/sass/components/_PxAlternative.scss";
</style>
