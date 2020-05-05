<template>
  <v-card
    min-height="300px"
    class="pb-4"
    @click="transit"
  >
    <v-img
      :src="img"
      class="black--text align-end"
      height="270px"
    />

    <v-card-subtitle class="pb-0">
      {{ date | formatDate }}
    </v-card-subtitle>

    <v-card-title class="pb-0">
      {{ title }}
    </v-card-title>

    <div style="padding: 0 16px;">
      <v-chip
        v-for="(tag, index) in tags"
        :key="index"
        class="mt-4 mr-2"
        outlined
        color="secondary"
      >
        {{ tag }}
      </v-chip>
    </div>

    <template v-if="loggedIn">
      <v-card-actions>
        <v-btn
          color="orange"
          text
        >
          Edit
        </v-btn>

        <v-btn
          color="orange"
          text
        >
          Delete
        </v-btn>
      </v-card-actions>
    </template>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'
import moment from 'moment'
import firebase from '~/plugins/firebase.js'
import DefaultImage from '~/assets/default.png'

export default {
  name: 'ArticleCard',
  filters: {
    formatDate(date) {
      if (date === '') {
        return date
      }
      return moment(date).format('YYYY/MM/DD')
    }
  },
  props: {
    id: String,
    title: Number,
    tags: Array,
    date: Date
  },
  data() {
    return {
      img: ''
    }
  },
  computed: {
    ...mapState('user', ['loggedIn'])
  },
  created() {
    let imgName = ''
    if (this.tags.length < 1) {
      imgName = DefaultImage
    } else {
      imgName = this.tags[0].toLowerCase() + '.png'
    }
    const storage = firebase.storage()
    storage.ref()
      .child(`tag/${imgName}`)
      .getDownloadURL()
      .then((url) => {
        this.img = url
      })
      .catch((e) => {
        this.img = DefaultImage
      })
  },
  methods: {
    transit() {
      this.$router.push({ path: `/articles/${this.id}` })
    }
  }
}
</script>
