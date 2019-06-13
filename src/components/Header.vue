<template>
<v-container>
    <v-layout row>
        <v-flex >
            <div>
            <span class="name"> Ömer M. Ayar </span><br>
            <span class="profession">Software Engineer / Human</span>
            </div>
        </v-flex>
        <v-spacer/>
        <v-flex class ="buttonText">
            <v-btn round to="/" > Home </v-btn>
            <v-btn round to="/resume" > Resume </v-btn>
            <v-btn round to="/projects" > Projects </v-btn>
            <v-btn round to="/contact" > Contact </v-btn>
        </v-flex>
    </v-layout>
</v-container>
</template>
<script>
export default {

}
</script>

<style scoped>
.name {
    font-size: 60px;
    font-weight: bold;
    font-family: fantasy;
}
.profession {
    font-size: 20px;
    font-family: fantasy;
}
.buttonText {
    font-family: fantasy;
}
</style>
