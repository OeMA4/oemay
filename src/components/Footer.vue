<template>
  <v-footer
    light
    height="auto"
    fixed
  >
    <v-card
      class="flex"
      flat
      tile>
      <v-card-title class="teal">
        <strong class="subheading">Get in touch with me!</strong>
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
      <v-card-actions class="justify-center">
        &copy;2019 — <strong>OeMAy</strong>
      </v-card-actions>
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
        link: ''
      }
    ]
  })
}
</script>
