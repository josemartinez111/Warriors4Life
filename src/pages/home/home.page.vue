<!-- ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
                  Pages > Home > Home.Page
∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞ -->
<!-- --------------------------------------------------------
                        SCRIPT-SETUP
--------------------------------------------------------- -->
<script setup lang="ts">
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import { ref } from 'vue';
import RookiesStadium from '../../assets/images/rockiesStadium.jpg';
import {
  SectionsContainer,
  W4LCalender,
  HomeHeroSection,
  ShowCalendarModal,
  HomeEComSection,
} from '../../components';
import Layout from '../../components/Layout.vue';
import { UseAnimateScrolling } from '../../composables';
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

// const modal = ref<HTMLDialogElement | undefined>(undefined);
// Create a reactive state for modal visibility
const isModalOpen = ref(false);

function showCalendar() {
  isModalOpen.value = !isModalOpen.value;  // This toggles the open state
  // modal.value?.showModal();
}

// Scroll animation
const { computeAnimateSection } = UseAnimateScrolling({
  threshold: 0.1,
  rootMargin: '-50px',
});
</script>
<!-- --------------------------------------------------------
                     <>MARKUP</>
--------------------------------------------------------- -->
<template>
  <Layout image-class="bg-parallax-flags">
    <main>
      <div class="home-content">
        <!-- Hero section component -->
        <div
          id="hero-section"
          data-animate-section
          :class="computeAnimateSection('hero-section')"
        >
          <HomeHeroSection />
        </div>
        
        <!-- Calendar Section -->
        <div
          id="calendar-section"
          data-animate-section
          :class="['text-white pt-24 pb-24', computeAnimateSection('calendar-section')]"
        >
          <SectionsContainer
            section-header="Up Coming Events"
            paragraph="Join us at future events with our warriors, to get to know what we are all about."
            :img="RookiesStadium"
          >
            <W4LCalender :handle-calendar-click="showCalendar" />
            
            <ShowCalendarModal
              :toggle-modal="showCalendar"
              :is-open="isModalOpen"
            >
              <template #close-btn-name>
                Close Calendar
              </template>
              <template #children>
                <h3 class="font-bold text-2xl sm:text-3xl md:text-4xl pb-11 pt-5 text-center">
                  Scheduled Events
                </h3>
                <div class="overflow-x-auto">
                  <W4LCalender />
                </div>
              </template>
            </ShowCalendarModal>
          </SectionsContainer>
        </div>
        
        <!-- Commerce Component -->
        <div
          id="ecom-section"
          data-animate-section
          :class="computeAnimateSection('ecom-section')"
        >
          <HomeEComSection />
        </div>
      </div>
    </main>
  </Layout>
</template>
<!-- --------------------------------------------------------
                            STYLES
--------------------------------------------------------- -->
<style scoped lang="postcss">

.home-content {
  @apply min-h-screen flex flex-col items-center space-y-4 pt-16;
}

p {
  @apply bg-white p-4;
  /* Applies padding and background only to paragraphs */
}
</style>
<!-- ---------------------------------------------------- -->
