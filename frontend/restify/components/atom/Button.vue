<template>
  <button class="rounded-3xl text-xl font-bold text-white border-transparent p-2.5" :class="[$style.btn, $style[color]]" @click="handleClick">{{text}}</button>
</template>

<script lang="ts">
  import { PropType, defineComponent } from '@nuxtjs/composition-api';

  export type Props = {
    text: String;
    key: String;
    color: "green" | "yellow";
  };

  export default defineComponent ({
    name: "ButtonComponent",
    props: {
      text: {
        type: String as PropType<Props["text"]>,
        required: true,
      },
      key: {
        type: String as PropType<Props["key"]>,
        required: false,
        default: "",
      },
      color: {
        type: String as PropType<Props["color"]>,
        required: false,
        default: "green",
      },
    },
    setup(props,context){
      const handleClick = () => {
        context.emit("click", props.key);
      }
    },

  });


</script>

<style lang="scss" module>
  .btn {
    cursor: pointer;
    width: calc((180 / 400) * 100%);
  }
  .yellow {
    background: linear-gradient(#d68113 0%, #c6750b 100%);
  }
  .green {
    background: linear-gradient(#1c9a13 0%, #287622 100%);
  }

</style>
