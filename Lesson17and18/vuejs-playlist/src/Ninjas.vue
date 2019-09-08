<template>
    <ul>
        <li v-for="ninja in ninjas" v-bind:key="ninja.id">{{ninja}}</li>
    </ul>
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

<style>

</style>
