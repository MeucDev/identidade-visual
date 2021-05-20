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
import MeucFonte from './components/MeucFonte.vue'
import MeucCores from './components/MeucCores.vue'
import MeucBottom from './components/MeucBottom.vue'
import AccordionItem from './components/AccordionItem.vue'

export default {
  name: 'App',
  components: {
    MeucHeader,
    MeucLogomarca,
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
