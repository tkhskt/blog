<template>
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
</template>
<script>
export default {
  name: 'Article',
  props: {
    title: String,
    content: String
  }
}
</script>
<style scoped>
p {
 word-break: break-all;
}
</style>
