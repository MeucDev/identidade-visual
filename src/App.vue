<template>
  <div id="app">
    <MeucHeader />
  </div>
</template>

<script>
import MeucHeader from './components/MeucHeader.vue'

export default {
  name: 'App',
  components: {
    MeucHeader
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #777;
  margin-top: 60px;
  font-size: 16px;
}
</style>
