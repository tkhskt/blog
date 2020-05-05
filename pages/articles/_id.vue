<template>
  <v-content>
    <v-container>
      <v-row
        :align="align"
        :justify="justify"
      >
        <v-col cols="10">
          <Article v-if="!loading" />
          <v-progress-circular
            v-if="loading"
            class="progress"
            :size="50"
            color="primary"
            indeterminate
          />
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>
<script>
import { mapState } from 'vuex'
import Article from '~/components/Article.vue'

export default {
  components: {
    Article
  },
  data() {
    return {
      align: 'center',
      justify: 'center'
    }
  },
  computed: {
    ...mapState('network', ['loading'])
  },
  created() {
    const id = this.$route.params.id
    this.$store.dispatch('article/getArticle', id)
  }
}
</script>
<style scoped>
.progress {
  display: block;
  margin: auto;
}
</style>
