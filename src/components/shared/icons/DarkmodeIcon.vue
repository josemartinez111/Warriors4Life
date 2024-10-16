<!-- ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
          components > icons > DarkmodeIcon.vue
∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞ -->
<!-- --------------------------------------------------------
                        SCRIPT-SETUP
--------------------------------------------------------- -->
<script setup lang="ts">
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import { computed, ref } from 'vue';
import { UseDarkmodeStore } from '../../../stores';
import { storeToRefs } from 'pinia';
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

type SVGIconProps = {
  height?: string;
  width?: string;
  customClass?: string;
  iconColor?: string;
  isDarkMode?: boolean;
}
// ____________________________________________________________________

const {
  height = '28',
  width = '28',
  customClass = '',
} = defineProps<SVGIconProps>();

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
const darkColor = ref<string>('#52A9FF');   // Hex color value for dark mode
const lightColor = ref<string>('#e11d48');  // Hex color value for light mode

const computeIconColors = computed(() => {
  return {
    switchMode: isDarkMode.value ? darkColor.value : lightColor.value,
    
    // Inline style with custom colors for sun icon
    sun: !isDarkMode.value
      ? { fill: lightColor.value, stroke: lightColor.value }  // Use direct CSS styles for custom colors
      : { fill: 'transparent', stroke: 'currentColor' },      // Default to transparent or current text color
    
    // Inline style with custom colors for moon icon
    moon: isDarkMode.value
      ? { fill: darkColor.value, stroke: darkColor.value }  // Dark mode colors
      : { fill: '#ffffff', stroke: '#ffffff' }  // Explicit white fill and stroke for light mode
  };
});

const computeIconClass = (iconType: 'moon' | 'sun') => computed(() => {
  const colStart = iconType === 'sun' ? 'col-start-1' : 'col-start-2';
  const baseClasses = `${colStart} row-start-1 flex justify-center items-center`;
  return baseClasses;  // Only layout, no color-related classes
});

const sunIconClass = computeIconClass('sun');
const moonIconClass = computeIconClass('moon');
</script>
<!-- --------------------------------------------------------
                     <>MARKUP</>
--------------------------------------------------------- -->
<template>
  <div>
        <label
          class="pl-10 pt-3 pr-6 cursor-pointer grid place-items-center">
          <input
            type="checkbox"
            value="synthwave"
            :class="[
              `toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2`,
              customClass
              ]"
            :height="`${height}px`"
            :width="`${width}px`"
            :style="{ backgroundColor: computeIconColors.switchMode }"
            :checked="isDarkMode"
            @change="store.toggleDarkMode()"
          />
          <!-- SUN-SVG -->
          <svg
            :class="sunIconClass"
            :height="`${height}px`"
            xmlns="http://www.w3.org/2000/svg"
            :width="`${width}px`"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path
              d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4
            18.4l1.4 1.4M1 12h2M21 12h2M4.2
            19.8l1.4-1.4M18.4 5.6l1.4-1.4"
            />
          </svg>
          <!-- MOON-SVG -->
          <svg
            :class="moonIconClass"
            xmlns="http://www.w3.org/2000/svg"
            :height="`${height}px`"
            :width="`${width}px`"
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
<style scoped lang="postcss">


</style>
<!-- ---------------------------------------------------- -->