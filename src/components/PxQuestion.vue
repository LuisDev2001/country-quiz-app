<template>
  <PxContainerQuestion>
    <div class="question__image-top">
      <img src="@/assets/img/woldTopImg.svg" alt="IMAGE TOP" />
    </div>

    <PxQuestionText :countryText="countryQuestion" />

    <PxAlternative
      v-for="(alternative, index) in alternatives"
      :key="index"
      :letter="index"
      :textAlternative="alternative.text"
    />

    <PxButton textButton="Next" />
  </PxContainerQuestion>
</template>

<script>
import { onMounted, reactive, computed, toRefs } from "vue";
import PxContainerQuestion from "./PxContainerQuestion";
import PxQuestionText from "./PxQuestionText";
import PxAlternative from "./PxAlternative";
import PxButton from "./PxButton";

export default {
  name: "PxQuestion",
  components: {
    PxContainerQuestion,
    PxQuestionText,
    PxAlternative,
    PxButton,
  },
  setup() {
    let optionsQuestions = reactive({
      min: 0,
      max: 250,
      alternatives: {
        A: { text: "", correct: false },
        B: { text: "", correct: false },
        C: { text: "", correct: false },
        D: { text: "", correct: false },
      },
      countryQuestion: "",
      API_QUESTION_CAPITAL:
        "https://restcountries.eu/rest/v2/all?fields=name;capital",
      API_QUESTION_FLAG:
        "https://restcountries.eu/rest/v2/all?fields=name;capital;flag",
    });

    onMounted(async () => {
      console.log("/*********DATA*******/");
      try {
        const response = await fetch(optionsQuestions.API_QUESTION_CAPITAL);
        const data = await response.json();
        console.log(data[ramdomNumber.value]);
        optionsQuestions.countryQuestion = data[ramdomNumber.value].name;
      } catch (error) {
        console.log(error);
      }
    });

    let ramdomNumber = computed(() =>
      Math.floor(
        Math.random() * (optionsQuestions.max - optionsQuestions.min) +
          optionsQuestions.min
      )
    );

    return {
      ...toRefs(optionsQuestions),
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/sass/components/_PxQuestion.scss";
</style>
