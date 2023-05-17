<template>
  <div class="input-set-container">
    <p class="input-title">{{ title }}<span :class="[isRequired ? 'required' : 'optional']">*</span></p>
    <AtomInputPassword :value="value" :placeholder="placeholder" @input="handleInput"/>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  title: {
    type: String,
    required: true
  },
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
  isRequired: {
    type: Boolean,
    required: false,
    default: false
  }
})

//emit event input
const emit = defineEmits<{
  (e: 'input', value: string): void
}>();
const handleInput = (value: string): void => {
  emit('input', value)
}
</script>

<style lang="scss" scoped>
.input-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
}
.required {
  color: red;
  margin-left: 5px;
}

.optional {
  display: none;
}

</style>
