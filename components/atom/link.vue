<template>
  <a class="link" :href="url">{{ title }}</a>
</template>

<script setup lang="ts">
const props = defineProps({
  url: {
    type: String,
    required: false,
    default: ''
  },
  title: {
    type: String,
    required: true
  },
})
</script>

<style lang="scss" scoped>
.link {
  font-size: 14px;
  color: $orange;
}
</style>
