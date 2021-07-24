<template>
  <PxContainerQuestion>
    <img
      class="result__image"
      src="@/assets/img/result.svg"
      alt="Result image"
    />
    <h3 class="result__title">Results</h3>
    <p class="result__text">
      You got
      <span class="result__points">
        <b v-text="optionsQuestion.questionsCorrect"></b>
      </span>
      correct answers
    </p>
    <PxButton
      textButton="Try again"
      className="again"
      @click="handleTryAgain"
    />
  </PxContainerQuestion>
</template>

<script>
import { inject, computed } from "vue";
import PxButton from "@/components/PxButton";
import PxContainerQuestion from "./PxContainerQuestion";
import { FetchData, ShuffleAlternatives } from "@/utils";

export default {
  name: "PxPointsQuiz",
  components: {
    PxContainerQuestion,
    PxButton,
  },
  setup() {
    const optionsQuestion = inject("dataQuestion");

    /* Methods */
    const handleTryAgain = async () => {
      optionsQuestion.endGame = !optionsQuestion.endGame;
      optionsQuestion.questionsCorrect = 0;

      //Change type question country
      optionsQuestion.typeQuestion = false;

      await getNewDataForNextQuestion();
    };

    const getNewDataForNextQuestion = async () => {
      try {
        optionsQuestion.loading = true;
        setTimeout(async () => {
          //Get data for api country
          const data = await FetchData(optionsQuestion.API_QUESTION_CAPITAL);

          //Shuffle Alternatives
          const alternatives = ShuffleAlternatives(data, ramdomNumber.value);

          //Add information for state
          optionsQuestion.asnwer = data[ramdomNumber.value];
          optionsQuestion.alternatives = alternatives;
          optionsQuestion.countryQuestion = data[ramdomNumber.value].capital;
          optionsQuestion.loading = false;
        }, 1000);
      } catch (error) {
        console.log(error);
        optionsQuestion.error = error;
      }
    };

    /*Computeds*/
    let ramdomNumber = computed(() =>
      Math.floor(
        Math.random() * (optionsQuestion.max - optionsQuestion.min) +
          optionsQuestion.min
      )
    );

    return {
      optionsQuestion,
      handleTryAgain,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/sass/components/_PxPointsQuiz.scss";
</style>
