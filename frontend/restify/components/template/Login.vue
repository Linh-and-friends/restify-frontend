<template>
  <div class="login">
    <div class="login-section">
      <div class="login-section-container">
        <h1>Welcome</h1>
        <ul>
          <li>
            <div class="label">Restaurant Name</div>
            <input type="text" placeholder="Your restaurant name">
          </li>
          <li>
            <div class="label">ID</div>
            <input type="text" placeholder="Your email">
          </li>
          <li>
            <div class="label">Password</div>
            <input type="text" placeholder="Your password">
          </li>
        </ul>
        <div class="forgot-pass">
          <a href="">Forgot password?</a>
        </div>
        <div class="button">
            <button-component text="LOG IN"></button-component>
            <button-component text="SIGN UP" color="yellow"></button-component>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ButtonComponent from '~/components/atom/Button.vue'
export default defineComponent ({
  name: 'LoginTemplate',
  components: {
    ButtonComponent
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

.login {
  font-family: Arial;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &::before {
    content: "";
    background-image: url('~/assets/login/restaurant-illus.jpeg');
    background-size: cover;
    height: 100vh;
    width: 100vw;
    position: absolute;
    z-index: -1;

  }
  
  .login-section {
    background-color: #ffffff;
    width: 45%;
    display: flex;
    justify-content: center;
    padding-bottom: calc((50 /1366) * 100vw);
  }
}



h1 {
  font-size: calc((60 / 1366) * 100vw);
  font-weight: bold;
}

ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  row-gap: calc((20 / 1366) * 100vw);
}

.label {
  font-family: Arial;
  font-size: calc((30 / 1366) * 100vw);
  font-weight: bold;
  margin-bottom: calc((5 / 1366) * 100vw);
}

input {
  width: calc((400 / 1366) * 100vw);
  height: calc((50 / 1366) * 100vw);
  border-radius: calc((20 / 1366) * 100vw);
  padding-left: calc((20 / 1366) * 100vw);
  border: 1px solid rgba(125, 125, 125, 0.5);
  box-shadow: 3px 5px 8px rgba(202, 202, 202, 0.5);
}

.forgot-pass {
  width: 100%;
  text-align: end;
}

a {
  text-decoration: none;
  color: #000000;
}
.button {
  margin-top: calc((30 / 1366) * 100vw);
  width: calc((400 / 1366) * 100vw);
  display: flex;
  justify-content: space-between;
}
.btn {
  cursor: pointer;
  width: calc((180 / 400) * 100%);
  border-radius: calc((20 / 1366) * 100vw);
  font-size: calc((20 / 1366) * 100vw);
  font-weight: bold;
  color: #ffffff;
  border-color: transparent;
  padding: calc((10 / 1366) * 100vw);
}

.login-btn {
  background: linear-gradient(#1c9a13 0%, #287622 100%);
}

.signup-btn {
  background-color: #1c9a13;
  //background: linear-gradient(#d68113 0%, #c6750b 100%);
}
.img {
  width: 55%;
  height: 100%;

}

img {
  width: 100%;
  height: 100%;
}
</style>
