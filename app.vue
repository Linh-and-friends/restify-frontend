<template>
  <div>
    <NuxtPage />
  </div>
</template>
<script setup lang="ts">
import { notification } from "ant-design-vue/es";
import { useUserStore } from "./stores/user"

  onBeforeMount(()=> {
    const userStore = useUserStore();
    notification.config({
      placement: 'topRight',
      bottom: '24px',
      top: '24px',
      duration: 3
    })
    userStore.init()
    
  })    
</script>