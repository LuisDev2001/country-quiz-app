<template>
  <PxContainerQuestion>
    <div class="question__image-top">
      <img src="@/assets/img/woldTopImg.svg" alt="IMAGE TOP" />
    </div>

    <PxQuestionText :countryText="optionsQuestion.countryQuestion" />

    <PxAlternative
      v-for="(alternative, index) in optionsQuestion.alternatives"
      :key="index"
      :letter="ValidationIndex(index)"
      :textAlternative="alternative.name"
    />

    <PxButton textButton="Next" className="next" @click="handleNextQuestion" />
  </PxContainerQuestion>
</template>

<script>
import { computed, inject } from "vue";
import PxContainerQuestion from "./PxContainerQuestion";
import PxQuestionText from "./PxQuestionText";
import PxAlternative from "./PxAlternative";
import PxButton from "./PxButton";
//Utils
import { ValidationIndex, FetchData, ShuffleAlternatives } from "@/utils";

export default {
  name: "PxQuestion",
  components: {
    PxContainerQuestion,
    PxQuestionText,
    PxAlternative,
    PxButton,
  },
  setup() {
    const optionsQuestion = inject("dataQuestion");

    /* Methods */
    const handleNextQuestion = async () => {
      const answer = optionsQuestion.asnwer.name;
      const selectedAlternative = JSON.parse(
        localStorage.getItem("selectedAlternative")
      );

      let arrayAlternatives = Array.from(
        document.querySelectorAll(".question__answer")
      );

      arrayAlternatives.forEach((alternative) => {
        if (alternative.className == "question__answer is-active") {
          alternative.classList.remove("is-active");
        }
      });

      await getNewDataForNextQuestion(selectedAlternative, answer);
    };

    const getNewDataForNextQuestion = async (selectedAlternative, answer) => {
      if (selectedAlternative == answer) {
        optionsQuestion.questionsCorrect++;

        try {
          optionsQuestion.loading = true;
          //Get data for api country
          const data = await FetchData(optionsQuestion.API_QUESTION_CAPITAL);

          //Shuffle Alternatives
          const alternatives = ShuffleAlternatives(data, ramdomNumber.value);

          //Add information for state
          optionsQuestion.asnwer = data[ramdomNumber.value];
          optionsQuestion.alternatives = alternatives;
          optionsQuestion.countryQuestion = data[ramdomNumber.value].capital;
          optionsQuestion.loading = false;
          localStorage.removeItem("selectedAlternative");
        } catch (error) {
          optionsQuestion.error = error;
        }
      } else {
        optionsQuestion.endGame = true;
        console.log(optionsQuestion.questionsCorrect);
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
      ValidationIndex,
      handleNextQuestion,
      optionsQuestion,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/sass/components/_PxQuestion.scss";
</style>
