<template>
  <div :class="[ 'col', 'col-md-' + width, 'mb-4' ]">
    <div class="card">
      <div v-if="hasImage" class="image d-flex justify-content-center align-items-center p-3" :style="{ 'background-color': backgroundColor }">
        <img :src="image" :alt="title">
      </div>
      <div v-if="hasShowcase">
        <slot name="showcase"></slot>
      </div>
      <div v-if="hasTitle" class="card-body d-flex justify-content-between align-items-center">
        <div class="card-title my-auto">
          <h5>{{ title }}</h5>
          <span v-if="hasSubtitle">{{ subtitle }}</span>
        </div>
        <div v-if="downloadLinks" class="btn-group">
          <a v-for="(link, key) in downloadLinks" :key="key" :href="link" target="_blank" class="btn btn-sm btn-outline-secondary">{{ key }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MeucCard',
  props: {
    title: {
      type: String
    },
    subtitle: {
      type: String
    },
    width: {
      type: Number,
      default: 4
    },
    image: {
      type: String
    },
    backgroundColor: {
      type: String,
      default: 'white'
    },
    downloadLinks: {
      type: Object
    }
  },
  computed: {
    hasShowcase () {
      return !!this.$slots.showcase || !!this.$scopedSlots.showcase
    },
    hasImage () {
      return !!this.image
    },
    hasTitle () {
      return !!this.title
    },
    hasSubtitle () {
      return !!this.subtitle
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/style/defaults.scss';

.card {
  height: 100%;

  .image img {
    max-height: 120px;
    max-width: 100%;
  }

  .card-title {
    color: $meuc-gray;

    span {
      display: block;
      margin-top: -5px;
      font-size: 0.85em;
      opacity: 0.75;
    }
  }
}
</style>
