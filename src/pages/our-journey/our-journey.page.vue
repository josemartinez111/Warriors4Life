<!-- ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
  page-components > our-journey > our-journey.page.vue
∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞ -->
<!-- --------------------------------------------------------
                        SCRIPT-SETUP
--------------------------------------------------------- -->
<script setup lang="ts">
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import Layout from '../../components/Layout.vue';
import { UseColorStore } from '../../stores';
import { LeftTextSection, CarouselSection } from '../../components/index.ts';
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

const colorStore = UseColorStore();
</script>
<!-- --------------------------------------------------------
                     <>MARKUP</>
--------------------------------------------------------- -->
<template>
   <Layout>
      <!-- Background Section with Gradient -->
      <div
        class="h-screen flex flex-col md:flex-row items-center relative">
        <section
          class="bg-the-squad-img section-details img-details relative w-full h-full">
          <!-- Gradient overlay over background image -->
          <div
            :class="[`${colorStore.pinkFriday}`, 'absolute inset-0 bg-gradient-to-l from-blue-950 to-transparent/50']"
          />
          
          <!-- Content and Carousel -->
          <div
            class="container mx-auto z-10 text-left text-white h-full flex flex-col md:flex-row items-center px-6">
            <!-- Left Text Section -->
            <LeftTextSection />
            
            <!-- Carousel Section ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞ -->
            <CarouselSection />
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

.carousel-item img {
  @apply w-full h-full object-cover;
}
</style>
<!-- ---------------------------------------------------- -->