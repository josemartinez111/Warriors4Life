<!-- ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
Components > PageComponents > OurJourney > Sections >  StackedImagesCard
∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞ -->
<!-- --------------------------------------------------------
                        SCRIPT-SETUP
--------------------------------------------------------- -->
<script setup lang="ts">

import { storeToRefs } from 'pinia';
import { computed } from 'vue';

// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import { UseStackedImages } from '../../../../composables';
import { UseDarkmodeStore } from '../../../../stores';
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

const { cardName } = defineProps<{
  cardName: string;
}>();

const darkmodeStore = UseDarkmodeStore();
const { isDarkMode } = storeToRefs(darkmodeStore);
const { moveTopImageToBack, currentImages } = UseStackedImages();

const getImageClasses = computed(() => (index: number) => {
  const baseClasses = 'transition-transform duration-500 ease-in-out transform';
  
  switch (index) {
    case 0: // Top image, centered
      return `${ baseClasses } translate-x-0 translate-y-0 scale-100 opacity-100`;
    case 1: // Second image, shifted more to the left
      return `${ baseClasses } sm:translate-x-[-15%] translate-y-4 scale-95 opacity-85`;
    case 2: // Third image, shifted more to the right
      return `${ baseClasses } sm:translate-x-[15%] translate-y-8 scale-90 opacity-70`;
    default:
      return 'hidden';
  }
});

const computeCardTitleClasses = computed(() => {
  return [
    (!isDarkMode.value)
      ? 'text-special-blue'
      : 'text-slate-50',
    'card-body rounded px-2 sm:px-3 py-1 sm:py-2 text-[1.3rem] text-5xl font-semibold tracking-wider opacity-25 uppercase bg-transparent'
  ];
});
</script>
<!-- --------------------------------------------------------
                     <>MARKUP</>
--------------------------------------------------------- -->
<template>
  <div class="cursor-pointer text-slate-400 bg-transparent rounded-t-lg overflow-hidden">
    <!-- DaisyUI Stack for images -->
    <div
      class="stack pt-8 pb-2 mx-auto md:pl-[5.1rem] place-items-center pl-[5.1rem] sm:pl-0">
      <!-- Loop through images, click moves the top image to the back -->
      <img
        v-for="(image, index) in currentImages"
        :key="image.id"
        :src="image.src"
        :class="['forloop-images', getImageClasses(index)]"
        :alt="image.alt"
        @click="moveTopImageToBack"
      />
    </div>
    
    <!-- Bottom section for the title with padding and space below images -->
    <div class="pt-4 sm:pt-8 pb-6 text-center">
      <span :class="computeCardTitleClasses">
        {{ cardName }}
      </span>
    </div>
  </div>
</template>

<!-- --------------------------------------------------------
                            STYLES
--------------------------------------------------------- -->
<style scoped lang="postcss">
  .forloop-images {
    @apply rounded-xl w-[14rem] h-[20rem] sm:w-[16rem] sm:h-[22rem]
    md:w-[18rem] md:h-[25rem] object-cover shadow-accent mx-auto;
  }
</style>
<!-- ---------------------------------------------------- -->

