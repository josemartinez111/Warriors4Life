<!-- ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
       page-components/our-journey/our-journey.page.vue
∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞ -->
<!-- --------------------------------------------------------
                        SCRIPT-SETUP
--------------------------------------------------------- -->
<script setup lang="ts">
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import Layout from '../../components/Layout.vue';
import { UseCarouselImages } from '../../composables/UseCarouselImages.ts';
import { UseColorStore } from '../../stores';
import { ref, watchEffect } from 'vue';
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

const colorStore = UseColorStore();
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
   <Layout>
      <!-- Background Section with Gradient -->
      <div class="h-screen flex flex-col md:flex-row items-center relative">
        <section class="bg-the-squad-img section-details img-details relative w-full h-full">
          <!-- Gradient overlay over background image -->
          <div
            :class="[`${colorStore.pinkFriday}`, 'absolute inset-0 bg-gradient-to-l from-blue-950 to-transparent/50']"
          />
          
          <!-- Content and Carousel -->
          <div class="container mx-auto z-10 text-left text-white h-full flex flex-col md:flex-row items-center px-6">
            <!-- Left Text Section -->
            <div class="w-full md:w-1/2 md:pl-16 mb-8 md:mb-0">
              <h1 class="text-3xl md:text-5xl font-medium mb-4 md:mb-6">Our Journey</h1>
              <p class="text-md md:text-xl mb-6 md:mb-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.
              </p>
              <a href="#" class="support-us text-md md:font-medium py-3 px-6 md:py-4 md:px-24">
                Support Us
              </a>
            </div>
            
            <!-- Carousel Section -->
            <div class="w-full md:w-1/2">
              <div class="carousel bg-white rounded-2xl overflow-hidden relative w-full h-[40vh] md:h-[55vh]">
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
                  <div class="absolute flex justify-between items-center inset-y-0 left-5 right-5">
                    <a
                      @click.prevent="navigateCarousel(currentIndex - 1)"
                      href="#"
                      class="btn btn-circle"
                    >❮</a>
                    <a
                      @click.prevent="navigateCarousel(currentIndex + 1)"
                      href="#"
                      class="btn btn-circle"
                    >❯</a>
                  </div>
                </div>
              </div>
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
.img-details {
  @apply relative bg-cover bg-center;
}

.section-details {
  @apply text-white h-full flex items-center;
}

.support-us {
  @apply btn-ghost btn bg-rose-600 text-white desktop:py-4 desktop:px-24 rounded-[8px] hover:bg-blue-950 duration-150;
}

.carousel {
  @apply relative w-full h-[55vh] rounded-xl overflow-hidden shadow-lg;
}

.carousel-item img {
  @apply w-full h-full object-cover;
}

.btn-circle {
  @apply w-12 h-12 flex items-center opacity-85 justify-center
  rounded-full text-white bg-blue-800 shadow-lg hover:bg-rose-600
  hover:text-white hover:shadow-xl transition duration-200;
}
</style>
<!-- ---------------------------------------------------- -->