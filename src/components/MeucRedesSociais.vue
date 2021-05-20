<template>
  <div class="accordion-item" id="redes-sociais">
    <p class="description mx-auto">
      REVISAR TEXTO<br/>
      As redes sociais são onde a marca fica mais impressa e comumente vista por pessoas de fora da comunidade.<br/>
      Faz parte da identidade e da imagem.<br/>
      Importância do alinhamento da marca e redes sociais.<br/>
      REVISAR TEXTO
    </p>
    <meuc-cards title="Orientações">
      <meuc-guideline title="Garanta legibilidade"
          description="A falta de contraste entre conteúdo e fundo podem gerar dificuldade de leitura ou identificação de uma imagem."
          image="./guidelines/cores-contraste.svg" />
    </meuc-cards>
    <p class="description mx-auto">
      REVISAR TEXTO<br/>
      As imagens abaixo são uma sugestão e tem a proporção adequada garantindo em todos os dispositivos.<br/>
      REVISAR TEXTO
    </p>
    <meuc-cards title="Facebook">
      <meuc-card title="Imagem de Capa"
          image="./download/capa-facebook-meuc.jpg"
          :download-links="{
          'PDF': './download/capa-youtube-meuc.pdf',
          'JPG': './download/capa-facebook-meuc.jpg'
          }" />
    </meuc-cards>
    <meuc-cards title="YouTube">
      <meuc-card title="Imagem de Capa"
          image="./download/capa-youtube-meuc.jpg"
          :download-links="{
          'PDF': './download/capa-youtube-meuc.pdf',
          'JPG': './download/capa-youtube-meuc.jpg'
          }" />
    </meuc-cards>
  </div>
</template>

<script>
import MeucCards from './MeucCards.vue'
import MeucCard from './MeucCard.vue'
import MeucGuideline from './MeucGuideline.vue'

export default {
  name: 'MeucRedesSociais',
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
