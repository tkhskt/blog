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
