<template>
  <NuxtLink class="link" :to="url">{{ $t(title) }}</NuxtLink>
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
