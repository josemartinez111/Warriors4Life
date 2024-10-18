<!-- ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
  page-components > our-journey > our-journey.page.vue
∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞ -->
<!-- --------------------------------------------------------
                        SCRIPT-SETUP
--------------------------------------------------------- -->
<script setup lang="ts">
import { computed, ref } from 'vue';

// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import Layout from '../../components/Layout.vue';
import { UseCarouselImages } from '../../composables/UseCarouselImages.ts';
import { UseColorStore } from '../../stores';
import {
  LeftTextSection,
  CarouselSection,
} from '../../components/index.ts';
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

const stackImageName = ref<string>();

const colorStore = UseColorStore();
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
   <Layout custom-class="bg-white">
      <!-- Background Section with Gradient -->
      <div class="h-auto flex flex-col relative">
        <!-- Section 1 (First Section with Flexbox Layout) -->
        <section
          class="pt-28 bg-the-squad-img section-details img-details relative w-full h-screen">
          <!-- Gradient overlay over background image -->
          <div
            :class="[
              `${colorStore.pinkFriday}`,
              'absolute inset-0 bg-gradient-to-l from-blue-950 to-transparent/50'
              ]"
          />
          
          <!-- Content and Carousel -->
          <div class="carousel-content">
            <!-- Left Text Section -->
            <LeftTextSection />
            
            <!-- Carousel Section -->
            <CarouselSection />
          </div>
        </section>
        
        <!-- Section 2 (New Section Below Section 1) -->
<section class="bg-white shadow-accent">
  <!-- Container for the Stack of Images -->
  <div class="w-full lg:w-5/12 px-4 mb-6 lg:mb-0 mx-auto">
    <!-- Image Stack Card -->
    <div class="relative flex flex-col min-w-0 break-words w-full mb-4 shadow-lg rounded-lg">
      <!-- DaisyUI Stack of Images with transition -->
      <div class="stack pt-8 cursor-pointer bg-white rounded-t-lg overflow-hidden">
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
      
      <!-- Bottom section for the title -->
      <blockquote class="p-6 rounded-b-lg">
        <!-- Title for the stack images -->
        <h2 class="px-2 sm:px-3 py-1 sm:py-2 md:text-4xl text-xs font-semibold tracking-wider uppercase dark:bg-rose-800">
          {{ stackImageName = 'First Stack' }}
        </h2>
      </blockquote>
    </div>
  </div>
</section>
      </div>
   </Layout>
</template>
<!-- --------------------------------------------------------
                            STYLES
--------------------------------------------------------- -->
<style scoped lang="postcss">

.forloop-images {
  @apply rounded w-[28rem] h-[38rem] pb-20 pt-16 object-cover shadow-accent;
}

.carousel-content {
  @apply container mx-auto z-10 text-left text-white h-full
  flex flex-col md:flex-row items-center pb-5 px-6;
}

.img-details {
  @apply relative bg-cover bg-center;
}

.section-details {
  @apply text-white h-full flex items-center;
}

.carousel-item img {
  @apply w-full h-full object-cover;
}
</style>
<!-- ---------------------------------------------------- -->