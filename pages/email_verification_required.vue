<template>
    <div class="container">
      <AtomPageTitle title="verifyEmail"></AtomPageTitle>
      <AtomSubPageTitle title="email"></AtomSubPageTitle>
      <p class="email">{{ email }}</p>
      <AtomConfirmButton class="orange-button" value="resendEmail" @click="resendEmail"></AtomConfirmButton>
      <div class="text">or</div>
      <AtomConfirmButton class="orange-button" value="redirecToLogin" @click="redirecToLogin"></AtomConfirmButton>
    </div>
</template>

<script setup lang="ts">
import { useUserStore } from "~/stores/user"


const userStore = useUserStore();

const email = userStore.user?.email;

const resendEmail = () => {
  userStore.resendVerification();
}

const redirecToLogin = () => {
  userStore.logOut();
}

</script>

<style scoped lang="scss">
.container {
  max-width: 500px;
  margin: auto;

  .email {
    font-size: 20px;
    margin-bottom: 50px;
  }
  .text {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
  }
  .orange-button {
    width: 100%;
    background-color: $orange;
    margin-bottom: 20px;
  }
}
</style>

