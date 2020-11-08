<template>
  <section id="bottom" class="mt-5">
    <div class="container text-center py-4 my-0">
      <p class="my-0">Desenvolvido por <a href="https://www.meuc.org.br/" target="_blank">MEUC</a>. Todos os direitos reservados</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MeucBottom'
}
</script>

<style scoped lang="scss">
@import '../assets/style/defaults.scss';

#bottom {
  font-size: 0.8em;
  color: $meuc-gray;
  background-color: #e9ecef;
}
</style>
