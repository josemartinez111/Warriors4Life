<!-- ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
  page-components > our-journey > our-journey.page.vue
∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞ -->
<!-- --------------------------------------------------------
                        SCRIPT-SETUP
--------------------------------------------------------- -->
<script setup lang="ts">
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import { UseColorStore } from '../../stores';
import {
  CarouselSection,
  LeftTextSection,
  StackedImagesSection,
  Layout,
} from '../../components';
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

const colorStore = UseColorStore();
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
        <StackedImagesSection />
      </div>
   </Layout>
</template>
<!-- --------------------------------------------------------
                            STYLES
--------------------------------------------------------- -->
<style scoped lang="postcss">

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