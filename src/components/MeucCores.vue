<template>
  <div id="cores">
    <meuc-section title="Cores">
      <p class="description mx-auto">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <meuc-cards title="Orientações">
      </meuc-cards>
      <meuc-cards title="Galeria">
        <meuc-card width="3">
          <template v-slot:showcase>
            <div class="p-3 color blue">
              <h6 class="mb-3">Azul escuro</h6>
              <p class="mb-0">
                <strong>CMYK</strong> 100, 70, 0, 0<br/>
                <strong>RGB</strong> 0, 90, 170<br/>
                <strong>HEX</strong> #005AAA<br/>
                <strong>HSL</strong> 222, 100, 50
              </p>
            </div>
          </template>
        </meuc-card>
        <meuc-card width="3">
          <template v-slot:showcase>
            <div class="p-3 color light-blue">
              <h6 class="mb-3">Azul claro</h6>
              <p class="mb-0">
                <strong>CMYK</strong> 40, 0, 0, 0<br/>
                <strong>RGB</strong> 141, 216, 248<br/>
                <strong>HEX</strong> #8DD8F8<br/>
                <strong>HSL</strong> 198, 88, 76
              </p>
            </div>
          </template>
        </meuc-card>
        <meuc-card width="3">
          <template v-slot:showcase>
            <div class="p-3 color gray">
              <h6 class="mb-3">Cinza</h6>
              <p class="mb-0">
                <strong>CMYK</strong> 0, 0, 0, 65<br/>
                <strong>RGB</strong> 119, 120, 123<br/>
                <strong>HEX</strong> #77787B<br/>
                <strong>HSL</strong> 0, 0, 35
              </p>
            </div>
          </template>
        </meuc-card>
        <meuc-card width="3">
          <template v-slot:showcase>
            <div class="p-3 color white">
              <h6 class="mb-3">Branco</h6>
              <p class="mb-0">
                <strong>CMYK</strong> 0, 0, 0, 0<br/>
                <strong>RGB</strong> 255, 255, 255<br/>
                <strong>HEX</strong> #FFFFFF<br/>
                <strong>HSL</strong> 0, 100, 100
              </p>
            </div>
          </template>
        </meuc-card>
      </meuc-cards>
      <meuc-cards title="Análogas e Complementares">
      </meuc-cards>
    </meuc-section>
  </div>
</template>

<script>
import MeucSection from './MeucSection.vue'
import MeucCards from './MeucCards.vue'
import MeucCard from './MeucCard.vue'

export default {
  name: 'MeucCores',
  components: {
    MeucSection,
    MeucCards,
    MeucCard
  }
}
</script>

<style scoped lang="scss">
@import '../assets/style/defaults.scss';

.color {
  h6 {
    font-size: 1.4em;
  }

  strong {
    display: inline-block;
    width: 50px;
    margin-right: 10px;
  }

  &.blue {
    color: $meuc-white;
    background-color: $meuc-blue;
  }
  &.light-blue {
    color: $meuc-gray;
    background-color: $meuc-light-blue;
  }
  &.gray {
    color: $meuc-white;
    background-color: $meuc-gray;
  }
  &.white {
    color: $meuc-gray;
    background-color: $meuc-white;
  }
}
</style>