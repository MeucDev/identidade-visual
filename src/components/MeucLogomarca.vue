<template>
  <div id="logomarca">
    <meuc-section title="Logomarca">
      <p class="description mx-auto">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Nam tincidunt ac felis nec malesuada.
      Sed ex nibh, placerat non felis sed, suscipit venenatis augue.
      Curabitur sit amet dui vehicula, feugiat lacus id, egestas purus.
      </p>
      <meuc-cards title="Orientações">
      </meuc-cards>
      <meuc-cards title="Download">
        <meuc-card title="Horizontal - Cor"
            image="./download/logo-meuc-cor.svg"
            :download-links="{
            'PNG': './download/logo-meuc-cor.png',
            'SVG': './download/logo-meuc-cor.svg'
            }" />
        <meuc-card title="Horizontal - Branco"
            image="./download/logo-meuc-branco.svg"
            :backgroundColor="meucBlue"
            :download-links="{
            'PNG': './download/logo-meuc-branco.png',
            'SVG': './download/logo-meuc-branco.svg'
            }" />
        <meuc-card title="Horizontal - Azul"
            image="./download/logo-meuc-azul.svg"
            :download-links="{
            'PNG': './download/logo-meuc-azul.png',
            'SVG': './download/logo-meuc-azul.svg'
            }" />
        <meuc-card title="Vertical - Cor"
            image="./download/logo-meuc-vertical-cor.svg"
            :download-links="{
            'PNG': './download/logo-meuc-vertical-cor.png',
            'SVG': './download/logo-meuc-vertical-cor.svg'
            }" />
        <meuc-card title="Vertical - Branco"
            image="./download/logo-meuc-vertical-branco.svg"
            :backgroundColor="meucBlue"
            :download-links="{
            'PNG': './download/logo-meuc-vertical-branco.png',
            'SVG': './download/logo-meuc-vertical-branco.svg'
            }" />
        <meuc-card title="Vertical - Azul"
            image="./download/logo-meuc-vertical-azul.svg"
            :download-links="{
            'PNG': './download/logo-meuc-vertical-azul.png',
            'SVG': './download/logo-meuc-vertical-azul.svg'
            }" />
        <meuc-card title="Ícone - Cor"
            image="./download/icone-meuc-cor.svg"
            :download-links="{
            'PNG': './download/icone-meuc-cor.png',
            'SVG': './download/icone-meuc-cor.svg'
            }" />
        <meuc-card title="Ícone - Branco"
            image="./download/icone-meuc-branco.svg"
            :backgroundColor="meucBlue"
            :download-links="{
            'PNG': './download/icone-meuc-branco.png',
            'SVG': './download/icone-meuc-branco.svg'
            }" />
        <meuc-card title="Ícone - Azul"
            image="./download/icone-meuc-azul.svg"
            :download-links="{
            'PNG': './download/icone-meuc-azul.png',
            'SVG': './download/icone-meuc-azul.svg'
            }" />
      </meuc-cards>
    </meuc-section>
  </div>
</template>

<script>
import MeucSection from './MeucSection.vue'
import MeucCards from './MeucCards.vue'
import MeucCard from './MeucCard.vue'

export default {
  name: 'MeucLogomarca',
  data: () => {
    return {
      meucBlue: '#005aaa'
    }
  },
  components: {
    MeucSection,
    MeucCards,
    MeucCard
  }
}
</script>
