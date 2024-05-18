<!-- ********************************************************
             components/icons/DarkmodeIconSolo.vue
********************************************************* -->
<!-- --------------------------------------------------------
                        SCRIPT-SETUP
--------------------------------------------------------- -->
<script setup lang="ts">

import { storeToRefs } from 'pinia';

// ################################################################
import { computed, toRefs } from 'vue';
import { UseDarkmodeStore } from '../../../stores/UseDarkmodeStore.ts';
// ################################################################

interface SVGDimensions {
  height: string;
  width: string;
  customClass?: string;
  iconColor?: string;
  isDarkMode?: boolean;
}
// ____________________________________________________________________

// Component props with default values
const props = withDefaults(defineProps<SVGDimensions>(), {
  height: '24',
  width: '24',
});

const { height, width, customClass } = toRefs(props);

/*
* In Vue 3 with Pinia, when you access state directly from the darkmodeStore
* (e.g., darkmodeStore.state), you don't need to use .value because Pinia
* automatically unwraps the reactivity of the state properties outside
* the darkmodeStore. However, when you directly destructure these properties
* at import, like const { isDarkMode } = UseDarkmodeStore();, you're no
* longer working with a ref, but with a direct reactive value that Pinia
* manages internally. So you have to use `storeToRefs` to convert it back
* */
const store = UseDarkmodeStore();
const { isDarkMode } = storeToRefs(store);

// Waits for the toggle to change then switches the color of the icon
// This is not theme related but just a visual cue that toggles the icon color
const switchIconColor = computed(() => {
  return isDarkMode.value ? '#52A9FF' : '#F75C02';
});
</script>
<!-- --------------------------------------------------------
                         < >MARKUP</>
--------------------------------------------------------- -->
<template>
  <div>
    <label class="pl-10 pt-3 pr-6 cursor-pointer grid place-items-center">
    <input
      type="checkbox"
      value="synthwave"
      :class="`toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2 ${customClass}`"
      :height="`${height}px`"
      :width="`${width}px`"
      :style="{ backgroundColor: switchIconColor }"
      :checked="isDarkMode"
      @change="store.toggleDarkMode()"
    />
      <!-- SUN-SVG -->
    <svg
      class="col-start-1 row-start-1 stroke-base-100 fill-base-100"
      xmlns="http://www.w3.org/2000/svg"
      :height="`${height}px`"
      :width="`${width}px`"
      :fill="switchIconColor"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round">
      <circle cx="12" cy="12" r="5" />
      <path
        d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4
      18.4l1.4 1.4M1 12h2M21 12h2M4.2
      19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
    </svg>
      <!-- MOON-SVG -->
    <svg
      class="col-start-2 row-start-1 stroke-base-100 fill-base-100"
      xmlns="http://www.w3.org/2000/svg"
      :height="`${height}px`"
      :width="`${width}px`"
      :fill="switchIconColor"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  </label>
  </div>
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