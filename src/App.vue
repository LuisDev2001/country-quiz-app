<template>
  <div id="nav"><router-link to="/">Home</router-link></div>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
@import "~@/assets/sass/main.scss";
@import "~@/assets/sass/view/_Home.scss";
</style>
