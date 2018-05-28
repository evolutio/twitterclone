<template>
  <home :tweets="tweets"></home>
</template>

<script>

import home from '~/components/Home.vue'
import AppApi from '~apijs'

export default {
  components: {
    home
  },
  asyncData() {
    return AppApi.list_tweets().then(result => {
      return {
        tweets: result.data
      }
    })
  },
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
