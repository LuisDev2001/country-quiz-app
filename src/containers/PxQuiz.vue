<template>
  <div class="quiz">
    <h1 class="quiz__title">Country quiz</h1>
    <PxQuestion />
  </div>
</template>

<script>
import PxQuestion from "@/components/PxQuestion";

export default {
  name: "PxQuiz",
  components: {
    PxQuestion,
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/sass/components/_PxQuiz.scss";
</style>
