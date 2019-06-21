<template>
    <v-layout column>
        <resume-item
        v-for="i in items"
        :key="i.id"
        :title="i.title"
        :description="i.description"
        :date="i.date"/>
    </v-layout>
</template>

<script>
import ResumeItem from './ResumeItem'

export default {
  components: { ResumeItem },
  data () {
    return {
      items: [
        {
          id: '1',
          title: 'Software Engineering',
          description: 'Working for MaibornWolff',
          date: '17/09'
        },
        {
          id: '2',
          title: 'Software Engineering',
          description: 'Working for MaibornWolff',
          date: '17/09'
        },
        {
          id: '3',
          title: 'Software Engineering',
          description: 'Working for MaibornWolff',
          date: '17/09'
        },
        {
          id: '4',
          title: 'Software Engineering',
          description: 'Working for MaibornWolff',
          date: '17/09'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
