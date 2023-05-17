<template>
  <div class="login-container">
    <AtomPageTitle title="welcomeToRestify"></AtomPageTitle>
    <AtomSubPageTitle title="logIn"></AtomSubPageTitle>
    <div class="info">
      <MoleculeInputSet :value="state.email" title="email" placeholder="email" @input="setEmail"></MoleculeInputSet>
      <MoleculeInputPasswordSet :value="state.password" title="password" placeholder="password" @input="setPassword"></MoleculeInputPasswordSet>
    </div>
    <div class="forgot-password">
      <AtomLink url="" title="forgotPassword"></AtomLink>
    </div>
    <AtomConfirmButton class="orange-button" value="logIn" @click="handleLogIn"></AtomConfirmButton>
    <div class="sign-up-msg">
      <p>Don't have an account?</p>
      <AtomLink url="" title="signUp"></AtomLink>
    </div>
  </div>
</template>

<script setup lang="ts">

const state = reactive({
  email:'',
  password: ''
})

const setEmail = (value: string) => {
  state.email = value;
}

const setPassword = (value: string) => {
  state.password = value;
}

import { useUserStore } from '~/stores/user';
const userStore = useUserStore();
const handleLogIn = () => {
  console.log("email", state.email);
  console.log("password", state.password);
  userStore.logIn(state.email, state.password);
}
</script>

<style scoped lang="scss">
.login-container {
  max-width: 500px;
  margin: auto;
  .info {
    display: flex;
    flex-direction: column;
    row-gap: 40px;
    margin-top: 40px;
    margin-bottom: 20px;
  }

  .forgot-password {
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
  }
  .orange-button {
    width: 100%;
    background-color: $orange;
    margin-bottom: 20px;
  }

  .sign-up-msg {
    width: 100%;
    display: flex;
    column-gap: 10px;
    justify-content: center;
  }
}
</style>