<template>
  <div id="transmissao">
    <p class="description mx-auto">
      A transmissão de conteúdo abrange diversos itens - de logo, áudio, slides até qualidade da imagem.<br/>
      O foco desse manual é direcionar para que alguns conceitos principais da identidade sejam mantidos independente
      do conteúdo apresentado ou equipamento utilizado.<br/>
      Veja abaixo algumas orientações e sugestões de material para serem utilizados.
    </p>
    <meuc-cards title="Orientações">
      <meuc-guideline title="Identifique-se"
          description="É importante que as pessoas reconheçam facilmente a origem da transmissão. Recomendamos utilizar a logo no canto superior direito (veja download abaixo)."
          image="./guidelines/transmissao-identificacao.jpg"
          type="success" />
    </meuc-cards>
    <meuc-cards title="Logomarca - Marca d'água">
      <meuc-card title="Tela inteira"
          image="./download/transmissao-logo-canto-720p.png"
          :download-links="{
          '720p': './download/transmissao-logo-canto-720p.png',
          '1080p': './download/transmissao-logo-canto-1080p.png',
          '4K': './download/transmissao-logo-canto-2160p.png'
          }" />
      <meuc-card title="Somente logo"
          image="./download/transmissao-logo-sem-sombra.png"
          :download-links="{
          'Com Sombra': './download/transmissao-logo-com-sombra.png',
          'Sem Sombra': './download/transmissao-logo-sem-sombra.png'
          }" />
      <p class="col-12">Proporções sugeridas - Margem: distância de 3% da altura do vídeo em ambas dimensões | Logo: altura da logo igual a 17% da altura do vídeo</p>
    </meuc-cards>
    <meuc-cards title="Antes de começar">
      <meuc-card title="Relógio"
          image="./download/video-transmissao-bem-vindo-relogio.jpg"
          :download-links="{
          'Loop': './download/video-transmissao-bem-vindo-relogio-loop.mp4',
          '1 min': './download/video-transmissao-bem-vindo-relogio-1-min.mp4',
          '3 min': './download/video-transmissao-bem-vindo-relogio-3-min.mp4',
          '5 min': './download/video-transmissao-bem-vindo-relogio-5-min.mp4'
          }" />
      <meuc-card title="Oceano"
          image="./download/video-transmissao-bem-vindo-oceano.jpg"
          :download-links="{
          'Loop': './download/video-transmissao-bem-vindo-oceano-loop.mp4',
          '1 min': './download/video-transmissao-bem-vindo-oceano-1-min.mp4',
          '3 min': './download/video-transmissao-bem-vindo-oceano-3-min.mp4',
          '5 min': './download/video-transmissao-bem-vindo-oceano-5-min.mp4'
          }" />
    </meuc-cards>
  </div>
</template>

<script>
import MeucCards from './MeucCards.vue'
import MeucCard from './MeucCard.vue'
import MeucGuideline from './MeucGuideline.vue'

export default {
  name: 'MeucTransmissao',
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
