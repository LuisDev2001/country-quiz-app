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
import { onMounted, reactive, computed, toRefs, ref } from "vue";
import PxContainerQuestion from "./PxContainerQuestion";
import PxQuestionText from "./PxQuestionText";
import PxAlternative from "./PxAlternative";
import PxButton from "./PxButton";
//Utils
import {
  Shuffle,
  ValidationIndex,
  FetchData,
  ShuffleAlternatives,
} from "@/utils";

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
      asnwer: {},
      questionsCorrect: 0,
      endGame: false,
      loading: false,
      error: null,
    });

    onMounted(async () => {
      try {
        optionsQuestions.loading = true;

        //Get data for api country
        const data = await FetchData(optionsQuestions.API_QUESTION_CAPITAL);

        //Shuffle Alternatives
        const alternatives = ShuffleAlternatives(data, ramdomNumber.value);

        //Add information for state
        optionsQuestions.asnwer = data[ramdomNumber.value];
        optionsQuestions.alternatives = alternatives;
        optionsQuestions.countryQuestion = data[ramdomNumber.value].capital;
        optionsQuestions.loading = false;
      } catch (error) {
        console.log(error);
        optionsQuestions.error = error;
      }
    });

    /*Computeds*/
    let ramdomNumber = computed(() =>
      Math.floor(
        Math.random() * (optionsQuestions.max - optionsQuestions.min) +
          optionsQuestions.min
      )
    );

    const nextQuestion = async () => {
      const answer = optionsQuestions.asnwer.name;
      const selectedAlternative = JSON.parse(
        localStorage.getItem("selectedAlternative")
      );
      if (selectedAlternative == answer) {
        optionsQuestions.questionsCorrect++;
        optionsQuestions.loading = true;

        console.log(optionsQuestions.questionsCorrect);

        //Get data for api country
        const data = await FetchData(optionsQuestions.API_QUESTION_CAPITAL);

        //Shuffle Alternatives
        const alternatives = ShuffleAlternatives(data, ramdomNumber.value);

        //Add information for state
        optionsQuestions.asnwer = data[ramdomNumber.value];
        optionsQuestions.alternatives = alternatives;
        optionsQuestions.countryQuestion = data[ramdomNumber.value].capital;
        optionsQuestions.loading = false;
      } else {
        if (optionsQuestions.questionsCorrect > 0) {
          optionsQuestions.questionsCorrect--;
        } else {
          optionsQuestions.endGame = true;
        }
        console.log(optionsQuestions.questionsCorrect);
      }
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
