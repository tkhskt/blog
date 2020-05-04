<template>
  <v-app-bar
    :clipped-left="clipped"
    fixed
    app
    color="primary"
  >
    <v-container>
      <v-toolbar
        color="primary"
        flat
        dark
      >
        <v-spacer />
        <v-toolbar-title v-text="title" />
        <v-spacer />
        <v-spacer />
        <v-spacer />
        <v-text-field
          v-model="query"
          class="mt-4"
          flat
          placeholder="Search"
        />
        <v-spacer />
      </v-toolbar>
    </v-container>
    <v-btn @click="login">
      LOGIN
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'BaseHeader',
  data() {
    return {
      clipped: true,
      title: 'thorn in my side',
      query: ''
    }
  },
  computed: {
    ...mapState('user', ['loggedIn'])
  },
  watch: {
    loggedIn(value) {
      this.$router.push('/new')
    }
  },
  methods: {
    login() {
      this.$store.dispatch('user/login', null)
    }
  }
}
</script>
