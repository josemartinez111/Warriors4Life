<!-- ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
 Components > PageComponents > OurJourney > CarouselSection
∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞ -->
<!-- --------------------------------------------------------
                        SCRIPT-SETUP
--------------------------------------------------------- -->
<script setup lang="ts">
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import { ref, watchEffect } from 'vue';
import { UseCarouselImages } from '../../../../composables';
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
    <div class="carousel drop-shadow bg-white rounded-2xl overflow-hidden relative w-full h-[40vh] md:h-[55vh]">
      <TransitionGroup name="fade" tag="div">
        <div
          v-for="(image, index) in images"
          :key="image.id"
          v-show="index === currentIndex"
          class="carousel-item w-full h-full absolute top-0 left-0 flex items-center justify-center"
        >
          <img
            :src="image.src"
            class="w-full h-full object-cover"
            :alt="image.alt"
          />
        </div>
      </TransitionGroup>
      
      <!-- Navigation Arrows ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞ -->
      <ImageNavArrows
        :navigatePrev="() => navigateCarousel(currentIndex - 1)"
        :navigateNext="() => navigateCarousel(currentIndex + 1)"
      />
    </div>
  </div>
</template>
<!-- --------------------------------------------------------
                            STYLES
--------------------------------------------------------- -->
<!--suppress CssUnusedSymbol -->
<style scoped lang="postcss">
.carousel {
  @apply relative w-full h-[55vh] rounded-xl overflow-hidden shadow-lg;
}

.carousel-item img {
  @apply w-full h-full object-cover;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
<!-- ---------------------------------------------------- -->