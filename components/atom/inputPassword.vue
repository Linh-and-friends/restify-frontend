<template>
  <a-input-password class="password" :value="value" :placeholder="$t(placeholder)" @input="handleInput"/>
</template>
<script setup lang="ts">
const props = defineProps({
  value: {
    type: String,
    required: false,
    default: ''
  },
  placeholder: {
    type: String,
    required: false,
    default: 'password'
  }
})

//emit event input
const emit = defineEmits<{
  (e: 'input', value: string): void
}>();
const handleInput = (e: Event): void => {
  emit('input', (e.target as HTMLInputElement).value)
}
</script>

<style scoped lang="scss">
.password {
  border-radius: 5px;
}
</style>