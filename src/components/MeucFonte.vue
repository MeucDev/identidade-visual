<template>
  <div id="fonte">
    <p class="description mx-auto">
      A tipografia oficial da MEUC foi construída com base na família tipográfica <b>Open Sans</b>.<br/><br/>
      A parte textual da identidade visual não poderá ter o seu padrão alterado.
      Os materiais gráficos produzidos poderão utilizar outras fontes complementares no seu layout, mas mantendo a logomarca sem nenhuma alteração.
    </p>
    <meuc-cards title="Orientações">
      <meuc-guideline title="Evite diferentes fontes"
          description="Para manter a identidade proposta, evite fontes diferentes das sugeridas pelo manual."
          image="./guidelines/fonte-fontes.svg"
          type="warning" />
      <meuc-guideline title="Utilizar diferentes pesos"
          description="Para adicionar dinâmica no conteúdo, uma opção é utilizar variações de peso na fonte - como negrito ou fino."
          image="./guidelines/fonte-pesos.svg"
          type="success" />
      <meuc-guideline title="Fontes do Microsoft Office"
          description="Quando estiver editando um arquivo do Microsoft Office (como no Word ou PowerPoint), é recomendado utilizar a fonte Calibri ou Calibri Light - que são padrão no produto. Isso garante compatibilidade com outros usuários."
          image="./guidelines/fonte-office.svg"
          type="success" />
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
  </div>
</template>

<script>
import MeucCards from './MeucCards.vue'
import MeucCard from './MeucCard.vue'
import MeucGuideline from './MeucGuideline.vue'

export default {
  name: 'MeucFonte',
  components: {
    MeucCards,
    MeucCard,
    MeucGuideline
  }
}
</script>

<style scoped lang="scss">
@import '../assets/style/defaults.scss';
@import '../assets/style/section.scss';

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
