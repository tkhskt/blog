import firebase from '~/plugins/firebase.js'

export const state = () => ({
  title: 'Title',
  content: '## content',
  tags: [],
  date: ''
})

export const actions = {
  updateArticle({ commit, rootState }, value) {
    commit('setArticle', value)
  },
  updateTags({ commit }, value) {
    commit('setTags', value)
  },
  post({ commit, state }, value) {
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
  }
}

export const mutations = {
  setArticle(state, value) {
    state.title = value.title
    state.content = value.content
  },
  setTags(state, value) {
    state.tags = value
  }
}
