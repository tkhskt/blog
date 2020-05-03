<template>
  <div>
    <v-form ref="form">
      <v-text-field
        label="Title"
        @input="changeTitle($event)"
      />
    </v-form>
    <v-combobox
      v-model="selectedTags"
      :items="tags"
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
      auto-grow
      label="Content"
      class="pb-10"
      @input="changeContent($event)"
    />
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'Editor',
  data() {
    return {
      selectedTags: [],
      tags: ['kotlin', 'android', 'java', 'fun'],
      search: null
    }
  },
  computed: {
    ...mapState('article', ['title', 'content'])
  },
  watch: {
    selectedTags(val) {
      if (val.length > 5) {
        this.$nextTick(() => this.selectedTags.pop())
      }
      this.search = null
      this.$store.dispatch('article/updateTags', this.selectedTags)
    }
  },
  methods: {
    changeTitle(e) {
      this.$store.dispatch('article/updateArticle', { title: e, content: this.content })
    },
    changeContent(e) {
      this.$store.dispatch('article/updateArticle', { title: this.title, content: e })
    }
  }
}
</script>
