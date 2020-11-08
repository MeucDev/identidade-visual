<template>
  <div id="fonte">
    <meuc-section title="Fonte">
      <p class="description mx-auto">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Nam tincidunt ac felis nec malesuada.
      Sed ex nibh, placerat non felis sed, suscipit venenatis augue.
      Curabitur sit amet dui vehicula, feugiat lacus id, egestas purus.
      </p>
      <meuc-cards title="Orientações">
      </meuc-cards>
      <meuc-cards title="Download">
        <meuc-card title="Open Sans"
            width="6"
            :download-links="{
            'TTF': './download/open-sans.zip'
            }">
          <template v-slot:showcase>
            <div class="p-3 open-sans">
              ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>
              abcdefghijklmnopqrstuvwxyz
            </div>
          </template>
        </meuc-card>
        <meuc-card title="Open Sans Condensed"
            width="6"
            :download-links="{
            'TTF': './download/open-sans-condensed.zip'
            }">
          <template v-slot:showcase>
            <div class="p-3 open-sans-condensed">
              ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>
              abcdefghijklmnopqrstuvwxyz
            </div>
          </template>
        </meuc-card>
      </meuc-cards>
    </meuc-section>
  </div>
</template>

<script>
import MeucSection from './MeucSection.vue'
import MeucCards from './MeucCards.vue'
import MeucCard from './MeucCard.vue'

export default {
  name: 'MeucFonte',
  components: {
    MeucSection,
    MeucCards,
    MeucCard
  }
}
</script>

<style scoped lang="scss">
@import '../assets/style/defaults.scss';

.open-sans,
.open-sans-condensed {
  white-space: nowrap;
  overflow: hidden;
  color: $meuc-white;
  background-color: $meuc-gray;
}

.open-sans {
  font-family: 'Open Sans';
  font-size: 1.8em;
}

.open-sans-condensed {
  font-family: 'Open Sans Condensed';
  font-size: 1.8em;
}
</style>
