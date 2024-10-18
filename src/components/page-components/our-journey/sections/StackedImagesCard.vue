<!-- ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
Components > PageComponents > OurJourney > Sections >  StackedImagesCard
∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞ -->
<!-- --------------------------------------------------------
                        SCRIPT-SETUP
--------------------------------------------------------- -->
<script setup lang="ts">
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import {
  UseCarouselImages,
} from '../../../../composables/UseCarouselImages.ts';
import { computed, ref } from 'vue';
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

const { cardName } = defineProps<{
  cardName: string;
}>();

// Use the composable to get images
const { images } = UseCarouselImages();
// This will hold the current images in the stack
const currentImages = ref(images);

// Function to handle moving the top image to the back
const moveTopImageToBack = () => {
  if (currentImages.value.length <= 0) {
    return;
  }
  
  const topImage = currentImages.value.shift();
  
  if (topImage) {
    currentImages.value.push(topImage); // Add the removed image to the end
  }
};

const getImageClasses = computed(() => (index: number) => {
  const baseClasses = 'transition-transform duration-500 ease-in-out transform';
  
  if (index === 0) {
    // Top image, centered
    return `${baseClasses} translate-x-0 translate-y-0 scale-100 opacity-100`;
  } else if (index === 1) {
    // Second image, shifted more to the left
    return `${baseClasses} sm:translate-x-[-15%] translate-y-4 scale-95 opacity-85`;
  } else if (index === 2) {
    // Third image, shifted more to the right
    return `${baseClasses} sm:translate-x-[15%] translate-y-8 scale-90 opacity-70`;
  } else {
    // Other images, hidden
    return 'hidden';
  }
});
</script>
<!-- --------------------------------------------------------
                     <>MARKUP</>
--------------------------------------------------------- -->
<template>
  <div class="cursor-pointer bg-white rounded-t-lg overflow-hidden">
    <!-- DaisyUI Stack for images -->
    <div class="stack pt-8 pb-2 mx-auto md:pl-[5.1rem] place-items-center pl-[5.1rem] sm:pl-0">
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
      <h2 class="text-xl sm:text-2xl md:text-4xl font-bold text-special-blue">
        {{ cardName }}
      </h2>
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

