<template>
  <section class="section container" role="region">
    <h2 class="mb-4">{{ title }}</h2>
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

h2 {
  font-size: 2em;
  font-weight: 600;
  text-align: center;
  color: $meuc-blue;
}

p.description {
  max-width: 640px;
  font-size: 1em;
  color: $meuc-gray;
}
</style>
