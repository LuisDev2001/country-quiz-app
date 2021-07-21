<template>
  <div
    @click="handleClickAlternative(textAlternative)"
    :class="{ question__answer: true, 'is-active': activeAlternative }"
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
    const activeAlternative = ref(false);

    /*Methods*/
    const handleClickAlternative = (textAlternative) => {
      activeAlternative.value = !activeAlternative.value;
      localStorage.setItem(
        "selectedAlternative",
        JSON.stringify(textAlternative)
      );
    };

    return {
      handleClickAlternative,
      activeAlternative,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/sass/components/_PxAlternative.scss";
</style>
