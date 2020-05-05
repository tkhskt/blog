<template>
  <div>
    <v-form ref="form">
      <v-text-field
        v-model="titleValue"
        label="Title"
      />
    </v-form>
    <v-combobox
      v-model="selectedTags"
      :items="tagCandidates"
      :search-input.sync="search"
      hide-selected
      hint="Maximum of 5 tags"
      label="Tags"
      multiple
      persistent-hint
      chips
    >
      <template v-slot:selection="{ attrs, item, parent, selected }">
        <v-chip
          v-bind="attrs"
          :input-value="selected"
          close
          @click:close="parent.selectItem(item)"
        >
          {{ item }}
        </v-chip>
      </template>
      <template v-slot:no-data>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>
              No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-combobox>
    <v-textarea
      v-model="contentValue"
      label="Content"
    />
    <v-btn
      class="post-btn"
      color="secondary"
      @click="post"
    >
      POST
    </v-btn>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'Editor',
  data() {
    return {
      t: [],
      tagCandidates: ['Kotlin', 'Android', 'Python', 'Django', 'firebase', 'Vue.js', 'JavaScript'],
      search: null
    }
  },
  computed: {
    ...mapState('article', ['title', 'content', 'tags']),
    contentValue: {
      get() {
        return this.content
      },
      set(value) {
        this.$store.dispatch('article/updateArticle', { title: this.title, content: value })
      }
    },
    titleValue: {
      get() {
        return this.title
      },
      set(value) {
        this.$store.dispatch('article/updateArticle', { title: value, content: this.content })
      }
    },
    selectedTags: {
      get() {
        return this.tags
      },
      set(value) {
        this.search = null
        if (value.length > 5) {
          value.pop()
          return
        }
        this.$store.dispatch('article/updateTags', value)
      }
    }
  },
  methods: {
    post() {
      this.$store.dispatch('article/post', {})
    }
  }
}
</script>
<style scoped>
.post-btn {
  display: block;
  margin: auto;
}
</style>
