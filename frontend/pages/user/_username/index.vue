<template>
  <viewuser :user="user" :tweets="tweets"></viewuser>
</template>

<script>

// user/_username/index.vue
//  - ViewUser.vue
//    - UserCard.vue
//    - Timeline.vue


import viewuser from '~/components/ViewUser.vue'
import AppApi from '~apijs'


export default {
  components: {
    viewuser
  },
  asyncData (context) {
    const username = context.params.username
    return Promise.all([
      AppApi.get_user_details(username),
      AppApi.list_tweets(username)
    ]).then(results => {
      return {
        user: results[0].data,
        tweets: results[1].data
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
