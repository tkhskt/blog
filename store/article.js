export const state = () => ({
  title: '',
  content: '## content'
})

export const actions = {
  updateArticle({ commit, rootState }, value) {
    commit('setArticle', value)
  }
}

export const mutations = {
  setArticle(state, value) {
    state.title = value.title
    state.content = value.content
  }
}
