<!-- ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
               page-components/about.page.vue
∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞ -->
<!-- --------------------------------------------------------
                        SCRIPT-SETUP
--------------------------------------------------------- -->
<script setup lang="ts">
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import Layout from '../../components/layouts/Layout.vue';
import { AboutHeroCard, OurJourneyCard, MissionCard, TeamCard } from '../../components';
import { UseAnimateScrolling } from '../../composables';
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

// Scroll animation
const { computeAnimateSection } = UseAnimateScrolling({
  threshold: 0.1,
  rootMargin: '0px',
});
</script>
<!-- --------------------------------------------------------
                     <>MARKUP</>
--------------------------------------------------------- -->
<template>
  <Layout theme-mode="w4l-light">
    <main class="flex flex-col justify-center items-center min-h-screen w-full">
      <!-- Hero card -->
      <div
        id="hero-card"
        data-animate-section
        :class="computeAnimateSection('hero-card')"
      >
        <AboutHeroCard />
      </div>
      
      <!-- Our Journey card -->
      <div
        id="journey-card"
        data-animate-section
        :class="computeAnimateSection('journey-card')"
      >
        <OurJourneyCard />
      </div>
      
      <!-- Mission card -->
      <div
        id="mission-card"
        data-animate-section
        :class="computeAnimateSection('mission-card')"
      >
        <MissionCard />
      </div>
      
      <!-- Team card -->
      <div
        id="team-card"
        data-animate-section
        :class="computeAnimateSection('team-card')"
      >
        <TeamCard />
      </div>
    </main>
  </Layout>
</template>
<!-- --------------------------------------------------------
                            STYLES
--------------------------------------------------------- -->
<style scoped lang="postcss">


</style>
<!-- ---------------------------------------------------- -->
