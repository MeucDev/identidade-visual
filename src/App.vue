<template>
  <main id="app" class="bg-light" role="main">
    <meuc-header />
    <meuc-section title="Logomarca">
      <p class="description mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nam tincidunt ac felis nec malesuada.
        Sed ex nibh, placerat non felis sed, suscipit venenatis augue.
        Curabitur sit amet dui vehicula, feugiat lacus id, egestas purus.
      </p>
      <meuc-cards title="Download">
        <meuc-card title="Horizontal - Cor"
          image="./download/logo-meuc-cor.svg"
          :download-links="{
            'PNG': './download/logo-meuc-cor.png',
            'SVG': './download/logo-meuc-cor.svg'
          }" />
        <meuc-card title="Horizontal - Branco"
          image="./download/logo-meuc-branco.svg"
          :backgroundColor="meucBlue"
          :download-links="{
            'PNG': './download/logo-meuc-branco.png',
            'SVG': './download/logo-meuc-branco.svg'
          }" />
        <meuc-card title="Horizontal - Azul"
          image="./download/logo-meuc-azul.svg"
          :download-links="{
            'PNG': './download/logo-meuc-azul.png',
            'SVG': './download/logo-meuc-azul.svg'
          }" />
      </meuc-cards>
    </meuc-section>
  </main>
</template>

<script>
import 'bootstrap'
import MeucHeader from './components/MeucHeader.vue'
import MeucSection from './components/MeucSection.vue'
import MeucCards from './components/MeucCards.vue'
import MeucCard from './components/MeucCard.vue'

export default {
  name: 'App',
  components: {
    MeucHeader,
    MeucSection,
    MeucCards,
    MeucCard
  },
  data: () => {
    return {
      meucBlue: '#005aaa'
    }
  }
}
</script>

<style lang="scss">
@import 'bootstrap';

#app {
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
}
</style>
