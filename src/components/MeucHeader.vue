<template>
  <section id="header" class="jumbotron">
    <div class="container py-3">
      <img class="mt-0 mb-4" alt="Logomarca MEUC" src="../assets/images/logo.png">
      <h1 class="jumbotron-heading">Manual de Identidade Visual</h1>
      <h3 class="mb-0">Missão Evangélica União Cristã</h3>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MeucHeader'
}
</script>

<style scoped lang="scss">
@import '../assets/style/defaults.scss';

#header {
  text-align: center;

  h1 {
    font-size: 2.5em;
    color: $meuc-blue;
  }

  h3 {
    font-size: 1em;
    letter-spacing: 0.2em;
    color: $meuc-gray;
  }
}
</style>
