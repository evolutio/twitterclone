<template>
  <div>
    <v-progress-linear :indeterminate="true" v-if="!tweets"></v-progress-linear>
    <home :tweets="tweets" v-if="tweets"></home>
  </div>
</template>

<script>

import home from '~/components/Home.vue'
import AppApi from '~apijs'

export default {
  components: {
    home
  },
  data () {
    return {
      tweets: null,
    }
  },
  mounted() {
    AppApi.list_tweets().then(result => {
      this.tweets = result.data
    })
  }
}
</script>

<style>
</style>
