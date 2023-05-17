<template>
  <div class="signup-container">
    <AtomPageTitle title="Welcome to Restify"></AtomPageTitle>
    <AtomSubPageTitle title="Sign Up"></AtomSubPageTitle>
    <div class="info">
      <MoleculeInputSet :value="state.email" title="Email" placeholder="Email" @input="setEmail"></MoleculeInputSet>
      <MoleculeInputPasswordSet :value="state.password" title="Password" placeholder="Password" @input="setPassword"></MoleculeInputPasswordSet>
      <MoleculeInputPasswordSet :value="state.confirmedPassword" title="Confirm password" placeholder="Password" @input="setConfirmedPassword"></MoleculeInputPasswordSet>
    </div>
    <AtomConfirmButton class="orange-button" value="Sign up" ></AtomConfirmButton>
    <div class="log-in-msg">
      <p>Already have an account?</p>
      <AtomLink url="/login" title="Log in"></AtomLink>
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