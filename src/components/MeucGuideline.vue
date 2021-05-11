<template>
  <div :class="[ 'col-lg-' + width, 'col-md-12', 'mb-4' ]">
    <div class="card flex-row">
      <div :class="[ 'icon', type ]"><div class="icon-image"></div></div>
      <div v-if="hasImage" class="image d-flex justify-content-center align-items-center p-3" :style="{ 'background-color': backgroundColor }">
        <img :src="image" :alt="title" style="max-height: 72px;">
      </div>
      <div v-if="hasTitle" class="card-body d-flex flex-column align-items-stretch justify-content-center">
        <h5 class="card-title my-auto mt-auto">{{ title }}</h5>
        <p v-if="description" class="card-text mb-auto">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MeucGuideline',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    width: {
      type: Number,
      default: 6
    },
    image: {
      type: String,
      required: true
    },
    backgroundColor: {
      type: String,
      default: 'white'
    },
    type: {
      type: String,
      default: 'error'
    }
  },
  computed: {
    hasImage () {
      return !!this.image
    },
    hasTitle () {
      return !!this.title
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/style/defaults.scss';

.card {
  height: 100%;

  .icon {
    position: absolute;
    top: 50%;
    margin-top: -12px;
    left: -12px;
    width: 24px;
    height: 24px;
    border-radius: 50%;

    .icon-image {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 12px;
      height: 12px;
      transform: translateX(-50%) translateY(-50%);
    }

    &.error {
      background-color: $bootstrap-danger;

      .icon-image {
        background: url('../assets/images/error.svg');
      }
    }

    &.warning {
      background-color: $bootstrap-warning;

      .icon-image {
        background: url('../assets/images/warning.svg');
      }
    }

    &.success {
      background-color: $bootstrap-success;

      .icon-image {
        background: url('../assets/images/success.svg');
      }
    }
  }

  .image {
    padding-right: 0 !important;
    min-width: 200px;
  }

  h5 {
    color: $meuc-gray;
  }

  p.card-text {
    margin-top: 0.3em;
    font-size: 0.9em;
    color: $meuc-gray;
  }
}
</style>
