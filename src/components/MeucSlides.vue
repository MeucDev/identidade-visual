<template>
  <div class="accordion-item" id="slides">
    <p class="description mx-auto">
      As apresentações de slides são utilizadas frequentemente na comunidade para cumprir diversos propósitos: Louvor, avisos, palestra... E este é mais um ponto onde podemos garantir a identidade da marca.<br/>
      Abaixo você encontra alguns materiais voltados para diferentes momentos do culto.
    </p>
    <meuc-cards title="Orientações">
      <meuc-guideline title="Não alterar a fonte"
          description="Utilize sempre as fontes sugeridas para garantir a padronização."
          image="./guidelines/slides-alterar-fonte.svg" />
      <meuc-guideline title="Evite alterar a disposição dos elementos"
          description="Os arquivos foram preparados com Layouts que atendem a maioria dos formatos. Busque usar sempre os Layouts sugeridos."
          image="./guidelines/slides-alterar-disposicao.svg"
          type="warning" />
      <meuc-guideline title="Para projetores, use fundo preto"
          description="O fundo preto evita que a caixa limite do projetor fique aparente e garante contraste com a letra branca (mesmo em projetores mais antigos)."
          image="./guidelines/slides-fundo-preto.svg"
          type="success" />
      <meuc-guideline title="Para transmissões, use legendas"
          description="As letras no formato de legenda garantem que você possa exibir toda a imagem com mínima intrusão."
          image="./guidelines/slides-legendas.svg"
          type="success" />
    </meuc-cards>
    <meuc-cards title="Louvor">
      <meuc-card title="Fundo preto (para projetor)"
          image="./download/slides-louvor-fundo-preto-16x9.jpg"
          :download-links="{
          'PPTX': './download/slides-louvor-fundo-preto-16x9.pptx',
          'POTX': './download/slides-louvor-fundo-preto-16x9.potx'
          }" />
      <meuc-card title="Fundo verde (para legendas)"
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
