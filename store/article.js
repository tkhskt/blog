import firebase from '~/plugins/firebase.js'

export const state = () => ({
  id: '',
  title: 'Title',
  content: '## Content',
  tags: [],
  date: '',
  articles: []
})

export const actions = {
  updateArticle({ commit, rootState }, value) {
    commit('editArticle', value)
  },
  updateTags({ commit }, value) {
    commit('setTags', value)
  },
  init({ commit }, _) {
    commit('initArticle', null)
  },
  post({ state, dispatch, commit }, value) {
    const db = firebase.firestore()
    dispatch('network/setState', true, { root: true })
    db.collection('article')
      .add({
        title: state.title,
        content: state.content,
        tags: state.tags,
        date: firebase.firestore.FieldValue.serverTimestamp()
      })
      .then((doc) => {
        console.log(doc)
        commit('setNewArticleId', doc.id)
        dispatch('network/setState', false, { root: true })
      })
      .catch((e) => {
        dispatch('network/setState', false, { root: true })
      })
  },
  getArticle({ commit, dispatch }, value) {
    const db = firebase.firestore()
    dispatch('network/setState', true, { root: true })
    db.collection('article')
      .doc(value)
      .get()
      .then((doc) => {
        commit('setArticle', doc.data())
        dispatch('network/setState', false, { root: true })
      })
      .catch((err) => {
        console.error(err)
        dispatch('network/setState', false, { root: true })
      })
  },
  getArticles({ commit, dispatch }, value) {
    const db = firebase.firestore()
    dispatch('network/setState', true, { root: true })
    db.collection('article')
      .get()
      .then((snapshot) => {
        commit('setArticles', snapshot)
        dispatch('network/setState', false, { root: true })
      })
      .catch((err) => {
        console.error(err)
        dispatch('network/setState', false, { root: true })
      })
  }
}

export const mutations = {
  editArticle(state, value) {
    state.title = value.title
    state.content = value.content
  },
  setTags(state, value) {
    state.tags = value
  },
  initArticle(state, _) {
    state.title = 'Title'
    state.tags = []
    state.content = '## Content'
    state.date = ''
  },
  setNewArticleId(state, value) {
    state.id = value
  },
  setArticle(state, value) {
    state.title = value.title
    state.tags = value.tags
    state.content = value.content
    state.date = value.date.toDate()
  },
  setArticles(state, value) {
    console.log(value.docs)
    const articles = value.docs.map((doc) => {
      return {
        id: doc.id,
        title: doc.data().title,
        tags: doc.data().tags,
        date: doc.data().date.toDate()
      }
    })
    state.articles = articles
  }
}
