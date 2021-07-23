<template>
  <h3 class="question__text-question" v-if="!typeQuestion">
    {{ countryText }} is the capital of
  </h3>

  <h3 class="question__text-question" v-else>
    Which country does this flag belong to?
  </h3>
</template>

<script>
export default {
  name: "PxQuestionText",
  props: {
    countryText: String,
    typeQuestion: Boolean,
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/sass/components/_PxQuestionText.scss";
</style>
