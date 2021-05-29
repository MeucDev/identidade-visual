<template>
  <main id="app" class="bg-light" role="main">
    <meuc-header />
    <div class="accordion accordion-flush mt-5 mb-auto" id="accordion">
      <accordion-item title="Logomarca" parent="accordion">
        <meuc-logomarca></meuc-logomarca>
      </accordion-item>
      <accordion-item title="Redes Sociais" parent="accordion">
        <meuc-redes-sociais></meuc-redes-sociais>
      </accordion-item>
      <accordion-item title="Slides" parent="accordion">
        <meuc-slides></meuc-slides>
      </accordion-item>
      <accordion-item title="Transmissão" parent="accordion">
        <meuc-transmissao></meuc-transmissao>
      </accordion-item>
      <accordion-item title="Material e Conteúdo" parent="accordion">
        <meuc-material></meuc-material>
      </accordion-item>
      <accordion-item title="Fonte" parent="accordion">
        <meuc-fonte></meuc-fonte>
      </accordion-item>
      <accordion-item title="Cores" parent="accordion">
        <meuc-cores></meuc-cores>
      </accordion-item>
    </div>
    <meuc-bottom></meuc-bottom>
  </main>
</template>

<script>
import 'bootstrap'
import MeucHeader from './components/MeucHeader.vue'
import MeucLogomarca from './components/MeucLogomarca.vue'
import MeucRedesSociais from './components/MeucRedesSociais.vue'
import MeucSlides from './components/MeucSlides.vue'
import MeucTransmissao from './components/MeucTransmissao.vue'
import MeucMaterial from './components/MeucMaterial.vue'
import MeucFonte from './components/MeucFonte.vue'
import MeucCores from './components/MeucCores.vue'
import MeucBottom from './components/MeucBottom.vue'
import AccordionItem from './components/AccordionItem.vue'

export default {
  name: 'App',
  components: {
    MeucHeader,
    MeucLogomarca,
    MeucRedesSociais,
    MeucSlides,
    MeucTransmissao,
    MeucMaterial,
    MeucFonte,
    MeucCores,
    MeucBottom,
    AccordionItem
  }
}
</script>

<style lang="scss">
@import 'bootstrap';

#app {
  display: flex;
  flex-direction: column;
  align-content: stretch;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
}
</style>
