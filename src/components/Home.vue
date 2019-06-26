<template>
   <v-container>
       <v-layout column>
            <v-layout row>
                 <v-flex
                xs12
                sm6
                md8
                text-xs-center>
                <img class ="myAvatar" src="../assets/me.jpg">
                </v-flex>
                <v-layout column>
                    <v-flex>
                        <span class="hello"> Hello, </span>
                    </v-flex>
                    <v-flex>
                        <span class="aboutText"> a bit about me: </span>
                    </v-flex>
                    <v-flex>
                        <v-layout row>
                            <v-flex mr-2 ml-2>
                                <a class="myButton resumeButton"> Resume  </a>
                            </v-flex>
                            <v-flex mr-2 ml-2>
                                <a class="myButton workButton"> My Work </a>
                            </v-flex>
                            <v-flex mr-2 ml-2>
                                <a class="myButton skillButton"> My Skills </a>
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
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: bold;
}
.aboutText {
    font-size: 60px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
.myButton {
    cursor: pointer;
    color: white;
    position: relative;
    display: block;
    width: 100%;
    height: 0;
    padding: 50% 0;
    border-radius: 50%;
    font-family: Helvetica, Arial Black, sans;
    font-size: 16px;
    text-align: center;
    margin-right: 4px 2px;
}
.myAvatar {
    border-radius: 50%;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    vertical-align: middle;
    height: 500px;
    width: 500px;
}
.resumeButton {
    background-color:darkcyan ;
}
.workButton {
    background-color:wheat ;
}
.skillButton {
    background-color:cornflowerblue ;

}
</style>
