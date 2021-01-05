<template>
  <section :id="title" class="section container mt-5" role="region">
    <h2 class="mb-4"><a :href="'#' + title">{{ title }}</a></h2>
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

  a {
    position: relative;
    color: inherit;
    text-decoration: inherit;

    &:hover {
      opacity: 0.7;

      &::after {
        content: '';
        position: absolute;
        top: 13px;
        left: -30px;
        width: 20px;
        height: 20px;
        background: center no-repeat url('../assets/images/link.svg');
      }
    }
  }
}

p.description {
  max-width: 640px;
  font-size: 1em;
  color: $meuc-gray;
}
</style>
