<template>
  <main id="app" class="bg-light" role="main">
    <meuc-header />
    <meuc-logomarca></meuc-logomarca>
    <meuc-fonte></meuc-fonte>
    <meuc-cores></meuc-cores>
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

export default {
  name: 'App',
  components: {
    MeucHeader,
    MeucLogomarca,
    MeucFonte,
    MeucCores,
    MeucBottom
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
