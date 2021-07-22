<template>
  <div
    @click="handleClickAlternative(textAlternative)"
    :class="{ question__answer: true }"
    ref="jsAlternative"
  >
    <span class="question__answer-letter">{{ letter }}</span>
    <span class="question__answer-text">{{ textAlternative }}</span>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "PxAlternative",
  props: {
    letter: String,
    textAlternative: String,
  },
  setup() {
    const jsAlternative = ref(null);

    /*Methods*/
    const handleClickAlternative = (textAlternative) => {
      localStorage.setItem(
        "selectedAlternative",
        JSON.stringify(textAlternative)
      );
      let arrayAlternatives = Array.from(
        jsAlternative.value.parentNode.querySelectorAll(".question__answer")
      );
      arrayAlternatives.forEach((alternative) => {
        if (alternative.className == "question__answer is-active") {
          alternative.classList.remove("is-active");
        }
        jsAlternative.value.classList.add("is-active");
      });
    };

    return {
      handleClickAlternative,
      jsAlternative,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/sass/components/_PxAlternative.scss";
</style>
