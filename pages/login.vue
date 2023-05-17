<template>
  <div class="login-container">
    <AtomPageTitle title="Welcome to Restify"></AtomPageTitle>
    <AtomSubPageTitle title="Login"></AtomSubPageTitle>
    <MoleculeInputSet title="Email" placeholder="Email"></MoleculeInputSet>
    <MoleculeInputPasswordSet title="Password" placeholder="Password"></MoleculeInputPasswordSet>
    <AtomLink url="" title="Forgot password?"></AtomLink>
    <AtomConfirmButton class="orange-button" value="Login"></AtomConfirmButton>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.login-container {
  .orange-button {
    background-color: $orange;
  }

}
</style>