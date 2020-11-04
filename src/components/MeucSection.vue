<template>
  <section class="section container" role="region">
    <h3>{{ title }}</h3>
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'MeucSection',
  props: {
    title: String
  }
}
</script>

<style scoped lang="scss">
@import '../assets/style/defaults.scss';

h3 {
  color: $meuc-blue;
}
</style>
