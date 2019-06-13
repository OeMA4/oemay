<template>
    <v-flex>
        <v-divider>
        </v-divider>
            {{ title }}
            {{ date }}
            {{ description }}
    </v-flex>
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

</style>
