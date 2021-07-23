<template>
  <PxContainerQuestion>
    <div class="question__image-top">
      <img src="@/assets/img/woldTopImg.svg" alt="IMAGE TOP" />
    </div>

    <PxFlag
      v-if="optionsQuestion.typeQuestion"
      :urlFlag="optionsQuestion.flag"
      :descriptionFlag="'Flag for ' + optionsQuestion.countryQuestion"
    />

    <PxQuestionText
      :countryText="optionsQuestion.countryQuestion"
      :typeQuestion="optionsQuestion.typeQuestion"
    />

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
import PxFlag from "./PxFlag.vue";
//Utils
import { ValidationIndex, FetchData, ShuffleAlternatives } from "@/utils";

export default {
  name: "PxQuestion",
  components: {
    PxContainerQuestion,
    PxQuestionText,
    PxAlternative,
    PxButton,
    PxFlag,
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

      //Change type question country or flag
      optionsQuestion.typeQuestion = !optionsQuestion.typeQuestion;

      if (!optionsQuestion.typeQuestion) {
        await getNewDataForNextQuestion(
          selectedAlternative,
          answer,
          optionsQuestion.API_QUESTION_CAPITAL
        );
        console.log("Country");
      } else {
        await getNewDataForNextQuestion(
          selectedAlternative,
          answer,
          optionsQuestion.API_QUESTION_FLAG
        );
        console.log("Flag");
      }
    };

    const getNewDataForNextQuestion = async (
      selectedAlternative,
      answer,
      url_api
    ) => {
      if (selectedAlternative == answer) {
        optionsQuestion.questionsCorrect++;

        try {
          optionsQuestion.loading = true;
          //Get data for api country
          const data = await FetchData(url_api);

          //Shuffle Alternatives
          const alternatives = ShuffleAlternatives(data, ramdomNumber.value);

          //Add information for state
          optionsQuestion.flag = data[ramdomNumber.value].flag;
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
