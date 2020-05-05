<template>
  <v-app>
    <base-header />
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
      <login-failed-dialog />
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
import LoginFailedDialog from '~/components/LoginFailedDialog.vue'

export default {
  components: {
    BaseHeader,
    LoginFailedDialog
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
