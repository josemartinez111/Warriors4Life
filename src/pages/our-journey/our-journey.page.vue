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
import { UseAnimateScrolling } from '../../composables';
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

const YOUTUBE_VIDEO_URL = 'https://youtu.be/PCvrdZOk_kk?si=LrtJ7E2ns6wZn1d-';

const { computeAnimateSection } = UseAnimateScrolling({
  threshold: 0.1, // Slightly increased threshold for better triggering
  rootMargin: '-50px', // Negative margin to trigger slightly before the element is in view
});
</script>
<!-- --------------------------------------------------------
                     <>MARKUP</>
--------------------------------------------------------- -->
<template>
  <Layout theme-mode="w4l-dark">
    <JourneyPageContainer>
      <template #journey-page-container>
        <div
          id="carousel-section"
          data-animate-section
          :class="['carousel-content', computeAnimateSection('carousel-section')]"
        >
          <LeftTextSection />
          <CarouselSection />
        </div>
      </template>
    </JourneyPageContainer>

    <div
      id="stacked-images-section"
      data-animate-section
      :class="['pt-6 mobile:pt-6', computeAnimateSection('stacked-images-section')]"
    >
      <StackedImagesSection />
    </div>

    <div
      id="video-section"
      data-animate-section
      :class="['pt-16 md:pt-28', computeAnimateSection('video-section')]"
    >
      <YoutubeVideoPlayerSection
        :videoURL="YOUTUBE_VIDEO_URL"
      />
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

.carousel-item img {
  @apply w-full h-full object-cover;
}
</style>
<!-- ---------------------------------------------------- -->