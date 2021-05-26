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

p {
  margin-top: -1em;
  font-size: 0.8em;
  color: $meuc-gray;
  opacity: 0.8;
  text-align: center;
}
</style>
