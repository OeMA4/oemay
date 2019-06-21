<template>
  <v-footer
    light
    height="auto"
  >
    <v-card
      class="flex"
      flat
      tile>
      <v-card-title class="teal">
        <span class="subheading vue">Designed with ❤️ and
          <v-avatar>
          <img src="../assets/vueIcon.png">
        </v-avatar>
        <v-btn round href="https://www.vuejs.org"> Vue.js </v-btn> </span>
        <v-spacer></v-spacer>
        <strong class="subheading vue">&copy;2019 — <strong>OeMAy</strong></strong>
        <v-spacer></v-spacer>
        <v-btn
          v-for="data in profiles"
          :key="data.icon"
          class="mx-3"
          :href="data.link"
          round>
          {{ data.icon }}
        </v-btn>
      </v-card-title>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    profiles: [
      {
        icon: 'LinkedIn',
        link: 'https://www.linkedin.com/in/%C3%B6mer-ayar-95265a174/'
      },
      {
        icon: 'Xing',
        link: 'https://www.xing.com/profile/Oemer_Ayar5/'
      },
      {
        icon: 'Instagram',
        link: 'https://www.instagram.com/_oemay'
      }
    ]
  })
}
</script>

<style scoped>
.vue {
  color: white;
}
</style>
