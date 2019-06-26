<template>
    <v-container>
        <v-divider></v-divider>
        <v-layout row mt-2>

          <v-flex shrink>
            <div class="resumeTitle"> {{  sectionTitle }} </div>
          </v-flex>

          <v-flex>
            <v-layout column>
                <ParagraphItem v-for="item in data"
                  :key="item.title"
                  :title="item.title"
                  :date="item.date"
                  :description="item.description"
                />
            </v-layout>
          </v-flex>

        </v-layout>
    </v-container>
</template>

<script>
import ParagraphItem from './ParagraphItem'

export default {
  components: { ParagraphItem },
  props: {
    sectionTitle: String,
    data: Array
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.title {
    font-size: 30px;
}
.resumeTitle {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  font-size: 17px;
  color:black;
  line-height: 150px;
  text-align: center;
  background-color:cornsilk;
}
</style>
