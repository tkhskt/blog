<template>
  <v-content>
    <v-spacer />
    <v-container>
      <v-progress-circular
        v-if="loading"
        class="progress"
        :size="50"
        color="primary"
        indeterminate
      />
      <v-row v-if="!loading">
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

import { mapState } from 'vuex'
import Article from '~/components/Article.vue'
import Editor from '~/components/Editor.vue'

export default {
  components: {
    Article,
    Editor
  },
  computed: {
    ...mapState('article', ['id']),
    ...mapState('network', ['loading'])
  },
  watch: {
    id(value) {
      this.$router.push({ path: `/articles/${value}` })
    }
  },
  created() {
    this.$store.dispatch('article/init', null)
  }
}
</script>
<style scoped>
.progress {
  display: block;
  margin: auto;
}
</style>
