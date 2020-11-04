<template>
  <main id="app" class="bg-light" role="main">
    <MeucHeader />
    <MeucSection title="Logomarca">
      Logo
    </MeucSection>
  </main>
</template>

<script>
import 'bootstrap'
import MeucHeader from './components/MeucHeader.vue'
import MeucSection from './components/MeucSection.vue'

export default {
  name: 'App',
  components: {
    MeucHeader,
    MeucSection
  }
}
</script>

<style lang="scss">
@import 'bootstrap';

#app {
  min-height: 100vh;
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
}
</style>
