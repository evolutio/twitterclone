<template>
  <home :tweets="tweets"></home>
</template>

<script>

import home from '~/components/Home.vue'

export default {
  components: {
    home
  },
  data () {
    return {
      tweets: [
        {
          id: 1,
          author_name: 'Isaac Newton',
          author_username: '@isaacnewton',
          author_avatar: 'http://1.bp.blogspot.com/-A9_ROvP0efw/TZI9dUsXAKI/AAAAAAAAGCI/rD_-a3ZBF3U/s1600/Isaac_Newton_Biography%255B1%255D.jpg',
          created_at: '43 min',
          text: 'A tendência dos corpos, quando nenhuma força é exercida sobre eles, é permanecer em seu estado natural, ou seja, repouso ou movimento retilíneo e uniforme.'
        },
        {
          id: 2,
          author_name: 'René Descartes',
          author_username: '@descates',
          author_avatar: 'http://www.filosofia.com.br/figuras/biblioteca/Descartes.jpg',
          created_at: '1h 20min',
          text: 'Penso, logo existo'
        },
        {
          id: 3,
          author_name: 'Albert Einstein',
          author_username: '@einstein',
          author_avatar: 'http://meioorc.com/wp-content/uploads/2015/07/como-vejo-o-mundo-einstein.jpg',
          created_at: '2 dias',
          text: 'Insanidade é continuar fazendo sempre a mesma coisa e esperar resultados diferentes'
        }
      ]
    }
  }
}
</script>

<style>
</style>
