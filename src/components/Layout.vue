<!-- ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
                   components/Layout.vue
∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞ -->
<!-- --------------------------------------------------------
                        SCRIPT-SETUP
--------------------------------------------------------- -->
<script setup lang="ts">
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import { NavBar, Footer } from './index';
import { W4LFloatingButton } from './index';
import { storeToRefs } from 'pinia';
import { UseDarkmodeStore } from '../stores';
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

type ParallaxImage =
  'bg-parallax-flags'
  | 'bg-white'
  | string ;

interface LayoutProps {
  imageClass?: ParallaxImage;
  customClass?: string | Array<string>;
}
// ____________________________________________________________________

const props = defineProps<LayoutProps>();

const store = UseDarkmodeStore();
const { isDarkMode } = storeToRefs(store);
</script>
<!-- --------------------------------------------------------
                     <>MARKUP</>
--------------------------------------------------------- -->
<template>
  <div class="relative min-h-screen">
    <!-- Navbar Component -->
    <NavBar />
    <div :class="[`${isDarkMode ? 'dark:bg-jet-gray' : props.imageClass}`, props.customClass, 'parallax-container']" />
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
  @apply bg-fixed bg-cover absolute inset-0 w-full h-full z-0;
  /*  background-image: url('../assets/images/many-flags.jpg');
   background-size: cover;
   background-attachment: fixed;
   position: absolute;
   inset: 0;
   width: 100%;
   height: 100%;
   z-index: 0; */
}

.content-container {
  @apply relative z-20 pt-16;
  /* Increases padding if needed */
  background-color: transparent; /* Make sure this container is transparent */
  min-height:       100vh; /* Ensure it covers the viewport height at minimum */
}
</style>
<!-- ---------------------------------------------------- -->

