<template>
  <section class="section container" role="region">
    <div class="accordion-item" :id="'item-' + tag">
      <h2 class="accordion-header" :id="'acc-' + tag">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#content-' + tag" aria-expanded="false" :aria-controls="'content-' + tag">
          <span>{{title}}</span>
        </button>
      </h2>
      <div :id="'content-' + tag" class="accordion-collapse collapse" :aria-labelledby="'acc-' + tag" :data-bs-parent="'#' + parent">
        <div class="accordion-body mb-5">
          <slot></slot>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AccordionItem',
  props: {
    title: String,
    parent: String
  },
  computed: {
    tag () {
      const normalized = this.title.normalize('NFD').replaceAll(/[\u0300-\u036f]/g, '')
      return normalized.toLowerCase().replaceAll(' ', '-')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/defaults.scss';

.accordion-item {
  background: transparent;

  .accordion-header {
    .accordion-button {
      background: transparent;
      font-size: 1em;
      font-weight: 600;
      color: $meuc-blue;
      text-align: center;

      span {
        margin-left: auto;
      }

      &::after {
        margin-left: 1em;
        margin-right: auto;
      }
    }
  }

  .accordion-body {
    background: white;
  }
}
</style>
