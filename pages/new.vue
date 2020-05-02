<template>
  <v-content>
    <v-spacer />
    <v-row>
      <v-col cols="6">
        <v-form ref="form">
          <v-text-field
            v-model="title"
            label="Title"
          />
        </v-form>
        <v-textarea
          v-model="content"
          auto-grow="true"
        />
      </v-col>
      <v-col cols="6">
        <v-sheet
          :elevation="6"
          min-height="100%"
          class="pa-8"
          max-width="100%"
        >
          <h1>{{ title }}</h1>
          <v-text
            class="mt-10"
            v-html="compiledMarkdown"
          />
        </v-sheet>
      </v-col>
    </v-row>
    <v-spacer />
  </v-content>
</template>
<script>

import marked from 'marked'

export default {
  data() {
    return {
      fluid: true,
      title: '',
      content: '## subtitle'
    }
  },
  computed: {
    compiledMarkdown() {
      return marked(this.content, { sanitize: true })
    }
  }
}
</script>
