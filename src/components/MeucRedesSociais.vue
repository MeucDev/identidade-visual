<template>
  <div class="accordion-item" id="redes-sociais">
    <p class="description mx-auto">
      As redes sociais são o principal ponto de engajamento com as pessoas fora das programações.
      Tanto pessoas participantes da comunidade como pessoas novas são alcançadas, por isso é importante
      passar uma boa imagem da comunidade com um material que represente bem a identidade da nossa igreja.
    </p>
    <meuc-cards title="Orientações">
      <meuc-guideline title="Mantenha uma identidade"
          description="Certifique-se que os diversos elementos da sua rede social - como foto de perfil, capa e posts - tenham elementos em comum - como fonte, cores e até imagens."
          image="./guidelines/cores-contraste.svg"
          type="success" />
      <meuc-guideline title="Evite excesso de informação"
          description="Na arte, foque no que é mais importante - os demais detalhes podem estar presentes na descrição do post. Exemplo: No caso de um evento - Título, Data / Hora e Local são suficientes."
          image="./guidelines/cores-contraste.svg" />
    </meuc-cards>
    <p class="description mx-auto">
      Abaixo existem algumas sugestões de materiais para as redes sociais preparados com todos os cuidados necessários.<br/>
      Você pode optar por algo diferente, mas certifique-se de que o formato e arte que você fez esteja coerente com as orientações
      desse manual e seja compatível com os possíveis formatos para diferentes dispositivos.
    </p>
    <meuc-cards title="Facebook">
      <meuc-card title="Imagem de Capa"
          image="./download/facebook-capa-mar.jpg"
          :download-links="{
          'JPG': './download/facebook-capa-mar.jpg'
          }" />
    </meuc-cards>
    <meuc-cards title="YouTube">
      <meuc-card title="Imagem de Capa"
          image="./download/youtube-capa-mar.jpg"
          :download-links="{
          'JPG': './download/youtube-capa-mar.jpg'
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
