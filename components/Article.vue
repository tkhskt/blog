<template>
  <v-sheet
    :elevation="elevation"
    min-height="100%"
    class="pa-8"
    max-width="100%"
  >
    <p class="date">
      {{ date | formatDate }}
    </p>
    <h1>{{ title }}</h1>
    <v-chip
      v-for="(tag, index) in tags"
      :key="index"
      class="my-4 mr-2"
      outlined
      color="secondary"
    >
      {{ tag }}
    </v-chip>
    <div
      class="content"
      v-html="compiledMarkdown"
    />
  </v-sheet>
</template>
<script>
import marked from 'marked'
import moment from 'moment'
import { mapState } from 'vuex'

export default {
  name: 'Article',
  filters: {
    formatDate(date) {
      if (date === '') {
        return date
      }
      return moment(date).format('YYYY/MM/DD')
    }
  },
  data() {
    return {
      elevation: 6
    }
  },
  computed: {
    ...mapState('article', ['title', 'content', 'tags', 'date']),
    compiledMarkdown() {
      return marked(this.content, { sanitize: true })
    }
  },
  created() {
    switch (this.$vuetify.breakpoint.name) {
      case 'xs':
        this.elevation = 0
        break
      case 'sm':
        this.elevation = 0
    }
  }
}
</script>
<style scoped>
p.date{
  color: #757575;
  font-weight: bold;
}
h1 {
  margin-top: 32px;
  margin-bottom: 8px;
  font-size: 40px;
  font-weight: normal;
  line-height: 48px;
}
div.content >>> p {
 word-break: break-all;
 font-size: 21px;
 display: block;
 margin-block-start: 1em;
 margin-inline-start: 0px;
 margin-inline-end: 0px;
 line-height: 32px;
}
div.content >>> h2, h3, h4 {
 padding: 5px 0;
}
div.content >>> h2 {
 font-size: 26px;
 display: block;
 margin-block-start: 0.83em;
 margin-inline-start: 0px;
 margin-inline-end: 0px;
 font-weight: bold;
}
div.content >>> h3 {
 font-size: 23px;
 display: block;
 margin-block-start: 0.5em;
 margin-block-end: 0.5em;
 margin-inline-start: 0px;
 margin-inline-end: 0px;
 font-weight: bold;
}
div.content >>> h4 {
 font-size: 21px;
 display: block;
 margin-block-start: 0.5em;
 margin-block-end: 0.5em;
 margin-inline-start: 0px;
 margin-inline-end: 0px;
 font-weight: bold;
}
div.content >>> code {
  font-size: 16px;
  line-height: 32px;
}
div.content >>> pre code {
 width: 100%;
 line-height: 1.5;
}

div.content >>> blockquote {
 box-shadow: inset 3px 0 0 0 rgba(0, 0, 0, 0.84);
 display: block;
 padding-left: 23px;
 margin-block-start: 1em;
 margin-block-end: 1em;
 margin-inline-start: 40px;
 margin-inline-end: 40px;
}
div.content >>> blockquote p {
 display: inline;
 font-style: italic;
}
div.content >>> li {
 font-size: 21px;
}
div.content >>> table {
  padding: 0;
}
div.content >>> table tr {
  border-top: 1px solid #cccccc;
  background-color: white;
  margin: 0;
  padding: 0;
}
div.content >>> table tr:nth-child(2n) {
  background-color: #f8f8f8;
}
div.content >>> table tr th {
  font-weight: bold;
  border: 1px solid #cccccc;
  text-align: left;
  margin: 0;
  padding: 6px 13px;
}
div.content >>> table tr td {
  border: 1px solid #cccccc;
  text-align: left;
  margin: 0;
  padding: 6px 13px;
}
div.content >>> table tr th :first-child, table tr td :first-child {
  margin-top: 0;
}
div.content >>> table tr th :last-child, table tr td :last-child {
  margin-bottom: 0;
}
</style>
