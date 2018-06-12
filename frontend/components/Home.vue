<template>
  <div>
    <newtweet @newtweet=addToTimeline($event.data)></newtweet>
    <timeline :tweets="tweets"></timeline>
  </div>
</template>

<script>

import timeline from '~/components/Timeline.vue'
import newtweet from '~/components/NewTweet.vue'

export default {
  props: ['tweets'],
  components: {
    timeline, newtweet
  },
  data () {
    return {}
  },
  methods: {
    addToTimeline(tweet) {
      this.tweets.push(tweet)
    }
  }
}
</script>

<style>
</style>
