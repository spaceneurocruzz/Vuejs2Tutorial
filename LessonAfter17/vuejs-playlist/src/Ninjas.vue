<template>
<div>
  <h1>List of ninjas</h1>
    <ul>
        <li v-for="ninja in ninjas" v-bind:key="ninja.id">{{ninja}}</li>
    </ul>
</div>
</template>

<script>
export default {
  data () {
    return {
      ninjas: ['flash', 'spidey', 'batman']
    }
  }
}
</script>

<style scoped>
h1{
  color:green;
}
</style>
