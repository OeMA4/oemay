<template>
    <v-layout column>
        <ResumeItem
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
          title: 'asdasd',
          description: 'adas',
          date: '17/09'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
