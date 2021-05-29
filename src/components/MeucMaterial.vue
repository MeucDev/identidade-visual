<template>
  <div id="material">
    <p class="description mx-auto">
      Ao construir campanhas, vídeos ou apresentações para as comunidades, é comum buscar materiais
      que vão enriquescer esses itens. Imagens, trilha sonora, vídeos com certeza aumentam a qualidade do conteúdo,
      mas é preciso saber onde buscar.<br/>
      Sites de pesquisa (como o Google, Bing) ou redes sociais (como Instagram, Pinterest) são interessantes como fonte
      de inspiração, mas <b>NÃO DEVEM</b> ser utilizados para download. Esses sites agregam e divulgam conteúdo, mas
      os direitos autorais ainda pertence a quem os criou e divulgou, e precisam ser solicitados (ou às vezes comprados)
      para serem respeitados.
    </p>
    <meuc-cards title="Orientações">
      <meuc-guideline title="Não utilize material sem autorização"
          description="Direitos Autorais precisam ser respeitados. Busque itens que sejam de uso gratuito ou que você tenha permissões."
          image="./guidelines/material-direitos.svg" />
      <meuc-guideline title="Não utilize imagens com marca d'água"
          description="Imagens com marca d'água são utilizadas para protótipos, e não devem ser publicadas."
          image="./guidelines/material-marca-dagua.jpg" />
    </meuc-cards>
    <meuc-cards title="Sugestões">
      <meuc-card title="Pixabay"
          subtitle="Fotos, Vídeos, Ilustrações, Vetores e Música"
          image="./download/material-pixabay.jpg"
          :download-links="{ 'Link': 'https://pixabay.com/' }" />
      <meuc-card title="Unsplash"
          subtitle="Fotos"
          image="./download/material-unsplash.jpg"
          :download-links="{ 'Link': 'https://unsplash.com/' }" />
      <meuc-card title="Pexels"
          subtitle="Fotos e Vídeos"
          image="./download/material-pexels.jpg"
          :download-links="{ 'Link': 'https://www.pexels.com/' }" />
      <meuc-card title="Freepik"
          subtitle="Fotos e Vetores"
          image="./download/material-freepik.jpg"
          :download-links="{ 'Link': 'https://www.freepik.com/' }" />
      <meuc-card title="Flaticon"
          subtitle="Ícones"
          image="./download/material-flaticon.jpg"
          :download-links="{ 'Link': 'https://www.flaticon.com/' }" />
      <meuc-card title="YouTube Audio Library"
          subtitle="Música para o YouTube"
          image="./download/material-youtube-studio.jpg"
          :download-links="{ 'Link': 'https://www.youtube.com/audiolibrary' }" />
      <meuc-card title="Vecteezy"
          subtitle="Vetores, Fotos e Vídeos"
          image="./download/material-vecteezy.jpg"
          :download-links="{ 'Link': 'https://www.vecteezy.com/' }" />
      <meuc-card title="Videezy"
          subtitle="Vídeos"
          image="./download/material-videezy.jpg"
          :download-links="{ 'Link': 'https://www.videezy.com/' }" />
    </meuc-cards>
  </div>
</template>

<script>
import MeucCards from './MeucCards.vue'
import MeucCard from './MeucCard.vue'
import MeucGuideline from './MeucGuideline.vue'

export default {
  name: 'MeucMaterial',
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
