<template>
  <v-sheet
    :elevation="6"
    min-height="100%"
    class="pa-8"
    max-width="100%"
  >
    <h1>{{ this.$store.state.article.title }}</h1>
    <v-text
      class="mt-10"
      v-html="compiledMarkdown"
    />
  </v-sheet>
</template>
<script>
import marked from 'marked'

export default {
  name: 'Article',
  computed: {
    compiledMarkdown() {
      // marked(this.$store.state.article.content, { sanitize: true })
      console.log(this.$store.state)
      return marked(this.$store.state.article.content, { sanitize: true })
    }
  }
}
</script>
<style scoped>
p {
 word-break: break-all;
}
</style>
