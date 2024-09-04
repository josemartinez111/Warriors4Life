<!-- ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
       page-components/our-journey/our-journey.page.vue
∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞ -->
<!-- --------------------------------------------------------
                        SCRIPT-SETUP
--------------------------------------------------------- -->
<script setup lang="ts">
import { ref } from 'vue';

// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import Layout from '../../components/Layout.vue';
import { UseCarouselImages } from '../../composables/UseCarouselImages.ts';
import { UseColorStore } from '../../stores';
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

const colorStore = UseColorStore();
// Use the composable to get images
const { images } = UseCarouselImages();

const currentIndex = ref<number>(0);

// Function to handle navigation without shifting the page
const navigateCarousel = (newIndex: number) => {
  const maxIndex = images.length - 1;
  currentIndex.value = newIndex < 0
    ? maxIndex
    : currentIndex.value = newIndex > maxIndex
      ? 0
      : newIndex;
};
</script>
<!-- --------------------------------------------------------
                     <>MARKUP</>
--------------------------------------------------------- -->
<template>
   <Layout>
      <!-- component -->
      <div class="h-screen flex items-center">
      <section class="bg-the-squad-img section-details img-details">
         <div
           :class="[`${colorStore.pinkFriday}`, 'absolute inset-0 bg-gradient-to-l from-blue-950 to-transparent/50']"
         />
        <!-- Gradient overlay if needed, adjust as necessary -->
            <div class="container mx-auto z-10 text-left text-white">
               <div class="flex items-center">
                  <div class="w-1/2 pl-16 !important">
                     <h1
                       class="desktop:text-5xl text-md font-medium mb-6 text-white">Our Journey</h1>
                     <p class="desktop:text-xl text-sm mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra
                        euismod odio, gravida pellentesque urna varius vitae.
                     </p>
                    <!-- Support anchor button -->
                     <a href="#"
                        class="support-us desktop:font-medium text-sm">
                     Support Us
                     </a>
                  </div>
                 <!-- carousel -->
                 <!-- carousel -->
            <div
              class="desktop:w-1/2 w-5/12 pr-12 pt-24 flex desktop:flex-row flex-wrap">
              <div class="carousel my-16 rounded-2xl bg-white">
                <!-- Looping through images -->
                <div
                  class="carousel-item relative w-full"
                  v-for="(image, index) in images"
                  :key="image.id"
                  :id="`slide${index+1}`"
                >
                  <img
                    :src="image.src"
                    class="w-full max-h-[55vh] object-cover"
                    :alt="image.alt"
                  />
                  <div
                    class="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2"
                  >
                    <a
                      @click.prevent="navigateCarousel(index - 1)"
                      href="#"
                      class="btn btn-circle"
                    >❮</a>
                    <a
                      @click.prevent="navigateCarousel(index + 1)"
                      href="#"
                      class="btn btn-circle"
                    >❯</a>
                  </div>
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
  @apply text-white drop-shadow-2xl h-screen flex items-center;
}

.support-us {
  @apply btn-ghost btn btn-active bg-rose-600 text-white desktop:py-4 desktop:px-24
  rounded-[8px] hover:bg-blue-950 duration-[30ms] active:opacity-5;
}
</style>
<!-- ---------------------------------------------------- -->