<template>
  <div>
    <div :class="`text-${labelSize}`">{{label}}</div>
    <atom-input-text placeholder-text="placeholder" :value="value"
      @update:value = "handleUpdateValue"
    />
  </div>
</template>

<script lang="ts">
  import { PropType, defineComponent } from '@nuxtjs/composition-api';
  import AtomInputText from '~/components/atom/AtomInputText.vue'

  export type Props = {
    label: String;
    placeholder: String;
    value: String;
    labelSize: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
  }

  export default defineComponent ({
    name: 'InputText',
    props: {
        label: {
          type: String as PropType<Props["label"]>,
          required: true,
        },
        placeholder: {
          type: String as PropType<Props["placeholder"]>,
          required: true,
        },
        value: {
          type: String as PropType<Props["value"]>,
          required: true,
        },
        labelSize: {
          type: String as PropType<Props["labelSize"]>,
          required: false,
          default: "base",
        }
    },
    setup(props,context){
      const handleUpdateValue = (val: String) => {
        context.emit("update:value", val);
      }
    },
    components: {
      AtomInputText
    }
  });
  
</script>