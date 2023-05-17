<template>
  <div class="input-set-container">
    <p class="input-title">{{ title }}</p>
    <AtomInput :value="value" :placeholder="placeholder" />
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
  }
})
</script>

<style lang="scss" scoped>
.input-title {
  font-size: 20px;
  margin-bottom: 10px;
}

</style>
