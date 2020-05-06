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
        <v-toolbar-title>
          <router-link
            class="logo"
            to="/"
          >
            thorn in my side
          </router-link>
        </v-toolbar-title>
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
    <v-btn
      v-show="btnAppear"
      class="btn"
      text
      color="white"
      @click.stop="login"
    >
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
      query: '',
      btnAppear: true
    }
  },
  computed: {
    ...mapState('user', ['loggedIn'])
  },
  watch: {
    loggedIn(value) {
      if (value == null) { return }
      if (value) {
        this.$router.push('/new')
      }
    }
  },
  created() {
    switch (this.$vuetify.breakpoint.name) {
      case 'xs':
        this.btnAppear = false
        break
      case 'sm':
        this.btnAppear = false
    }
  },
  methods: {
    login() {
      if (this.loggedIn != null && this.loggedIn) {
        this.$router.push('/new')
        return
      }
      this.$store.dispatch('user/login', null)
    }
  }
}
</script>
<style scoped>
.logo {
  color: inherit;
  text-decoration: inherit;
}
</style>
