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

<style scoped lang="scss">
.page-title {
  color: $orange;
  font-weight: bold;
  font-size: 40px;
}
</style>
