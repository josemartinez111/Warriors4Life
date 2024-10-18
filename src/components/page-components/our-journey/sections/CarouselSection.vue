<!-- ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
 Components > PageComponents > OurJourney > CarouselSection
∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞ -->
<!-- --------------------------------------------------------
                        SCRIPT-SETUP
--------------------------------------------------------- -->
<script setup lang="ts">
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import { ref, watchEffect } from 'vue';
import {
  UseCarouselImages,
} from '../../../../composables/UseCarouselImages.ts';
import { ImageNavArrows } from '../../../index.ts';
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

// Use the composable to get images
const { images } = UseCarouselImages();
const currentIndex = ref<number>(0);

// Function to handle navigation without shifting the page
const navigateCarousel = (newIndex: number) => {
  const maxIndex = images.length - 1;
  currentIndex.value = (newIndex < 0)
    ? maxIndex
    : (newIndex > maxIndex)
      ? 0
      : newIndex;
};

watchEffect(() => {
  console.log('Current Index:', currentIndex.value);
});
</script>
<!-- --------------------------------------------------------
                     <>MARKUP</>
--------------------------------------------------------- -->
<template>
  <div class="w-full md:w-1/2">
    <div
      class="carousel bg-white rounded-2xl overflow-hidden relative w-full h-[40vh] md:h-[55vh]">
      <!-- Loop through images -->
      <div
        v-for="(image, index) in images"
        :key="image.id"
        class="carousel-item w-full h-full flex items-center justify-center transition-opacity duration-500"
        v-show="index === currentIndex"
        :class="{ 'opacity-100': index === currentIndex, 'opacity-0': index !== currentIndex }"
      >
        <img
          :src="image.src"
          class="w-full h-full object-cover"
          :alt="image.alt"
        />
        <!-- Navigation Arrows ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞ -->
        <ImageNavArrows
          :navigatePrev="() => navigateCarousel(currentIndex - 1)"
          :navigateNext="() => navigateCarousel(currentIndex + 1)"
        />
      </div>
    </div>
  </div>
</template>
<!-- --------------------------------------------------------
                            STYLES
--------------------------------------------------------- -->
<style scoped lang="postcss">

.carousel {
  @apply relative w-full h-[55vh] rounded-xl overflow-hidden shadow-lg;
}

.carousel-item img {
  @apply w-full h-full object-cover;
}
</style>
<!-- ---------------------------------------------------- -->