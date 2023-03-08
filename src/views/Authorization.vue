<template>
  <el-form
    ref="form"
    :model="form"
    :rules="rules"
    label-position="top"
    class="auth-form"
  >
    <el-form-item label="Username" prop="username">
      <el-input
        v-model="form.username"
        placeholder="Enter your username"
      ></el-input>
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
        username: '',
        password: '',
      },
      rules: {
        username: [
          {
            required: true,
            message: 'Please enter your username',
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
        } else {
          console.log('Form validation failed')
          return false
        }
      })
    },
  },
}
</script>
