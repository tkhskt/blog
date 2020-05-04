export const state = () => ({
  loading: false
})

export const actions = {
  setState({ commit }, value) {
    commit('setState', value)
  }
}

export const mutations = {
  setState(state, value) {
    state.loading = value
  }
}
