<!-- ********************************************************
             components/icons/DarkmodeIcon.vue
********************************************************* -->
<!-- --------------------------------------------------------
                        SCRIPT-SETUP
--------------------------------------------------------- -->
<script setup lang="ts">
// ################################################################
import { computed, ref, toRefs } from 'vue';
// ################################################################

interface SVGDimensions {
  height: string;
  width: string;
  customClass?: string;
  iconColor?: string;
  isDarkMode?: boolean;
}

const props = withDefaults(defineProps<SVGDimensions>(), {
  height: '24',
  width: '24',
});

const { height, width, customClass } = toRefs(props);

const isDarkMode = ref<boolean>(false);

// Waits for the toggle to change then switches the color
const switchColor = computed(() => {
  return isDarkMode.value ? '#52A9FF' : '#F75C02';
});

// Function to toggle dark mode
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  console.log('Dark Mode: ', isDarkMode.value);  // Debugging output
};
</script>
<!-- --------------------------------------------------------
                         < >MARKUP</>
--------------------------------------------------------- -->
<template>
  <div class="pr-3 pl-12 pt-3 items-center">
    <label class="flex cursor-pointer gap-2" @click="toggleDarkMode">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :height="`${height}px`"
      :width="`${width}px`"
      :fill="switchColor"
      :class="`{customClass}`"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
    <circle cx="12" cy="12" r="5" />
    <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4
    18.4l1.4 1.4M1 12h2M21 12h2M4.2
    19.8l1.4-1.4M18.4 5.6l1.4-1.4"
    />
  </svg>
  <input
    type="checkbox"
    value="synthwave"
    class="toggle theme-controller"
    :height="`${height}px`"
    :width="`${width}px`"
    :style="`background-color: ${switchColor};`"
    :class="customClass"
    v-model="isDarkMode"
  />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :height="`${height}px`"
    :width="`${width}px`"
    :fill="switchColor"
    :class="`${customClass}`"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
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