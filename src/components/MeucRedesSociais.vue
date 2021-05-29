<template>
  <div id="redes-sociais">
    <p class="description mx-auto">
      As redes sociais são um importante espaço de engajamento com as pessoas fora das programações.
      É possível impactar tanto pessoas participantes da comunidade como alcançar pessoas novas.
      Por isso, é importante passar uma boa imagem da comunidade com um material que represente bem a identidade da nossa igreja.
    </p>
    <meuc-cards title="Orientações">
      <meuc-guideline title="Evite excesso de informação"
          description="Na arte, foque no que é mais importante - os demais detalhes podem estar presentes na descrição do post. Exemplo: No caso de um evento - Título, Data / Hora e Local são suficientes."
          image="./guidelines/redes-sociais-excesso.svg" />
      <meuc-guideline title="Mantenha uma identidade"
          description="Certifique-se que os diversos elementos da sua rede social - como foto de perfil, capa e posts - tenham elementos em comum - como fonte, cores e até imagens."
          image="./guidelines/redes-sociais-identidade.svg"
          type="success" />
    </meuc-cards>
    <p class="description mx-auto">
      Abaixo existem algumas sugestões de materiais preparados com todos os cuidados necessários para identificação do perfil nas redes sociais.<br/>
      Você pode optar por algo diferente, mas certifique-se de que o formato e arte que você fez estejam coerentes com as orientações desse manual
      e sejam compatíveis com os possíveis formatos para diferentes dispositivos.
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
