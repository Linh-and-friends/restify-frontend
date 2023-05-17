<template>
  <a-input-password class="password" v-model:value="value" placeholder="Password" />
</template>
<script setup lang="ts">
import { ref } from 'vue';
const value = ref<string>('');
const props = defineProps({
  value: {
    type: String,
    required: false,
    default: ''
  }
})
</script>

<style scoped lang="scss">
.password {
  border-radius: 5px;
}
</style>