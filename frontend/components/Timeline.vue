<template>
  <v-list two-line>
    <template v-for="tweet in sortedTweets">
      <v-list-tile avatar>
        <v-list-tile-avatar>
          <img :src="tweet.author_avatar">
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>
            <router-link :to="{name: 'user-username', params:{username: tweet.author_username}}">{{tweet.author_name}}</router-link> / 
            {{tweet.author_username}} / 
            {{tweet.created_at | timeago}}
          </v-list-tile-title>
          <v-list-tile-sub-title>{{tweet.text}}</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-divider></v-divider>
    </template>
  </v-list>
</template>

<script>

export default {
  props: ['tweets'],
  data () {
    return {}
  },
  computed: {
    sortedTweets () {
      return this.tweets.concat().sort((t1, t2) => new Date(t2.created_at) - new Date(t1.created_at))
    }
  }
}
</script>

<style>
</style>
