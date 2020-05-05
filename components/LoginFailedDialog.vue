<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
      @click:outside="closeDialog"
    >
      <v-card>
        <v-card-title
          class="secondary"
          primary-title
        >
          Error
        </v-card-title>
        <v-spacer />
        <v-card-text class="py-8">
          Non-administrative operation is forbidden.
        </v-card-text>
        <v-divider />
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            text
            @click="closeDialog"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'LoginFailedDialog',
  data() {
    return {
      dialog: false
    }
  },
  computed: {
    ...mapState('user', ['loggedIn'])
  },
  watch: {
    loggedIn(value) {
      if (value == null) { return }
      if (!value) {
        this.dialog = true
      }
    }
  },
  methods: {
    closeDialog() {
      this.dialog = false
      this.$store.dispatch('user/initLogin', null)
    }
  }
}
</script>
