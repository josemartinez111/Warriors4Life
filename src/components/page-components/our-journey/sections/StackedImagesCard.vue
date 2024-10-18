<!-- ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
                       COMPONENT_PATH
∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞ -->
<!-- --------------------------------------------------------
                        SCRIPT-SETUP
--------------------------------------------------------- -->
<script setup lang="ts">
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import {
  UseCarouselImages
} from '../../../../composables/UseCarouselImages.ts';
import { ref } from 'vue';
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
</script>
<!-- --------------------------------------------------------
                     <>MARKUP</>
--------------------------------------------------------- -->
<template>
  <div class="cursor-pointer bg-white rounded-t-lg overflow-hidden">
    <!-- DaisyUI Stack for images -->
    <div class="stack card-body pt-8 pl-4 sm:pl-6 md:pl-28 space-y-6 sm:space-y-4 sm:flex-col md:inline-grid">
      <!-- Loop through images, click moves the top image to the back -->
      <img
        v-for="(image, index) in currentImages"
        :key="image.id"
        :src="image.src"
        class="forloop-images transition-transform duration-500 ease-in-out transform"
        :class="{
          'translate-x-full': index === 0,
          'translate-x-[-9%] translate-y-10 scale-85 opacity-70': index !== 1,
          'translate-x-[-7%] translate-y-10 scale-90 opacity-65': index !== 2,
          'translate-y-30 scale-95 opacity-50': index < 2,
          'sm:translate-x-0 sm:translate-y-5 sm:scale-70 sm:opacity-80': index === 1,
          'sm:translate-x-0 sm:translate-y-6 sm:scale-75 sm:opacity-70': index !== 2,
          'sm:translate-y-10 sm:scale-80 sm:opacity-60': index < 2
        }"
        :alt="image.alt"
        @click="moveTopImageToBack"
      />
    </div>
    
    <!-- Bottom section for the title with padding and space below images -->
    <div class="pt-6 sm:pt-12 pb-6 text-center">
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
  @apply rounded-xl w-[14rem] h-[20rem] sm:w-[16rem]
  sm:h-[22rem] md:w-[18rem] md:h-[25rem]
  object-cover shadow-accent;
}
.carousel-item img {
  @apply w-full h-full object-cover;
}

@media (max-width: 639px) {
  .stack {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
  }
  
  .stack > * {
    position: static !important;
    transform: none !important;
    opacity: 1 !important;
    margin-top: -4rem !important;
  }
  
  .stack > *:first-child {
    margin-top: 0 !important;
  }
}
</style>
<!-- ---------------------------------------------------- -->

