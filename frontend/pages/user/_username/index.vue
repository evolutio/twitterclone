<template>
  <h1>Isso aqui eh a timeline do usuario {{username}}</h1>
</template>

<script>

export default {
  asyncData (context) {
    return {
      username: context.params.username
    }
  },
  data () {
    return {}
  }
}
</script>

<style>
</style>
