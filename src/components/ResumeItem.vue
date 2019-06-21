<template>
    <v-container>
        <v-divider></v-divider>
        <v-layout row mt-2>
          <v-flex m-3>
            <div class="resumeTitle"> {{  sectionTitle }} </div>
          </v-flex>
          <v-flex m-6>
            <v-layout column>
              <v-flex>
                <ParagraphItem v-for="item in data"
                  :key="item.title"
                  :title="item.title"
                  :date="item.date"
                  :description="item.description"
                />
              </v-flex>
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
    font-size: 20px;
}
.resumeTitle {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  font-size: 17px;
  color: #fff;
  line-height: 150px;
  text-align: center;
  background-color:teal;
}
</style>
