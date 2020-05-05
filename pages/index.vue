<template>
  <v-content>
    <v-container>
      <v-progress-circular
        v-if="loading"
        class="progress"
        :size="50"
        color="primary"
        indeterminate
      />
      <v-row
        v-if="!loading"
        :align="align"
        :justify="justify"
      >
        <template v-for="(article, index) in articles">
          <v-col
            :key="index"
            cols="3"
          >
            <v-spacer />
          </v-col>
          <v-col
            :key="index"
            cols="6"
          >
            <v-spacer />
            <article-card v-bind="article" />
          </v-col>
          <v-col
            :key="index"
            cols="3"
          >
            <v-spacer />
          </v-col>
        </template>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import { mapState } from 'vuex'
import ArticleCard from '~/components/ArticleCard.vue'
export default {
  components: {
    ArticleCard
  },
  data() {
    return {
      align: 'center',
      justify: 'center'
    }
  },
  computed: {
    ...mapState('article', ['articles']),
    ...mapState('network', ['loading'])
  },
  created() {
    this.$store.dispatch('article/getArticles', null)
  }
}
</script>
<style scoped>
.progress {
  display: block;
  margin: auto;
}
</style>
