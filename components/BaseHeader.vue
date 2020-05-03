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
    <v-btn to="/new">LOGIN</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'BaseHeader',
  data() {
    return {
      clipped: true,
      title: 'thorn in my side',
      query: ''
    }
  }
}
</script>
