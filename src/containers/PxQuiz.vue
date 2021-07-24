<template>
  <div class="quiz">
    <h1 class="quiz__title">Country quiz</h1>
    <PxQuestion v-if="!endGame" />

    <PxPointsQuiz v-if="endGame" />
  </div>
</template>

<script>
import { provide, computed, onMounted, reactive, toRefs } from "vue";

import PxQuestion from "@/components/PxQuestion";
import PxPointsQuiz from "@/components/PxPointsQuiz";

import { FetchData, ShuffleAlternatives } from "@/utils";

export default {
  name: "PxQuiz",
  components: {
    PxQuestion,
    PxPointsQuiz,
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
      typeQuestion: false, //false = country || true = flag
      flag: "",
      endGame: false,
      loading: false,
      error: null,
    });

    provide("dataQuestion", optionsQuestions);

    const getDataCountry = async () => {
      try {
        optionsQuestions.loading = true;
        setTimeout(async () => {
          //Get data for api country
          const data = await FetchData(optionsQuestions.API_QUESTION_CAPITAL);

          //Shuffle Alternatives
          const alternatives = ShuffleAlternatives(data, ramdomNumber.value);

          //Add information for state
          optionsQuestions.asnwer = data[ramdomNumber.value];
          optionsQuestions.alternatives = alternatives;
          optionsQuestions.countryQuestion = data[ramdomNumber.value].capital;
          optionsQuestions.loading = false;
        }, 1500);
      } catch (error) {
        console.log(error);
        optionsQuestions.error = error;
      }
    };

    /*Computeds*/
    let ramdomNumber = computed(() =>
      Math.floor(
        Math.random() * (optionsQuestions.max - optionsQuestions.min) +
          optionsQuestions.min
      )
    );

    /* Life cycles */
    onMounted(async () => await getDataCountry());

    return {
      ...toRefs(optionsQuestions),
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/sass/components/_PxQuiz.scss";
</style>
