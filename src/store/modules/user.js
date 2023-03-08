import { auth } from '@/firebaseConfig.js'
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'

const state = () => ({
  user: {
    loggedIn: false,
    data: null,
  },
})

const getters = {
  getUser(state) {
    return state.user
  },
}

const actions = {
  async register(context, { email, password, name }) {
    const response = await createUserWithEmailAndPassword(auth, email, password)
    if (response) {
      context.commit('SET_USER', response.user)
      response.user.updateProfile({ displayName: name })
    } else {
      throw new Error('Unable to register user')
    }
  },

  async logIn(context, { email, password }) {
    const response = await signInWithEmailAndPassword(auth, email, password)
    if (response) {
      context.commit('SET_USER', response.user)
    } else {
      throw new Error('login failed')
    }
  },

  async logOut(context) {
    await signOut(auth)
    context.commit('SET_USER', null)
  },

  async fetchUser(context, user) {
    context.commit('SET_LOGGED_IN', user !== null)
    if (user) {
      context.commit('SET_USER', {
        displayName: user.displayName,
        email: user.email,
      })
    } else {
      context.commit('SET_USER', null)
    }
  },
}

const mutations = {
  SET_LOGGED_IN(state, value) {
    state.user.loggedIn = value
  },
  SET_USER(state, data) {
    state.user.data = data
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
