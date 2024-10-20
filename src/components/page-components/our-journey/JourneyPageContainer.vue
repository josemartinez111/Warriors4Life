<!-- ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
Components > PageComponents > OurJourney > JourneyPageContainer
∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞ -->
<!-- --------------------------------------------------------
                        SCRIPT-SETUP
--------------------------------------------------------- -->
<script setup lang="ts">
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import { UseColorStore, UseDarkmodeStore } from '../../../stores';
import { storeToRefs } from 'pinia';
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞


const colorStore = UseColorStore();
const store = UseDarkmodeStore();
const { isDarkMode } = storeToRefs(store);
</script>
<!-- --------------------------------------------------------
                     <>MARKUP</>
--------------------------------------------------------- -->

<template>
  <!-- Background Section with Gradient -->
  <div :class="['h-auto flex flex-col relative', isDarkMode ? 'bg-desperado-black' : 'bg-white', 'w-full z-10 drop-shadow']">
    <!-- Section 1 (First Section with Flexbox Layout) -->
    <section
      :class="[!isDarkMode ? 'bg-desperado-black' : 'bg-white', 'pt-36 bg-the-squad-img section-details img-details relative w-full h-screen']">
      <!-- Gradient overlay over background image (SOLO div only for styling classes) -->
      <div
        :class="[
            `${colorStore.pinkFriday}`,
            'absolute inset-0 bg-gradient-to-l from-blue-950 to-transparent/50'
          ]"
      />
      
      <!-- Named slot (children): journey-page-container -->
      <slot name="journey-page-container" />
    </section>
  </div>
</template>
<!-- --------------------------------------------------------
                            STYLES
--------------------------------------------------------- -->
<style scoped lang="postcss">

.img-details {
  @apply relative bg-cover bg-center;
}

.section-details {
  @apply text-white h-full flex items-center;
}
</style>
<!-- ---------------------------------------------------- -->