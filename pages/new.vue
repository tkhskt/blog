<template>
  <v-content>
    <v-spacer />
    <v-container>
      <v-row>
        <v-col cols="6">
          <Editor />
        </v-col>
        <v-col cols="6">
          <Article />
        </v-col>
      </v-row>
      <v-spacer />
    </v-container>
  </v-content>
</template>
<script>

import Article from '~/components/Article.vue'
import Editor from '~/components/Editor.vue'

export default {
  components: {
    Article,
    Editor
  },
  data() {
    return {
      fluid: true,
      title: '',
      content: '## subtitle'
    }
  }
}
</script>
