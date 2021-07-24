<template>
  <div class="card-quiz">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "PxContainerQuestion",
};
</script>

<style lang="scss" scoped>
@import "~@/assets/sass/utils/_animation.scss";
.card-quiz {
  background: #ffffff;
  padding: 2rem 1.5rem 1.5rem;
  border-radius: 1.5rem;
  height: auto;
  position: relative;
  max-width: 464px;
  width: 100%;
  animation-name: fadeIn;
  animation-duration: 0.7s;
  animation-timing-function: ease-in;
  @media screen and (min-width: 768px) {
    padding: 2.9rem 2rem 4.25rem;
  }
}
</style>
