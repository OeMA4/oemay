<template>
  <v-app>
    <v-content class="content">
      <router-view/>
      <Footer/>
    </v-content>
  </v-app>
</template>

<script>
import Footer from './components/Footer'
export default {
  name: 'App',
  components: { Footer },
  data () {
    return {
      //
    }
  }
}
</script>

<style scoped>
.title {
  font-size:larger;
  color:brown;
  text-align: center;
  font-style: oblique;
  font-family:fantasy
}
.option {
  color:brown;
}
.content {
  background-color:gainsboro
}
</style>
