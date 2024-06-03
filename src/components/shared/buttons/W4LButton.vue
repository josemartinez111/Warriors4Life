<!-- ********************************************************
               components/shared/W4LButton.vue
********************************************************* -->
<!-- --------------------------------------------------------
                        SCRIPT-SETUP
--------------------------------------------------------- -->
<script setup lang="ts">
// ################################################################
import { computed, toRefs } from 'vue';
// ################################################################

interface CustomStyleClasses {
  customClass?: string | Array<string>;
}
const props = defineProps<CustomStyleClasses>();
const { customClass } = toRefs(props);

const emit = defineEmits(['click']);

function handleClick(): void {
  emit('click');
}

// Combining classes ensuring customClass can override default when needed
const buttonClass = computed(() => [
  `btn btn-sm ml-2
  btn-active drop-shadow-2xl
  hover:bg-blue-950
  px-8 rounded-2xl active:opacity-5 ease-in
  duration-75`,
  // sets custom class if passed because it will override default or compute the changes
  customClass.value
]);
</script>
<!-- --------------------------------------------------------
                         < >MARKUP</>
--------------------------------------------------------- -->
<template>
  <button :class="buttonClass" @click="handleClick">
    <slot></slot> <!-- This slot will hold the button text -->
  </button>
</template>
<!-- --------------------------------------------------------
                            STYLES
--------------------------------------------------------- -->
<style scoped lang="postcss">
/* ################################################################### */
/* ---------------------------- IMPORTS ------------------------------ */

/* ################################################################### */
</style>
<!-- ---------------------------------------------------- -->