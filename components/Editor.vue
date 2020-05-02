<template>
  <div>
    <v-form ref="form">
      <v-text-field
        label="Title"
        @input="changeTitle($event)"
      />
    </v-form>
    <v-textarea
      auto-grow
      @input="changeContent($event)"
    />
  </div>
</template>
<script>
export default {
  name: 'Editor',
  methods: {
    changeTitle(e) {
      this.$store.dispatch('article/updateArticle', { title: e, content: this.$store.state.article.content })
    },
    changeContent(e) {
      this.$store.dispatch('article/updateArticle', { title: this.$store.state.article.title, content: e })
    }
  }
}
</script>
