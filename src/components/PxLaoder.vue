<template>
  <div class="loader">
    <img src="@/assets/img/loader-custom.svg" alt="LOADER" />
    <p>Cargando...</p>
  </div>
</template>

<script>
export default {
  name: "PxLoader",
};
</script>

<style lang="scss" scoped>
@import "~@/assets/sass/utils/_variables.scss";
.loader {
  max-width: 300px;
  width: 100%;
  margin: 30px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  p {
    font-family: $font-poppins-regular;
    font-size: 1.45rem;
  }
}
</style>
