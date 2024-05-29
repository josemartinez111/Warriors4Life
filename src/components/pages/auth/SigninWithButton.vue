<!-- ********************************************************
                components/auth/SigninWithButton.vue
********************************************************* -->
<!-- --------------------------------------------------------
                        SCRIPT-SETUP
--------------------------------------------------------- -->
<script setup lang="ts">
// ################################################################
import { toRefs } from 'vue';
import DisplaySVGIcons, {
  SVGProps,
} from '../../shared/icons/DisplaySVGIcons.vue';
// ################################################################

const props = defineProps<{
  iconName: SVGProps['iconName'];
  customClass?: string | Array<string>;
}>();

const { iconName } = toRefs(props);
</script>
<!-- --------------------------------------------------------
                     <>MARKUP</>
--------------------------------------------------------- -->
<template>
  <button
    type="button"
    class="sign-in-with-btn"
  >
    <DisplaySVGIcons :icon-name="iconName" />
    <span :class="`${customClass}`">
      <!-- children -->
      <slot name="children" />
    </span>
  </button>
</template>
<!-- --------------------------------------------------------
                            STYLES
--------------------------------------------------------- -->
<style scoped lang="postcss">
/* ################################################################### */
/* ---------------------------- IMPORTS ------------------------------ */

/* ################################################################### */

.sign-in-with-btn {
  @apply w-full pl-8 py-1 inline-flex items-center
  text-sm font-medium rounded-lg border border-gray-200
  bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50
  disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700
  dark:text-white dark:hover:bg-neutral-800;
}
</style>
<!-- ---------------------------------------------------- -->
