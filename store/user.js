import firebase from 'firebase'

export const state = () => ({
  loggedIn: false
})

export const actions = {
  login({ commit }, value) {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result.user)
        commit('setLoggedIn', true)
      })
      .catch((error) => {
        console.error(error)
        commit('setLoggedIn', false)
      })
  }
}

export const mutations = {
  setLoggedIn(state, value) {
    state.loggedIn = value
  }
}
