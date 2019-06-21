<template>
    <v-container>
        <v-layout column>
            <span class ="paragraphTitle" >{{ title }} </span>
            <span class="paragraphDate"> {{ date }} </span>
            <span class="paragraphDescription"> {{ description }} </span>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  props: {
    title: String,
    date: String,
    description: String
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.title {
    font-size: 20px;
}
.paragraphTitle {
    font-weight: bold;
}
.paragraphDate {
    font-weight:300;
}
.paragraphDescription{
}
</style>
