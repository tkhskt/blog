import firebase from 'firebase'

export const state = () => ({
  loggedIn: null
})

export const actions = {
  login({ commit }, value) {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        firebase
          .auth()
          .currentUser.getIdTokenResult()
          .then((result) => {
            if (result.claims.admin) {
              commit('setLoggedIn', true)
              return
            }
            commit('setLoggedIn', false)
          })
      })
      .catch((error) => {
        console.error(error)
        commit('setLoggedIn', false)
      })
  },
  initLogin({ commit }, value) {
    commit('setLoggedIn', null)
  }
}

export const mutations = {
  setLoggedIn(state, value) {
    state.loggedIn = value
  }
}
