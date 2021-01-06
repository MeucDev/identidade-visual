<template>
  <div id="cores">
    <meuc-section title="Cores">
      <p class="description mx-auto">
        O uso correto das cores é essencial em qualquer material. Guie-se pelas cores principais listadas abaixo e lembre-se sempre de garantir contraste entre o conteúdo e o fundo.
      </p>
      <meuc-cards title="Orientações">
        <meuc-guideline title="Garanta legibilidade"
            description="A falta de contraste entre conteúdo e fundo podem gerar dificuldade de leitura ou identificação de uma imagem."
            image="./guidelines/cores-contraste.svg" />
        <meuc-guideline title="Escolha de cores"
            description="Mesmo utilizando cores distoantes, evite cores com uma saturação e luminosidade similar. Alguns tipos de daltonismo tem dificuldade em enxergar alguns conjuntos de cores."
            image="./guidelines/cores-daltonismo.svg" />
        <meuc-guideline title="Preto e Branco são sempre uma boa escolha"
            description="Quando utilizar um fundo colorido, utilizar branco ou preto (dependendo da luminosidade) para o conteúdo e texto é sempre uma boa escolha - lembre-se apenas de garantir contraste."
            image="./guidelines/cores-contraste-branco.svg"
            type="success" />
      </meuc-cards>
      <meuc-cards title="Galeria">
        <meuc-card width="3">
          <template v-slot:showcase>
            <div class="p-3 color blue">
              <h6 class="mb-3">Azul escuro</h6>
              <p class="mb-0">
                <strong>CMYK</strong> 100, 70, 0, 0<br/>
                <strong>RGB</strong> 0, 90, 170<br/>
                <strong>HEX</strong> #005AAA<br/>
                <strong>HSL</strong> 222, 100, 50
              </p>
            </div>
          </template>
        </meuc-card>
        <meuc-card width="3">
          <template v-slot:showcase>
            <div class="p-3 color light-blue">
              <h6 class="mb-3">Azul claro</h6>
              <p class="mb-0">
                <strong>CMYK</strong> 40, 0, 0, 0<br/>
                <strong>RGB</strong> 141, 216, 248<br/>
                <strong>HEX</strong> #8DD8F8<br/>
                <strong>HSL</strong> 198, 88, 76
              </p>
            </div>
          </template>
        </meuc-card>
        <meuc-card width="3">
          <template v-slot:showcase>
            <div class="p-3 color gray">
              <h6 class="mb-3">Cinza</h6>
              <p class="mb-0">
                <strong>CMYK</strong> 0, 0, 0, 65<br/>
                <strong>RGB</strong> 119, 120, 123<br/>
                <strong>HEX</strong> #77787B<br/>
                <strong>HSL</strong> 0, 0, 35
              </p>
            </div>
          </template>
        </meuc-card>
        <meuc-card width="3">
          <template v-slot:showcase>
            <div class="p-3 color white">
              <h6 class="mb-3">Branco</h6>
              <p class="mb-0">
                <strong>CMYK</strong> 0, 0, 0, 0<br/>
                <strong>RGB</strong> 255, 255, 255<br/>
                <strong>HEX</strong> #FFFFFF<br/>
                <strong>HSL</strong> 0, 100, 100
              </p>
            </div>
          </template>
        </meuc-card>
      </meuc-cards>
    </meuc-section>
  </div>
</template>

<script>
import MeucSection from './MeucSection.vue'
import MeucCards from './MeucCards.vue'
import MeucCard from './MeucCard.vue'
import MeucGuideline from './MeucGuideline.vue'

export default {
  name: 'MeucCores',
  components: {
    MeucSection,
    MeucCards,
    MeucCard,
    MeucGuideline
  }
}
</script>

<style scoped lang="scss">
@import '../assets/style/defaults.scss';

.color {
  h6 {
    font-size: 1.4em;
  }

  strong {
    display: inline-block;
    width: 50px;
    margin-right: 10px;
  }

  &.blue {
    color: $meuc-white;
    background-color: $meuc-blue;
  }
  &.light-blue {
    color: $meuc-gray;
    background-color: $meuc-light-blue;
  }
  &.gray {
    color: $meuc-white;
    background-color: $meuc-gray;
  }
  &.white {
    color: $meuc-gray;
    background-color: $meuc-white;
  }
}
</style>
