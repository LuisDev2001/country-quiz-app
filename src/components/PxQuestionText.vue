<template>
  <h3 class="question__text-question">{{ countryText }} is the capital of</h3>
</template>

<script>
export default {
  name: "PxQuestionText",
  props: {
    countryText: String,
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/sass/components/_PxQuestionText.scss";
</style>
