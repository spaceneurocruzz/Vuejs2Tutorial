<template>
  <div>
  <!-- <div id="app"> -->
    <h1>{{title}}</h1>
    <ninjas></ninjas>
    <!-- <p>{{greeting()}}</p> -->
  </div>
</template>

<script>
import Ninjas from './Ninjas.vue'

export default {
  components:{
    'ninjas': Ninjas
  },
  data () {
    return {
      //title: 'First Vue.js file!'
      title: 'Ninja app'
    }
  // },
  // methods:{
  //   greeting: function(){
  //     return 'hey';
  //   }
  
  }
}
</script>

<style>

</style>
