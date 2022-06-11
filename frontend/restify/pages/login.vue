<template>
  <div :class="$style.login">
    <login-template />
  </div>
</template>

<script lang="ts">
import LoginTemplate from '~/components/template/LogIn.vue'
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent ({
  layout: 'login',
  components: {
    LoginTemplate
  }
})
</script>

<style lang="scss" module>
  .login {
    width: 100vw;
    height: 100vh;
  }
</style>

<style>
  * {
      box-sizing: border-box;
    }
  body {
    margin: 0;
    padding: 0;
  }
</style>