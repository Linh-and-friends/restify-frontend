<template>
  <div class="signup-container">
    <AtomPageTitle title="welcomeToRestify"></AtomPageTitle>
    <AtomSubPageTitle title="signUp"></AtomSubPageTitle>
    <div class="info">
      <MoleculeInputSet :value="state.email" title="email" placeholder="email" @input="setEmail"></MoleculeInputSet>
      <MoleculeInputPasswordSet :value="state.password" title="password" placeholder="password" @input="setPassword"></MoleculeInputPasswordSet>
      <MoleculeInputPasswordSet :value="state.confirmedPassword" title="confirmPassword" placeholder="password" @input="setConfirmedPassword"></MoleculeInputPasswordSet>
    </div>
    <AtomConfirmButton class="orange-button" value="signUp" ></AtomConfirmButton>
    <div class="log-in-msg">
      <p>Already have an account?</p>
      <AtomLink url="/login" title="logIn"></AtomLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const state = reactive({
  email: '',
  password: '',
  confirmedPassword: ''
})

const setEmail = (value: string) => {
  state.email = value;
}

const setPassword = (value: string) => {
  state.password = value;
}

const setConfirmedPassword = (value: string) => {
  state.confirmedPassword = value;
}
</script>

<style scoped lang="scss">
.signup-container {
  max-width: 500px;
  margin: auto;
  .info {
    display: flex;
    flex-direction: column;
    row-gap: 40px;
    margin-top: 40px;
    margin-bottom: 80px;
  }

  .orange-button {
    width: 100%;
    background-color: $orange;
    margin-bottom: 20px;
  }

  .log-in-msg {
    width: 100%;
    display: flex;
    column-gap: 10px;
    justify-content: center;
  }
}
</style>