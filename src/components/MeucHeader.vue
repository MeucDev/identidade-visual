<template>
  <div id="header">
    <section class="jumbotron">
      <div class="container py-3">
        <img class="mt-0 mb-4" alt="Logomarca MEUC" src="../assets/images/logo.png">
        <h1 class="jumbotron-heading">Manual de Identidade Visual</h1>
        <h3 class="mb-0">Missão Evangélica União Cristã</h3>
      </div>
    </section>
    <p class="intro">
      Este manual tem como objetivo estabelecer parâmetros para a correta utilização da marca Missão Evangélica União Cristã.
      O cuidado na aplicação de cada um de seus elementos gráficos é fundamental para conferir unidade à comunicação.<br/><br/>
      O uso da marca deverá respeitar os parâmetros apresentados e qualquer nova situação que não esteja prevista entre as relacionadas,
      deverá ser consultada com a Diretoria de Comunicação.
    </p>
  </div>
</template>

<script>
export default {
  name: 'MeucHeader'
}
</script>

<style scoped lang="scss">
@import '../assets/style/defaults.scss';

#header {
  .jumbotron {
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

  p.intro {
    margin: 0 auto;
    max-width: 640px;
    font-size: 1em;
    color: $meuc-gray;
  }
}
</style>
