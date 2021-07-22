<template>
  <PxContainerQuestion>
    <img
      class="result__image"
      src="@/assets/img/result.svg"
      alt="Result image"
    />
    <h3 class="result__title">Results</h3>
    <p class="result__text">
      You got <span class="result__points"><b>4</b></span> correct answers
    </p>
    <PxButton textButton="Try again" className="again" />
  </PxContainerQuestion>
</template>

<script>
import PxButton from "@/components/PxButton";
import PxContainerQuestion from "./PxContainerQuestion";

export default {
  name: "PxPointsQuiz",
  components: {
    PxContainerQuestion,
    PxButton,
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/sass/components/_PxPointsQuiz.scss";
</style>
