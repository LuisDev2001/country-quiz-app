<template>
  <div
    :class="{ question__answer: true, 'is-active': activeAlternative }"
    @click="handleClickAlternative"
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
    const handleClickAlternative = () => {
      activeAlternative.value = !activeAlternative.value;
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
