<template>
  <div class="cards align-items-stretch">
    <h3 class="my-3">{{ title }}</h3>
    <div class="row justify-content-center">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MeucCards',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/style/defaults.scss';

h3 {
  font-size: 1.5em;
  text-align: center;
  color: $meuc-gray;
}
</style>
