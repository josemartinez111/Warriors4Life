<!-- ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
              Components > Layout > Layout.vue
∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞ -->
<!-- --------------------------------------------------------
                        SCRIPT-SETUP
--------------------------------------------------------- -->
<script setup lang="ts">
import { computed } from 'vue';

// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import { NavBar, Footer, W4LFloatingButton } from '../index.ts';
import { storeToRefs } from 'pinia';
import { UseDarkmodeStore } from '../../stores';
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

type ParallaxImage =
  'bg-parallax-flags'
  | 'bg-white'
  | string;

type ThemeMode = 'w4l-dark' | 'w4l-light';
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

interface LayoutProps {
  imageClass?: ParallaxImage;
  customClass?: string | Array<string>;
  themeMode?: ThemeMode;
}
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

const {
  imageClass,
  customClass,
  themeMode = 'w4l-light',
} = defineProps<LayoutProps>();

const store = UseDarkmodeStore();
const { isDarkMode } = storeToRefs(store);

const getBGClass = computed(() => {
  if (themeMode === 'w4l-dark' || isDarkMode.value) {
    return 'bg-slate-900'; // A dark slate color, adjust as needed
  }
  return imageClass || 'bg-white';
});
</script>
<!-- --------------------------------------------------------
                     <>MARKUP</>
--------------------------------------------------------- -->
<template>
  <div class="relative min-h-screen">
    <!-- Navbar Component -->
    <NavBar />
    
    <!--
    This div creates the background layer for the layout.
    It uses dynamic class binding to determine its appearance:
    1. getBGClass: A computed property that returns the appropriate background class
       based on the theme prop and global dark mode state.
    2. customClass: Additional custom classes passed as a prop for flexibility.
    3. 'parallax-container': A static class that sets up the parallax effect.
    4. Conditional 'text-white' class: Applied when the theme is dark or global dark mode is active.
  
    This setup allows for a flexible, theme-aware background that can switch between
    light and dark modes, support custom classes, and maintain a parallax effect.
    -->
    <div :class="[
      getBGClass,
      customClass,
      'parallax-container',
      { 'text-white': themeMode === 'w4l-dark' || isDarkMode }
      ]"
    />
    
    <div class="content-container">
      <!-- children-slot -->
      <section>
        <slot></slot>
      </section>
    </div>
    <!-- Floating Button -->
    <W4LFloatingButton />
    <!-- Footer Component -->
    <Footer />
  </div>
</template>
<!-- --------------------------------------------------------
                            STYLES
--------------------------------------------------------- -->
<style scoped lang="postcss">

/*noinspection CssUnusedSymbol*/
.parallax-container {
  @apply bg-cover bg-center absolute inset-0 w-full h-full z-0 bg-scroll tablet:bg-fixed;
  background-size: 100% auto;
}

.content-container {
  @apply relative z-20 pt-16;
  /* Increases padding if needed */
  background-color: transparent; /* Make sure this container is transparent */
  min-height:       100vh; /* Ensure it covers the viewport height at minimum */
}
</style>
<!-- ---------------------------------------------------- -->

