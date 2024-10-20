<!-- ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
  page-components > our-journey > our-journey.page.vue
∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞ -->
<!-- --------------------------------------------------------
                        SCRIPT-SETUP
--------------------------------------------------------- -->
<script setup lang="ts">
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import {
  CarouselSection,
  LeftTextSection,
  StackedImagesSection,
  Layout, JourneyPageContainer,
  YoutubeVideoPlayerSection,
} from '../../components';
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

const YOUTUBE_VIDEO_URL = 'https://youtu.be/PCvrdZOk_kk?si=LrtJ7E2ns6wZn1d-';
</script>
<!-- --------------------------------------------------------
                     <>MARKUP</>
--------------------------------------------------------- -->
<template>
   <Layout theme-mode="w4l-dark">
     <JourneyPageContainer>
       <template #journey-page-container>
          <!-- Content and Carousel -->
          <div class="carousel-content">
            <!-- Left Text Section -->
            <LeftTextSection />
            
            <!-- Carousel Section -->
            <CarouselSection />
          </div>
       </template>
     </JourneyPageContainer>
       
     <!-- Section 2 (New Section Below Section 1) -->
     <span class="pt-16 md:pt-28" />
     <StackedImagesSection />
     
     <!-- Video Feed Section -->
     <YoutubeVideoPlayerSection
       :videoURL="YOUTUBE_VIDEO_URL"
     />
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

.carousel-item img {
  @apply w-full h-full object-cover;
}
</style>
<!-- ---------------------------------------------------- -->