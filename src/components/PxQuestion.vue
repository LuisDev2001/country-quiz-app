<template>
  <PxContainerQuestion>
    <div class="question__image-top">
      <img src="@/assets/img/woldTopImg.svg" alt="IMAGE TOP" />
    </div>

    <PxQuestionText :countryText="countryQuestion" />

    <PxAlternative
      v-for="(alternative, index) in alternatives"
      :key="index"
      :letter="ValidationIndex(index)"
      :textAlternative="alternative.name"
    />

    <PxButton textButton="Next" @click="nextQuestion" />
  </PxContainerQuestion>
</template>

<script>
import { onMounted, reactive, computed, toRefs } from "vue";
import PxContainerQuestion from "./PxContainerQuestion";
import PxQuestionText from "./PxQuestionText";
import PxAlternative from "./PxAlternative";
import PxButton from "./PxButton";
//Utils
import { Shuffle, ValidationIndex } from "@/utils";

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
      alternatives: [],
      countryQuestion: "",
      API_QUESTION_CAPITAL:
        "https://restcountries.eu/rest/v2/all?fields=name;capital",
      API_QUESTION_FLAG:
        "https://restcountries.eu/rest/v2/all?fields=name;capital;flag",
      questionsCorrect: [],
    });

    onMounted(async () => {
      try {
        const response = await fetch(optionsQuestions.API_QUESTION_CAPITAL);
        const data = await response.json();
        //Shuffle alternatives
        let alternatives = Shuffle(data).slice(0, 3);
        alternatives.push(data[ramdomNumber.value]);
        Shuffle(alternatives);
        //Add information for state
        optionsQuestions.alternatives = alternatives;
        optionsQuestions.countryQuestion = data[ramdomNumber.value].capital;
      } catch (error) {
        console.log(error);
      }
    });

    /*Computeds*/
    let ramdomNumber = computed(() =>
      Math.floor(
        Math.random() * (optionsQuestions.max - optionsQuestions.min) +
          optionsQuestions.min
      )
    );

    /* Methods */
    const nextQuestion = () => {
      console.log("click");
    };

    return {
      ...toRefs(optionsQuestions),
      ValidationIndex,
      nextQuestion,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/sass/components/_PxQuestion.scss";
</style>
