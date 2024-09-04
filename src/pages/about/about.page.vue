<!-- ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
               page-components/about.page.vue
∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞ -->
<!-- --------------------------------------------------------
                        SCRIPT-SETUP
--------------------------------------------------------- -->
<script setup lang="ts">
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import Layout from '../../components/Layout.vue';
import { AboutHeroCard, OurJourneyCard, MissionCard, TeamCard } from '../../components';
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

// const props = defineProps<{
//  msg: string;
// }>();

// const { msg } = toRefs(props);

// OR

// const { msg } = defineProps<{
//  msg: string;
// }>();
</script>
<!-- --------------------------------------------------------
                     <>MARKUP</>
--------------------------------------------------------- -->
<template>
  <Layout image-class="bg-white">
    <main class="flex flex-col justify-center items-center min-h-screen w-full">
      <!-- Hero card -->
      <AboutHeroCard />
      <!-- Our Journey card -->
      <OurJourneyCard />
      <!-- Mission card -->
      <MissionCard />
      <!-- Team card -->
      <TeamCard />
    </main>
  </Layout>
</template>
<!-- --------------------------------------------------------
                            STYLES
--------------------------------------------------------- -->
<style scoped lang="postcss">


</style>
<!-- ---------------------------------------------------- -->
