<template>
  <v-app>
    <base-header />
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    />
  </v-app>
</template>

<script>
import BaseHeader from '~/components/BaseHeader.vue'

export default {
  components: {
    BaseHeader
  },
  data() {
    return {
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'thorn in my side',
      query: ''
    }
  }
}
</script>
