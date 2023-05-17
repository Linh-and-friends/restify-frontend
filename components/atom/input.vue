<template>
  <a-input class="input" v-model:value="value" :placeholder="placeholder" />
</template>
<script setup lang="ts">
import { ref } from 'vue';
const value = ref('');
const props = defineProps({
  value: {
    type: String,
    required: false,
    default: ''
  },
  placeholder: {
    type: String,
    required: false,
    default: ''
  },
});
</script>

<style module lang="scss">
.input {
  border-radius: 5px;
  width: 100px;
  height: 40px;
}
.input::placeholder {
  font-size: 14px;
  padding-left: 10px;
  color: $gray;
}
</style>