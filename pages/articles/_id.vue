<template>
  <v-content>
    <v-container>
      <v-row
        :align="align"
        :justify="justify"
      >
        <v-col :cols="cols">
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
      justify: 'center',
      cols: '10'
    }
  },
  computed: {
    ...mapState('network', ['loading'])
  },
  created() {
    const id = this.$route.params.id
    this.$store.dispatch('article/getArticle', id)
    switch (this.$vuetify.breakpoint.name) {
      case 'xs':
        this.cols = '12'
        break
      case 'sm':
        this.cols = '12'
    }
  }
}
</script>
<style scoped>
.progress {
  display: block;
  margin: auto;
}
</style>
