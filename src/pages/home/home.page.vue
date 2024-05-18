<!-- ********************************************************
                    components/home.page.vue
********************************************************* -->
<!-- --------------------------------------------------------
                        SCRIPT-SETUP
--------------------------------------------------------- -->

<script setup lang="ts">
// ################################################################
import { ref } from 'vue';
import RookiesStadium from '../../assets/images/rockiesStadium.jpg';
import {
  SectionsContainer,
  W4LCalender,
  W4LHeroCard,
  ShowCalendarModal,
  W4LEComSection
} from '../../components';
import Layout from '../../components/Layout.vue';
// ################################################################

// const modal = ref<HTMLDialogElement | undefined>(undefined);
// Create a reactive state for modal visibility
const isModalOpen = ref(false);

function showCalendar() {
  isModalOpen.value = !isModalOpen.value;  // This toggles the open state
  // modal.value?.showModal();
}
</script>
<!-- --------------------------------------------------------
                         < >MARKUP</>
--------------------------------------------------------- -->

<template>
  <Layout image-class="bg-parallax-flags">
    <main>
      <div class="home-content">
      <!-- Hero section component -->
      <W4LHeroCard />
      <!-- Calender Section -->
      <div class="text-white pt-24 pb-24">
        <SectionsContainer
          section-header="Up Coming Events"
          paragraph="Join us in at future events with our warriors,
          to get to know what we are all about."
          :img=RookiesStadium
        >
          <!--
          Calendar component Added the prop here since
          its the calendar on the actual home page
          -->
          <W4LCalender :handle-calendar-click="showCalendar" />
          
          <!-- Modal that pops up when the calendar is clicked -->
          <ShowCalendarModal
            :toggle-modal="showCalendar"
            :is-open="isModalOpen"
          />
        </SectionsContainer>
      </div>
    
      <!-- Commerce Component -->
      <W4LEComSection />
      
      <!--<p class="text-2xl">Welcome to our platform...</p>-->
      <!--<div v-for="n in 10" :key="n" class="text-xl p-4"> &lt;!&ndash; Increased to 100 items &ndash;&gt;-->
      <!--  <p>-->
      <!--    More detailed paragraph of text #{n}. Here's some additional-->
      <!--     information to make this scroll more extensive and show how content-->
      <!--    flows over the parallax background.-->
      <!--  </p>-->
      <!--</div>-->
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
--------------------------------------------------------- -->
