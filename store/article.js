import firebase from '~/plugins/firebase.js'

export const state = () => ({
  title: 'Title',
  content: '## Content',
  tags: [],
  date: ''
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
  post({ state }, value) {
    const db = firebase.firestore()
    db.collection('article')
      .add({
        title: state.title,
        content: state.content,
        tags: state.tags,
        date: firebase.firestore.FieldValue.serverTimestamp()
      })
      .then((doc) => {
        console.log(doc)
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
  setArticle(state, value) {
    state.title = value.title
    state.tags = value.tags
    state.content = value.content
    state.date = value.date.toDate()
  }
}
