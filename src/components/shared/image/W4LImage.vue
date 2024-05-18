<!-- ********************************************************
             components/shared/image/W4LImage.vue
********************************************************* -->
<!-- --------------------------------------------------------
                        SCRIPT-SETUP
--------------------------------------------------------- -->
<script setup lang="ts">
// ################################################################
import { computed, toRefs } from 'vue';
// ################################################################
const props = defineProps<{
  imgUrl: string;
  customClass?: string;
}>();

const { imgUrl, customClass } = toRefs(props);

// Combining classes ensuring customClass can override default when needed
const imgClass = computed(() => [
  `w-1/2 lg:w-1/4 max-w-xs lg:max-w-4xl h-auto rounded-lg shadow-2xl drop-shadow-2xl`,
  // sets custom class if passed because it will override default or compute the changes
  customClass.value
]);
</script>
<!-- --------------------------------------------------------
                         < >MARKUP</>
--------------------------------------------------------- -->
<template>
  <img
    :src="imgUrl"
    :class="['w-1/2 lg:w-1/4 max-w-xs lg:max-w-4xl h-auto rounded-lg shadow-2xl drop-shadow-2xl', imgClass]"
    alt=""
  />
</template>
<!-- --------------------------------------------------------
                            STYLES
--------------------------------------------------------- -->
<style scoped>
/* ################################################################### */
/* ---------------------------- IMPORTS ------------------------------ */

/* ################################################################### */

</style>
<!-- ---------------------------------------------------- -->