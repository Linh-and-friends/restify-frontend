<template>
    <button class="btn login-btn">LOG IN</button>
</template>

<script lang="ts">
    import { defineComponent } from '@nuxtjs/composition-api';

    export type Props = {
        text: String;
        
    };

    export default defineComponent ({
        props: {}
    });
</script>

<style lang="scss" scoped>

</style>