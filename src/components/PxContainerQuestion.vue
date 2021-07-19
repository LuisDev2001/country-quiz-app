<template>
  <div class="question">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "PxContainerQuestion",
};
</script>

<style lang="scss" scoped>
.question {
  background: #ffffff;
  padding: 2.9rem 2rem 4.25rem;
  border-radius: 1.5rem;
  height: auto;
  position: relative;
}
</style>
