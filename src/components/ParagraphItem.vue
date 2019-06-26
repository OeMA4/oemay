<template>
    <v-container>
        <v-layout column align-start justify-start>
            <span class ="paragraphTitle"> {{ title }} </span>
            <span class="paragraphDate"> {{ date }} </span>
            <span class="paragraphDescription">
              <v-btn class="disable-events" round small v-for="tag in tags" v-bind:key="tag"> {{ tag }}
                </v-btn>
             </span>
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
  computed: {
    tags: function () {
      return this.description.split(',')
    }
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
    font-family:fantasy
}
.paragraphDescription{
}
.disable-events {
  pointer-events: none
}
</style>
