<!-- ********************************************************
             pages/auth/login.page.vue
********************************************************* -->
<!-- --------------------------------------------------------
                        SCRIPT-SETUP
--------------------------------------------------------- -->
<script setup lang="ts">
import { FormInput, LeftSideTextGroup } from '../../components';

// ################################################################
import Layout from '../../components/Layout.vue';
// ################################################################
</script>
<!-- --------------------------------------------------------
                     <>MARKUP</>
--------------------------------------------------------- -->
<template>
  <!-- Hero -->
  <Layout custom-class="bg-white">
    <div class="relative bg-gradient-to-bl from-blue-100 via-transparent dark:from-blue-950 dark:via-transparent">
      <div class="max-w-[85rem] px-4 sm:px-6 lg:px-8 lg:py-3 mx-auto">
        <!-- Grid -->
        <div class="grid items-center md:grid-cols-2 gap-8 lg:gap-12">
          <!-- LeftSideTextGroup component -->
          <LeftSideTextGroup />
          <!-- Form Input component -->
          <FormInput />
          <!-- End Col -->
        </div>
        <!-- End Grid -->
      </div>
      <!-- End Clients Section -->
    </div>
  </Layout>
  <!-- End Hero -->
</template>

<!-- --------------------------------------------------------
                            STYLES
--------------------------------------------------------- -->
<style scoped>
/* ################################################################### */
/* ---------------------------- IMPORTS ------------------------------ */

/* ################################################################### */
</style>
<!-- ---------------------------------------------------- -->
