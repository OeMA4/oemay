<template>
<v-container>
    <v-layout row>
        <v-flex >
            <router-link to="/">
                <span class="name"> Ömer M. Ayar </span><br>
                <span class="profession">Software Engineer / Human</span>
            </router-link>
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
    font-size: 40px;
    font-weight: bold;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    text-decoration: none;
}
.profession {
    font-size: 20px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;;
}
.buttonText {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;;
}
</style>
