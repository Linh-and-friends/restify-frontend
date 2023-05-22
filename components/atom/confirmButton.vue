<template>
  <input type="button" :value="$t(value)" class="confirm-button"/>
</template>

<script setup lang="ts">
const props = defineProps({
  value: {
    type: String,
    required: true
  }
})
</script>
<style lang="scss" scoped>
.confirm-button {
  border-radius: 5px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  color: $white;
  cursor: pointer;
}
</style>