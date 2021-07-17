<template>
  <PxContainerQuestion>
    <div class="question__image-top">
      <img src="@/assets/img/woldTopImg.svg" alt="IMAGE TOP" />
    </div>

    <h3 class="question__text-question">Kuala Lumpur is the capital of</h3>

    <PxAlternative />

    <PxAlternative />

    <PxAlternative />

    <PxAlternative />

    <PxButton textButton="Next" />
  </PxContainerQuestion>
</template>

<script>
import PxContainerQuestion from "./PxContainerQuestion";
import PxAlternative from "./PxAlternative";
import PxButton from "./PxButton";

export default {
  name: "PxQuestion",
  components: {
    PxContainerQuestion,
    PxAlternative,
    PxButton,
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/sass/components/_PxQuestion.scss";
</style>
