<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div v-if="user.loggedIn">
            <div class="card-header">
              Welcome, {{ user.data.displayName || user.data.email }}
            </div>
            <div class="card-body">
              <div class="alert alert-success" role="alert">
                You are logged in!
                <div class="my-4">
                  <button @click.prevent="signOut" class="btn btn-primary">
                    Log Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { auth } from '../firebaseConfig'

export default {
  name: 'TheDashboard',

  data() {
    return {}
  },

  created() {
    auth.onAuthStateChanged(user => {
      this.$store.dispatch('user/fetchUser', user)
    })
  },

  computed: {
    ...mapGetters('user', {
      user: 'getUser',
    }),
  },

  methods: {
    signOut: async function() {
      await this.$store.dispatch('user/logOut')
      this.$router.push('/')
    },
  },
}
</script>
