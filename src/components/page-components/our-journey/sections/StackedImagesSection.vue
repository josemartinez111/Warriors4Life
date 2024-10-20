<!-- ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
Components > PageComponents > OurJourney > Sections > StackedImagesSection
∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞ -->
<!-- --------------------------------------------------------
                        SCRIPT-SETUP
--------------------------------------------------------- -->
<script setup lang="ts">
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

import { storeToRefs } from 'pinia';
import { StackedImagesCard } from '../../../../components';
import { UseDarkmodeStore } from '../../../../stores';
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

const CARD_NAMES: string[] = [
  'First Stacked Card',
  'Second Stacked Card',
  'Third Stacked Card',
];

const darkMode = UseDarkmodeStore();
const { isDarkMode } = storeToRefs(darkMode);
</script>
<!-- --------------------------------------------------------
                     <>MARKUP</>
--------------------------------------------------------- -->
<template>
  <section :class="[isDarkMode ? 'bg-desperado-black' : 'bg-white', 'w-full mt-16 pt-16 z-10 drop-shadow']">
    <div class="image-card shadow-xl">
      <StackedImagesCard
        v-for="cardName in CARD_NAMES"
        :key="cardName"
        :card-name="cardName"
        class="w-full sm:w-1/3 rounded-2xl"
      />
    </div>
  </section>
</template>
<!-- --------------------------------------------------------
                            STYLES
--------------------------------------------------------- -->
<style scoped lang="postcss">
.image-card {
  @apply flex flex-col items-center sm:flex-row sm:items-stretch
  justify-between w-full px-4 space-y-2 sm:space-y-0 sm:space-x-6;
}
</style>
<!-- ---------------------------------------------------- -->

