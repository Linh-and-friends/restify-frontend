<template>
  <h1 class="page-title">{{ title }}</h1>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.page-title {
  color: $black;
  font-weight: bold;
  font-size: 32px;
}
</style>