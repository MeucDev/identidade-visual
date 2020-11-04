<template>
  <main id="app" class="bg-light" role="main">
    <MeucHeader />
    <MeucSection title="Logomarca">
      <p class="description mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nam tincidunt ac felis nec malesuada.
        Sed ex nibh, placerat non felis sed, suscipit venenatis augue.
        Curabitur sit amet dui vehicula, feugiat lacus id, egestas purus.
      </p>
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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
}
</style>
