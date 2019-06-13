<template>
   <v-container mt-5>
       <v-layout column>
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
                <v-layout column>
                    <v-flex>
                        <span class="hello"> Hello! </span>
                    </v-flex>
                    <v-flex>
                        <span class="aboutText"> About me in few parts: </span>
                    </v-flex>
                    <v-flex>
                        <v-layout row>
                            <v-flex>
                                <a class="myButton"> Resume </a>
                            </v-flex>
                            <v-flex>
                                <a class="myButton"> My Work </a>
                            </v-flex>
                            <v-flex>
                                <a class="myButton"> My Skills </a>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                    <v-flex>
                        Hi! My name is Ömer Ayar! I am a software engineer at MaibornWolff and computer science student at the TU Darmstadt.
                    </v-flex>
                </v-layout>
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
.hello {
    font-size: 80px;
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
.aboutText {
    font-size: 60px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
.myButton {
  background-color: cyan;
  border: none;
  color: white;
  padding: 50px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 500px;
}
</style>
