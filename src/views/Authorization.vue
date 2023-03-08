<template>
  <el-form
    ref="form"
    :model="form"
    :rules="rules"
    label-position="top"
    class="auth-form"
  >
    <el-form-item label="Email" prop="email">
      <el-input v-model="form.email" placeholder="Enter your email"></el-input>
    </el-form-item>
    <el-form-item label="Password" prop="password">
      <el-input
        v-model="form.password"
        type="password"
        placeholder="Enter your password"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm">Login</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      rules: {
        email: [
          {
            required: true,
            message: 'Please enter your email',
            trigger: 'blur',
          },
        ],
        password: [
          {
            required: true,
            message: 'Please enter your password',
            trigger: 'blur',
          },
        ],
      },
    }
  },

  methods: {
    submitForm() {
      this.$refs.form.validate(valid => {
        if (valid) {
          // Send form data to authentication script
          // using AJAX or form submission
          console.log(this.form)

          this.login()
        } else {
          console.log('Form validation failed')
          return false
        }
      })
    },

    async login() {
      try {
        const { email, password } = this.form

        await this.$store.dispatch('user/logIn', {
          email,
          password,
        })
        //this.$router.push('/')
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>
