<template>
  <input class="rounded-3xl shadow-md" type="text" :placeholder="placeholderText" @input="handleInput" />
</template>

<script lang="ts">
  import { PropType, defineComponent } from '@nuxtjs/composition-api';
    
  export type Props = {
    placeholderText: String;
    key: String;
  }

  export default defineComponent ({
    name: 'InputText',
    props: {
        placeholderText: {
          type: String as PropType<Props["placeholderText"]>,
          required: true,
        },
        key: {
        type: String as PropType<Props["key"]>,
        required: false,
        default: "",
        },
    },
    setup(props,context){
      const handleInput = (event: Event) => {
        context.emit("update:value", (event.target as HTMLInputElement)?.value);
      }
    }
  });
  
</script>

<style lang="scss" module>
  input {
    padding-left: calc((20 / 1366) * 100vw);
    border: 1px solid rgba(125, 125, 125, 0.5);
  }
</style>