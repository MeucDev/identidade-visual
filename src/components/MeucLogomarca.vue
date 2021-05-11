<template>
  <div id="logomarca">
    <p class="description mx-auto">
      A logomarca se mostra como um dos itens centrais na identidade visual de uma instituição
      e as orientações abaixo devem ser cuidadosamente seguidas.<br/><br/>
      As opções existentes hoje de utilização incluem a versão em cores, em azul e em branco.
      Caso precise de mais orientação em relação a utilização, veja os exemplos de utilização.
    </p>
    <meuc-cards title="Orientações">
      <meuc-guideline title="Não esticar"
          description="Muito cuidado ao redimensionar. A proporção de altura e largura da logo deve ser sempre mantida."
          image="./guidelines/logo-esticar.svg" />
      <meuc-guideline title="Não alterar proporções"
          description="A proporção entre os elementos da logomarca não deve ser modificada."
          image="./guidelines/logo-proporcao.svg" />
      <meuc-guideline title="Não alterar as cores"
          description="As cores seguem o guia e devem ser mantidas. Para obter diferentes cores, veja as opções de logo e utilize fundos diferenciados."
          image="./guidelines/logo-cores.svg" />
      <meuc-guideline title="Não adicionar elementos"
          description="Qualquer item adicionado a logo descaracteriza sua representação original. Não adicione qualquer ícone, imagem ou decoração festiva à logo."
          image="./guidelines/logo-elementos.svg" />
      <meuc-guideline title="Não alterar a fonte"
          description="A fonte utilizada na logo é a mesma indicada neste manual. Mantenha sempre a original."
          image="./guidelines/logo-fonte.svg" />
      <meuc-guideline title="Não aplicar sobre fundo colorido"
          description="O principal problema de uma aplicação dessa forma é a falta de contraste. Veja os itens seguintes para formas de solucionar esse problema."
          image="./guidelines/logo-contraste.png" />
      <meuc-guideline title="Fundo colorido - Utilize uma caixa"
          description="Uma forma de aplicar a logo sobre fundo colorido é utiizando uma caixa (ou faixa) branca. Isso garante contraste e legibilidade da logo."
          image="./guidelines/logo-contraste-caixa.png"
          type="success" />
      <meuc-guideline title="Fundo colorido - Utilize versão branca"
          description="Outra forma de aplicar a logo sobre fundo colorido é utiizando uma versão mais adequada da logo - como a versão branca."
          image="./guidelines/logo-contraste-branco.png"
          type="success" />
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
    <h3 class="mt-4 mb-3">Aplicação com Nome da Comunidade</h3>
    <p class="description mx-auto">
      Para utilização com o nome da cidade, utilize uma das aplicações listadas abaixo.
      Dessa forma garantimos também a padronização da utilização com o nome nos diversos distritos da MEUC.
    </p>
    <meuc-cards title="Orientações">
      <meuc-guideline title="Alterar alinhamento"
          description="Mantenha sempre o alinhamento dos elementos a esquerda."
          image="./guidelines/logo-cidade-alinhamento.svg" />
      <meuc-guideline title="Alterar fonte"
          description="Conforme o manual, a fonte utilizada deve ser a Open Sans. Para aplicação do nome da cidade, utilize a variação em negrito (700)."
          image="./guidelines/logo-cidade-fonte.svg" />
      <meuc-guideline title="Alterar elementos"
          description="Mantenha os elementos propostos pelos itens padrão. Adicionar outros elementos fere a padronização proposta."
          image="./guidelines/logo-cidade-elementos.svg" />
    </meuc-cards>
    <meuc-cards title="Download">
      <meuc-card title="Horizontal - Cor"
          image="./download/logo-meuc-cidade-cor.svg"
          :download-links="{
          'PDF': './download/logo-meuc-cidade-cor.pdf',
          'SVG': './download/logo-meuc-cidade-cor.svg'
          }" />
      <meuc-card title="Horizontal - Branco"
          image="./download/logo-meuc-cidade-branco.svg"
          :backgroundColor="meucBlue"
          :download-links="{
          'PDF': './download/logo-meuc-cidade-branco.pdf',
          'SVG': './download/logo-meuc-cidade-branco.svg'
          }" />
      <meuc-card title="Horizontal - Azul"
          image="./download/logo-meuc-cidade-azul.svg"
          :download-links="{
          'PDF': './download/logo-meuc-cidade-azul.pdf',
          'SVG': './download/logo-meuc-cidade-azul.svg'
          }" />
      <meuc-card title="Vertical - Cor"
          image="./download/logo-meuc-cidade-vertical-cor.svg"
          :download-links="{
          'PDF': './download/logo-meuc-cidade-vertical-cor.pdf',
          'SVG': './download/logo-meuc-cidade-vertical-cor.svg'
          }" />
      <meuc-card title="Vertical - Branco"
          image="./download/logo-meuc-cidade-vertical-branco.svg"
          :backgroundColor="meucBlue"
          :download-links="{
          'PDF': './download/logo-meuc-cidade-vertical-branco.pdf',
          'SVG': './download/logo-meuc-cidade-vertical-branco.svg'
          }" />
      <meuc-card title="Vertical - Azul"
          image="./download/logo-meuc-cidade-vertical-azul.svg"
          :download-links="{
          'PDF': './download/logo-meuc-cidade-vertical-azul.pdf',
          'SVG': './download/logo-meuc-cidade-vertical-azul.svg'
          }" />
    </meuc-cards>
  </div>
</template>

<script>
import MeucCards from './MeucCards.vue'
import MeucCard from './MeucCard.vue'
import MeucGuideline from './MeucGuideline.vue'

export default {
  name: 'MeucLogomarca',
  data: () => {
    return {
      meucBlue: '#005aaa'
    }
  },
  components: {
    MeucCards,
    MeucCard,
    MeucGuideline
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/section.scss';
</style>
