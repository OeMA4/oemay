<template>
   <v-container grid-list-md>
        <v-layout row>
            <v-flex xs6 sm6 md6 lg6 xl6 mr-2>
                <img class="myAvatar" src="../assets/me.jpg">
            </v-flex>
            <v-layout column>
                <v-flex>
                    <span class="hello"> Hello, </span>
                </v-flex>
                <v-flex>
                    <span class="aboutText"> a bit about me: </span>
                </v-flex>
                <v-layout row wrap>
                    <v-flex d-flex md4>
                        <a class="myButton resumeButton"> Resume  </a>
                    </v-flex>
                    <v-flex d-flex md4>
                        <a class="myButton workButton"> My Work </a>
                    </v-flex>
                    <v-flex d-flex md4>
                        <a class="myButton skillButton"> My Skills </a>
                    </v-flex>
                </v-layout>
                <v-flex>
                    <div class="description">Hi! My name is Ömer Ayar! I am a software engineer at MaibornWolff and computer science student at the TU Darmstadt.</div>
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
.description{
    font-size: 30px;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
.hello {
    font-size: 80px;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: bold;
}
.aboutText {
    font-size: 60px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
.myAvatar {
    border-radius: 50%;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    vertical-align: middle;
    height: 400px;
    width: 400px;
}
.myButton {
    cursor: pointer;
    border-radius: 50%;
    font-family: Helvetica, Arial Black, sans;
    font-size: 28px;
    height: 150px;
    width: 150px;
    line-height: 150px;
    text-align: center;
    margin-right: 10px;
    color: white;
}

.resumeButton {
    background-color:steelblue ;
}
.workButton {
    background-color:chocolate ;
}
.skillButton {
    background-color:gold ;

}
</style>
