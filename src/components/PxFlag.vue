<template>
  <section class="question__image-flag">
    <img :src="urlFlag" :alt="descriptionFlag" />
  </section>
</template>

<script>
export default {
  name: "PxFlag",
  props: {
    urlFlag: String,
    descriptionFlag: String,
  },
};
</script>

<style lang="scss" scoped>
.question__image-flag {
  width: 100px;
  height: 54px;
  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
}
</style>
