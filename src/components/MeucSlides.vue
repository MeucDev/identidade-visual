<template>
  <div class="accordion-item" id="slides">
    <p class="description mx-auto">
      Slides
    </p>
    <meuc-cards title="Orientações">
      <meuc-guideline title="Não utilize material sem autorização"
          description="Direitos Autorais precisam ser respeitados. Busque materiais que sejam de uso gratuito ou ."
          image="./guidelines/cores-contraste.svg" />
      <meuc-guideline title="Identifique-se"
          description="É importante que as pessoas reconheçam facilmente a origem da transmissão. Recomendamos utilizar a logo no canto superior direito (veja download abaixo)."
          image="./guidelines/cores-contraste.svg"
          type="success" />
    </meuc-cards>
    <meuc-cards title="Louvor">
      <meuc-card title="Fundo preto (para projetor)"
          image="./download/slides-louvor-fundo-preto-16x9.jpg"
          :download-links="{
          'PPTX': './download/slides-louvor-fundo-preto-16x9.pptx',
          'POTX': './download/slides-louvor-fundo-preto-16x9.potx'
          }" />
      <meuc-card title="Fundo verde (para legenda)"
          image="./download/slides-louvor-fundo-verde-16x9.jpg"
          :download-links="{
          'PPTX': './download/slides-louvor-fundo-verde-16x9.pptx',
          'POTX': './download/slides-louvor-fundo-verde-16x9.potx'
          }" />
    </meuc-cards>
  </div>
</template>

<script>
import MeucCards from './MeucCards.vue'
import MeucCard from './MeucCard.vue'
import MeucGuideline from './MeucGuideline.vue'

export default {
  name: 'MeucSlides',
  components: {
    MeucCards,
    MeucCard,
    MeucGuideline
  }
}
</script>

<style scoped lang="scss">
@import '../assets/style/section.scss';
</style>
