<template>
    <v-container>
        <v-divider></v-divider>
        <v-layout row>
          <v-flex>
            <div class="resumeTitle"> {{  title }} </div>
          </v-flex>
          <v-layout column>
            <v-flex>
              {{ date }}
              {{ description }}
            </v-flex>
          </v-layout>
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
.resumeTitle {
  border-radius: 100%;
  background-color: chocolate;
  font-size: 16px;
}
</style>
