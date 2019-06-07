<template>
   <v-container text-xs-center>
       <v-layout column>
            <v-flex>
               <div class="title">
                Ömer Ayar
               </div>
            </v-flex>
            <v-layout row>
                <v-flex
                xs12
                sm6
                md8
                text-xs-center>
                    <v-avatar
                    size=256
                    color="grey lighten-4">
                        <img src="../assets/me.jpg" alt="avatar">
                    </v-avatar>
                </v-flex>
                <v-flex>
                    Hi! My name is Ömer Ayar! I am a software engineer at MaibornWolff and computer science student at the TU Darmstadt.
                </v-flex>
            </v-layout>
       </v-layout>
   </v-container>

</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>
div {
    font-size:larger;
}
.title {
    font-size: 50cm;
}
</style>
