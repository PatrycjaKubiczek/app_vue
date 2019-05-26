<template>
  <div id="app">
    <PodiumTask/>
  </div>
</template>

<script>


  import PodiumTask from './components/PodiumTask.vue'

  export default {
    name: 'app',
    components: {
      PodiumTask
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
</style>
