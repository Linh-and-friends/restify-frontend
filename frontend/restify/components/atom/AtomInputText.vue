<template>
  <input class="rounded-3xl shadow-md pl-5 border border-gray-100" :value="value" type="text" :placeholder="placeholderText" @input="handleInput" />
</template>

<script lang="ts">
  import { PropType, defineComponent } from '@nuxtjs/composition-api';
    
  export type Props = {
    placeholderText: String;
    key: String;
    value: String;
  }

  export default defineComponent ({
    name: 'AtomInputText',
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
        value: {
          type: String as PropType<Props["value"]>,
          required: true,
        },
    },
    setup(props,context){
      const handleInput = (event: Event) => {
        context.emit("update:value", (event.target as HTMLInputElement)?.value);
      }
    }
  });
  
</script>

